import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Variant, OrderItem } from "@/types/product";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Webhook received:", body);

    const paymentId = body.data?.id;

    if (!paymentId) {
      return NextResponse.json({
        ok: true,
      });
    }

    const paymentResponse = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      },
    );

    const paymentData = await paymentResponse.json();

    console.log("Payment data:", paymentData);

    const orderId = paymentData.external_reference;

    const paymentStatus = paymentData.status;

    if (paymentStatus === "approved") {
      const order = await prisma.order.findUnique({
        where: {
          id: orderId,
        },
      });

      if (!order) {
        return NextResponse.json({
          error: "Order not found",
        });
      }

      const orderItems = order.items as OrderItem[];

      for (const item of orderItems) {
        const product = await prisma.product.findUnique({
          where: {
            id: item.id,
          },
        });

        if (!product) continue;

        const variants =
          (product.variants as Variant[]) || [];

        const updatedVariants = variants.map(
          (variant) => {
            if (
              variant.name === item.variantName
            ) {
              return {
                ...variant,

                stock: Math.max(
                  0,
                  (variant.stock || 0) -
                    item.quantity,
                ),
              };
            }

            return variant;
          },
        );

        await prisma.product.update({
          where: {
            id: product.id,
          },

          data: {
            variants: updatedVariants,
          },
        });
      }

      await prisma.order.update({
        where: {
          id: orderId,
        },

        data: {
          status: "paid",

          paymentId: String(paymentId),
        },
      });
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Webhook error",
      },
      {
        status: 500,
      },
    );
  }
}