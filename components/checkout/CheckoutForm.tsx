export default function CheckoutForm() {
  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <h2 className="text-2xl font-semibold mb-8">Shipping Details</h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm mb-2">Full Name</label>

          <input
            type="text"
            className="w-full h-12 rounded-2xl border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email Address</label>

          <input
            type="email"
            className="w-full h-12 rounded-2xl border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Address</label>

          <input
            type="text"
            className="w-full h-12 rounded-2xl border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">City</label>

            <input
              type="text"
              className="w-full h-12 rounded-2xl border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">ZIP Code</label>

            <input
              type="text"
              className="w-full h-12 rounded-2xl border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-2xl bg-primary text-white font-medium hover:opacity-90 transition"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
