"use client";

import Image from "next/image";

import { useCartStore } from "@/store/cartStore";

export default function CheckoutSummary() {
  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 15 : 0;

  const total = subtotal + shipping;

  return (
    <div className="bg-card border border-border rounded-3xl p-8 h-fit sticky top-28">
      <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>

              <p className="text-sm text-muted-foreground mt-1">
                Qty: {item.quantity}
              </p>
            </div>

            <p className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border mt-8 pt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>

          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>

          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-lg font-semibold pt-4 border-t border-border">
          <span>Total</span>

          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
