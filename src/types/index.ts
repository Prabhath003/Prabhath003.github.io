// Portfolio Types

export interface Update {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  link?: string;
}

export interface NavItem {
  id: string;
  label: string;
  question: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}
