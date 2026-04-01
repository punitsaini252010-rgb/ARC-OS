"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const PLAYERS = [
  { id: "v01", name: "User_Alpha", rank: "Conqueror", rp: 5840, level: 88 },
  { id: "v02", name: "Desert_Fox", rank: "Ace", rp: 4620, level: 72 },
  { id: "v03", name: "Bazaar_Lord", rank: "Crown", rp: 3910, level: 65 },
  { id: "v04", name: "Neon_Nomad", rank: "Diamond", rp: 3450, level: 51 },
];

export function RankedLeaderboard() {
  return (
    <div className="w-full space-y-4 p-2">
      <h2 className="text-[10px] font-black tracking-[0.5em] text-amber-500/50 uppercase mb-6 text-center">
        Global Matchmaking Statistics
      </h2>
      
      <AnimatePresence>
        {PLAYERS.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "relative group flex items-center justify-between p-4 rounded-[20px] border transition-all duration-500 overflow-hidden",
              player.rank === "Conqueror" 
                ? "bg-red-500/10 border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.1)]" 
                : "bg-white/5 border-white/5 hover:bg-white/10"
            )}
          >
            {/* The Background Glow for high ranks */}
            {player.rank === "Conqueror" && (
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"
              />
            )}

            <div className="flex items-center gap-4 relative z-10">
              {/* Level Badge */}
              <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/40 text-[10px] font-black italic">
                <span className="text-white/40 leading-none">LVL</span>
                <span className="text-amber-500 leading-none">{player.level}</span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  {/* Animated Name for Top Tiers */}
                  <span className={cn(
                    "font-bold text-sm tracking-tight",
                    player.rank === "Conqueror" ? "text-red-500 animate-pulse" : "text-white/90"
                  )}>
                    {player.name}
                  </span>
                  {/* Rank Tag */}
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[8px] font-black tracking-widest text-white/40 uppercase">
                    {player.rank}
                  </span>
                </div>
                
                {/* Progress Bar to next level */}
                <div className="w-32 h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    className={cn(
                      "h-full rounded-full",
                      player.rank === "Conqueror" ? "bg-red-500 shadow-[0_0_10px_#ef4444]" : "bg-amber-500"
                    )} 
                  />
                </div>
              </div>
            </div>

            <div className="text-right relative z-10">
              <p className="text-lg font-black italic text-white leading-none tracking-tighter">
                {player.rp.toLocaleString()}
              </p>
              <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Reputation</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button className="w-full mt-4 py-4 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-xl hover:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(245,158,11,0.2)] active:scale-95">
        Boost Rank Now
      </button>
    </div>
  );
}
"use client";
import { motion } from 'framer-motion';
import { ARC_RANKS } from '@/lib/ranks';
import { cn } from '@/lib/utils';

const STAFF_AND_PLAYERS = [
  { id: "dev-01", name: "YOU (ARCHITECT)", rank: "DEVELOPER", rp: "∞", level: 999 },
  { id: "dev-02", name: "BROTHER (ARCHITECT)", rank: "DEVELOPER", rp: "∞", level: 999 },
  { id: "p-01", name: "User_Alpha", rank: "CONQUEROR", rp: 5840, level: 88 },
  { id: "p-02", name: "Desert_Fox", rank: "ACE", rp: 4620, level: 72 },
];

export function RankedLeaderboard() {
  return (
    <div className="w-full space-y-4">
      {STAFF_AND_PLAYERS.map((user, index) => {
        const rankInfo = ARC_RANKS[user.rank as keyof typeof ARC_RANKS];
        
        return (
          <motion.div
            key={user.id}
            className={cn(
              "relative p-4 rounded-[22px] border transition-all duration-700",
              user.rank === "DEVELOPER" ? "bg-cyan-500/10 border-cyan-400/50" : "bg-black/40 border-white/5"
            )}
            style={{ boxShadow: rankInfo.glow }}
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                {/* ID Tag with Rank Color */}
                <div className="text-center">
                  <p className="text-[8px] font-black uppercase tracking-tighter opacity-40">Rank</p>
                  <p className="text-[10px] font-black italic" style={{ color: rankInfo.color }}>
                    {rankInfo.tag}
                  </p>
                </div>
                <div>
                  <h3 className={cn(
                    "text-sm font-black tracking-tight uppercase",
                    rankInfo.animation,
                    user.rank === "DEVELOPER" ? "text-cyan-400" : "text-white"
                  )}>
                    {user.name}
                  </h3>
                  <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Level {user.level}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-black italic leading-none" style={{ color: rankInfo.color }}>
                  {user.rp}
                </p>
                <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-20 text-white">Rating</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
