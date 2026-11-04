import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { areas, specificServices } from "@/lib/content";

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden border-t border-ink/10 bg-mist text-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-brand/[0.06] blur-[100px]"
      />

      <div className="shell relative pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            index="05"
            label="O que fazemos"
            tone="light"
            title={
              <>
                Soluções para diferentes{" "}
                <span className="text-brand-deep">operações</span>.
              </>
            }
            intro="Áreas em que a AutoTreq pode dialogar com o cliente, detalhadas conforme a necessidade de cada operação."
            className="max-w-4xl"
          />

          <div
            data-reveal
            style={{ "--delay": "200ms" } as CSSProperties}
            className="hidden pb-2 lg:block"
          >
            <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink/70">
              Áreas de atuação
            </span>
            <p className="num mt-1 text-4xl leading-none text-brand-deep">05</p>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/20 sm:mt-16">
          {areas.map((area, index) => (
            <article
              key={area.number}
              data-reveal
              style={{ "--delay": `${index * 60}ms` } as CSSProperties}
              className="group relative grid gap-3 border-b border-ink/15 py-6 transition-colors duration-500 hover:bg-white/60 sm:py-7 md:grid-cols-[76px_1fr_1.05fr] md:items-center md:gap-8 md:py-8 lg:-mx-5 lg:px-5"
            >
              <div className="flex items-center justify-between md:block">
                <span className="num text-[2rem] leading-none text-brand-deep md:text-[2.4rem]">
                  {area.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-ink/20 md:mt-3 md:block md:w-8"
                />
              </div>

              <h3 className="flex items-start gap-3 font-display text-[17px] font-bold uppercase leading-[1.2] tracking-[-0.005em] text-ink transition-transform duration-500 ease-precise group-hover:translate-x-1 sm:text-lg md:text-[19px]">
                <ArrowRight
                  aria-hidden="true"
                  className="mt-[3px] hidden h-4 w-4 shrink-0 text-brand md:block"
                  strokeWidth={1.8}
                />
                {area.title}
              </h3>

              <p className="max-w-[520px] text-[14px] leading-[1.7] text-smoke md:text-[14.5px]">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[540px] text-[13px] leading-[1.7] text-smoke">
            Escopo, condições e limites são alinhados com cada cliente antes da
            execução.
          </p>
          <a
            href="#servicos-especificos"
            className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-ink"
          >
            Ver serviços específicos
            <span className="flex h-8 w-8 items-center justify-center border border-ink/20 transition-colors group-hover:border-brand">
              <ArrowDown
                aria-hidden="true"
                className="h-3.5 w-3.5 text-brand transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>

      <div
        id="servicos-especificos"
        className="relative overflow-hidden border-y border-ink/15 bg-white text-ink"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 tech-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/[0.04] blur-[100px]"
        />

        <div className="shell relative py-20 sm:py-24 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div data-reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-ink/70">
                  05.1
                </span>
                <span className="eyebrow text-ink">Serviços específicos</span>
                <span
                  aria-hidden="true"
                  data-reveal="line"
                  className="h-px w-16 bg-ink/25"
                />
              </div>
              <h3 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-ink">
                Aplicações técnicas
              </h3>
            </div>

            <div data-reveal style={{ "--delay": "100ms" } as CSSProperties}>
              <p className="max-w-[500px] text-[14px] leading-[1.75] text-smoke lg:ml-auto">
                Frentes de serviço que podem ser consideradas conforme a
                necessidade e o escopo de cada operação.
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-ink/15 pt-3 lg:justify-end">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/70">
                  {String(specificServices.length).padStart(2, "0")} serviços
                </span>
                <span aria-hidden="true" className="h-1 w-1 bg-brand" />
              </div>
            </div>
          </div>

          <ul className="mt-10 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {specificServices.map((service, index) => {
              const isLast = index === specificServices.length - 1;
              return (
                <li
                  key={service.name}
                  data-reveal
                  style={
                    {
                      "--delay": `${(index % 3) * 45}ms`,
                    } as CSSProperties
                  }
                  className={`group relative flex min-h-[72px] items-center gap-4 px-5 py-5 transition-colors duration-500 hover:bg-[#FAFAFB] ${
                    isLast
                      ? "bg-[#FBF2E9] sm:col-span-2 lg:col-span-3"
                      : "bg-white"
                  }`}
                >
                  <span className="font-mono text-[9px] tracking-[0.12em] text-ink/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[12.5px] font-semibold uppercase leading-[1.35] tracking-[0.035em] text-ink sm:text-[13px]">
                    {service.name}
                    {"pending" in service && service.pending && (
                      <sup
                        className="ml-1 text-brand-deep"
                        title="Grafia provisória, pendente de confirmação"
                      >
                        *
                      </sup>
                    )}
                  </span>
                  <span className="ml-auto flex items-center gap-2">
                    {isLast && (
                      <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-ink/70 sm:inline">
                        ART
                      </span>
                    )}
                    <span
                      aria-hidden="true"
                      className="h-px w-4 bg-ink/20 transition-all duration-500 group-hover:w-7 group-hover:bg-brand"
                    />
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-col gap-2 border-l border-ink/25 pl-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="max-w-[720px] text-[11px] leading-[1.65] text-ink/75">
              * A grafia “Luxumetria” permanece provisória e aguarda confirmação
              com o cliente.
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink/60">
              Lista de serviços
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
