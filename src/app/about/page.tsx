"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";

/**
 * About Page
 * Personal information and background
 */
export default function AboutPage() {
  return (
    <PageLayout title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">
            ML Research Engineer with expertise in <strong>LLM reasoning</strong>, <strong>Agentic AI systems</strong>, <strong>Knowledge Graphs</strong>, and <strong>RAG architectures</strong>. Specialized in fine-tuning Small Language Models and designing <strong>graph-augmented retrieval systems</strong> to reduce hallucinations and improve factual grounding.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Proven track record building <strong>scalable inference pipelines</strong>, <strong>autonomous agents</strong>, <strong>semantic search engines</strong>, and <strong>knowledge-aware retrieval systems</strong>. Currently a <strong>Founding ML Engineer at GiKA.ai</strong>, working on cutting-edge AI solutions that bridge advanced AI research with commercial applications.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            What I Do
          </h3>
          <ul className="text-slate-700 space-y-2">
            <li>• Build agentic AI systems with multi-step reasoning and planning capabilities</li>
            <li>• Fine-tune Small Language Models for knowledge-aware inference</li>
            <li>• Design RAG systems and knowledge graph-powered search engines</li>
            <li>• Optimize inference pipelines for production deployment</li>
            <li>• Develop voice AI agents with low-latency inference</li>
            <li>• Research and implement coreference resolution and entity linking</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            Education
          </h3>
          <p className="text-slate-700 leading-relaxed">
            <strong>B.Tech. in Computer Science and Engineering</strong> from <strong>Indian Institute of Technology, Hyderabad</strong> (2020-2024, Grade: 8.52) with a Minor in Entrepreneurship (Grade: 8.92).
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            Research & Recognition
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Published research on <strong>Multi-Object Segmented Arbitrary Stylization Using CLIP</strong> at ICCV Workshop 2023. JEE Advanced AIR 1689, JEE Mains AIR 2345. Passionate about advancing trustworthy, interpretable, and efficient AI systems.
          </p>
        </div>
      </motion.div>
    </PageLayout>
  );
}
