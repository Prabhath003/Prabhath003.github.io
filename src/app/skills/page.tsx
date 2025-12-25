"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

/**
 * Skills Page
 * Technical skills and expertise
 */
export default function SkillsPage() {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: [
        "LLM Fine-tuning",
        "RAG Systems",
        "Prompt Engineering",
        "Agent Architecture",
        "Knowledge Graphs",
      ],
    },
    {
      category: "Languages & Frameworks",
      skills: [
        "Python",
        "TypeScript",
        "React",
        "Next.js",
        "PyTorch",
        "TensorFlow",
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Langchain",
        "LlamaIndex",
        "FAISS",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      category: "Specialized Skills",
      skills: [
        "Voice AI",
        "Model Optimization",
        "Production Deployment",
        "API Design",
        "System Architecture",
      ],
    },
  ];

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
    <PageLayout title="Technical Skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.category} variants={itemVariants}>
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold",
                    "bg-gradient-to-r from-blue-100 to-purple-100",
                    "text-slate-900 border border-blue-200",
                    "hover:shadow-md transition-all"
                  )}
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
