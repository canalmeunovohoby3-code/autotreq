import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { site, whatsappHref } from "@/lib/site";

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Terra Santa, Pará, Brasil");

const channels = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagramHref,
    icon: Instagram,
    external: true,
  },
  {
    label: "Localização",
    value: site.location,
    href: mapsHref,
    icon: MapPin,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-brand/30 bg-ink"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="tech-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_75%_40%,black,transparent_72%)]" />
        <div data-parallax="0.05" className="absolute -right-40 -top-20 h-[620px] w-[620px] rounded-full border border-white/[0.05]" />
        <div className="animate-float absolute -right-16 top-10 h-[460px] w-[460px] rounded-full border border-brand/15" />
        <div className="absolute right-8 top-32 h-[300px] w-[300px] animate-spin-slow rounded-full border border-dashed border-white/10" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-brand/[0.08] blur-[110px]" />
      </div>

      <div className="shell relative py-20 sm:py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-brand">
            09
          </span>
          <span className="eyebrow text-white/70">Contato</span>
          <span
            aria-hidden="true"
            data-reveal="line"
            className="h-px w-20 bg-white/20 sm:w-32"
          />
        </div>

        <h2
          data-reveal="title"
          style={{ "--delay": "80ms" } as CSSProperties}
          className="mt-8 max-w-[1120px] display text-[clamp(1.65rem,3.6vw,3.25rem)] leading-[1.06] text-white"
        >
          <span className="title-mask">
            <span className="title-mask-inner">
              Estamos prontos para conhecer as necessidades da sua operação
              automotiva e construir oportunidades baseadas em{" "}
              <span className="text-brand">competência técnica</span>,
              transparência e{" "}
              <span className="relative inline-block">
                confiança
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand/60"
                />
              </span>
              .
            </span>
          </span>
        </h2>

        <div className="mt-12 grid gap-12 border-t border-white/15 pt-10 sm:mt-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:pt-12">
          <div
            data-reveal
            style={{ "--delay": "120ms" } as CSSProperties}
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="btn btn-primary h-auto min-h-[60px] w-full whitespace-normal px-7 py-4 text-center text-[11px] leading-[1.5] sm:w-auto sm:max-w-[420px] sm:text-left"
            >
              <span className="flex items-center gap-3">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Vamos conversar sobre a sua operação automotiva
              </span>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
            </a>

            <p className="mt-6 max-w-[380px] text-[13px] leading-[1.75] text-white/60">
              Fale diretamente com a equipe da AutoTreq para apresentar a
              necessidade da sua operação automotiva.
            </p>

            <div className="mt-10 border-t border-white/10 pt-4">
              <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.18em] text-white/50">
                AutoTreq Figueiredo Ltda.
                <br />
                Terra Santa — Pará · Brasil
              </p>
            </div>
          </div>

          <div
            data-reveal
            style={{ "--delay": "200ms" } as CSSProperties}
            className="lg:pt-1"
          >
            <div className="flex items-center justify-between border-t border-white/20 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Canais de contato
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                Direto
              </span>
            </div>

            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group flex items-center gap-4 border-b border-white/10 py-4 sm:gap-5 sm:py-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-ink sm:h-11 sm:w-11">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.6}
                      className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                      {channel.label}
                    </span>
                    <span className="mt-1 block break-words font-display text-[13.5px] font-medium tracking-[0.005em] text-white/90 transition-colors group-hover:text-brand sm:text-[15px]">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
