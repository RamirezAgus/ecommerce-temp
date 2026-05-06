export default function SortBar() {
  return (
    <div className="flex justify-between items-center text-sm text-muted">
      <span>Showing 1 to 12 of 24 products</span>

      <select className="border border-border rounded px-2 py-1 bg-background">
        <option>Relevance</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}
