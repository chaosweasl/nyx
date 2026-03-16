import type { Project, ExperienceEntry, BlogPost } from "../types";

export const HERO_DATA = {
  name: "Jane Doe",
  role: "Full-stack developer · high school student · heading to UTwente",
  currently: [
    "building side projects",
    "reading about compilers",
    "incoming CS student",
  ],
};

export const ABOUT_DATA = {
  bio: [
    "I'm 18 and I've been building things on the internet since I was 14. What started as hacking together simple Discord bots evolved into a fascination with full-stack web architecture and systems programming.",
    "When I'm not writing code, you can probably find me tinkering with hardware, playing the guitar, or exploring new coffee shops in my area. I love blending technical depth with a bit of human touch."
  ],
  techStack: [
    "Next.js", "React", "Tailwind CSS", "TypeScript",
    "Supabase", "Vercel", "Tauri", "Electron", "Docker", "Figma"
  ],
  funFacts: [
    "Built my first PC at age 12",
    "Avid mechanical keyboard enthusiast",
    "Trying to learn Rust (and fighting the borrow checker)"
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
  },
  {
    id: "upcoming-1",
    title: "Algorithmic Sketchbook",
    description: "An interactive visualization tool for sorting algorithms and data structures.",
    tech: ["React", "Framer Motion", "TypeScript"],
    featured: false,
    comingSoon: true,
  },
  {
    id: "upcoming-2",
    title: "Tauri Markdown Editor",
    description: "A blazing fast desktop markdown editor built with web technologies.",
    tech: ["Tauri", "Rust", "React"],
    featured: false,
    comingSoon: true,
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
    teaser: "Thoughts on systems programming and building a solid foundation.",
    date: "Soon",
    comingSoon: true,
  },
  {
    title: "Building a portfolio that doesn't feel like a template",
    teaser: "A deep dive into design choices, typography, and letting personality show through code.",
    date: "Soon",
    comingSoon: true,
  }
];

export const CONTACT_DATA = {
  heading: "Say hi",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  email: "hello@example.com",
  copyright: `© ${new Date().getFullYear()} Jane Doe. Built with React & Tailwind.`
};
