"use client";
import { ARCShell } from '@/components/layout/shell';
import { motion } from 'framer-motion';

const NODES = Array.from({ length: 6 }, (_, i) => ({
  id: `NODE-0${i + 1}`,
  status: Math.random() > 0.2 ? "ACTIVE" : "STANDBY",
  reach: (Math.random() * 50).toFixed(1) + "K",
}));

export default function SwarmPage() {
  return (
    <ARCShell>
      <div className="max-w-5xl">
        <header className="mb-12">
          <h2 className="text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase mb-2">Operation Mode</h2>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white">Content Swarm</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {NODES.map((node, i) => (
            <motion.div 
              key={node.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/5 border border-white/10 rounded-[30px] backdrop-blur-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-white/40 tracking-widest">{node.id}</span>
                <div className={`w-2 h-2 rounded-full ${node.status === "ACTIVE" ? "bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" : "bg-white/10"}`} />
              </div>
              <p className="text-2xl font-black italic text-white mb-1">{node.reach}</p>
              <p className="text-[8px] font-black uppercase tracking-widest text-white/20">Total Impressions</p>
            </motion.div>
          ))}
        </div>

        {/* MISSION CONTROL */}
        <div className="p-10 bg-cyan-500/5 border border-cyan-500/20 rounded-[40px] backdrop-blur-2xl">
          <h3 className="text-sm font-black uppercase tracking-widest text-cyan-400 mb-6 italic">Current Directive</h3>
          <p className="text-3xl font-medium text-white/90 leading-tight mb-8">
            "Flood the algorithm with the 'Sovereign Alpha' hook. Target: High-Ticket Entrepreneurs."
          </p>
          <button className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-400 transition-all">
            Download Assets
          </button>
        </div>
      </div>
    </ARCShell>
  );
}

