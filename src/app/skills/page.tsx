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
      category: "Programming Languages",
      skills: [
        "Python",
        "C++",
        "Java",
        "JavaScript",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Flask",
        "Celery",
        "OpenCV",
        "FastAPI",
        "LangChain",
        "Hugging Face",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "Docker",
        "pgAdmin4",
        "Android Studio",
        "OpenSearch",
        "Neo4j",
        "Playwright",
        "MongoDB",
        "Linux Shell Scripting",
      ],
    },
    {
      category: "Specialized ML Skills",
      skills: [
        "LLM Fine-tuning",
        "Retrieval-Augmented Generation (RAG)",
        "Knowledge Graphs",
        "Agentic AI",
        "vLLM",
        "BitsAndBytes",
        "Prompt Engineering",
      ],
    },
    {
      category: "ML Specializations",
      skills: [
        "Model Optimization",
        "Inference Pipeline Design",
        "Entity Linking",
        "Coreference Resolution",
        "Semantic Search",
        "Vector Databases",
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
