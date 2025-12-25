import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

/**
 * Custom hook for typewriter animation effect
 * @param text - The text to animate
 * @param speed - Speed of typing in milliseconds (default: 50)
 * @param delay - Delay before starting the animation (default: 0)
 * @param loop - Whether to loop the animation (default: false)
 * @returns Object with displayedText and isComplete
 */
export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  loop = false,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      if (!isComplete && displayedText.length === text.length && !loop) {
        setIsComplete(true);
        return;
      }

      if (displayedText.length === text.length && loop) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          timeout = setTimeout(animate, delay);
          return;
        }
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed / 2);
        return;
      }

      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      }
    };

    timeout = setTimeout(animate, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isComplete, isDeleting, text, speed, delay, loop]);

  return { displayedText, isComplete };
}
