'use client';

import { motion } from 'framer-motion';
import { PROJECTS, EXPERIENCE, SKILLS, ABOUT_TEXT, CONTACT_INFO } from '@/lib/constants/chatData';
import { NavigationState } from '@/lib/types';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Briefcase, Code2 } from 'lucide-react';

interface ContentSectionProps {
    section: NavigationState;
}

export const ContentSection = ({ section }: ContentSectionProps) => {
    if (section === 'home') return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="px-8 py-8 max-w-7xl mx-auto"
        >
            {section === 'about' && <AboutSection />}
            {section === 'projects' && <ProjectsSection />}
            {section === 'experience' && <ExperienceSection />}
            {section === 'skills' && <SkillsSection />}
            {section === 'contact' && <ContactSection />}
        </motion.div>
    );
};

const AboutSection = () => (
    <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-purple-400">~/</span>about
        </h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {ABOUT_TEXT}
            </p>
        </div>
    </div>
);

const ProjectsSection = () => (
    <div>
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400">~/</span>projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all group"
                >
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Demo
                            </a>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const ExperienceSection = () => (
    <div>
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400">~/</span>experience
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
            {EXPERIENCE.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Briefcase className="w-4 h-4" />
                            {exp.duration}
                        </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                                <span className="text-purple-400 mt-1">•</span>
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const SkillsSection = () => (
    <div>
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400">~/</span>skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Code2 className="w-6 h-6 text-purple-400" />
                        <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const ContactSection = () => (
    <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400">~/</span>contact
        </h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <p className="text-gray-300 text-lg mb-8 text-center">
                Let's connect and build something amazing together!
            </p>

            <div className="space-y-4">
                <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all group border border-gray-700 hover:border-purple-500"
                >
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white group-hover:text-purple-400 transition-colors">{CONTACT_INFO.email}</p>
                    </div>
                </a>

                <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all group border border-gray-700 hover:border-purple-500"
                >
                    <Linkedin className="w-6 h-6 text-purple-400" />
                    <div>
                        <p className="text-sm text-gray-400">LinkedIn</p>
                        <p className="text-white group-hover:text-purple-400 transition-colors">Connect with me</p>
                    </div>
                </a>

                <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all group border border-gray-700 hover:border-purple-500"
                >
                    <Github className="w-6 h-6 text-purple-400" />
                    <div>
                        <p className="text-sm text-gray-400">GitHub</p>
                        <p className="text-white group-hover:text-purple-400 transition-colors">Check out my code</p>
                    </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-white">{CONTACT_INFO.location}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);