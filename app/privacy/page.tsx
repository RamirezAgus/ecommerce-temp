import type { Metadata } from "next";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidad | Annette Tramas",
  description:
    "Conocé cómo protegemos y utilizamos tu información personal en Annette Tramas.",
};

export default function PrivacyPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>

        <h1 className="text-5xl font-bold mt-4 text-foreground">
          Política de Privacidad
        </h1>

        <p className="text-muted-foreground mt-4">
          Última actualización: Junio 2026
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Información que recopilamos
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Podemos recopilar información personal como nombre y apellido,
              dirección de correo electrónico, dirección de envío e información
              relacionada con los pedidos realizados a través de nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Cómo utilizamos la información
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Utilizamos la información recopilada para procesar pedidos,
              coordinar envíos, brindar atención al cliente, enviar
              actualizaciones sobre compras realizadas y mejorar nuestros
              productos y servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Pagos</h2>

            <p className="text-muted-foreground leading-relaxed">
              Los pagos son procesados mediante Mercado Pago. Annette Tramas no
              almacena información de tarjetas de crédito ni datos financieros
              sensibles. Toda la información relacionada con pagos es gestionada
              por Mercado Pago de acuerdo con sus propias políticas de
              privacidad y seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Compartir información con terceros
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              No vendemos ni compartimos información personal con terceros para
              fines comerciales. Únicamente podremos compartir datos cuando sea
              necesario para gestionar envíos, procesar pagos o cumplir
              obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Seguridad de los datos
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas razonables de seguridad para proteger la
              información personal frente a accesos no autorizados, alteraciones
              o pérdidas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Derechos del usuario
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Los usuarios pueden solicitar acceso, modificación o eliminación
              de sus datos personales contactándose a través de los canales
              oficiales de atención de Annette Tramas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Actualizaciones de esta política
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de actualizar esta Política de
              Privacidad cuando sea necesario. Los cambios serán publicados en
              esta misma página.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
