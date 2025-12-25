"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { UpdateBanner } from "@/components/landing/UpdateBanner";
import { Footer } from "@/components/layout/Footer";
import { PageChatNavigation } from "@/components/ui/PageChatNavigation";
import { getPageQuestion } from "@/lib/utils/navigation";
import { cn } from "@/lib/utils/cn";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

/**
 * PageLayout Component
 * Shared layout for all portfolio pages
 * Includes: Banner, Chat Navigation, Content Area, Footer
 */
export function PageLayout({ title, children }: PageLayoutProps) {
  const pathname = usePathname();
  const question = getPageQuestion(pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <UpdateBanner />
      </div>

      {/* Home Button - Top left corner */}
      <Link href="/">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-white/90 border border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300 transition-all"
          title="Back to Home"
        >
          <Home size={20} className="text-slate-700" />
        </motion.button>
      </Link>

      {/* Chat Navigation - Fixed overlay below banner */}
      <PageChatNavigation question={question} />

      {/* Main Content Area with padding for banner */}
      <main className="flex-1 pt-24 lg:pt-32">
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
