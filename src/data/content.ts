import type { Project, ExperienceEntry, BlogPost } from "../types";

export const HERO_DATA = {
  name: "Jane Doe",
  role: "Full-stack developer",
  context: "High school · heading to UTwente",
  currently: [
    "building side projects",
    "reading about compilers",
    "incoming CS student",
  ],
};

export const ABOUT_DATA = {
  bio: [
    "I've been breaking things on the internet since I was about 14. At some point I started fixing them too.",
    "I'm an 18-year-old developer obsessed with building fast, human-centric software. I spend most of my time wrangling React and diving deep into full-stack architecture.",
    "When I'm not writing code, I'm probably tweaking my mechanical keyboard, trying to learn Rust, or exploring local coffee shops."
  ],
  techStack: [
    ["Next.js", "React", "Tailwind CSS"], // Frontend
    ["Supabase", "Node.js", "PostgreSQL"], // Backend
    ["TypeScript", "Docker", "Vercel", "Figma"] // Tooling/Other
  ],
  funFacts: [
    "Built my first PC at age 12",
    "Avid mechanical keyboard enthusiast",
    "Currently fighting the Rust borrow checker"
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "featured-1",
    title: "Project Nova",
    description: "A comprehensive dashboard for managing local school events and resources, built with real-time updates.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    numeral: "01",
  },
  {
    id: "upcoming-1",
    title: "Algorithmic Sketchbook",
    description: "An interactive visualization tool for sorting algorithms and data structures.",
    tech: ["React", "Framer Motion", "TypeScript"],
    featured: false,
    comingSoon: true,
    numeral: "02",
  },
  {
    id: "upcoming-2",
    title: "Tauri Markdown Editor",
    description: "A blazing fast desktop markdown editor built with web technologies.",
    tech: ["Tauri", "Rust", "React"],
    featured: false,
    comingSoon: true,
    numeral: "03",
  }
];

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    year: "2025",
    role: "BSc Computer Science",
    organisation: "University of Twente",
    description: "Beginning formal studies in computer science, focusing on software engineering and systems design.",
    upcoming: true,
    tags: ["Incoming · Sept 2025"]
  },
  {
    year: "2024",
    role: "VET ERASMUS Internship",
    organisation: "Tech Startup (Spain)",
    description: "Completed a 3-month internship building full-stack web applications and collaborating with an international team.",
    extraDetail: "Worked and lived in Spain for the duration of the programme.",
    international: true,
    tags: ["Frontend", "Teamwork"]
  },
  {
    year: "2023",
    role: "Freelance Web Developer",
    organisation: "Self-Employed",
    description: "Designed and developed bespoke websites for local businesses using React and modern CSS frameworks.",
    tags: ["Freelance", "Design"]
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    title: "Why I'm learning Rust before college",
    category: "reflection",
    teaser: "Thoughts on systems programming and building a solid foundation.",
    date: "Soon",
    comingSoon: true,
  },
  {
    title: "Building a portfolio that doesn't feel like a template",
    category: "dev",
    teaser: "A deep dive into design choices, typography, and letting personality show through code.",
    date: "Soon",
    comingSoon: true,
  }
];

export const CONTACT_DATA = {
  heading: "Say hi.",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  email: "hello@example.com",
  copyright: `Built with React, Vite & Tailwind · © ${new Date().getFullYear()}`
};
