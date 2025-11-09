'use client';

import { Message } from '@/lib/types';
import { cn } from '@/lib/utils/cn';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
    const isBot = message.sender === 'bot';

    return (
        <div
            className={cn(
                'flex gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300',
                isBot ? 'justify-start' : 'justify-end'
            )}
        >
            {isBot && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                </div>
            )}

            <div
                className={cn(
                    'max-w-[80%] rounded-2xl px-4 py-3 break-words',
                    isBot
                        ? 'bg-gray-800 text-gray-100 rounded-tl-none'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-none'
                )}
            >
                <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                        components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-bold text-purple-300">{children}</strong>,
                            ul: ({ children }) => <ul className="list-disc list-inside space-y-1">{children}</ul>,
                            li: ({ children }) => <li className="text-sm">{children}</li>,
                        }}
                    >
                        {message.content}
                    </ReactMarkdown>
                </div>
            </div>

            {!isBot && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                </div>
            )}
        </div>
    );
};