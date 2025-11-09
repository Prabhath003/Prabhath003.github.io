'use client';

import { CHAT_OPTIONS } from '@/lib/constants/chatData';
import { motion } from 'framer-motion';

interface ChatSuggestionsProps {
  onSuggestionClick: (command: string) => void;
}

export const ChatSuggestions = ({ onSuggestionClick }: ChatSuggestionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="space-y-2 xl:space-y-3 2xl:space-y-4"
    >
      {CHAT_OPTIONS.map((option, index) => (
        <motion.button
          key={option.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          onClick={() => onSuggestionClick(option.command)}
          className="w-full text-left px-4 py-3 xl:px-6 xl:py-4 2xl:px-7 2xl:py-5 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm text-gray-200 hover:text-white rounded-xl xl:rounded-xl 2xl:rounded-2xl text-sm xl:text-base 2xl:text-lg transition-all border border-gray-600/50 hover:border-purple-500/50 flex items-center justify-between group"
        >
          <span className="text-base xl:text-lg 2xl:text-xl">{option.label}</span>
          <span className="text-gray-500 group-hover:text-purple-400 transition-colors text-sm xl:text-base 2xl:text-lg">
            →
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};