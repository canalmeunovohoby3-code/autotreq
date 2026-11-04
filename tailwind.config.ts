import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F77912",
          deep: "#C0570A",
        },
        ink: "#231F20",
        graphite: "#1A1A1A",
        carbon: "#111011",
        smoke: "#4A4A4A",
        mist: "#E6E7E8",
        steel: "#8C8C8C",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "Montserrat", "Arial", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
        numeric: ["var(--font-bebas)", "Anton", "Impact", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: {
        shell: "1440px",
      },
      transitionTimingFunction: {
        precise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.85)", opacity: "0.65" },
          "70%": { transform: "scale(1.45)", opacity: "0" },
          "100%": { transform: "scale(1.45)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        growLine: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "spin-slow": "spinSlow 48s linear infinite",
        "pulse-ring": "pulseRing 2.8s cubic-bezier(0.25, 0.6, 0.3, 1) infinite",
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
