import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-3xl bg-muted shimmer" />

          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-2xl bg-muted shimmer"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-4 w-24 rounded-full bg-muted shimmer" />

          <div className="h-10 w-72 rounded-full bg-muted shimmer" />

          <div className="space-y-3">
            <div className="h-4 w-full rounded-full bg-muted shimmer" />
            <div className="h-4 w-5/6 rounded-full bg-muted shimmer" />
            <div className="h-4 w-4/6 rounded-full bg-muted shimmer" />
          </div>

          <div className="h-8 w-32 rounded-full bg-muted shimmer" />

          <div className="flex gap-4">
            <div className="h-12 w-32 rounded-2xl bg-muted shimmer" />

            <div className="h-12 w-40 rounded-2xl bg-muted shimmer" />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="h-8 w-56 rounded-full bg-muted shimmer mb-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-3">
              <div className="aspect-square rounded-3xl bg-muted shimmer" />

              <div className="h-4 w-32 rounded-full bg-muted shimmer" />

              <div className="h-3 w-20 rounded-full bg-muted shimmer" />

              <div className="h-4 w-16 rounded-full bg-muted shimmer" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
