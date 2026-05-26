"use client";

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useCartStore } from "@/store/cartStore";

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
        <h1 className="text-4xl font-bold mb-4">Payment Successful 🎉</h1>

        <p className="text-muted-foreground mb-8">
          Thank you for your purchase.
        </p>

        <Link
          href="/shop"
          className="
            bg-primary
            text-white
            px-6
            py-3
            rounded-2xl
          "
        >
          Continue Shopping
        </Link>
      </div>
    </Container>
  );
}
