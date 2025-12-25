"use client";

import { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

/**
 * IntroSection Component
 * Displays your introduction and tagline with optional profile image
 * Content is pulled from your resume and optimized for lasting impact
 * Uses typewriter effects for text elements (30ms speed matching chat component)
 */
export function IntroSection() {
  const [showImage, setShowImage] = useState(false);
  const typingSpeed = 30; // milliseconds per character

  // Typewriter state for each text element
  const [mainHeadingText, setMainHeadingText] = useState("");
  const [mainHeadingIdx, setMainHeadingIdx] = useState(0);
  const [mainHeadingComplete, setMainHeadingComplete] = useState(false);

  const [nameTextDisplay, setNameTextDisplay] = useState("");
  const [nameTextIdx, setNameTextIdx] = useState(0);
  const [nameTextComplete, setNameTextComplete] = useState(false);

  const [roleTextDisplay, setRoleTextDisplay] = useState("");
  const [roleTextIdx, setRoleTextIdx] = useState(0);
  const [roleTextComplete, setRoleTextComplete] = useState(false);

  const [taglineTextDisplay, setTaglineTextDisplay] = useState("");
  const [taglineTextIdx, setTaglineTextIdx] = useState(0);
  const [taglineTextComplete, setTaglineTextComplete] = useState(false);

  const [introTextDisplay, setIntroTextDisplay] = useState("");
  const [introTextIdx, setIntroTextIdx] = useState(0);
  const [introTextComplete, setIntroTextComplete] = useState(false);

  const texts = {
    mainHeading: "Building Intelligence",
    nameText: "Prabhath Chellingi",
    roleText: "Machine Learning Engineer",
    taglineText: "LLM Systems • Agentic AI • Knowledge Graphs",
    introText: "Founding ML Engineer at GiKA.ai, building autonomous AI agents",
  };

  // Main heading typing effect
  useEffect(() => {
    if (mainHeadingIdx < texts.mainHeading.length) {
      const timer = setTimeout(() => {
        setMainHeadingText((prev) => prev + texts.mainHeading[mainHeadingIdx]);
        setMainHeadingIdx((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (mainHeadingIdx > 0 && !mainHeadingComplete) {
      setMainHeadingComplete(true);
    }
  }, [mainHeadingIdx, mainHeadingComplete]);

  // Name text typing effect (starts after 300ms)
  useEffect(() => {
    if (!mainHeadingComplete) return;
    if (nameTextIdx < texts.nameText.length) {
      const timer = setTimeout(() => {
        setNameTextDisplay((prev) => prev + texts.nameText[nameTextIdx]);
        setNameTextIdx((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (nameTextIdx > 0 && !nameTextComplete) {
      setNameTextComplete(true);
    }
  }, [nameTextIdx, mainHeadingComplete, nameTextComplete]);

  // Role text typing effect (starts after name completes)
  useEffect(() => {
    if (!nameTextComplete) return;
    if (roleTextIdx < texts.roleText.length) {
      const timer = setTimeout(() => {
        setRoleTextDisplay((prev) => prev + texts.roleText[roleTextIdx]);
        setRoleTextIdx((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (roleTextIdx > 0 && !roleTextComplete) {
      setRoleTextComplete(true);
    }
  }, [roleTextIdx, nameTextComplete, roleTextComplete]);

  // Tagline text typing effect (starts after role completes)
  useEffect(() => {
    if (!roleTextComplete) return;
    if (taglineTextIdx < texts.taglineText.length) {
      const timer = setTimeout(() => {
        setTaglineTextDisplay((prev) => prev + texts.taglineText[taglineTextIdx]);
        setTaglineTextIdx((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (taglineTextIdx > 0 && !taglineTextComplete) {
      setTaglineTextComplete(true);
    }
  }, [taglineTextIdx, roleTextComplete, taglineTextComplete]);

  // Intro text typing effect (starts after tagline completes)
  useEffect(() => {
    if (!taglineTextComplete) return;
    if (introTextIdx < texts.introText.length) {
      const timer = setTimeout(() => {
        setIntroTextDisplay((prev) => prev + texts.introText[introTextIdx]);
        setIntroTextIdx((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (introTextIdx > 0 && !introTextComplete) {
      setIntroTextComplete(true);
    }
  }, [introTextIdx, taglineTextComplete, introTextComplete]);

  // Show image when name starts typing
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // Increased delay between each child element
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "backdrop-blur-sm bg-white/8 rounded-lg",
        "flex flex-col justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
        "w-full max-w-lg"
      )}
    >
      {/* Main Heading */}
      <motion.div variants={itemVariants} className="w-full text-left">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl min-h-[2em]">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            {mainHeadingText}
            {!mainHeadingComplete && (
              <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-blue-600" />
            )}
          </span>
        </h1>
      </motion.div>

      {/* Name with Image - Side by side */}
      <motion.div variants={itemVariants} className="flex items-center justify-start gap-4 w-full">
        {/* Profile Image - Small and subtle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showImage ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="h-20 w-20 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-cyan-200 overflow-hidden border-2 border-white/40 shadow-lg flex items-center justify-center"
        >
          {/* Image placeholder - User can replace with actual image */}
          <img
            src="/profile.png"
            alt="Prabhath Chellingi"
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              const elem = e.currentTarget.parentElement;
              if (elem) {
                elem.innerHTML = '<div className="text-3xl">👨‍💻</div>';
              }
            }}
          />
        </motion.div>

        {/* Name Text */}
        <div className="flex flex-col min-h-[4em]">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {nameTextDisplay}
              {!nameTextComplete && (
                <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-blue-600" />
              )}
            </span>
          </h2>
          <p className="text-xl font-bold text-cyan-600 sm:text-2xl">
            Portfolio
          </p>
        </div>
      </motion.div>

      {/* Title/Role */}
      <motion.div variants={itemVariants} className="w-full text-left min-h-[2em]">
        <h3 className="text-lg font-semibold text-slate-700 sm:text-xl">
          {roleTextDisplay}
          {!roleTextComplete && (
            <span className="ml-1 inline-block h-5 w-1 animate-pulse bg-blue-600" />
          )}
        </h3>
      </motion.div>

      {/* Tagline */}
      <motion.p variants={itemVariants} className="text-sm text-slate-600 sm:text-base w-full text-left min-h-[2em]">
        {taglineTextDisplay}
        {!taglineTextComplete && (
          <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-blue-600" />
        )}
      </motion.p>

      {/* Brief Introduction */}
      <motion.div variants={itemVariants} className="space-y-0 min-h-[4em] w-full text-left">
        <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
          {introTextDisplay}
          {!introTextComplete && (
            <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-blue-600" />
          )}
        </p>
        <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
          LLM fine-tuning • Knowledge graphs • Voice AI • Model optimization
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div variants={itemVariants} className="flex gap-3 pt-2 w-full justify-start">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold",
              "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
              "hover:shadow-lg transition-all duration-200"
            )}>
            My Work
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold",
              "bg-transparent text-slate-700 border border-slate-400",
              "hover:border-slate-600 hover:shadow-md transition-all duration-200"
            )}>
            Contact
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
