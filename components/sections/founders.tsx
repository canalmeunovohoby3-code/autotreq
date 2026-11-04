import type { CSSProperties } from "react";
import { ShieldCheck } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { founders } from "@/lib/content";

export function Founders() {
  return (
    <section
      id="fundadores"
      className="relative overflow-hidden border-t border-ink/10 bg-white text-ink section-pad"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 tech-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-brand/[0.05] blur-[130px]"
      />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            index="06"
            label="Nossa liderança"
            tone="light"
            title={
              <>
                Quem está por trás da{" "}
                <span className="text-brand-deep">AutoTreq</span>.
              </>
            }
            className="max-w-4xl"
          />

          <div
            data-reveal
            style={{ "--delay": "160ms" } as CSSProperties}
            className="hidden pb-1 lg:block"
          >
            <div className="flex items-center gap-4 border-t border-ink/15 pt-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/70">
                Fundadores
              </span>
              <span className="num text-2xl leading-none text-brand-deep">
                02
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              data-reveal
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              className="card-hover group relative flex h-full flex-col overflow-hidden border border-ink/15 bg-[#F7F7F8] p-7 shadow-[0_24px_60px_-55px_rgba(35,31,32,0.5)] transition-colors duration-500 hover:border-brand/50 hover:bg-white sm:p-8 lg:p-9"
            >
              <span
                aria-hidden="true"
                className="absolute left-7 top-0 h-[2px] w-14 bg-brand sm:left-8 lg:left-9"
              />
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 h-6 w-6 border-r border-t border-ink/20 transition-colors duration-500 group-hover:border-brand sm:right-7 sm:top-7"
              />

              <div className="flex items-start justify-between gap-4">
                <p className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/70">
                  <span aria-hidden="true" className="h-1 w-1 bg-brand" />
                  {founder.role}
                </p>
                <span className="font-mono text-[9px] tracking-[0.12em] text-ink/70">
                  /{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 font-display text-[clamp(1.55rem,2.2vw,2rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-ink">
                {founder.name}
              </h3>

              <ul className="mt-6 space-y-2.5 border-t border-ink/15 pt-5">
                {founder.credentials.map((credential) => (
                  <li
                    key={credential}
                    className="flex items-start gap-3 text-[13.5px] leading-[1.55] text-ink/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 bg-brand"
                    />
                    {credential}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[14px] leading-[1.75] text-smoke">
                {founder.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="flex min-h-[34px] flex-wrap items-center justify-between gap-3 border-t border-ink/15 pt-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink/70">
                    Perfil profissional
                  </span>

                  {founder.badge ? (
                    <span className="inline-flex items-center gap-1.5 border border-brand/40 bg-brand/[0.07] px-2.5 py-1.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-ink">
                      <ShieldCheck
                        aria-hidden="true"
                        className="h-3 w-3 text-brand-deep"
                        strokeWidth={1.8}
                      />
                      {founder.badge}
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="h-1 w-8 bg-brand transition-all duration-500 group-hover:w-14"
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          data-reveal
          className="mt-6 max-w-[640px] font-mono text-[8.5px] uppercase leading-[1.8] tracking-[0.12em] text-ink/70"
        >
          Apresentação institucional baseada nas informações fornecidas pela
          empresa.
        </p>
      </div>
    </section>
  );
}
