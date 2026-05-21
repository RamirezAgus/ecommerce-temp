import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-3">
            <div className="h-4 w-24 rounded-full bg-muted shimmer" />

            <div className="h-10 w-64 rounded-full bg-muted shimmer" />
          </div>

          <div className="space-y-5">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-2">
                <div className="h-4 w-24 rounded-full bg-muted shimmer" />

                <div className="h-12 w-full rounded-2xl bg-muted shimmer" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="space-y-2">
                <div className="h-4 w-20 rounded-full bg-muted shimmer" />

                <div className="h-12 w-full rounded-2xl bg-muted shimmer" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="h-6 w-40 rounded-full bg-muted shimmer" />

            <div className="h-16 w-full rounded-3xl bg-muted shimmer" />
          </div>
        </div>

        <div className="border border-border rounded-3xl p-6 h-fit space-y-6">
          <div className="h-8 w-40 rounded-full bg-muted shimmer" />

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-2xl bg-muted shimmer" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 rounded-full bg-muted shimmer" />

                  <div className="h-3 w-20 rounded-full bg-muted shimmer" />
                </div>

                <div className="h-4 w-12 rounded-full bg-muted shimmer" />
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-20 rounded-full bg-muted shimmer" />

              <div className="h-4 w-16 rounded-full bg-muted shimmer" />
            </div>

            <div className="flex justify-between">
              <div className="h-5 w-24 rounded-full bg-muted shimmer" />

              <div className="h-5 w-20 rounded-full bg-muted shimmer" />
            </div>
          </div>

          {/* Button */}
          <div className="h-12 w-full rounded-2xl bg-muted shimmer" />
        </div>
      </div>
    </Container>
  );
}
