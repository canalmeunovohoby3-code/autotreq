import Image from "next/image";

import logo from "@/assets/logo.png";

type LogoProps = {
  compact?: boolean;
  size?: "default" | "lg";
  priority?: boolean;
  className?: string;
};

export function Logo({
  compact = false,
  size = "default",
  priority = false,
  className = "",
}: LogoProps) {
  const height = compact
    ? "h-16"
    : size === "lg"
      ? "h-20 sm:h-24"
      : "h-[72px] lg:h-[88px]";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={logo}
        alt="AutoTreq — Soluções Automotivas"
        width={449}
        height={285}
        quality={95}
        priority={priority}
        className={`${height} w-auto`}
      />
    </span>
  );
}
