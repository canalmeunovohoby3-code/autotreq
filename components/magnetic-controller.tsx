"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function MagneticController() {
  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    if (!finePointer.matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );

    if (!elements.length) return;

    const cleanups: Array<() => void> = [];

    elements.forEach((element) => {
      let frame = 0;
      let targetX = 0;
      let targetY = 0;

      const apply = () => {
        frame = 0;
        element.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      };

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;

        const rect = element.getBoundingClientRect();
        targetX = clamp(
          (event.clientX - (rect.left + rect.width / 2)) * 0.1,
          -7,
          7,
        );
        targetY = clamp(
          (event.clientY - (rect.top + rect.height / 2)) * 0.14,
          -4,
          4,
        );

        if (!frame) frame = window.requestAnimationFrame(apply);
      };

      const reset = () => {
        targetX = 0;
        targetY = 0;
        element.style.transform = "translate3d(0, 0, 0)";
      };

      element.addEventListener("pointermove", onPointerMove);
      element.addEventListener("pointerleave", reset);
      element.addEventListener("blur", reset);

      cleanups.push(() => {
        window.cancelAnimationFrame(frame);
        element.removeEventListener("pointermove", onPointerMove);
        element.removeEventListener("pointerleave", reset);
        element.removeEventListener("blur", reset);
        element.style.removeProperty("transform");
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
