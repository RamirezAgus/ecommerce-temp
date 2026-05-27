import { prisma } from "@/lib/prisma";

import OrdersTable from "@/components/dashboard/OrdersTable";

import { OrderItem } from "@/types/product";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders = orders.map((order) => ({
    ...order,

    items: (order.items as OrderItem[]) || [],
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Orders
        </h1>

        <p className="text-muted mt-2">Manage customer orders.</p>
      </div>

      <OrdersTable orders={formattedOrders} />
    </div>
  );
}
