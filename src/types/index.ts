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
  github?: string;
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
  phone: string;
  linkedin: string;
  github: string;
  twitter?: string;
  calendly: string;
}
