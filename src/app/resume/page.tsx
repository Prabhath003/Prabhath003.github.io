"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/**
 * Resume Page
 * Displays resume with embed, view, and download options
 */
export default function ResumePage() {
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

  const resumeUrl = "/Prabhath-ML-Research-Resume.pdf";
  const driveUrl =
    "https://drive.google.com/file/d/1ZIUgVMd9a9fQ9ma7R3hgoXDeVV1CAQwy/view?usp=sharing";

  return (
    <PageLayout title="My Resume">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 max-w-4xl mx-auto"
      >
        {/* Introduction */}
        <motion.div variants={itemVariants}>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Here's my professional resume highlighting my experience in ML
            research, AI development, and software engineering.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pb-6"
        >
          <a href={driveUrl} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold",
                "bg-blue-600 text-white hover:bg-blue-700 transition-all"
              )}
            >
              <ExternalLink size={18} />
              View on Google Drive
            </motion.button>
          </a>

          <a href={resumeUrl} download="Prabhath-ML-Research-Resume.pdf">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold",
                "bg-slate-200 text-slate-900 hover:bg-slate-300 transition-all"
              )}
            >
              <Download size={18} />
              Download PDF
            </motion.button>
          </a>
        </motion.div>

        {/* PDF Embed */}
        <motion.div variants={itemVariants} className="rounded-lg overflow-hidden border border-slate-200 shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "141.42%" }}>
            <iframe
              src={`https://drive.google.com/file/d/1ZIUgVMd9a9fQ9ma7R3hgoXDeVV1CAQwy/preview`}
              className="absolute inset-0 w-full h-full border-0"
              title="Prabhath ML Research Resume"
              allow="autoplay"
            ></iframe>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={itemVariants} className="pt-6">
          <p className="text-sm text-slate-600">
            💡 This resume is regularly updated with my latest projects,
            research, and accomplishments. For more details about specific
            projects or experiences, feel free to explore the other sections or
            get in touch!
          </p>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
