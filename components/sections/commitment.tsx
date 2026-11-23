import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/section-intro";
import { clientSteps } from "@/lib/content";

export function Commitment() {
  return (
    <section
      id="postura"
      className="relative overflow-hidden border-t border-ink/10 bg-white text-ink section-pad"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/[0.05] blur-[120px]"
      />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            index="08"
            label="Nossa postura"
            tone="light"
            title={
              <>
                Uma postura profissional de{" "}
                <span className="text-brand-deep">ponta a ponta</span>.
              </>
            }
            intro="Parcerias duradouras se constroem com clareza, responsabilidade e respeito ao que foi acordado. Esta é a postura que a AutoTreq se propõe a adotar com clientes corporativos."
            className="max-w-4xl"
          />

          <div
            data-reveal
            style={{ "--delay": "200ms" } as CSSProperties}
            className="hidden pb-2 lg:block"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
              Etapas
            </span>
            <p className="num mt-1 text-4xl leading-none text-brand-deep">06</p>
          </div>
        </div>

        <div className="mt-12 grid gap-x-16 sm:mt-16 lg:grid-cols-2">
          {clientSteps.map((step, index) => (
            <article
              key={step.number}
              data-reveal
              style={
                {
                  "--delay": `${(index % 2) * 80}ms`,
                } as CSSProperties
              }
              className="group relative grid grid-cols-[56px_1fr] gap-4 border-t border-ink/20 py-7 sm:grid-cols-[78px_1fr] sm:gap-6 sm:py-9"
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-[2px] w-0 bg-brand transition-all duration-500 ease-precise group-hover:w-16"
              />

              <div className="flex flex-col gap-3">
                <span className="num text-[2.35rem] leading-[0.8] text-brand-deep sm:text-[3rem]">
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-px w-7 bg-brand sm:block"
                />
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-deep">
                  Etapa {step.number}
                </span>
                <h3 className="mt-2 font-display text-[17px] font-bold uppercase leading-[1.2] tracking-[0.005em] text-ink sm:text-[19px]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[420px] text-[14px] leading-[1.75] text-smoke">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <figure
          data-reveal
          className="relative mt-14 overflow-hidden bg-ink px-6 py-9 text-white shadow-[0_40px_90px_-65px_rgba(35,31,32,0.8)] sm:px-10 sm:py-12 lg:mt-16 lg:px-16 lg:py-14"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[2px] w-24 bg-brand"
          />
          <span
            aria-hidden="true"
            className="absolute right-6 top-6 h-10 w-10 border-r border-t border-brand/50 sm:right-8 sm:top-8"
          />
          <blockquote className="relative max-w-[980px] font-display text-[clamp(1.25rem,2.5vw,2rem)] font-medium leading-[1.4] tracking-[-0.01em] text-white/95">
            Quando o cliente sabe o que esperar, a relação ganha confiança. É
            essa previsibilidade, construída no dia a dia, que sustenta
            parcerias de longo prazo.
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
            <span aria-hidden="true" className="h-1 w-8 bg-brand" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              Postura AutoTreq
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
