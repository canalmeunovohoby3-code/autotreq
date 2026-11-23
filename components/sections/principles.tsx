import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/section-intro";
import { principles } from "@/lib/content";

const direction = [
  {
    index: "01",
    label: "Missão",
    text: "Oferecer soluções técnicas com qualidade, responsabilidade e transparência, apoiando a continuidade e o bom desempenho das operações de nossos clientes.",
  },
  {
    index: "02",
    label: "Visão",
    text: "Ser reconhecida pela competência técnica no segmento automotivo e pela confiança construída nos relacionamentos com empresas de serviços e operações industriais.",
  },
];

const values = [
  "Competência técnica",
  "Responsabilidade",
  "Transparência",
  "Compromisso",
  "Respeito ao cliente",
];

export function Principles() {
  return (
    <section
      id="essencia"
      className="relative overflow-hidden border-t border-ink/10 bg-mist text-ink section-pad"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 h-[380px] w-[380px] translate-x-1/3 rounded-full bg-brand/[0.06] blur-[110px]"
      />

      <div className="shell relative">
        <SectionIntro
          index="03"
          label="Nossa essência"
          tone="light"
          title={
            <>
              Princípios que orientam
              <br className="hidden sm:block" /> nossa{" "}
              <span className="text-brand-deep">atuação</span>.
            </>
          }
          className="max-w-4xl"
        />

        <div className="mt-14 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <article
                key={principle.title}
                data-reveal
                style={
                  { "--delay": `${(index % 3) * 80}ms` } as CSSProperties
                }
                className="card-hover group relative bg-white p-7 transition-colors duration-500 hover:bg-[#FAFAFB] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-brand-deep">
                    {number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative flex h-7 w-7 items-center justify-center opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                  >
                    <span className="absolute left-1/2 top-0 h-full w-px bg-ink/20" />
                    <span className="absolute left-0 top-1/2 h-px w-full bg-ink/20" />
                    <span className="relative h-1 w-1 bg-brand" />
                  </span>
                </div>

                <h3 className="mt-9 font-display text-[16px] font-bold uppercase leading-tight tracking-[0.02em] text-ink sm:text-[17px]">
                  {principle.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-8 bg-brand transition-all duration-500 ease-precise group-hover:w-14"
                />

                <p className="mt-4 text-[14px] leading-[1.7] text-smoke">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20">
          <div
            data-reveal
            className="flex items-center gap-4 border-t border-ink/20 pt-3"
          >
            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/70">
              <span aria-hidden="true" className="h-1 w-1 bg-brand" />
              Direcionamento
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/70">
              Missão · Visão · Valores
            </span>
          </div>

          <div className="mt-8 grid border-y border-ink/15 lg:grid-cols-3">
            {direction.map((item, index) => (
              <div
                key={item.label}
                data-reveal
                style={{ "--delay": `${index * 100}ms` } as CSSProperties}
                className={`relative py-7 sm:py-9 lg:py-10 ${
                  index === 0
                    ? "border-b border-ink/15 lg:border-b-0 lg:border-r lg:pl-0 lg:pr-8"
                    : "border-b border-ink/15 lg:border-b-0 lg:border-r lg:px-8"
                }`}
              >
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/70">
                  <span aria-hidden="true" className="h-1 w-4 bg-brand" />
                  {item.index}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-ink">
                  {item.label}
                </h3>
                <p className="mt-4 max-w-[420px] text-[14px] leading-[1.75] text-smoke">
                  {item.text}
                </p>
              </div>
            ))}

            <div
              data-reveal
              style={{ "--delay": "200ms" } as CSSProperties}
              className="relative py-7 sm:py-9 lg:py-10 lg:pl-8 lg:pr-0"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/70">
                <span aria-hidden="true" className="h-1 w-4 bg-brand" />
                03
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-ink">
                Valores
              </h3>
              <ul className="mt-4 space-y-2.5">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 text-[14px] text-smoke"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 bg-brand"
                    />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
