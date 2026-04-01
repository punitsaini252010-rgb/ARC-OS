"use client";
import { ARCShell } from '@/components/layout/shell';
import { RankedLeaderboard } from '@/components/layout/Leaderboard';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <ARCShell>
      <div className="grid grid-cols-12 gap-10 min-h-screen">
        
        {/* LEFT/CENTER: The Sovereign Feed */}
        <div className="col-span-12 lg:col-span-8">
           <motion.header 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-16"
           >
             <h1 className="text-[120px] font-black italic uppercase tracking-tighter text-white leading-none drop-shadow-2xl">
               Oasis<span className="text-cyan-400 animate-pulse-slow">.</span>
             </h1>
             <div className="flex gap-4 mt-4">
               <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
                 Network: Sovereign Alpha
               </span>
               <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase">
                 Status: Online
               </span>
             </div>
           </motion.header>

           {/* The Bazaar/Content Swarm Feed */}
           <div className="space-y-8">
              <div className="group p-10 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[50px] hover:border-cyan-500/30 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase">System Alert</span>
                   <span className="text-[10px] font-bold text-white/20 uppercase">02:14 AM</span>
                </div>
                <p className="text-3xl text-white/90 leading-tight font-medium italic">
                  "The Architect has authorized a new <span className="text-cyan-400">Content Swarm</span>. All Ace and Conqueror nodes proceed to the Bazaar for deployment."
                </p>
              </div>

              <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/5 rounded-[50px]">
                <p className="text-white/40 text-sm italic font-medium">
                  Waiting for next global transmission...
                </p>
              </div>
           </div>
        </div>

        {/* RIGHT: The Divine Leaderboard */}
        <div className="col-span-12 lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-10 p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[45px]"
          >
            <div className="bg-[#050505]/90 backdrop-blur-3xl rounded-[44px] p-8">
               <RankedLeaderboard />
            </div>
          </motion.div>
        </div>

      </div>
    </ARCShell>
  );
}
