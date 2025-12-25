"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PROJECTS } from "@/lib/constants/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/**
 * Projects Page
 * Displays all portfolio projects
 */
export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout title="My Projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={cn(
              "rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 hover:shadow-lg transition-all",
              "hover:border-blue-400"
            )}
          >
            <div className="flex flex-col gap-4">
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </div>

              {/* Tags/Technologies */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3 pt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-semibold",
                      "text-blue-600 hover:text-blue-700 transition-colors"
                    )}
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-semibold",
                      "text-slate-700 hover:text-slate-900 transition-colors"
                    )}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
