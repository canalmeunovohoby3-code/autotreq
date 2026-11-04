import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Outfit } from "next/font/google";
import "./globals.css";

import { SkipLink } from "@/components/skip-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { RevealController } from "@/components/reveal-controller";
import { ParallaxController } from "@/components/parallax-controller";
import { MagneticController } from "@/components/magnetic-controller";
import { site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;

const title =
  "AutoTreq | Soluções Automotivas, Engenharia e Manutenção Técnica";
const description =
  "Soluções técnicas em manutenção automotiva, diagnóstico computadorizado, automação industrial e engenharia mecânica. AutoTreq Figueiredo Ltda., Terra Santa — PA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: {
    default: title,
    template: "%s | AutoTreq",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "AutoTreq",
    "AutoTreq Figueiredo",
    "manutenção automotiva",
    "diagnóstico computadorizado",
    "automação industrial",
    "engenharia mecânica",
    "manutenção de veículos pesados",
    "Terra Santa",
    "Pará",
    "laudos técnicos ART",
  ],
  category: "Serviços técnicos automotivos e industriais",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.legalName,
    title,
    description,
    ...(siteUrl ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111011",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: siteUrl,
  email: site.email,
  telephone: `+${site.phoneRaw}`,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Terra Santa",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  areaServed: "Terra Santa, Pará, Brasil",
  sameAs: [site.instagramHref],
  knowsAbout: [
    "Manutenção de veículos leves e pesados",
    "Diagnóstico computadorizado",
    "Automação industrial",
    "Engenharia mecânica",
    "Laudos técnicos com ART",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} ${bebas.variable}`}
    >
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="conteudo" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <RevealController />
        <ParallaxController />
        <MagneticController />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}.title-mask-inner{transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
