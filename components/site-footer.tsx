import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";

import { Logo } from "@/components/logo";
import { navLinks, site, whatsappHref } from "@/lib/site";

const socials = [
  {
    label: "WhatsApp da AutoTreq",
    href: whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Instagram da AutoTreq",
    href: site.instagramHref,
    icon: Instagram,
    external: true,
  },
  {
    label: "Enviar e-mail para a AutoTreq",
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0d0c0d]">
      <div aria-hidden="true" className="h-[2px] w-full bg-brand/70" />

      <div className="shell pb-28 pt-14 lg:pb-24 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.9fr] lg:gap-16">
          <div>
            <a
              href="#inicio"
              aria-label="AutoTreq — voltar ao início"
              className="focus-dark inline-block"
            >
              <Logo size="lg" />
            </a>

            <p className="mt-6 max-w-[360px] text-[13px] leading-[1.8] text-white/45">
              Manutenção automotiva de veículos leves, pesados, caminhões,
              tratores e máquinas, com diagnóstico computadorizado, engenharia
              mecânica e aplicações industriais.
            </p>

            <div className="mt-7 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    {...(social.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="focus-dark group flex h-10 w-10 items-center justify-center border border-white/12 text-white/60 transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              Navegação
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline font-display text-[11px] font-medium uppercase tracking-[0.08em] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              Contato
            </p>
            <ul className="mt-5 space-y-4 text-[13px] text-white/60">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1 w-3 shrink-0 bg-brand/70"
                />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase leading-[1.8] tracking-[0.14em] text-white/55">
            © {new Date().getFullYear()} AutoTreq Figueiredo Ltda.
            <br className="sm:hidden" /> Todos os direitos reservados.
            <span className="mt-1 block">CNPJ 62.693.396/0001-57</span>
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
              Terra Santa — PA
            </span>
            <a
              href="#inicio"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-brand"
            >
              Voltar ao topo
              <span className="flex h-7 w-7 items-center justify-center border border-white/12 transition-colors group-hover:border-brand">
                <ArrowUp aria-hidden="true" className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
