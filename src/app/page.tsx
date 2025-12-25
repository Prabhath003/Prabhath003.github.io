"use client";

import { useState } from "react";
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
 * - Update banner at top
 * - Split view: Intro + Chatbot Navigation
 * - Footer with contacts and projects
 */
export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Loading Screen */}
      <AnimatePresence>
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Content Area - Full viewport height, with padding to account for fixed banner */}
      <main className="relative flex flex-1 flex-col overflow-hidden lg:flex-row pt-24 lg:pt-32">
        {/* Neural Network Background - Only mounts after loading screen completes */}
        {loadingComplete && (
          <div className="absolute inset-0 z-0 top-16 lg:top-24">
            <NeuralNetworkBackground />
          </div>
        )}

        {/* Content wrapper - centered perfectly */}
        <div className="relative z-10 flex flex-1 flex-col lg:flex-row items-center justify-center w-full h-full">
          {/* Intro Section - Appears after neural network animation completes (~12.5s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 13, duration: 0.5 }}
            className="flex flex-1 flex-col w-full h-full items-center justify-center"
          >
            <IntroSection />
          </motion.div>

          {/* Chatbot Navigation - Appears after intro animations complete (~19s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 19, duration: 0.5 }}
            className="flex flex-1 flex-col w-full h-full items-center justify-center"
          >
            <ChatbotNavigation />
          </motion.div>
        </div>
      </main>

      {/* Update Banner - Appears with intro section (~13s) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ delay: 13.2, duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <UpdateBanner />
      </motion.div>

      {/* Footer - Fades in during neural zoom phase (~12-14s) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loadingComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 12, duration: 1.5 }}
        className="w-full"
      >
        <div className="h-32 lg:h-40"></div>
        <Footer />
      </motion.div>
    </div>
  );
}
