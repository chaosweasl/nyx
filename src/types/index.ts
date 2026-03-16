export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  comingSoon?: boolean;
}

export interface ExperienceEntry {
  year: string;
  role: string;
  organisation: string;
  description: string;
  tags?: string[];
  international?: boolean;
  upcoming?: boolean;
}

export interface BlogPost {
  title: string;
  teaser: string;
  date: string | "Soon";
  comingSoon?: boolean;
}
