import type { CSSProperties } from "react";

import { Counter } from "@/components/counter";
import { SectionIntro } from "@/components/section-intro";
import { indicators } from "@/lib/content";

export function About() {
  return (
    <section
      id="empresa"
      className="relative overflow-hidden border-t border-ink/10 bg-white text-ink section-pad"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-brand/[0.05] blur-[120px]"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <SectionIntro
              index="02"
              label="Quem somos"
              tone="light"
              title={
                <>
                  Técnica na{" "}
                  <span className="text-brand-deep">origem</span>.
                  <br />
                  Confiança na{" "}
                  <span className="text-brand-deep">entrega</span>.
                </>
              }
            />

            <div
              data-reveal
              style={{ "--delay": "140ms" } as CSSProperties}
              className="mt-12 sm:mt-14"
            >
              <div className="flex items-center justify-between gap-4 border-t border-ink/20 pt-3">
                <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink/70">
                  Indicadores institucionais
                </span>
                <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink/70">
                  03 / 02 / 01
                </span>
              </div>

              <div>
                {indicators.map((indicator, index) => (
                  <div
                    key={indicator.label}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink/15 py-5 sm:gap-6"
                  >
                    <div className="num min-w-[64px] text-[3rem] leading-[0.8] text-brand-deep sm:min-w-[82px] sm:text-[3.9rem]">
                      <Counter value={indicator.value} />
                    </div>
                    <div>
                      <p className="font-display text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-ink sm:text-xs">
                        {indicator.label}
                      </p>
                      <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.1em] text-ink/70">
                        {indicator.detail}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[9px] text-ink/70 transition-colors group-hover:text-brand-deep"
                    >
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-14">
            <p
              data-reveal
              style={{ "--delay": "80ms" } as CSSProperties}
              className="max-w-[640px] text-[18px] leading-[1.7] text-ink sm:text-[20px]"
            >
              A AutoTreq Figueiredo Ltda. foi fundada em Terra Santa, no Pará,
              por profissionais com formação técnica voltada ao universo
              industrial e à manutenção de equipamentos.
            </p>

            <div className="mt-7 max-w-[640px] space-y-6">
              <p
                data-reveal
                style={{ "--delay": "140ms" } as CSSProperties}
                className="body-copy-light"
              >
                Nossa atuação parte de uma convicção simples: serviços técnicos
                exigem conhecimento, método e responsabilidade. Por isso, a
                empresa nasce com a engenharia mecânica, a automação industrial
                e o diagnóstico computadorizado como base de sua forma de
                trabalhar.
              </p>

              <div
                data-reveal
                style={{ "--delay": "200ms" } as CSSProperties}
                className="relative border-l-2 border-brand py-1 pl-5 sm:pl-6"
              >
                <p className="text-[15px] leading-[1.75] text-ink/85 sm:text-base">
                  Valorizamos o relacionamento profissional com cada cliente:
                  ouvir a necessidade, entender a operação, alinhar o escopo e
                  executar com qualidade e transparência.
                </p>
              </div>

              <div
                data-reveal
                style={{ "--delay": "260ms" } as CSSProperties}
                className="relative overflow-hidden border-l-2 border-brand bg-[#F4F4F5] p-5 sm:p-6"
              >
                <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink/70">
                  Sobre esta apresentação
                </p>
                <p className="mt-3 text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
                  Esta proposta apresenta a AutoTreq, seus fundadores, seus
                  princípios e as frentes de atuação que podem ser exploradas em
                  parceria com empresas de médio e grande porte.
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-ink/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
