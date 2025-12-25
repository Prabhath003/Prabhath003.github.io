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
      company: "Stealth Startup - GiKA.ai",
      period: "Jun 2024 - Present",
      description:
        "Building cutting-edge AI solutions bridging research and commerce. Leading development of agentic AI systems, LLM fine-tuning, and knowledge-aware reasoning platforms.",
      highlights: [
        "Developed in-house agentic framework supporting multi-step LLM reasoning, planning, and memory management",
        "Fine-tuned Small Language Models (LLaMA-3.1-8B, Gemma-2-9B) for knowledge graph-aware reasoning",
        "Built Voice AI Agent achieving sub-300ms latency with 90%+ intent accuracy across 1,500+ courses",
        "Engineered knowledge graph-powered semantic search engine for intent-based product discovery",
        "Implemented agentic JSON Builder autonomously populating 8,000+ fields with 95% manual effort reduction",
      ],
    },
    {
      role: "Innovation Research Intern",
      company: "OnePlus/Oppo(OPLUS) Mobiles India R&D",
      period: "Jan 2023 - Jun 2023",
      description:
        "Contributed to computer vision research and model optimization projects. Published research at ICCV'23 workshop.",
      highlights: [
        "Co-authored MOSAIC paper on Multi-Object Segmented Arbitrary Image Stylization (accepted at ICCV'23)",
        "Compressed Dumoulin-style CNN networks achieving 8x size reduction and 11x FLOPs optimization",
        "Developed ODASH debugging tool with full-stack web app and KNN search on log embeddings",
      ],
    },
    {
      role: "Research Assistant",
      company: "Indian Institute of Technology, Hyderabad",
      period: "2024",
      description:
        "Under Prof. Saketha Nath. Designed context-aware knowledge retrieval systems for QA applications.",
      highlights: [
        "Built RamayanaGPT: graph-based retrieval engine for knowledge-based question answering",
        "Linked database chunks via semantic entities to reduce LLM hallucinations",
      ],
    },
    {
      role: "AI Intern Trainee",
      company: "Personifwy",
      period: "Jan 2022 - Mar 2022",
      description:
        "End-to-end machine learning projects in image processing and NLP.",
      highlights: [
        "News classification using TensorFlow",
        "Handwritten digit recognition with CNNs",
        "Fashion object detection with OpenCV and scikit-learn",
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
