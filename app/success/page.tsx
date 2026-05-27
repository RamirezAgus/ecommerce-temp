"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Container from "@/components/ui/Container";

export default function SuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

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
          "
        >
          Your order has been placed successfully.
        </p>

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
      </div>
    </Container>
  );
}
