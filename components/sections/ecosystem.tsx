import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/section-intro";
import { ecosystem } from "@/lib/content";

export function Ecosystem() {
  return (
    <section
      id="relacionamentos"
      className="relative overflow-hidden border-t border-ink/10 bg-mist section-pad text-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />
            <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionIntro
              index="07"
              label="Nosso ecossistema"
              tone="light"
              title={
                <>
                  Relacionamentos e referências{" "}
                  <span className="relative inline-block text-brand-deep">
                    empresariais
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand"
                    />
                  </span>
                  .
                </>
              }
            />

            <p
              data-reveal
              style={{ "--delay": "180ms" } as CSSProperties}
              className="mt-7 max-w-[480px] text-[14.5px] leading-[1.8] text-smoke"
            >
              O mercado em que a AutoTreq se posiciona é formado por empresas de
              locação, terraplenagem, logística, mineração e operações
              industriais. As empresas abaixo fazem parte do ecossistema
              empresarial relacionado à trajetória da AutoTreq.
            </p>

            <div className="mt-10 hidden border-t border-ink/15 pt-4 lg:block">
              <span className="font-mono text-[8.5px] uppercase leading-[1.8] tracking-[0.16em] text-ink/70">
                Locação · Terraplenagem · Logística
                <br />
                Mineração · Operações industriais
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-6 border-t border-ink/25 pt-3">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink/70">
                Referências empresariais
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink/70">
                {String(ecosystem.length).padStart(2, "0")} nomes
              </span>
            </div>

            <ul className="mt-2 grid gap-x-10 sm:grid-cols-2">
              {ecosystem.map((company, index) => (
                <li
                  key={company}
                  data-reveal
                  style={
                    { "--delay": `${(index % 2) * 60}ms` } as CSSProperties
                  }
                >
                  <div className="group flex min-h-[80px] items-center gap-3 border-b border-ink/15 py-4 sm:py-5">
                    <span className="font-mono text-[8px] tracking-[0.12em] text-ink/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[15px] font-bold uppercase leading-[1.25] tracking-[-0.005em] text-ink transition-transform duration-500 ease-precise group-hover:translate-x-1 sm:text-[17px] xl:text-[18px]">
                      {company}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto h-px w-5 shrink-0 bg-ink/20 transition-all duration-500 group-hover:w-9 group-hover:bg-brand"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <p
              data-reveal
              className="mt-6 border-l border-ink/40 pl-4 text-[11px] leading-[1.7] text-ink/75"
            >
              Os nomes acima são citados como referências do relacionamento
              empresarial da AutoTreq e não representam, por si, contratos ou
              serviços específicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
