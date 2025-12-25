"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { NavigationSuggestions } from "@/components/ui/NavigationSuggestions";
import { cn } from "@/lib/utils/cn";

interface PageChatNavigationProps {
  question: string;
}

/**
 * PageChatNavigation Component
 * Overlay chat-style navigation for portfolio pages
 * Features:
 * - Static question display
 * - Dropdown navigation suggestions on hover
 * - Chat interface with send button
 */
export function PageChatNavigation({ question }: PageChatNavigationProps) {
  const [isShowingSuggestions, setShowingSuggestions] = useState(false);

  const handleSuggestionClick = () => {
    setShowingSuggestions(false);
  };

  const handleSendClick = () => {
    setShowingSuggestions(false);
  };

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50">
      <div
        className="relative"
        onMouseEnter={() => setShowingSuggestions(true)}
        onMouseLeave={() => setShowingSuggestions(false)}
      >
        {/* Chat-style input box - wider minimum width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all duration-200",
            "px-5 py-3 sm:px-6 sm:py-4 w-full min-w-[400px] max-w-2xl",
            isShowingSuggestions
              ? "border-blue-400 shadow-xl"
              : "border-slate-300 hover:border-slate-400 shadow-lg"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Question text - static, no animation */}
            <p className="text-xs sm:text-sm text-slate-700 flex-1 line-clamp-2">
              {question}
            </p>

            {/* Send button - fixed on the right */}
            <button
              onClick={handleSendClick}
              className={cn(
                "flex-shrink-0 p-2 rounded-lg transition-all duration-200",
                "hover:bg-blue-50",
                isShowingSuggestions
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-400 hover:text-blue-600"
              )}
              title="Explore"
            >
              <Send size={16} />
            </button>
          </div>
        </motion.div>

        {/* Navigation suggestions dropdown */}
        <NavigationSuggestions
          isOpen={isShowingSuggestions}
          onSelect={handleSuggestionClick}
          className="top-full left-1/2 -translate-x-1/2 mt-2"
        />
      </div>
    </div>
  );
}
