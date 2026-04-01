"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BroadcastBar({ userRank }: { userRank: string }) {
  const [message, setMessage] = useState("");
  const [activeBroadcast, setActiveBroadcast] = useState("WELCOME TO THE OASIS. SYSTEM INITIALIZED.");
  
  // Only show the input for Developers
  const isArchitect = userRank === "DEVELOPER";

  const handleSend = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && message) {
      setActiveBroadcast(message.toUpperCase());
      setMessage("");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      {/* THE GLOWING MARQUEE */}
      <div className="bg-cyan-500/10 backdrop-blur-md border-b border-cyan-500/20 py-2 overflow-hidden">
        <motion.div 
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-[10px] font-black tracking-[0.5em] text-cyan-400 italic"
        >
          {activeBroadcast} • {activeBroadcast} • {activeBroadcast}
        </motion.div>
      </div>

      {/* THE SECRET INPUT (Only for You) */}
      {isArchitect && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96">
          <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleSend}
            placeholder="TYPE COMMAND & PRESS ENTER TO BROADCAST..."
            className="w-full bg-black/80 border border-cyan-500/40 rounded-full px-6 py-2 text-[10px] text-cyan-400 font-black placeholder:text-cyan-900 focus:outline-none shadow-[0_0_20px_rgba(0,242,255,0.1)]"
          />
        </div>
      )}
    </div>
  );
}
