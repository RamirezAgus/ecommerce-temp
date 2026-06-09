import Link from "next/link";

import Container from "@/components/ui/Container";
import CleanCart from "@/components/cart/CleanCart";
import { OrderItem } from "@/types/product";
import { prisma } from "@/lib/prisma";
import { CheckCircle2 } from "lucide-react";

type Props = {
  searchParams: Promise<{
    external_reference?: string;
  }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const params = await searchParams;

  const orderId = params.external_reference;

  const order = orderId
    ? await prisma.order.findUnique({
        where: {
          id: orderId,
        },
      })
    : null;

  const statusLabel =
    order?.status === "approved"
      ? "Approved"
      : order?.status === "pending"
        ? "Pending"
        : order?.status === "rejected"
          ? "Rejected"
          : order?.status;

  return (
    <Container>
      <div
        className="
          min-h-[70vh]
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <CheckCircle2
          className="
            w-20
            h-20
            text-green-500
            mb-6
          "
        />

        <h1
          className="
            text-4xl
            font-bold
            text-foreground
          "
        >
          Payment Successful
        </h1>

        <p
          className="
            text-muted
            mt-4
            max-w-md
            leading-relaxed
          "
        >
          Thank you for your purchase. We have received your order and will
          begin processing it shortly. A confirmation email will be sent with
          the details of your purchase.
        </p>
        {order && (
          <div
            className="
            mt-8
            w-full
            max-w-md
            rounded-2xl
            border
            border-border
            p-6
            text-left
          "
          >
            <p>
              <strong>Order ID:</strong> {order?.id}
            </p>

            <p>
              <strong>Email:</strong> {order?.email}
            </p>

            <p>
              <strong>Total:</strong> ${order?.total.toFixed(2)}
            </p>

            <p>
              <strong>Status:</strong> {statusLabel}
            </p>
            {order.items && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Purchased Items</h3>

                <ul className="space-y-1">
                  {(order.items as OrderItem[]).map((item, index) => (
                    <li key={index}>
                      {item.name} × {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <Link
          href="/shop"
          className="
            mt-8
            px-6
            py-3
            rounded-2xl
            bg-primary
            text-white
          "
        >
          Continue Shopping
        </Link>
        <Link
          href="/"
          className="
            mt-4
            text-sm
            text-muted-foreground
            hover:text-foreground
            transition
          "
        >
          Back to Home
        </Link>
        <CleanCart />
      </div>
    </Container>
  );
}
