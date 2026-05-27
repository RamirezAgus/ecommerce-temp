"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  PlusSquare,
  ShoppingBag,
  Tag,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Products",
      href: "/dashboard/products",
      icon: Package,
    },
    {
      label: "New Product",
      href: "/dashboard/products/new",
      icon: PlusSquare,
    },
    {
      label: "Orders",
      href: "/dashboard/orders",
      icon: ShoppingBag,
    },
    {
      label: "Categories",
      href: "/dashboard/categories",
      icon: Tag,
    },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-64 border-r border-border p-6 bg-card">
        <h2 className="text-xl font-bold mb-10">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon;

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive ? "bg-primary text-white" : "hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
