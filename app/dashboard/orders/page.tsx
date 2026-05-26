import Image from "next/image";
import Container from "@/components/ui/Container";
import { OrderItem } from "@/types/product";

import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-10">Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="
                border
                border-border
                rounded-3xl
                p-6
                bg-card
              "
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-semibold">Order #{order.id.slice(0, 8)}</p>

                  <p className="text-sm text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      border
                    "
                  >
                    {order.status}
                  </div>

                  <div className="font-bold text-lg">${order.total}</div>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Items</p>

                <div className="space-y-4">
                  {(order.items as OrderItem[]).map((item) => (
                    <div
                      key={item.id}
                      className="
          flex
          items-center
          gap-4
          border
          border-border
          rounded-2xl
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
            bg-muted
          "
                      >
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

                      <div className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
