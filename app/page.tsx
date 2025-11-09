'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/hero/HeroSection';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { ContentSection } from '@/components/sections/ContentSection';
import { VideoBackground } from '@/components/VideoBackground';
import { useChatStore } from '@/lib/stores/useChatStore';

export default function Home() {
  const { currentSection, messages } = useChatStore();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (messages.length > 1) {
      setShowContent(true);
    }
  }, [messages]);

  return (
    <main className="min-h-screen text-white relative">
      {/* Video Background - Clear on landing, Blurred on content */}
      <VideoBackground isBlurred={showContent} />

      <AnimatePresence mode="wait">
        {!showContent ? (
          /* Initial Landing Page - HERO LEFT, CHAT RIGHT */
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen relative z-10"
          >
            {/* Responsive padding and gap */}
            <div className="h-screen flex items-center px-8 xl:px-12 2xl:px-20 py-8">
              <div className="w-full max-w-[1100px] xl:max-w-[1300px] 2xl:max-w-[1400px] mx-auto flex items-center justify-between gap-6 xl:gap-10 2xl:gap-26">
                {/* LEFT: HERO - Gets bigger on larger screens */}
                <div className="flex-1 max-w-[550px] xl:max-w-[650px] 2xl:max-w-[700px]">
                  <HeroSection />
                </div>

                {/* RIGHT: CHAT - Gets bigger on larger screens */}
                <div className="w-[420px] xl:w-[500px] 2xl:w-[580px] flex-shrink-0">
                  <ChatInterface />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Content View */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative z-10"
          >
            <ChatInterface isNavMode />
            <div className="pt-24 pb-12">
              <AnimatePresence mode="wait">
                <ContentSection section={currentSection} />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}