"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UpdateBanner } from "@/components/landing/UpdateBanner";
import { IntroSection } from "@/components/landing/IntroSection";
import { ChatbotNavigation } from "@/components/landing/ChatbotNavigation";
import { NeuralNetworkBackground } from "@/components/landing/NeuralNetworkBackground";
import { LoadingScreen } from "@/components/landing/LoadingScreen";
import { Footer } from "@/components/layout/Footer";

/**
 * Landing Page
 * Main portfolio landing page with:
 * - Loading screen with welcome message
 * - Neural Network animated background
 * - Animated content reveal with typing effects
 * - Update banner at top (hidden in portrait on mobile, shows on scroll)
 * - Split view: Intro + Chatbot Navigation
 * - Footer with contacts and projects
 */
export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      // Portrait: height > width
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Initial check
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Banner visibility logic: hide in portrait initially, show when scrolling
  useEffect(() => {
    if (isPortrait) {
      // In portrait: show banner after scrolling down 100px
      setShowBanner(scrollY > 100);
    } else {
      // In landscape: always show banner
      setShowBanner(true);
    }
  }, [scrollY, isPortrait]);

  return (
    <div className="flex flex-col overflow-x-hidden bg-white text-slate-900">
      {/* Loading Screen */}
      <AnimatePresence>
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Content Area - At least viewport height, grows if content needs more space */}
      <main className="relative min-h-screen w-screen flex flex-col overflow-hidden lg:flex-row pt-20 sm:pt-16 lg:pt-0 lg:h-screen">
        {/* Neural Network Background - Only mounts after loading screen completes */}
        {loadingComplete && (
          <div className="absolute inset-0 z-0">
            <NeuralNetworkBackground />
          </div>
        )}

        {/* Content wrapper - Full viewport dimensions, centered */}
        <div className="relative z-10 flex h-full w-full flex-col lg:flex-row items-center justify-center">
          {/* Intro Section - Appears when zoom begins (6s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 6, duration: 0.5 }}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <IntroSection />
          </motion.div>

          {/* Chatbot Navigation - Appears when zoom begins (6s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 6, duration: 0.5 }}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <ChatbotNavigation />
          </motion.div>
        </div>
      </main>

      {/* Update Banner - Fixed overlay at top, appears when zoom begins (6s) */}
      {/* Hidden in portrait mode until scroll, always visible in landscape */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={loadingComplete && showBanner ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ delay: loadingComplete && !isPortrait ? 6 : 0, duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <UpdateBanner />
      </motion.div>

      {/* Footer - Below viewport, fades in when zoom begins (6s) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loadingComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 6, duration: 1.5 }}
        className="w-full"
      >
        <div className="h-32 lg:h-40"></div>
        <Footer />
      </motion.div>
    </div>
  );
}
