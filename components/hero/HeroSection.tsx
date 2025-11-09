'use client';

import { motion } from 'framer-motion';
import { Terminal, Sparkles, Cpu, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="w-full mx-auto">
      {/* Enhanced backdrop blur - no border */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-black/50 backdrop-blur-5xl rounded-3xl p-8 xl:p-10 2xl:p-12 shadow-2xl shadow-black/50"
      >
        <div className="text-left">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 xl:mb-10 2xl:mb-12 relative inline-block"
          >
            <div className="w-28 h-28 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 p-[3px] rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <Cpu className="w-14 h-14 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 text-purple-300" />
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 bg-green-500 text-black px-3 py-1.5 xl:px-3.5 xl:py-1.5 2xl:px-4 2xl:py-2 rounded-full text-xs xl:text-xs 2xl:text-sm font-bold flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" />
              Available
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold mb-5 xl:mb-7 2xl:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Building Intelligence,
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                One Model at a Time
              </span>
            </h1>
            
            <p className="text-lg xl:text-2xl 2xl:text-3xl text-gray-100 mb-7 xl:mb-8 2xl:mb-10 font-light leading-relaxed drop-shadow-md">
              ML Engineer specializing in <span className="text-purple-400 font-semibold">GenAI</span>, 
              Deep Learning & Production AI Systems
            </p>

            {/* Stats/Badges */}
            <div className="flex flex-wrap gap-3 xl:gap-4 2xl:gap-5 mb-7 xl:mb-9 2xl:mb-10">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2.5 xl:px-5 xl:py-3.5 2xl:px-6 2xl:py-4">
                <p className="text-purple-400 text-sm xl:text-base 2xl:text-lg font-semibold">5+ Years</p>
                <p className="text-gray-200 text-xs xl:text-xs 2xl:text-sm">Experience</p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2.5 xl:px-5 xl:py-3.5 2xl:px-6 2xl:py-4">
                <p className="text-pink-400 text-sm xl:text-base 2xl:text-lg font-semibold">10+ Projects</p>
                <p className="text-gray-200 text-xs xl:text-xs 2xl:text-sm">Delivered</p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2.5 xl:px-5 xl:py-3.5 2xl:px-6 2xl:py-4">
                <p className="text-orange-400 text-sm xl:text-base 2xl:text-lg font-semibold">GenAI Expert</p>
                <p className="text-gray-200 text-xs xl:text-xs 2xl:text-sm">Specialty</p>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3 text-purple-400 font-mono text-sm xl:text-base 2xl:text-lg"
            >
              <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              <span>Start chatting to learn more →</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};