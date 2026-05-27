"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";

import { OrderItem } from "@/types/product";

type Props = {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  order: {
    id: string;

    email: string | null;

    total: number;

    status: string;

    paymentId: string | null;

    items: OrderItem[];
  };
};

export default function OrderDetailsModal({
  open,
  onOpenChange,
  order,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-3xl
        "
      >
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div
            className="
              grid
              grid-cols-2
              gap-4
            "
          >
            <div>
              <p className="text-sm text-muted">Customer</p>

              <p className="font-medium">{order.email || "Guest"}</p>
            </div>

            <div>
              <p className="text-sm text-muted">Status</p>

              <p className="font-medium capitalize">{order.status}</p>
            </div>

            <div>
              <p className="text-sm text-muted">Payment ID</p>

              <p className="font-medium">{order.paymentId || "-"}</p>
            </div>

            <div>
              <p className="text-sm text-muted">Total</p>

              <p className="font-medium">${order.total.toFixed(2)}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Items
            </h3>

            {order.items.map((item) => (
              <div
                key={`${item.id}-${item.variantName}`}
                className="
                    flex
                    items-center
                    gap-4
                    border
                    border-border
                    rounded-xl
                    p-4
                  "
              >
                <div
                  className="
                      relative
                      w-20
                      h-20
                      rounded-xl
                      overflow-hidden
                    "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>

                  {item.variantName && (
                    <div
                      className="
                          flex
                          items-center
                          gap-2
                          mt-1
                        "
                    >
                      <span
                        className="
                            w-4
                            h-4
                            rounded-full
                            border
                          "
                        style={{
                          backgroundColor: item.variantColor,
                        }}
                      />

                      <span
                        className="
                            text-sm
                            text-muted
                          "
                      >
                        {item.variantName}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <p className="font-medium">x{item.quantity}</p>

                  <p className="text-sm text-muted">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
