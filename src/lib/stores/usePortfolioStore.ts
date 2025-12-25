import { create } from "zustand";

interface PortfolioStore {
  // Update Banner state
  currentUpdateIndex: number;
  isAutoPlayingUpdates: boolean;
  setCurrentUpdateIndex: (index: number) => void;
  setAutoPlayingUpdates: (isAutoPlaying: boolean) => void;

  // Chatbot Navigation state
  isShowingSuggestions: boolean;
  setShowingSuggestions: (isShowing: boolean) => void;
  currentTypedQuestion: string;
  setCurrentTypedQuestion: (question: string) => void;

  // General navigation
  activeSection: string;
  setActiveSection: (section: string) => void;
}

/**
 * Zustand store for managing portfolio state
 * Handles:
 * - Update banner auto-play and current index
 * - Chatbot navigation suggestions visibility
 * - Typed question text
 * - Active section/page
 */
export const usePortfolioStore = create<PortfolioStore>((set) => ({
  // Update Banner
  currentUpdateIndex: 0,
  isAutoPlayingUpdates: true,
  setCurrentUpdateIndex: (index) => set({ currentUpdateIndex: index }),
  setAutoPlayingUpdates: (isAutoPlaying) => set({ isAutoPlayingUpdates: isAutoPlaying }),

  // Chatbot Navigation
  isShowingSuggestions: false,
  setShowingSuggestions: (isShowing) => set({ isShowingSuggestions: isShowing }),
  currentTypedQuestion: "",
  setCurrentTypedQuestion: (question) => set({ currentTypedQuestion: question }),

  // General Navigation
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
