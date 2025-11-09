'use client';

import { useState, useRef } from 'react';
import { useChatStore } from '@/lib/stores/useChatStore';
import { useTypewriter } from '@/lib/hooks/useTypewriter';
import { ChatSuggestions } from './ChatSuggestions';
import { Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { CHAT_OPTIONS } from '@/lib/constants/chatData';

interface ChatInterfaceProps {
  isNavMode?: boolean;
}

export const ChatInterface = ({ isNavMode = false }: ChatInterfaceProps) => {
  const { sendMessage, isTyping } = useChatStore();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholderSuggestions = CHAT_OPTIONS.map(opt => opt.label);
  const typewriterText = useTypewriter(placeholderSuggestions, 80, 40, 2000);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (command: string) => {
    sendMessage(command);
    setInput('');
  };

  return (
    <motion.div
      layout
      className={`
        ${isNavMode 
          ? 'fixed top-0 left-0 right-0 h-16 bg-black/95 backdrop-blur-lg border-b border-purple-500/30 z-50 shadow-lg shadow-purple-500/10' 
          : 'w-full'
        }
      `}
    >
      {isNavMode ? (
        <div className="h-full px-6 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-green-400 font-mono text-sm">~</span>
            <span className="text-gray-400 font-mono text-sm">/home/ml-engineer</span>
            <span className="text-purple-400 font-mono text-sm ml-4">$</span>
          </div>
          
          <button
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl text-sm font-medium transition-all shadow-lg shadow-purple-500/30"
          >
            Chat Assistant
          </button>
        </div>
      ) : (
        <div className="space-y-4 xl:space-y-5 2xl:space-y-6 bg-black/50 backdrop-blur-2xl rounded-3xl p-6 xl:p-7 2xl:p-8 shadow-2xl shadow-black/50">
          {/* Standalone Input Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3 mb-3 xl:mb-4 2xl:mb-5">
              <Sparkles className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-purple-400" />
              <span className="text-sm xl:text-lg 2xl:text-xl text-gray-100 font-medium">Ask me anything</span>
            </div>

            {/* Input Field */}
            <div className="relative bg-gray-900/70 backdrop-blur-md rounded-2xl xl:rounded-2xl 2xl:rounded-3xl shadow-xl shadow-purple-500/10 p-1.5 xl:p-2 2xl:p-3">
              <div className="flex gap-2 xl:gap-3 2xl:gap-4 items-center p-3 xl:p-4 2xl:p-5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={typewriterText}
                  className="flex-1 bg-transparent text-white text-base xl:text-xl 2xl:text-2xl px-2 xl:px-3 2xl:px-4 py-2 xl:py-3 2xl:py-4 focus:outline-none placeholder-gray-400"
                  disabled={isTyping}
                />
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-purple-400 text-xl xl:text-2xl 2xl:text-3xl font-thin"
                >
                  |
                </motion.span>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 xl:p-4 2xl:p-5 rounded-xl xl:rounded-xl 2xl:rounded-2xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                >
                  <Send className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Suggestions */}
          <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
        </div>
      )}
    </motion.div>
  );
};