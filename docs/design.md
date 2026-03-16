# Portfolio Design System & Architecture

This document describes the design system, typography, textures, and animation guidelines implemented for this personal portfolio website. The site is built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 1. Goal & Vibe
The goal of the site is to present a warm, human, and slightly playful portfolio for a high school student who builds real full-stack software. It intentionally avoids feeling like a corporate template or an AI-generated layout.

- **Keywords:** Sketchbook meets terminal, employable but cool, warm, minimalist, human.

## 2. Design System

### 2.1 Color Palette
The colors are specifically chosen to feel natural and readable without harsh contrasts or generic gradients (no purple or hero gradients).

- **Background (`#FAF6F0`):** A warm cream/off-white that serves as a soft canvas for the entire site. Mapped in Tailwind as `bg-bg-cream`.
- **Foreground / Text (`#1C1917`):** Deep ink, used for primary headings, paragraphs, and high-contrast text elements. Mapped as `text-text-ink`.
- **Accent (`#C85F38`):** Terracotta. Used sparingly for interactive states (like hover borders), highlight badges, and subtle emphasis.
- **Secondary Accents:**
  - **Sage (`#8BAF7C`):** Soft green for neutral UI elements or positive highlights.
  - **Amber (`#D4A862`):** Warm gold/yellow tone for variety in badges or subtle highlights.

### 2.2 Typography
Three distinct typefaces are used to separate different kinds of content, loaded via Google Fonts.

- **Headings (Fraunces):** A serif, variable, optical-size font. Used for display names, section titles, and project names. It brings a quirky, warm, and editorial feel.
- **Body (DM Sans):** A clean, modern sans-serif. Used for standard paragraphs, descriptions, and general UI text. Provides human readability.
- **Code/Tech Tags (JetBrains Mono):** A monospace font. Used strictly for "tech stack" pill tags (e.g., "Next.js", "React") and terminal-esque accents. It roots the design in software engineering.

### 2.3 Texture
Instead of flat background colors or generic gradients, a **subtle CSS grain/noise overlay** is applied globally.
- Implemented as an SVG `<filter>` defined in `index.html`.
- Applied via the `.noise-overlay` utility class in `src/index.css`.
- Uses a repeating pattern with an extremely low opacity (3-6%) to create a physical "paper-like" texture over the warm cream background. It sits fixed atop the viewport with `pointer-events: none;`.

### 2.4 Animations (Framer Motion)
Animations are intentionally kept minimal and sophisticated. There are **no scale transforms** and **no bouncy effects**.

- **Section Entry (Stagger-in):** Sections fade in and slightly translate up (e.g., `y: 20` to `y: 0`) when they scroll into view. This uses Framer Motion's `whileInView` and `viewport={{ once: true }}`.
- **Card Hover Effects:** When hovering over project cards, the element transitions upward slightly (`-translate-y-1` or `-4px`) and the border color shifts to the terracotta accent (`hover:border-accent-terracotta`).
- **Timing:** Transitions are generally configured with an ease-out curve (`ease: "easeOut"`) and moderate durations (0.5s - 0.7s) to feel deliberate rather than rushed.

## 3. Architecture & File Structure

The project strictly follows a custom, hand-crafted architecture without reliance on UI component libraries (no shadcn, MUI, etc.).

### 3.1 Strict TypeScript Enforcement
- The project runs in **strict mode** (`"strict": true` in `tsconfig.json`).
- Explicit interfaces define all content structures (`Project`, `ExperienceEntry`, `BlogPost`, etc.) in `src/types/index.ts`.
- Components are strictly typed. To resolve `verbatimModuleSyntax` TS1484 errors, only `import type` is used when importing types or interfaces.
- The use of `any` or explicit type assertions (`as ...`) is avoided unless strictly necessary.

### 3.2 Data Centralization
To make the site easily maintainable, **all placeholder data and copy** is decoupled from the React components.
- Everything lives in `src/data/content.ts`.
- The user can update their name, bio, project lists, and experience entirely within `content.ts` without touching any component logic in `src/components/`.

### 3.3 Components
- **`Hero.tsx`**: Large display name, punchy role text, and a rotating "currently" status line that loops through activities to make the site feel alive. Includes a subtle scroll-down nudge.
- **`About.tsx`**: A responsive split layout (2-column on desktop, 1 on mobile). Features a warm, direct bio, a grouped set of tech stack pills (using JetBrains Mono), and a fun facts list.
- **`Projects.tsx`**: A staggered grid layout. Features one full-width featured project at the top, followed by a 2-column grid of secondary/coming-soon projects. Implements the `-4px` hover translate and terracotta border shift.
- **`Experience.tsx`**: A vertical timeline layout indicating work/education history. Features left-side year markers and custom status pills (e.g., "international", "upcoming").
- **`Blog.tsx`**: Minimal, editorial card list for writing entries. Uses the "Soon" convention instead of dates for unreleased posts.
- **`Footer.tsx`**: Simple, warm closing section with centralized social links (GitHub, LinkedIn, Email).

## 4. Technical Stack
- **Framework:** React 18 (Client-side rendered)
- **Build Tool:** Vite (configured via `react-ts` template)
- **Styling:** Tailwind CSS v3 (configured in `tailwind.config.js`)
- **Animation:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)
