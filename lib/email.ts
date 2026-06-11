import { resend } from "./resend";

export async function sendOrderConfirmation({
  email,
  orderId,
  total,
}: {
  email: string;
  orderId: string;
  total: number;
}) {
  await resend.emails.send({
    from: "Annette Tramas <onboarding@resend.dev>",
    to: email,
    subject: "Compra confirmada",
    html: `
      <h1>Gracias por tu compra</h1>

      <p>
        Hemos recibido tu pedido correctamente.
      </p>

      <p>
        Orden: ${orderId}
      </p>

      <p>
        Total: $${total}
      </p>
    `,
  });
}
