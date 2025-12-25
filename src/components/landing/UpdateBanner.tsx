"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UPDATES } from "@/lib/constants/updates";
import { usePortfolioStore } from "@/lib/stores/usePortfolioStore";
import { cn } from "@/lib/utils/cn";

/**
 * UpdateBanner Component
 * Displays scrolling updates from your resume/career
 * Auto-rotates every 2 seconds with left/right navigation
 */
export function UpdateBanner() {
  const {
    currentUpdateIndex,
    isAutoPlayingUpdates,
    setCurrentUpdateIndex,
    setAutoPlayingUpdates,
  } = usePortfolioStore();

  const [isHovering, setIsHovering] = useState(false);

  const currentUpdate = UPDATES[currentUpdateIndex];

  const handlePrevious = () => {
    setCurrentUpdateIndex(
      currentUpdateIndex === 0 ? UPDATES.length - 1 : currentUpdateIndex - 1
    );
    setAutoPlayingUpdates(false);
    setTimeout(() => setAutoPlayingUpdates(true), 5000); // Resume auto-play after 5 seconds
  };

  const handleNext = () => {
    setCurrentUpdateIndex(
      currentUpdateIndex === UPDATES.length - 1 ? 0 : currentUpdateIndex + 1
    );
    setAutoPlayingUpdates(false);
    setTimeout(() => setAutoPlayingUpdates(true), 5000); // Resume auto-play after 5 seconds
  };

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlayingUpdates || isHovering) return;

    const interval = setInterval(() => {
      setCurrentUpdateIndex(
        currentUpdateIndex === UPDATES.length - 1 ? 0 : currentUpdateIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentUpdateIndex, isAutoPlayingUpdates, isHovering, setCurrentUpdateIndex]);

  return (
    <div
      className={cn(
        "relative w-full bg-transparent border-b border-transparent",
        "px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-center"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between gap-4 w-full max-w-4xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className={cn(
            "flex-shrink-0 rounded-lg p-2 transition-all duration-200",
            "hover:bg-white/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            "text-slate-700 hover:text-blue-600"
          )}
          aria-label="Previous update"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Content - Text only with backdrop blur */}
        <div className="min-w-0 flex-1 overflow-hidden px-4 py-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUpdateIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center sm:text-left backdrop-blur-sm bg-white/10 rounded-lg px-3 py-2"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base whitespace-nowrap">
                {currentUpdate.title}
              </h3>
              <p className="hidden sm:block text-xs text-slate-600 sm:text-sm whitespace-nowrap">
                —
              </p>
              <p className="text-xs text-slate-600 sm:text-sm line-clamp-1">
                {currentUpdate.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className={cn(
            "flex-shrink-0 rounded-lg p-2 transition-all duration-200",
            "hover:bg-white/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            "text-slate-700 hover:text-blue-600"
          )}
          aria-label="Next update"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
}
