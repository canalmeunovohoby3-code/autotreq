import type { CSSProperties } from "react";
import { Cog, Cpu, ScanLine, ShieldCheck } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { pillars } from "@/lib/content";

const icons = {
  automation: Cpu,
  diagnostics: ScanLine,
  engineering: Cog,
  shield: ShieldCheck,
} as const;

export function Expertise() {
  return (
    <section
      id="competencias"
      className="relative overflow-hidden border-t border-ink/10 bg-white text-ink section-pad"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-brand/[0.05] blur-[100px]"
      />

      <div className="shell relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <SectionIntro
            index="04"
            label="Nossa experiência"
            tone="light"
            title={
              <>
                Conhecimento técnico
                <br className="hidden sm:block" /> aplicado ao{" "}
                <span className="relative inline-block">
                  <span className="text-brand-deep">automotivo</span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand"
                  />
                </span>
                .
              </>
            }
          />

          <div
            data-reveal
            style={{ "--delay": "160ms" } as CSSProperties}
            className="lg:pb-2"
          >
            <p className="max-w-[500px] text-[15px] leading-[1.8] text-smoke">
              No segmento automotivo, decisões técnicas precisam ser bem
              fundamentadas. A formação dos fundadores da AutoTreq compõe uma
              base sólida para diagnósticos e decisões em veículos leves,
              pesados, tratores e máquinas, com aplicações complementares em
              operações industriais.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-ink/15 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
                Base técnica
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
                A — D
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <article
                key={pillar.letter}
                data-reveal
                style={
                  { "--delay": `${(index % 2) * 90}ms` } as CSSProperties
                }
                className="card-hover group relative bg-[#F5F5F6] p-7 transition-colors duration-500 hover:bg-white sm:p-9 lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span
                    aria-hidden="true"
                    className="num select-none text-[3.6rem] leading-[0.75] outline-text-dark transition-colors duration-500 group-hover:text-brand-deep group-hover:[-webkit-text-stroke:0]"
                  >
                    {pillar.letter}
                  </span>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/15 bg-white text-ink transition-all duration-500 group-hover:border-brand group-hover:bg-brand">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.4}
                      className="h-5 w-5"
                    />
                  </span>
                </div>

                <div className="mt-12 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-brand transition-all duration-500 ease-precise group-hover:w-14"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
                    Pilar {pillar.letter}
                  </span>
                </div>

                <h3 className="mt-4 max-w-[360px] font-display text-[19px] font-bold uppercase leading-[1.15] tracking-[-0.005em] text-ink sm:text-[21px]">
                  {pillar.title}
                </h3>

                <p className="mt-4 max-w-[440px] text-[14px] leading-[1.75] text-smoke">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
