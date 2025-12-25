"use client";

import { motion } from "framer-motion";
import { UpdateBanner } from "@/components/landing/UpdateBanner";
import { Footer } from "@/components/layout/Footer";
import { SearchNavigation } from "@/components/ui/SearchNavigation";
import { cn } from "@/lib/utils/cn";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

/**
 * PageLayout Component
 * Shared layout for all portfolio pages
 * Includes: Banner, Search Navigation, Content Area, Footer
 */
export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <UpdateBanner />
      </div>

      {/* Main Content Area with padding for banner */}
      <main className="flex-1 pt-24 lg:pt-32">
        {/* Search Navigation - Single line with circular edges */}
        <div className="sticky top-24 lg:top-32 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SearchNavigation title={title} />
          </div>
        </div>

        {/* Content Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "rounded-2xl backdrop-blur-sm bg-white/50 border border-slate-200",
              "p-6 sm:p-8 lg:p-12 min-h-96"
            )}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
