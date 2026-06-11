import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F3EE] text-[#2C211B]">
      {/* HERO */}
      <section className="py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-sm
                text-[#C9A980]
                mb-6
              "
            >
              Nuestra Historia
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                leading-tight
                font-light
              "
            >
              Tejidos con <span className="italic text-[#C9A980]">alma</span>
              ,
              <br />
              hechos a mano
            </h1>

            <p
              className="
                mt-10
                max-w-3xl
                mx-auto
                text-lg
                leading-9
                text-stone-600
              "
            >
              Cada pieza nace de un proceso artesanal cuidado, donde los
              materiales nobles y la dedicación se convierten en objetos únicos
              para el hogar y la vida cotidiana.
            </p>
          </div>
        </Container>
      </section>

      {/* ORIGEN Y PROCESO */}
      <section className="pb-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="
                bg-white
                rounded-3xl
                p-10
                shadow-sm
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#F4EFE9]
                  flex
                  items-center
                  justify-center
                  mb-8
                "
              >
                ☺
              </div>

              <h2 className="text-3xl mb-6">El origen</h2>

              <p className="leading-8 text-stone-600">
                Annette Tramas nació de la pasión por los tejidos artesanales y
                la búsqueda de recuperar técnicas tradicionales con una mirada
                contemporánea.
              </p>
            </div>

            <div
              className="
                bg-white
                rounded-3xl
                p-10
                shadow-sm
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#F4EFE9]
                  flex
                  items-center
                  justify-center
                  mb-8
                "
              >
                ♡
              </div>

              <h2 className="text-3xl mb-6">El proceso</h2>

              <p className="leading-8 text-stone-600">
                Cada pieza se crea a mano utilizando materiales seleccionados
                por su calidad y suavidad. No hay dos iguales: cada una lleva la
                huella de quien la hizo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FRASE */}
      <section className="pb-28">
        <Container>
          <div
            className="
              bg-[#C9A980]
              rounded-3xl
              py-16
              px-10
              text-center
            "
          >
            <blockquote
              className="
                text-3xl
                md:text-4xl
                italic
                text-white
              "
            >
              Cada hilo tiene su historia.
              <br />
              Cada trama, su intención.
            </blockquote>

            <p
              className="
                mt-8
                uppercase
                tracking-[0.3em]
                text-sm
                text-white/80
              "
            >
              Annette Tramas
            </p>
          </div>
        </Container>
      </section>

      {/* VALORES */}
      <section className="pb-32">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3
                className="
                  text-5xl
                  text-[#C9A980]
                  mb-4
                "
              >
                100%
              </h3>

              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  text-stone-500
                "
              >
                Hecho a mano
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  text-[#C9A980]
                  mb-4
                "
              >
                Único
              </h3>

              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  text-stone-500
                "
              >
                Piezas irrepetibles
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  text-[#C9A980]
                  mb-4
                "
              >
                ∞
              </h3>

              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  text-stone-500
                "
              >
                Dedicación
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
