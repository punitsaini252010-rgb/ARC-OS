"use client";
import { ARCShell } from '@/components/layout/shell';

const LISTINGS = [
  { title: "4K Short-Form Edit", price: "$150", seller: "Ace_Editor", rank: "ACE" },
  { title: "Ghostwriting (10 Scripts)", price: "$300", seller: "Scribe_01", rank: "CONQUEROR" },
  { title: "IG Account Setup (x5)", price: "$50", seller: "Swarm_Helper", rank: "GOLD" },
];

export default function BazaarPage() {
  return (
    <ARCShell>
      <header className="mb-12">
        <h2 className="text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase mb-2">Trade Floor</h2>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white">#the-bazaar</h1>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {LISTINGS.map((item, i) => (
          <div key={i} className="group p-8 bg-black/40 border border-white/5 rounded-[35px] flex items-center justify-between hover:border-amber-500/30 transition-all">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center font-black text-amber-500 italic">
                {item.price}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{item.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mt-1">
                  Contractor: <span className="text-white/60">{item.seller}</span> — [{item.rank}]
                </p>
              </div>
            </div>
            <button className="px-6 py-3 border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Acquire
            </button>
          </div>
        ))}
      </div>
    </ARCShell>
  );
}

