import Link from "next/link";
import Container from "@/components/ui/Container";
import { Clock3 } from "lucide-react";

export default function PendingPage() {
  return (
    <Container>
      <div
        className="
          min-h-[70vh]
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <Clock3
          className="
            w-20
            h-20
            text-yellow-500
            mb-6
          "
        />

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          Payment Pending
        </h1>

        <p className="mt-4 text-muted">
          Your payment is still being
          processed.
        </p>

        <Link
          href="/shop"
          className="
            mt-8
            px-6
            py-3
            rounded-2xl
            bg-primary
            text-white
          "
        >
          Back to Shop
        </Link>
      </div>
    </Container>
  );
}