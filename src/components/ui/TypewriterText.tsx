"use client";

import { useTypewriter } from "@/lib/hooks/useTypewriter";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
}

/**
 * TypewriterText Component
 * Displays text with a typewriter animation effect
 */
export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  className = "",
  showCursor = true,
}: TypewriterTextProps) {
  const { displayedText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    loop,
  });

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-current" />
      )}
    </span>
  );
}
