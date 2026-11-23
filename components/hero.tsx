import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownRight, MessageCircle } from "lucide-react";

import heroPhoto from "@/assets/foto hero.jpeg";
import { Counter } from "@/components/counter";
import { indicators } from "@/lib/content";
import { whatsappHref } from "@/lib/site";

const strip = [
  "Veículos e máquinas",
  "Diagnóstico computadorizado",
  "Manutenção automotiva",
  "Aplicações industriais",
];

const heroWords: Array<{ text: string; accent?: boolean } | { break: true }> = [
  { text: "Técnica" },
  { text: "na" },
  { text: "origem.", accent: true },
  { break: true },
  { text: "Confiança" },
  { text: "na" },
  { text: "entrega.", accent: true },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-carbon pt-[104px] lg:pt-[132px]"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="tech-grid absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black_8%,rgba(0,0,0,0.35)_62%,transparent)]" />
        <div className="absolute -right-40 top-[-15%] h-[640px] w-[640px] rounded-full bg-brand/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-carbon to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-14 pb-14 pt-6 lg:min-h-[calc(100svh_-_132px)] lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:pb-16 lg:pt-10 xl:gap-16">
          <div className="relative">
            <div
              className="hero-up flex flex-wrap items-center gap-3"
              style={{ animationDelay: "80ms" }}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-brand">
                01
              </span>
              <span aria-hidden="true" className="h-[2px] w-8 bg-brand" />
              <p className="eyebrow text-white/65">
                Automotivo
                <span className="mx-2 hidden text-brand sm:inline">·</span>
                <span className="block sm:inline">Terra Santa — PA</span>
              </p>
            </div>

            <h1 className="mt-7 display text-[clamp(1.65rem,8.5vw,2.2rem)] sm:text-[clamp(2.2rem,5.5vw,3.5rem)] lg:text-[clamp(2.5rem,4vw,3.6rem)] text-white text-shadow-industrial">
              {heroWords.map((word, index) =>
                "break" in word ? (
                  <br key={`break-${index}`} />
                ) : (
                  <span key={`${word.text}-${index}`}>
                    {index > 0 && " "}
                    <span
                      className={`hero-word ${
                        word.accent ? "hero-accent" : ""
                      }`}
                      style={
                        { "--word-index": index } as CSSProperties
                      }
                    >
                      {word.text}
                    </span>
                  </span>
                ),
              )}
            </h1>

            <p
              className="hero-up mt-8 max-w-[560px] text-[15px] leading-[1.8] text-[#b6b3b4] sm:text-base"
              style={{ animationDelay: "500ms" }}
            >
              Soluções técnicas automotivas fundamentadas em conhecimento,
              engenharia e compromisso com resultados. Atuação em veículos
              leves, pesados, caminhões, tratores e máquinas, com aplicações
              industriais complementares.
            </p>

            <div
              className="hero-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "600ms" }}
            >
              <a
                href="#solucoes"
                data-magnetic
                className="btn btn-primary w-full sm:w-auto"
              >
                Conheça nossas soluções
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="btn btn-ghost w-full sm:w-auto"
              >
                <MessageCircle aria-hidden="true" />
                Fale com nossa equipe
              </a>
            </div>

            <div
              className="hero-up mt-12 grid grid-cols-3 border-t border-white/15 sm:mt-14"
              style={{ animationDelay: "700ms" }}
            >
              {indicators.map((indicator, index) => (
                <div
                  key={indicator.label}
                  className={`relative pb-1 pt-5 sm:pt-6 ${
                    index > 0
                      ? "border-l border-white/10 pl-4 sm:pl-6"
                      : "pr-3 sm:pr-6"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[2px] w-8 bg-brand"
                    style={
                      index > 0
                        ? { left: "1rem" }
                        : undefined
                    }
                  />
                  <div className="num text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.82] text-brand">
                    <Counter value={indicator.value} />
                    <span className="sr-only">
                      {indicator.display} — {indicator.label}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.08em] text-white/85 sm:text-[11px]">
                    {indicator.label}
                  </p>
                  <p className="mt-1.5 hidden font-mono text-[8.5px] uppercase tracking-[0.1em] text-steel sm:block">
                    {indicator.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-parallax="0.035"
            className="hero-fade relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none"
            style={{ animationDelay: "380ms" }}
          >
            <div
              aria-hidden="true"
              className="animate-float absolute -right-4 -top-4 hidden h-24 w-24 border-r border-t border-brand/30 lg:block"
            />
            <div className="mb-3 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.22em] text-steel">
              <span>Núcleo técnico / 01</span>
              <span className="hidden items-center gap-2 text-brand sm:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                Ativo
              </span>
            </div>

            <div className="blueprint-shell group relative aspect-[4/5] w-full overflow-hidden sm:aspect-square">
              <Image
                src={heroPhoto}
                alt="Maleta aberta com equipamentos de diagnóstico automotivo"
                fill
                priority
                placeholder="blur"
                quality={90}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 560px, 45vw"
                className="object-cover object-center brightness-[1.05] contrast-[1.04] saturate-[1] transition-transform duration-[1200ms] ease-precise group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/5 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-carbon/15 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-carbon/30 via-carbon/5 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-carbon/55 via-carbon/10 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-brand/[0.05] mix-blend-soft-light"
              />
              <div
                aria-hidden="true"
                className="scan-line pointer-events-none absolute left-[6%] right-[6%] top-[10%] z-[1] h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 z-[1] border border-white/10"
              />
              <div className="absolute inset-x-0 bottom-0 z-[2] p-5">
                <span aria-hidden="true" className="block h-px w-10 bg-brand" />
                <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/80">
                  Diagnóstico computadorizado
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 border-t border-white/10 pt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-steel">
              <span>Veículos</span>
              <span className="text-center">Diagnóstico</span>
              <span className="text-right">Manutenção</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-3 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8">
          {strip.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[8px] tracking-[0.16em] text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                {item}
              </span>
            </div>
          ))}
          <a
            href="#empresa"
            aria-label="Ir para a seção A empresa"
            className="ml-auto hidden h-8 w-8 items-center justify-center border border-white/15 text-brand transition-colors hover:border-brand sm:flex"
          >
            <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
