import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container>
      <div className="py-10 space-y-10">
        <div className="space-y-3">
          <div className="h-4 w-28 rounded-full bg-muted shimmer" />

          <div className="h-10 w-72 rounded-full bg-muted shimmer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-border rounded-3xl p-6 space-y-4"
            >
              <div className="h-4 w-24 rounded-full bg-muted shimmer" />

              <div className="h-10 w-20 rounded-full bg-muted shimmer" />
            </div>
          ))}
        </div>

        <div className="border border-border rounded-3xl overflow-hidden">
          <div className="border-b border-border p-6 flex justify-between items-center">
            <div className="h-6 w-40 rounded-full bg-muted shimmer" />

            <div className="h-10 w-32 rounded-2xl bg-muted shimmer" />
          </div>

          <div className="divide-y divide-border">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-6 flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-muted shimmer" />

                <div className="flex-1 space-y-3">
                  <div className="h-5 w-48 rounded-full bg-muted shimmer" />

                  <div className="h-4 w-32 rounded-full bg-muted shimmer" />
                </div>

                <div className="h-5 w-20 rounded-full bg-muted shimmer" />

                <div className="flex gap-3">
                  <div className="h-10 w-20 rounded-2xl bg-muted shimmer" />

                  <div className="h-10 w-20 rounded-2xl bg-muted shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
