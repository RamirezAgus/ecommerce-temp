import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const [
    totalProducts,
    totalOrders,
    paidOrders,
  ] = await Promise.all([
    prisma.product.count(),

    prisma.order.count(),

    prisma.order.findMany({
      where: {
        status: "paid",
      },

      orderBy: {
        createdAt: "asc",
      },
    }),
  ]);

  const revenue = paidOrders.reduce(
    (acc, order) =>
      acc + order.total,

    0,
  );

  const revenueData =
    paidOrders.map((order) => ({
      date: new Date(
        order.createdAt,
      ).toLocaleDateString(),

      revenue: order.total,
    }));

  const recentOrders =
    await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    });

  return (
    <div className="space-y-8">
      <div>
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Dashboard
        </h1>

        <p className="text-muted mt-2">
          Welcome back admin.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        <StatsCard
          title="Total Products"
          value={totalProducts}
        />

        <StatsCard
          title="Orders"
          value={totalOrders}
        />

        <StatsCard
          title="Revenue"
          value={`$${revenue.toFixed(
            2,
          )}`}
        />

        <StatsCard
          title="Paid Orders"
          value={paidOrders.length}
        />
      </div>

      <div
        className="
          rounded-2xl
          border
          border-border
          bg-card
          p-6
        "
      >
        <div className="mb-6">
          <h2
            className="
              text-xl
              font-semibold
            "
          >
            Revenue Overview
          </h2>

          <p className="text-muted">
            Revenue from paid orders
          </p>
        </div>

        <RevenueChart
          data={revenueData}
        />
      </div>

      <div
        className="
          rounded-2xl
          border
          border-border
          bg-card
          p-6
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            mb-6
          "
        >
          Recent Orders
        </h2>

        <div className="space-y-4">
          {recentOrders.map(
            (order) => (
              <div
                key={order.id}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-border
                  pb-4
                "
              >
                <div>
                  <p className="font-medium">
                    {order.email ||
                      "Guest"}
                  </p>

                  <p
                    className="
                      text-sm
                      text-muted
                    "
                  >
                    {new Date(
                      order.createdAt,
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    $
                    {order.total.toFixed(
                      2,
                    )}
                  </p>

                  <p
                    className="
                      text-sm
                      capitalize
                      text-muted
                    "
                  >
                    {order.status}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}