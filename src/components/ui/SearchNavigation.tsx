"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

interface SearchNavigationProps {
  title: string;
}

/**
 * SearchNavigation Component
 * Single-line search/navigation bar for portfolio pages
 * Allows navigation between sections
 */
export function SearchNavigation({ title }: SearchNavigationProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleNavClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h1>

      {/* Search/Navigation Bar */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 transition-all",
            searchOpen && "border-blue-400 bg-white shadow-lg"
          )}
          onClick={() => setSearchOpen(true)}
          onBlur={() => setSearchOpen(false)}
        >
          <Search size={18} className="text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search or navigate..."
            className="flex-1 bg-transparent text-sm outline-none placeholder-slate-500"
            onFocus={() => setSearchOpen(true)}
          />
        </motion.div>

        {/* Navigation Suggestions Dropdown */}
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "absolute top-full left-0 right-0 mt-2 rounded-xl bg-white border border-slate-200 shadow-lg p-3",
              "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 z-50"
            )}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-xs sm:text-sm px-3 py-2 rounded-lg transition-all",
                  "hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-medium",
                  "border border-transparent hover:border-blue-200"
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
