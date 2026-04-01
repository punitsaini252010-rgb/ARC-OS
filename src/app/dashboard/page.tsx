"use client";
import { ARCShell } from '@/components/layout/shell';
import { RankedLeaderboard } from '@/components/layout/Leaderboard';
import { motion } from 'framer-motion';

export default function OasisCommand() {
  return (
    <ARCShell>
      <div className="grid grid-cols-12 gap-8 min-h-full">
        
        {/* CENTER FEED: The Social & News Engine */}
        <div className="col-span-8">
           <header className="mb-10">
             <h1 className="text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-2xl">
               Oasis<span className="text-amber-500">.</span>
             </h1>
           </header>

           {/* The Skool-style Community Feed */}
           <div className="space-y-6">
              {[1, 2, 3].map((post) => (
                <div key={post} className="p-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] hover:border-amber-500/20 transition-all">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40" />
                    <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase">Sovereign Intel</span>
                  </div>
                  <p className="text-xl text-white/80 leading-relaxed font-medium italic">
                    "The Bazaar is flooding with new video editing contracts. ACE tier members have 24h priority."
                  </p>
                </div>
              ))}
           </div>
        </div>

        {/* RIGHT SIDE: The Addiction Engine (Ranked Board) */}
        <div className="col-span-4 sticky top-10 h-fit">
          <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[45px] p-8 shadow-2xl">
            <RankedLeaderboard />
          </div>
        </div>

      </div>
    </ARCShell>
  );
}

