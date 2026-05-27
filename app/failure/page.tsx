import Link from "next/link";
import Container from "@/components/ui/Container";
import { XCircle } from "lucide-react";

export default function FailurePage() {
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
        <XCircle
          className="
            w-20
            h-20
            text-red-500
            mb-6
          "
        />

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          Payment Failed
        </h1>

        <p className="mt-4 text-muted">
          Something went wrong with
          your payment.
        </p>

        <Link
          href="/cart"
          className="
            mt-8
            px-6
            py-3
            rounded-2xl
            bg-primary
            text-white
          "
        >
          Try Again
        </Link>
      </div>
    </Container>
  );
}