"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  className?: string;
  suffix?: string;
};

const format = (value: number) => String(Math.round(value)).padStart(2, "0");

export function Counter({ value, className = "", suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(format(value));

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setDisplay(format(value));
      return;
    }

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;

      const duration = 1500;
      const start = performance.now();
      setDisplay(format(0));

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(2, -10 * progress);
        setDisplay(format(value * eased));
        if (progress < 1) {
          frame = requestAnimationFrame(step);
        } else {
          setDisplay(format(value));
        }
      };

      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {display}
      {suffix}
    </span>
  );
}
