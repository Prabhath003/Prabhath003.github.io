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
    <div className="flex flex-col overflow-x-hidden bg-white text-slate-900">
      {/* Loading Screen */}
      <AnimatePresence>
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Content Area - Exactly viewport height and width */}
      <main className="relative h-screen w-screen flex flex-col overflow-hidden lg:flex-row">
        {/* Neural Network Background - Only mounts after loading screen completes */}
        {loadingComplete && (
          <div className="absolute inset-0 z-0">
            <NeuralNetworkBackground />
          </div>
        )}

        {/* Content wrapper - Full viewport dimensions, centered */}
        <div className="relative z-10 flex h-full w-full flex-col lg:flex-row items-center justify-center">
          {/* Intro Section - Appears after neural network animation completes (~12.5s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 13, duration: 0.5 }}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <IntroSection />
          </motion.div>

          {/* Chatbot Navigation - Appears after intro animations complete (~19s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 19, duration: 0.5 }}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <ChatbotNavigation />
          </motion.div>
        </div>
      </main>

      {/* Update Banner - Fixed overlay at top, appears with intro section (~13s) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ delay: 13.2, duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <UpdateBanner />
      </motion.div>

      {/* Footer - Below viewport, fades in during neural zoom phase (~12-14s) */}
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
