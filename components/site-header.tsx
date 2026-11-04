"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Instagram, Mail, MessageCircle, X } from "lucide-react";

import { Logo } from "@/components/logo";
import {
  navLinks,
  sectionIds,
  site,
  whatsappHref,
} from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#inicio");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      let current = "#inicio";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 160) {
          current = `#${id}`;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => toggleRef.current?.focus({ preventScroll: true }), 80);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-precise ${
          scrolled
            ? "header-scrolled"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-5">
          <a
            href="#inicio"
            aria-label="AutoTreq — voltar ao início"
            className="focus-dark shrink-0 py-2"
          >
            <Logo priority />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-4 xl:flex 2xl:gap-7"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative py-2 font-display text-[10.5px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px bg-brand transition-all duration-500 ease-precise ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="btn btn-primary hidden h-11 min-h-0 px-5 text-[10px] md:inline-flex"
            >
              Solicitar contato
              <ArrowUpRight aria-hidden="true" />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label="Abrir menu de navegação"
              className="focus-dark flex h-11 w-11 flex-col items-center justify-center gap-[6px] border border-white/15 bg-white/[0.03] transition-colors hover:border-brand xl:hidden"
            >
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-brand" />
              <span className="block h-px w-3.5 bg-white" />
            </button>
          </div>
        </div>

        <div className="relative h-px w-full bg-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 bg-brand transition-[width] duration-150 ease-linear"
            style={{ width: `${progress * 100}%` }}
          >
            <span
              className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand shadow-[0_0_8px_rgba(247,121,18,0.8)]"
              style={{ opacity: progress > 0.002 ? 1 : 0 }}
            />
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-carbon transition-[opacity,visibility] duration-500 ease-precise xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand/10 blur-[100px]"
        />

        <div className="shell relative flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-white/10">
          <Logo compact />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="focus-dark flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div
          className={`relative flex-1 overflow-y-auto ${
            open ? "mobile-nav-open" : ""
          }`}
        >
          <nav
            aria-label="Navegação mobile"
            className="shell flex flex-col py-8"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: open ? `${120 + index * 45}ms` : "0ms",
                }}
                className="mobile-nav-link group flex items-baseline gap-5 border-b border-white/10 py-4"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.6rem,6vw,2.2rem)] font-bold uppercase leading-none tracking-[-0.01em] text-white transition-colors group-hover:text-brand">
                  {link.label}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-auto h-4 w-4 text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </a>
            ))}
          </nav>

          <div className="shell pb-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn btn-primary mt-2 w-full"
            >
              <MessageCircle aria-hidden="true" />
              Falar com a equipe
            </a>

            <div className="mt-8 grid gap-3 text-[13px] text-white/60">
              <a
                href={`mailto:${site.email}`}
                onClick={closeMenu}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="h-4 w-4 text-brand" />
                {site.email}
              </a>
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Instagram aria-hidden="true" className="h-4 w-4 text-brand" />
                {site.instagramHandle}
              </a>
              <p className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1 w-4 bg-brand/70"
                />
                {site.locationShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
