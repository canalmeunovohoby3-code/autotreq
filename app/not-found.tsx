import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-carbon pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 tech-grid opacity-50 [mask-image:radial-gradient(circle_at_30%_40%,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand/[0.07] blur-[100px]"
      />

      <div className="shell">
        <p className="eyebrow text-brand">404 · Página não encontrada</p>
        <h1 className="mt-6 max-w-[820px] display text-[clamp(2rem,4.6vw,4rem)] text-white">
          Esta rota não faz parte do percurso.
        </h1>
        <p className="mt-6 max-w-[520px] text-[15px] leading-[1.8] text-[#b6b3b4]">
          O endereço acessado não existe ou foi movido. Volte ao site
          institucional para conhecer as soluções técnicas da AutoTreq.
        </p>
        <Link href="/" className="btn btn-primary mt-9">
          <ArrowLeft aria-hidden="true" />
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
