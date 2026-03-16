# Portfolio Layout & Visual Design Guide

This document breaks down the visual layout of each section of the portfolio, describing exactly how the content is positioned and how the interactive elements respond.

## Global Layout Rules

- **Constraint:** The central content is constrained to a `max-w-4xl` container and centered horizontally (`mx-auto`).
- **Padding:** Ample padding (`px-6`, `py-20` on desktop, slightly less on mobile) is used to give the sections room to breathe.
- **Background & Texture:** The entire viewport has a `bg-bg-cream` base color. Overlaid on top of this, an SVG filter provides a subtle (3-6% opacity) noise/grain texture. This sits fixed across the whole page, unaffected by scrolling, via the `.noise-overlay` class.

---

## 1. Hero Section (`Hero.tsx`)

**Positioning & Sizing:**

- Takes up minimum `100vh` to act as a full-screen landing area (`min-h-screen`, `flex`, `flex-col`, `justify-center`).

**Content Blocks:**

- **Display Name:** Large `text-6xl md:text-8xl` Fraunces heading. Left-aligned (like most of the site).
- **Role Subtitle:** A punchy `text-xl md:text-2xl` DM Sans line right below the name, using the `text-text-ink/80` (slightly muted ink) color.
- **Currently Line:** A dynamic, flexbox-based row. It reads "Currently:" followed by a Framer Motion `AnimatePresence` block that cycles through a list of statuses (e.g., "building side projects"). The cycling text uses the `text-accent-terracotta` color and the Fraunces italic font.
- **Scroll Nudge:** Pinned to the very bottom of the view (`absolute bottom-8`). It features a tiny, subtle `animate-bounce` arrow pointing down, indicating there is more content.

---

## 2. About Section (`About.tsx`)

**Positioning & Sizing:**

- A standard content section (`py-24`).

**Layout Structure:**

- Uses a **CSS Grid** that changes based on viewport size.
- **Mobile:** Single column (`grid-cols-1`). Elements stack vertically.
- **Desktop:** Two unequal columns (`md:grid-cols-5`, with `gap-12`).
  - **Left Column (col-span-3):** Contains the 2-3 paragraphs of bio text. The text is warm, readable (`text-lg`), and relaxed (`leading-relaxed`).
  - **Right Column (col-span-2):** A sidebar-style column containing two blocks:
    - **Tech Stack:** A flex container (`flex-wrap`, `gap-2`) of small "pill" badges. The text in these pills is small (`text-sm`), uppercase, and uses the `JetBrains Mono` code font. They have a subtle background (`bg-text-ink/5`) and border.
    - **Fun Facts:** A simple unordered list (`ul`, `space-y-2`) appearing below the tech stack, displaying 2-3 bullet points.

---

## 3. Projects Section (`Projects.tsx`)

**Positioning & Sizing:**

- Standard content section (`py-24`). Features a large section heading in Fraunces.

**Layout Structure:**

- **Featured Project:** The top item in the list is given a full-width card layout (`md:col-span-2`).
- **Grid:** The subsequent "coming soon" or smaller projects are laid out in a 2-column grid (`grid-cols-1 md:grid-cols-2`) below the featured project.

**Card Design (`group`, `relative`, `border`):**

- Cards have a very subtle border (`border-text-ink/10`) and a semi-transparent white background to stand out slightly from the cream background (`bg-white/40`).
- **Typography:** Project title in Fraunces, description in DM Sans.
- **Tech Pills:** Similar to the About section, these are small, mono-spaced tags aligned at the bottom of the card.
- **Hover Interactions:**
  - Utilizing Tailwind's `group-hover` and `hover:` utilities.
  - The entire card translates up by 4px (`hover:-translate-y-1`).
  - The subtle border shifts to the terracotta accent color (`hover:border-accent-terracotta`).
  - GitHub and Live Link icons fade in slightly or change color on hover.

---

## 4. Work / Experience Section (`Experience.tsx`)

**Positioning & Sizing:**

- Standard content section (`py-24`).

**Layout Structure (Vertical Timeline):**

- Built using a left-aligned border line to simulate a timeline (`border-l-2 border-text-ink/10`).
- Each experience entry is a flex container offset to the right of the line (`pl-8 md:pl-12`, `relative`).
- **Timeline Dot:** An absolute positioned circle (`absolute -left-[9px] top-1 w-4 h-4 rounded-full`) sits exactly on the border line. For the "Upcoming" (UTwente) item, this dot might be styled differently (e.g., hollow or a different color) to indicate future status.

**Entry Details:**

- **Mobile vs Desktop:** On larger screens, the date/year is positioned distinctly from the role/company to maintain a clean reading line.
- **Badges:** Some entries contain specific pill badges.
  - The "International" badge uses the terracotta accent background for emphasis.
  - The "Upcoming" badge is more muted, using the `amber` or `sage` secondary colors, and italicized text.

---

## 5. Blog / Writing Section (`Blog.tsx`)

**Positioning & Sizing:**

- Standard content section (`py-24`).

**Layout Structure:**

- The most minimalist section. It is a simple, un-bordered vertical list of flex items.
- Each row (blog post) uses flexbox to align the date, title, and teaser.
- **Mobile:** Elements stack vertically within the row.
- **Desktop:** The layout mimics an editorial table of contents.
  - Left side: Date (or "Soon" in terracotta) in DM Sans.
  - Middle/Right side: Post title (Fraunces, slightly larger) and a one-line teaser description (DM Sans, muted text).

---

## 6. Footer / Contact Section (`Footer.tsx`)

**Positioning & Sizing:**

- Smaller vertical padding (`py-12`), centered text.

**Layout Structure:**

- **Heading:** "Say hi." in large Fraunces font, centered.
- **Social Links:** A horizontal flex container (`flex`, `justify-center`, `gap-8`). Links (GitHub, LinkedIn, Email) are styled cleanly without bulky buttons, featuring a simple underline or color shift on hover (`hover:text-accent-terracotta`).
- **Copyright:** A tiny `text-sm`, highly muted (`text-text-ink/40`) line at the very bottom center of the page.
