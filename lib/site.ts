export const site = {
  name: "AutoTreq",
  legalName: "AutoTreq Figueiredo Ltda.",
  tagline: "Soluções automotivas, engenharia e manutenção técnica.",
  phoneDisplay: "+55 93 99206-3598",
  phoneRaw: "5593992063598",
  email: "autotreqfigueiredo@gmail.com",
  instagramHandle: "@autotreq",
  instagramHref: "https://www.instagram.com/autotreq/",
  location: "Terra Santa, Pará",
  locationShort: "Terra Santa — PA",
} as const;

export const whatsappMessage =
  "Olá, vim pelo site da AutoTreq e gostaria de falar com a equipe técnica.";

export const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A empresa", href: "#empresa" },
  { label: "Competências", href: "#competencias" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Fundadores", href: "#fundadores" },
  { label: "Relacionamentos", href: "#relacionamentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const sectionIds = [
  "inicio",
  "empresa",
  "essencia",
  "competencias",
  "solucoes",
  "fundadores",
  "relacionamentos",
  "postura",
  "contato",
] as const;
