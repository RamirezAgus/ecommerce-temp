import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PendingPage() {
  return (
    <Container>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Payment Pending ⏳</h1>

        <p className="text-muted-foreground mb-8">
          Your payment is being processed.
        </p>

        <Link
          href="/shop"
          className="
            bg-primary
            text-white
            px-6
            py-3
            rounded-2xl
          "
        >
          Back to Shop
        </Link>
      </div>
    </Container>
  );
}
