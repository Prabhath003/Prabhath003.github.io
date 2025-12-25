"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

/**
 * Experience Page
 * Professional experience and work history
 */
export default function ExperiencePage() {
  const experiences = [
    {
      role: "Founding ML Engineer",
      company: "GiKA.ai",
      period: "Present",
      description:
        "Building autonomous AI agents and advanced LLM systems. Designing and implementing novel architectures for complex problem-solving.",
      highlights: [
        "Architected agentic AI systems",
        "Developed LLM fine-tuning pipelines",
        "Optimized model performance and latency",
      ],
    },
    {
      role: "ML Engineer",
      company: "Previous Company",
      period: "2022 - Present",
      description:
        "Worked on machine learning infrastructure and model optimization. Developed production-ready ML systems.",
      highlights: [
        "Built data pipelines",
        "Optimized model inference",
        "Implemented monitoring systems",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout title="Professional Experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={cn(
              "border-l-4 border-blue-500 pl-6 py-4",
              "hover:bg-blue-50/50 transition-colors rounded-r-lg px-4"
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {exp.role}
                </h3>
                <p className="text-sm text-blue-600 font-semibold">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                {exp.period}
              </span>
            </div>

            <p className="text-slate-700 mb-4">{exp.description}</p>

            <ul className="space-y-1">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-slate-600">
                  • {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
