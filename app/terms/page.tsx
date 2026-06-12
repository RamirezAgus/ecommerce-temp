import type { Metadata } from "next";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Annette Tramas",
  description:
    "Términos y condiciones de compra y uso del sitio web de Annette Tramas.",
};

export default function TermsPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>

        <h1 className="text-5xl font-bold mt-4 text-foreground">
          Términos y Condiciones
        </h1>

        <p className="text-muted-foreground mt-4">
          Última actualización: Junio 2026
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Productos artesanales
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Todos los productos comercializados por Annette Tramas son
              elaborados artesanalmente. Debido a la naturaleza de este proceso,
              pueden existir pequeñas variaciones en colores, medidas, texturas
              o terminaciones respecto de las imágenes publicadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Precios</h2>

            <p className="text-muted-foreground leading-relaxed">
              Todos los precios se encuentran expresados en Pesos Argentinos
              (ARS). Los precios pueden modificarse sin previo aviso. El precio
              válido para una compra será el vigente al momento de confirmar el
              pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Medios de pago</h2>

            <p className="text-muted-foreground leading-relaxed">
              Los pagos se realizan mediante Mercado Pago utilizando los medios
              de pago habilitados por dicha plataforma. La confirmación del
              pedido estará sujeta a la acreditación efectiva del pago.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Envíos</h2>

            <p className="text-muted-foreground leading-relaxed">
              Realizamos envíos dentro de la República Argentina. Los tiempos de
              entrega son estimados y pueden variar según la ubicación del
              destinatario, disponibilidad del producto y condiciones del
              servicio de transporte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Cambios y devoluciones
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Los clientes podrán solicitar cambios o devoluciones cuando el
              producto presente fallas atribuibles a su fabricación. No se
              aceptarán devoluciones por diferencias mínimas derivadas del
              proceso artesanal o por preferencias personales posteriores a la
              compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Propiedad intelectual
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Todo el contenido presente en este sitio web, incluyendo textos,
              fotografías, diseños y elementos gráficos, pertenece a Annette
              Tramas y no podrá ser reproducido sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Modificaciones de los términos
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Annette Tramas podrá actualizar estos Términos y Condiciones en
              cualquier momento. Las modificaciones entrarán en vigencia desde
              su publicación en esta página.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
