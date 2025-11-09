import { Message } from '@/lib/types';
import {
    CHAT_OPTIONS,
    PROJECTS,
    EXPERIENCE,
    SKILLS,
    ABOUT_TEXT,
    CONTACT_INFO
} from '@/lib/constants/chatData';

export const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();

    // Command-based responses
    if (message === '/about' || message.includes('about') || message.includes('who are you')) {
        return ABOUT_TEXT;
    }

    if (message === '/projects' || message.includes('project')) {
        return formatProjects();
    }

    if (message === '/experience' || message.includes('experience') || message.includes('work')) {
        return formatExperience();
    }

    if (message === '/skills' || message.includes('skill') || message.includes('tech')) {
        return formatSkills();
    }

    if (message === '/contact' || message.includes('contact') || message.includes('reach')) {
        return formatContact();
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return `Hey there! 👋 I'm an ML Engineer specializing in GenAI and deep learning. What would you like to know about me?\n\nTry asking:\n${CHAT_OPTIONS.map(opt => `• ${opt.label}`).join('\n')}`;
    }

    // Default response with suggestions
    return `I'm not sure about that. Here's what you can ask me:\n\n${CHAT_OPTIONS.map(opt => `• ${opt.label}`).join('\n')}`;
};

const formatProjects = (): string => {
    let response = "Here are some of my key projects:\n\n";

    PROJECTS.forEach((project, index) => {
        response += `**${index + 1}. ${project.title}**\n`;
        response += `${project.description}\n`;
        response += `Tech Stack: ${project.technologies.join(', ')}\n\n`;
    });

    return response;
};

const formatExperience = (): string => {
    let response = "My professional experience:\n\n";

    EXPERIENCE.forEach((exp, index) => {
        response += `**${exp.role}** @ ${exp.company}\n`;
        response += `${exp.duration}\n\n`;
        exp.description.forEach(desc => {
            response += `• ${desc}\n`;
        });
        response += `\nTechnologies: ${exp.technologies.join(', ')}\n\n`;
    });

    return response;
};

const formatSkills = (): string => {
    let response = "My technical skillset:\n\n";

    SKILLS.forEach(skill => {
        response += `**${skill.category}**\n`;
        response += `${skill.items.join(' • ')}\n\n`;
    });

    return response;
};

const formatContact = (): string => {
    return `Let's connect! 🚀\n\n` +
        `📧 Email: ${CONTACT_INFO.email}\n` +
        `💼 LinkedIn: ${CONTACT_INFO.linkedin}\n` +
        `🐙 GitHub: ${CONTACT_INFO.github}\n` +
        `📍 Location: ${CONTACT_INFO.location}`;
};

export const getTypingDelay = (text: string): number => {
    // Simulate realistic typing delay based on text length
    const baseDelay = 500;
    const charDelay = text.length * 10;
    return Math.min(baseDelay + charDelay, 2000); // Max 2 seconds
};
