import Container from "@/components/ui/Container";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <Container>
      <div className="py-12">
        <div className="mb-10">
          <p className="text-sm tracking-[0.18em] uppercase text-muted-foreground">
            Checkout
          </p>
          <h1 className="text-4xl font-semibold mt-3">Complete your order</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
    </Container>
  );
}
