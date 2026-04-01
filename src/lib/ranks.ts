export const ARC_RANKS = {
  // --- DIVINE TIERS (You, Your Brother, Managers) ---
  DEVELOPER: { 
    tag: "✧ ARCHITECT ✧", 
    color: "#00F2FF", // Electric Cyan
    glow: "0 0 30px rgba(0, 242, 255, 0.8), 0 0 60px rgba(0, 242, 255, 0.3)",
    animation: "animate-pulse-slow shadow-cyan" 
  },
  MANAGER: { 
    tag: "◈ GUARDIAN ◈", 
    color: "#ADFF2F", // Neon Green
    glow: "0 0 25px rgba(173, 255, 47, 0.6)",
    animation: "animate-bounce-subtle shadow-green" 
  },

  // --- ARENA TIERS (The Players) ---
  CONQUEROR: { tag: "👑 CONQUEROR", color: "#FF3E3E", glow: "0 0 25px #FF3E3E", animation: "animate-glitch-red" },
  ACE: { tag: "🔥 ACE", color: "#FFD700", glow: "0 0 20px #FFD700", animation: "shadow-gold" },
  CROWN: { tag: "💀 CROWN", color: "#E5E4E2", glow: "0 0 15px #E5E4E2", animation: "shadow-silver" },
  DIAMOND: { tag: "💎 DIAMOND", color: "#B9F2FF", glow: "0 0 12px #B9F2FF", animation: "none" },
  PLATINUM: { tag: "⚡ PLATINUM", color: "#99AAB5", glow: "0 0 10px #99AAB5", animation: "none" },
  GOLD: { tag: "● GOLD", color: "#DAA520", glow: "none", animation: "none" },
  SILVER: { tag: "● SILVER", color: "#C0C0C0", glow: "none", animation: "none" },
  BRONZE: { tag: "● BRONZE", color: "#CD7F32", glow: "none", animation: "none" },
};
