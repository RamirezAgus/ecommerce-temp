"use client";

import Container from "@/components/ui/Container";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <p className="text-muted">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm text-muted">${item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right font-semibold text-lg">
              Total: ${total}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
