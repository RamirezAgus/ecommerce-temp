export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="space-y-3 mb-10">
        <div className="h-4 w-24 rounded-full bg-muted shimmer" />

        <div className="h-10 w-72 rounded-full bg-muted shimmer" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="h-6 w-32 rounded-full bg-muted shimmer" />

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-4 w-24 rounded-full bg-muted shimmer"
            />
          ))}
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="space-y-3">
              <div className="aspect-square rounded-3xl bg-muted shimmer" />

              <div className="h-4 w-32 rounded-full bg-muted shimmer" />

              <div className="h-3 w-20 rounded-full bg-muted shimmer" />

              <div className="h-4 w-16 rounded-full bg-muted shimmer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
