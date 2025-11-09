import { create } from 'zustand';
import { Message, NavigationState } from '@/lib/types';
import { generateBotResponse, getTypingDelay } from '@/lib/utils/chatbot';

interface ChatStore {
    messages: Message[];
    isTyping: boolean;
    currentSection: NavigationState;
    isChatExpanded: boolean;

    addMessage: (content: string, sender: 'user' | 'bot') => void;
    sendMessage: (content: string) => void;
    setCurrentSection: (section: NavigationState) => void;
    toggleChat: () => void;
    clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    messages: [
        {
            id: '1',
            content: "Hey! 👋 I'm an ML Engineer passionate about GenAI. What would you like to know about me?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ],
    isTyping: false,
    currentSection: 'home',
    isChatExpanded: false,

    addMessage: (content, sender) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            content,
            sender,
            timestamp: new Date(),
        };
        set((state) => ({
            messages: [...state.messages, newMessage],
        }));
    },

    sendMessage: async (content) => {
        const { addMessage } = get();

        // Add user message
        addMessage(content, 'user');

        // Set typing indicator
        set({ isTyping: true });

        // Generate bot response
        const botResponse = generateBotResponse(content);
        const delay = getTypingDelay(botResponse);

        // Simulate typing delay
        await new Promise((resolve) => setTimeout(resolve, delay));

        // Add bot response
        addMessage(botResponse, 'bot');
        set({ isTyping: false });
    },

    setCurrentSection: (section) => set({ currentSection: section }),

    toggleChat: () => set((state) => ({ isChatExpanded: !state.isChatExpanded })),

    clearMessages: () => set({
        messages: [
            {
                id: '1',
                content: "Hey! 👋 I'm an ML Engineer passionate about GenAI. What would you like to know about me?",
                sender: 'bot',
                timestamp: new Date(),
            },
        ]
    }),
}));