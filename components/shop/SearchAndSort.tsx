"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchAndSort() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currrentQ = searchParams.get("q") || "";

  const currentSort = searchParams.get("sort") || "";

  //const currentCategory = searchParams.get("category");

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
      <input
        type="text"
        placeholder="Search products..."
        defaultValue={currrentQ}
        onChange={(e) => updateParams("q", e.target.value)}
        className="border border-border rounded-lg px-4 py-3 bg-background w-full md:max-w-sm"
      />
      <select
        value={currentSort}
        onChange={(e) => updateParams("sort", e.target.value)}
        className="border border-border rounded-lg px-4 py-3 bg-background"
        >
            <option value="">
                Default
            </option>
            <option value="price-asc">
                Price: Low to High
            </option>
            <option value="price-desc">
                Price: High to Low
            </option>
            <option value="newest">
                Newest
            </option>
      </select>
    </div>
  );
}
