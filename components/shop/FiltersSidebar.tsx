export default function FiltersSidebar() {
  return (
    <aside className="lg:col-span-1 space-y-6">
      <div>
        <h3 className="font-medium text-foreground mb-3">Category</h3>
        <div className="space-y-2 text-sm text-muted">
          <label className="flex gap-2">
            <input type="checkbox" /> All
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Apparel
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Accessories
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-foreground mb-3">Price</h3>
        <input type="range" className="w-full" />
      </div>
    </aside>
  );
}
