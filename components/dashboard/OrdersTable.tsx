"use client";

import { useState } from "react";

import OrderDetailsModal from "@/components/dashboard/OrderDetailsModal";

import { OrderItem } from "@/types/product";

type Order = {
  id: string;

  email: string | null;

  total: number;

  status: string;

  paymentId: string | null;

  createdAt: Date;

  items: OrderItem[];
};

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <>
      <div
        className="
          rounded-2xl
          border
          border-border
          overflow-hidden
        "
      >
        <table className="w-full">
          <thead
            className="
              bg-card
              border-b
              border-border
            "
          >
            <tr>
              <th className="text-left p-4">Customer</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Total</th>

              <th className="text-left p-4">Date</th>

              <th className="text-left p-4">Details</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="
                  border-b
                  border-border
                "
              >
                <td className="p-4">{order.email || "Guest"}</td>

                <td className="p-4">
                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium

                      ${
                        order.status === "paid"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">${order.total.toFixed(2)}</td>

                <td className="p-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-primary
                      text-white
                      text-sm
                    "
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <OrderDetailsModal
          open={!!selectedOrder}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedOrder(null);
            }
          }}
          order={selectedOrder}
        />
      )}
    </>
  );
}
