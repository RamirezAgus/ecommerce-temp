import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Variant, OrderItem } from "@/types/product";
import crypto from "crypto";

function verifyWebhookSignature(
  req: Request,
  body: string,
  xSignature: string,
  xRequestId: string,
): boolean {
  const url = new URL(req.url);
  const dataId = url.searchParams.get("data.id") || "";

  const parts = xSignature.split(",");
  let ts = "";
  let hash = "";

  for (const part of parts) {
    const [key, value] = part.split("=");
    if (key.trim() === "ts") ts = value.trim();
    if (key.trim() === "v1") hash = value.trim();
  }

  const signedTemplate = `id:${dataId};request-id:${xRequestId};ts:${ts};`;

  const expectedHash = crypto
    .createHmac("sha256", process.env.MP_WEBHOOK_SECRET!)
    .update(signedTemplate)
    .digest("hex");

  return expectedHash === hash;
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const xSignature = req.headers.get("x-signature") || "";
    const xRequestId = req.headers.get("x-request-id") || "";

    if (!verifyWebhookSignature(req, rawBody, xSignature, xRequestId)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);

    console.log("Webhook received:", body);

    const paymentId = body.data?.id;

    if (!paymentId) {
      return NextResponse.json({ ok: true });
    }

    const paymentResponse = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
        },
      },
    );

    const paymentData = await paymentResponse.json();

    console.log("Payment data:", paymentData);

    const orderId = paymentData.external_reference;
    const paymentStatus = paymentData.status;

    if (paymentStatus === "approved") {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
      });

      if (!order) {
        return NextResponse.json({ error: "Order not found" });
      }

      const orderItems = order.items as OrderItem[];

      for (const item of orderItems) {
        const product = await prisma.product.findUnique({
          where: { id: item.id },
        });

        if (!product) continue;

        const variants = (product.variants as Variant[]) || [];

        const updatedVariants = variants.map((variant) => {
          if (variant.name === item.variantName) {
            return {
              ...variant,
              stock: Math.max(0, (variant.stock || 0) - item.quantity),
            };
          }
          return variant;
        });

        await prisma.product.update({
          where: { id: product.id },
          data: { variants: updatedVariants },
        });
      }

      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: "paid",
          paymentId: String(paymentId),
        },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
