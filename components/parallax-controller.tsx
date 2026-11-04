"use client";

import { useEffect } from "react";

export function ParallaxController() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (!desktop.matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    if (!elements.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const speed = Number(element.dataset.parallax ?? "0.04");
        const center = rect.top + rect.height / 2;
        const shift = Math.max(
          -36,
          Math.min(36, -(center - viewportCenter) * speed),
        );

        element.style.setProperty("--parallax-y", `${shift.toFixed(1)}px`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      elements.forEach((element) => {
        element.style.removeProperty("--parallax-y");
      });
    };
  }, []);

  return null;
}
