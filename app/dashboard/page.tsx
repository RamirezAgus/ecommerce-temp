import StatsCard from "@/components/dashboard/StatsCard";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const totalProducts = await prisma.product.count();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl">Dashboard</h1>
        <p className="text-muted mt-2">Welcome back admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard title="Total Products" value={totalProducts} />
        <StatsCard title="Orders" value="0" />
        <StatsCard title="Revenue" value="50" />
        <StatsCard title="Users" value="1" />
      </div>
    </div>
  );
}
