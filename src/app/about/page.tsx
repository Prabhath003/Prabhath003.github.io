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
            I'm a Machine Learning Engineer with a passion for building intelligent systems and autonomous AI agents. My expertise spans LLM systems, agentic AI, and knowledge graphs.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            With experience as a Founding ML Engineer at GiKA.ai, I've worked on cutting-edge AI solutions that leverage advanced ML techniques to solve real-world problems.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            What I Do
          </h3>
          <ul className="text-slate-700 space-y-2">
            <li>• Build and optimize LLM-based systems</li>
            <li>• Design autonomous AI agents for complex tasks</li>
            <li>• Develop knowledge graph solutions</li>
            <li>• Fine-tune models for specific applications</li>
            <li>• Implement voice AI and conversational interfaces</li>
            <li>• Optimize models for production deployment</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            My Journey
          </h3>
          <p className="text-slate-700 leading-relaxed">
            I'm passionate about pushing the boundaries of what's possible with AI. Whether it's developing novel architectures or optimizing existing systems, I focus on creating solutions that have real impact.
          </p>
        </div>
      </motion.div>
    </PageLayout>
  );
}
