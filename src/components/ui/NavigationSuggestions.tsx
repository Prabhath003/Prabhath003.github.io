"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

interface NavigationSuggestionsProps {
  isOpen: boolean;
  onSelect?: (href: string) => void;
  className?: string;
}

/**
 * NavigationSuggestions Component
 * Displays navigation suggestions in a dropdown format
 * Shows question-based navigation items
 */
export function NavigationSuggestions({
  isOpen,
  onSelect,
  className = "",
}: NavigationSuggestionsProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        "absolute left-0 right-0 w-full rounded-lg border border-white/40 bg-white/30 backdrop-blur-md p-3 shadow-lg",
        "max-h-80 overflow-y-auto",
        className
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Suggestions
      </p>
      <div className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Link href={item.href}>
              <button
                onClick={() => onSelect?.(item.href)}
                className={cn(
                  "w-full rounded-md px-3 py-2 text-left text-sm transition-all",
                  "text-slate-700 hover:bg-blue-50 hover:text-blue-600",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                )}
              >
                <span className="font-medium">{item.question}</span>
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
