"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Code2,
  BookOpen,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants/contact";
import { PROJECTS } from "@/lib/constants/projects";
import { BLOGS } from "@/lib/constants/blogs";
import { cn } from "@/lib/utils/cn";

/**
 * Footer Component
 * Displays contact information, featured projects, and blog titles
 * Located at the bottom of the page (requires scrolling to view)
 */
export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${CONTACT_INFO.email}`,
      color: "hover:text-red-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: CONTACT_INFO.linkedin,
      color: "hover:text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      href: CONTACT_INFO.github,
      color: "hover:text-slate-900",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: CONTACT_INFO.twitter || "#",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <footer className={cn("bg-gradient-to-b from-slate-50 to-slate-100", "border-t border-slate-200")}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="grid gap-12 md:grid-cols-3">
          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Get In Touch</h3>
              <p className="mt-2 text-sm text-slate-600">
                Let's collaborate on AI and ML projects that make a real impact.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                    "bg-white border border-slate-200 transition-all duration-200",
                    "hover:shadow-md",
                    social.color
                  )}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Email highlight */}
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="mt-1 break-all text-sm font-semibold text-blue-600 hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 size={20} className="text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Featured Projects</h3>
            </div>
            <ul className="space-y-2">
              {PROJECTS.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <a
                    href={project.link || "#"}
                    className="group flex items-start gap-2 text-sm transition-colors duration-200 hover:text-purple-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400 group-hover:bg-purple-600" />
                    <span className="leading-relaxed text-slate-700 group-hover:text-purple-600">
                      {project.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/projects"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-purple-600",
                "hover:gap-3 transition-all duration-200"
              )}
            >
              View all projects
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Latest Blog Titles */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-cyan-600" />
              <h3 className="text-lg font-bold text-slate-900">Latest Articles</h3>
            </div>
            <ul className="space-y-2">
              {BLOGS.slice(0, 5).map((blog) => (
                <li key={blog.id}>
                  <a
                    href={blog.link || "#"}
                    className="group flex items-start gap-2 text-sm transition-colors duration-200 hover:text-cyan-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 group-hover:bg-cyan-600" />
                    <span className="leading-relaxed text-slate-700 group-hover:text-cyan-600">
                      {blog.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/blog"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-cyan-600",
                "hover:gap-3 transition-all duration-200"
              )}
            >
              Read all articles
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200" />

        {/* Bottom */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} ML Engineer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
