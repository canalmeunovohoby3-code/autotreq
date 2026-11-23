import type { CSSProperties } from "react";
import Image from "next/image";

import foto1 from "@/assets/foto1.jpeg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpeg";
import foto4 from "@/assets/foto4.jpeg";
import foto5 from "@/assets/foto5.jpeg";
import foto6 from "@/assets/foto6.jpeg";
import { SectionIntro } from "@/components/section-intro";

const photos = [
  {
    src: foto2,
    alt: "Caminhão pesado em manutenção na oficina",
    position: "50% 50%",
  },
  {
    src: foto4,
    alt: "Veículo suspenso em elevador durante serviço de manutenção",
    position: "50% 58%",
  },
  {
    src: foto5,
    alt: "Veículo posicionado em elevador de coluna para inspeção",
    position: "50% 50%",
  },
  {
    src: foto1,
    alt: "Técnico realizando manutenção no interior de um veículo",
    position: "50% 50%",
  },
  {
    src: foto3,
    alt: "Equipamento de diagnóstico conectado ao painel de um veículo",
    position: "50% 50%",
  },
  {
    src: foto6,
    alt: "Motor aberto durante serviço de manutenção e sincronização",
    position: "50% 50%",
  },
] as const;

export function OperationGallery() {
  return (
    <section
      id="registros"
      className="relative overflow-hidden border-t border-ink/10 bg-mist text-ink section-pad"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        data-parallax="0.04"
        className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand/[0.05] blur-[110px]"
      />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            index="05.2"
            label="Registros automotivos"
            tone="light"
            title={
              <>
                Técnica aplicada no{" "}
                <span className="text-brand-deep">automotivo</span>.
              </>
            }
            intro="Manutenção e diagnóstico em veículos leves e pesados, registrados em diferentes frentes de operação."
            className="max-w-4xl"
          />

          <div
            data-reveal
            style={{ "--delay": "180ms" } as CSSProperties}
            className="hidden pb-2 lg:block"
          >
            <div className="flex items-center gap-4 border-t border-ink/15 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
                Imagens
              </span>
              <span className="num text-2xl leading-none text-brand-deep">
                06
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {photos.map((photo, index) => (
            <figure
              key={photo.alt}
              data-reveal
              style={
                {
                  "--delay": `${(index % 3) * 60}ms`,
                } as CSSProperties
              }
              className="card-hover group relative aspect-square overflow-hidden border border-ink/15 bg-white transition-colors duration-500 hover:border-brand/50"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                quality={85}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (min-width: 1440px) 420px, 33vw"
                style={{ objectPosition: photo.position }}
                className="object-cover transition-transform duration-700 ease-precise group-hover:scale-[1.03]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon/65 via-carbon/5 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute left-4 top-4 h-6 w-6 border-l border-t border-white/60"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 sm:p-5">
                <span className="font-mono text-[10px] tracking-[0.16em] text-white/85">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-brand transition-all duration-500 group-hover:w-12"
                />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
