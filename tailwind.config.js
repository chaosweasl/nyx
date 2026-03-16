/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--color-bg-cream), <alpha-value>)",
        foreground: "rgba(var(--color-text-ink), <alpha-value>)",
        accent: "rgba(var(--color-accent-terracotta), <alpha-value>)",
        sage: "rgba(var(--color-secondary-sage), <alpha-value>)",
        amber: "rgba(var(--color-amber), <alpha-value>)",
        "bg-cream": "rgba(var(--color-bg-cream), <alpha-value>)",
        "text-ink": "rgba(var(--color-text-ink), <alpha-value>)",
        "accent-terracotta":
          "rgba(var(--color-accent-terracotta), <alpha-value>)",
        "secondary-sage": "rgba(var(--color-secondary-sage), <alpha-value>)",
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
