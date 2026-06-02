import { NextResponse } from "next/server";
import { mercadopago } from "@/lib/mercadopago";
import { Preference } from "mercadopago";
import { prisma } from "@/lib/prisma";
import { Variant } from "@/types/product";

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
    const body: { items: CartItem[]; email: string } = await req.json();

    for (const item of body.items) {
      const product = await prisma.product.findUnique({
        where: {
          id: item.id,
        },
      });

      if (!product) {
        return NextResponse.json(
          {
            error: "Product not found",
          },
          {
            status: 404,
          },
        );
      }

      const variants = (product.variants as Variant[]) || [];

      const variant = variants.find((v) => v.name === item.variantName);

      if (!variant) {
        return NextResponse.json(
          {
            error: "Variant not found",
          },
          {
            status: 400,
          },
        );
      }

      const stock = variant.stock || 0;

      if (item.quantity > stock) {
        return NextResponse.json(
          {
            error: `Insufficient stock for ${product.name}`,
          },
          {
            status: 400,
          },
        );
      }
    }

    const total = body.items.reduce(
      (acc, item) => acc + item.price * item.quantity,

      0,
    );

    const order = await prisma.order.create({
      data: {
        total,

        email: body.email,

        items: body.items,

        status: "pending",
      },
    });

    const preference = new Preference(mercadopago);

    const result = await preference.create({
      body: {
        external_reference: order.id,

        items: body.items.map((item: CartItem) => ({
          id: item.id,

          title: item.name,

          quantity: item.quantity,

          unit_price: item.price,

          currency_id: "ARS",
        })),

        notification_url:
          `${siteUrl}/api/webhooks/mercadopago`,

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
      {
        error: "Error creating checkout",
      },

      {
        status: 500,
      },
    );
  }
}
