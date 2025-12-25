"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Zap } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { NavigationSuggestions } from "@/components/ui/NavigationSuggestions";
import { usePortfolioStore } from "@/lib/stores/usePortfolioStore";
import { cn } from "@/lib/utils/cn";

/**
 * ChatbotNavigation Component
 * Displays an interactive chatbot-style interface for navigation
 * Features:
 * - Simulated typing of questions
 * - Hover to show suggestions
 * - Click suggestions to navigate
 */
export function ChatbotNavigation() {
  const {
    isShowingSuggestions,
    setShowingSuggestions,
    currentTypedQuestion,
    setCurrentTypedQuestion,
  } = usePortfolioStore();

  const [displayedText, setDisplayedText] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const questions = NAV_ITEMS.map((item) => item.question);
  const currentQuestion = questions[currentQuestionIndex];

  // Typing animation
  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setCharIndex(0);
        setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
      }, 3000); // Pause before next question
      return () => clearTimeout(timer);
    }

    if (charIndex < currentQuestion.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentQuestion[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, isTyping, currentQuestion, questions.length]);

  // Update store with current typed question
  useEffect(() => {
    setCurrentTypedQuestion(displayedText);
  }, [displayedText, setCurrentTypedQuestion]);

  // Reset displayed text when question changes
  useEffect(() => {
    setDisplayedText("");
    setCharIndex(0);
  }, [currentQuestion]);

  const handleSuggestionClick = (href: string) => {
    setShowingSuggestions(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "backdrop-blur-sm bg-white/8 rounded-lg",
        "relative flex flex-col justify-center gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
        "w-full max-w-lg"
      )}
    >
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-yellow-500" />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-600">
            Interactive Assistant
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          Ask me anything about my background, projects, or skills
        </p>
      </div>

      {/* Chat-like input area with dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setShowingSuggestions(true)}
        onMouseLeave={() => setShowingSuggestions(false)}
      >
        <div
          className={cn(
            "rounded-lg border-2 border-white/30 bg-gray-50 p-4 transition-all duration-200",
            isShowingSuggestions && "border-blue-400 shadow-lg"
          )}
        >
          {/* Typed question */}
          <div className="min-h-12">
            <p className="text-base text-slate-700 sm:text-lg">
              {displayedText}
              {isTyping && (
                <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-blue-600" />
              )}
            </p>
          </div>

          {/* Send button */}
          <div className="mt-4 flex justify-end">
            <button
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-all duration-200",
                "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              )}
            >
              <span className="hidden sm:inline">Explore</span>
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Suggestions dropdown */}
        <NavigationSuggestions
          isOpen={isShowingSuggestions}
          onSelect={handleSuggestionClick}
          className="top-full -mt-2"
        />
      </div>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-3 text-center text-xs sm:text-sm"
      >
        <div className="rounded-lg bg-blue-500/5 border border-blue-300/30 p-3 sm:p-4">
          <div className="font-bold text-blue-600">8+</div>
          <div className="text-slate-700 text-xs">ML Projects</div>
        </div>
        <div className="rounded-lg bg-purple-500/5 border border-purple-300/30 p-3 sm:p-4">
          <div className="font-bold text-purple-600">1500+</div>
          <div className="text-slate-700 text-xs">Courses Served</div>
        </div>
        <div className="rounded-lg bg-cyan-500/5 border border-cyan-300/30 p-3 sm:p-4">
          <div className="font-bold text-cyan-600">&lt;300ms</div>
          <div className="text-slate-700 text-xs">Latency</div>
        </div>
      </motion.div>

      {/* Bottom hint */}
      <AnimatePresence>
        {!isShowingSuggestions && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-xs text-slate-500"
          >
            ✨ Hover to see suggestions
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
