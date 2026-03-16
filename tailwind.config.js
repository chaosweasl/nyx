/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF6F0',
        foreground: '#1C1917',
        accent: '#C85F38',
        sage: '#8BAF7C',
        amber: '#D4A862',
        'bg-cream': '#FAF6F0',
        'text-ink': '#1C1917',
        'accent-terracotta': '#C85F38',
        'secondary-sage': '#8BAF7C',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
