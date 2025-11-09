export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface ChatOption {
    id: string;
    label: string;
    command: string;
    section?: string;
}

export type NavigationState = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'contact';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
}

export interface Skill {
    category: string;
    items: string[];
}