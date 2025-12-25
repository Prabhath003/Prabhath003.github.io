import { NAV_ITEMS } from "@/lib/constants/navigation";

/**
 * Get the question associated with a page route
 * Used to display the appropriate typewriter question on portfolio pages
 */
export function getPageQuestion(href: string): string {
  const navItem = NAV_ITEMS.find((item) => item.href === href);
  return navItem?.question || "What can I help you with?";
}
