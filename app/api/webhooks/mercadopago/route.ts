import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { mercadopago } from "@/lib/mercadopago";
import { Payment } from "mercadopago";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.type !== "payment") {
      return NextResponse.json({
        received: true,
      });
    }

    const payment = new Payment(mercadopago);

    const paymentData = await payment.get({
      id: body.data.id,
    });

    const orderId = paymentData.external_reference;

    if (!orderId) {
      return NextResponse.json({
        error: "Order not found",
      });
    }

    await prisma.order.update({
      where: {
        id: orderId,
      },

      data: {
        status: paymentData.status || "pending",

        paymentId: paymentData.id?.toString(),
      },
    });

    return NextResponse.json({
      success: true,
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
