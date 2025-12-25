import { NavItem } from "@/types";

/**
 * Navigation Items - Used in the chatbot-style navigation component
 * These questions guide visitors to different sections of your portfolio
 */
export const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    question: "Take me to your home page",
    href: "/",
  },
  {
    id: "about",
    label: "About Me",
    question: "Tell me more about yourself",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    question: "Show me your projects",
    href: "/projects",
  },
  {
    id: "experience",
    label: "Experience",
    question: "What's your professional experience?",
    href: "/experience",
  },
  {
    id: "skills",
    label: "Skills",
    question: "What are your technical skills?",
    href: "/skills",
  },
  {
    id: "contact",
    label: "Contact",
    question: "How can I reach you?",
    href: "/contact",
  },
  {
    id: "resume",
    label: "Resume",
    question: "Show me your resume",
    href: "/resume",
  },
];
