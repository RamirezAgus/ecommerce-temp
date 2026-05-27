import { NextResponse } from "next/server";
import { mercadopago } from "@/lib/mercadopago";
import { Preference } from "mercadopago";
import { prisma } from "@/lib/prisma";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export async function POST(req: Request) {
  try {
    const body: { items: CartItem[]; email: string } = await req.json();

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
          "https://decline-financial-bovine.ngrok-free.dev/api/webhooks/mercadopago",

        back_urls: {
          success: "https://decline-financial-bovine.ngrok-free.dev/success",

          failure: "https://decline-financial-bovine.ngrok-free.dev/failure",

          pending: "https://decline-financial-bovine.ngrok-free.dev/pending",
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
