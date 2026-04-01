import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * The 'cn' function (Class Name)
 * This is the magic that allows us to stack 4K effects.
 * It combines Tailwind classes and makes sure they don't fight each other.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * The 'formatRP' function
 * Turns 5840 into 5,840 so it looks professional on the Leaderboard.
 */
export function formatRP(points: number) {
  return new Intl.NumberFormat("en-US").format(points);
}

/**
 * The 'getRankColor' function
 * Automatically assigns the "Movie Lighting" color to the player's ID.
 */
export function getRankColor(rank: string) {
  switch (rank.toLowerCase()) {
    case "conqueror": return "text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]";
    case "ace": return "text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.4)]";
    case "crown": return "text-slate-300";
    case "diamond": return "text-cyan-400";
    default: return "text-white/60";
  }
}
/**
 * The 'calculateLevel' function
 * Level 1 = 0 XP
 * Level 2 = 100 XP
 * Every level requires 20% more XP than the last (The "Grind" gets harder)
 */
export function calculateLevel(xp: number) {
  return Math.floor(Math.sqrt(xp / 10)) + 1;
}

export function getProgressToNextLevel(xp: number) {
  const currentLevel = calculateLevel(xp);
  const currentLevelXP = Math.pow(currentLevel - 1, 2) * 10;
  const nextLevelXP = Math.pow(currentLevel, 2) * 10;
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  return Math.min(progress, 100);
}

