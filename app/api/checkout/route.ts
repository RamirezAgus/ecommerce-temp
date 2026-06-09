import { NextResponse } from "next/server";
import { mercadopago } from "@/lib/mercadopago";
import { Preference } from "mercadopago";
import { prisma } from "@/lib/prisma";
import { Variant } from "@/types/product";
import { ratelimit } from "@/lib/ratelimit";
import {
  getShippingCost,
  getShippingZone,
  SHIPPING_LABELS,
} from "@/lib/shipping";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  variantName?: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");

    const ip = forwardedFor?.split(",")[0] ?? "anonymous";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body: { items: CartItem[]; email: string; zipCode: string } =
      await req.json();

    const shippingCost = getShippingCost(body.zipCode);
    const shippingZone = getShippingZone(body.zipCode);

    const validatedItems: (CartItem & { realPrice: number })[] = [];

    for (const item of body.items) {
      const product = await prisma.product.findUnique({
        where: { id: item.id },
      });

      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 },
        );
      }

      const variants = (product.variants as Variant[]) || [];
      const variant = variants.find((v) => v.name === item.variantName);

      if (!variant) {
        return NextResponse.json(
          { error: "Variant not found" },
          { status: 400 },
        );
      }

      const stock = variant.stock || 0;

      if (item.quantity > stock) {
        return NextResponse.json(
          { error: `Insufficient stock for ${product.name}` },
          { status: 400 },
        );
      }

      validatedItems.push({
        ...item,
        realPrice: product.price,
      });
    }

    const total =
      validatedItems.reduce(
        (acc, item) => acc + item.realPrice * item.quantity,
        0,
      ) + shippingCost;

    const order = await prisma.order.create({
      data: {
        total,
        email: body.email,
        items: validatedItems.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.realPrice,
          variantName: item.variantName,
        })),
        status: "pending",
      },
    });

    const preference = new Preference(mercadopago);

    const result = await preference.create({
      body: {
        external_reference: order.id,
        items: [
          ...validatedItems.map((item) => ({
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            unit_price: item.realPrice,
            currency_id: "ARS",
          })),
          {
            id: "shipping",
            title: `Envío — ${SHIPPING_LABELS[shippingZone]}`,
            quantity: 1,
            unit_price: shippingCost,
            currency_id: "ARS",
          },
        ],
        payer: {
          email: body.email,
        },
        notification_url: `${siteUrl}/api/webhooks/mercadopago`,
        back_urls: {
          success: `${siteUrl}/success`,
          failure: `${siteUrl}/failure`,
          pending: `${siteUrl}/pending`,
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({
      id: result.id,
      init_point: result.init_point,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating checkout" },
      { status: 500 },
    );
  }
}
