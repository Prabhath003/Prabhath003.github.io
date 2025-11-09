'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoBackgroundProps {
  isBlurred?: boolean;
}

export const VideoBackground = ({ isBlurred = false }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Detect when video is about to end (0.5 seconds before)
      if (video.duration - video.currentTime < 0.5) {
        setIsLooping(true);
      }
    };

    const handlePlay = () => {
      setIsLooping(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Video Container */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            isBlurred ? 'blur-2xl scale-110' : 'blur-0'
          }`}
        >
          <source src="/videos/rotatingEarth.mp4" type="video/mp4" />
        </video>

        {/* Fade overlay during loop transition */}
        <AnimatePresence>
          {isLooping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black"
            />
          )}
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/40 transition-opacity duration-1000 ${
          isBlurred ? 'opacity-90' : 'opacity-50'
        }`} />
      </div>
    </div>
  );
};