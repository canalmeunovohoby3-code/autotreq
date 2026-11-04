import type { CSSProperties, ReactNode } from "react";

type SectionIntroProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  introClassName?: string;
};

export function SectionIntro({
  index,
  label,
  title,
  intro,
  tone = "dark",
  className = "",
  introClassName = "",
}: SectionIntroProps) {
  const light = tone === "light";

  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span
          className={`font-mono text-[10px] tracking-[0.2em] ${
            light ? "text-ink/70" : "text-brand"
          }`}
        >
          {index}
        </span>
        <span
          className={`eyebrow ${light ? "text-ink" : "text-white/70"}`}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          data-reveal="line"
          className={`h-px w-16 sm:w-24 ${
            light ? "bg-ink/25" : "bg-white/20"
          }`}
        />
      </div>

      <h2
        data-reveal="title"
        style={{ "--delay": "80ms" } as CSSProperties}
        className={`mt-6 title-lg ${light ? "text-ink" : "text-white"}`}
      >
        <span className="title-mask">
          <span className="title-mask-inner">{title}</span>
        </span>
      </h2>

      {intro && (
        <div
          data-reveal
          style={{ "--delay": "160ms" } as CSSProperties}
          className={`mt-6 max-w-[680px] text-[15px] leading-[1.75] sm:text-base ${
            light ? "text-smoke" : "text-[#b6b3b4]"
          } ${introClassName}`}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
