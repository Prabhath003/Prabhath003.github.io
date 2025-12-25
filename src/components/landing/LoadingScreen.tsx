"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface LoadingScreenProps {
  onComplete: () => void;
}

/**
 * LoadingScreen Component
 * Displays welcome message with neural network animation sequence
 * Transitions to main portfolio content
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "Welcome to\nPrabhath's Portfolio";
  const typingSpeed = 30; // milliseconds per character
  const initialDelay = 300;

  // Typing animation effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (charIndex > 0 && !isComplete) {
      setIsComplete(true);
    }
  }, [charIndex, fullText, typingSpeed, isComplete]);

  // Handle showing content after typing completes
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 0); // Instant transition to fade out
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        onComplete();
      }, 0); // Instant completion
      return () => clearTimeout(timer);
    }
  }, [showContent, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showContent ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      onAnimationComplete={() => {
        if (showContent) {
          // Component will be removed by parent
        }
      }}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 whitespace-pre-wrap">
          {displayedText}
          {!isComplete && (
            <span className="ml-1 inline-block h-8 w-1 animate-pulse bg-blue-600" />
          )}
        </h1>
      </motion.div>
    </motion.div>
  );
}
