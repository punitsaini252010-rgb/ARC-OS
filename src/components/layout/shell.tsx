"use client";
// Inside your Shell function, before the <aside>
<BroadcastBar userRank="DEVELOPER" /> 

import React from 'react';
import AliveDesert from '@/components/world/AliveDesert';
import { cn } from '@/lib/utils';
import { UserButton } from "@clerk/nextjs";

export function ARCShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex overflow-hidden bg-black">
      {/* 1. THE 4K MOVIE DESERT (The Background) */}
      <div className="fixed inset-0 z-0">
        <AliveDesert />
      </div>

      {/* 2. THE SOVEREIGN SIDEBAR (The Control Panel) */}
      <aside className="relative z-30 w-24 lg:w-72 h-screen bg-black/10 backdrop-blur-3xl border-r border-white/5 flex flex-col items-center py-12 transition-all duration-700 hover:bg-black/30">
        
        {/* ARC LOGO / HOME BUTTON */}
        <div className="group relative w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-[0_0_30px_rgba(0,242,255,0.2)] mb-16 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="absolute inset-0 bg-cyan-400 rounded-2xl animate-pulse blur-xl opacity-20" />
          <span className="text-black font-black text-xl italic relative z-10">A</span>
        </div>
        
        {/* NAVIGATION NODES (The Links) */}
        <nav className="flex-1 w-full px-6 space-y-8">
          {['Oasis', 'Bazaar', 'Swarm', 'Vault'].map((item, i) => (
            <div key={i} className="group flex flex-col items-center lg:items-start cursor-pointer">
              <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase group-hover:text-cyan-400 transition-colors">
                {item}
              </span>
              <div className="h-[1px] w-0 group-hover:w-full bg-cyan-400/50 transition-all duration-500 mt-1" />
            </div>
          ))}
        </nav>

        {/* CLERK USER BUTTON (The Login/Profile) */}
        <div className="mt-auto p-6 border-t border-white/5 w-full flex justify-center">
          <UserButton afterSignOutUrl="/" appearance={{
            elements: {
              userButtonAvatarBox: "w-10 h-10 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,242,255,0.2)]"
            }
          }} />
        </div>
      </aside>

      {/* 3. THE VIEWPORT (Where the content flows) */}
      <main className="relative z-20 flex-1 h-screen overflow-y-auto custom-scrollbar">
        <div className="max-w-[1400px] mx-auto px-10 lg:px-20 pt-20 pb-32">
          {children}
        </div>
      </main>

      {/* CINEMATIC OVERLAY (The 4K Movie Grain/Vignette) */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}

