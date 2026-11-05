"use client"

import { motion } from "framer-motion"
import { ChevronRight, BookOpen, Zap, Brain } from "lucide-react"
import Link from "next/link"

export default function BlogBanner() {
  const cyan = "#0ea5e9"

  return (
    <section className="relative w-full min-h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden bg-slate-950 font-sans">
      
      {/* 1. IMMERSIVE BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Navy Depth & Spotlight Overlay */}
        <div className="absolute inset-0 bg-[#1a365d]/80 md:bg-[#1a365d]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.9)_90%)]" />
      </div>

      {/* TECHNICAL DOT GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.15] md:opacity-[0.2] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(white 1px, transparent 1px)`, 
             backgroundSize: '30px 30px' 
           }} 
      />

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-0 text-center">
        
        {/* BREADCRUMB PILL */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10 mb-6 md:mb-10"
        >
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white/70 text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-sky-500" />
            <span className="text-sky-400">Insights</span>
          </div>
        </motion.div>

        {/* PRIMARY HEADLINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-[1000] text-white tracking-tighter leading-[0.9] italic uppercase">
            The <span style={{ color: cyan }}>Insights.</span>
          </h1>
          <p className="text-slate-300 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
            Strategic <span className="text-white">Analysis</span>, Mental Endurance <br className="hidden sm:block" />
            & The Science of Chessmatic Performance.
          </p>
        </motion.div>
      </div>

      {/* 3. FLOATING DASHBOARD BADGES (Responsive visibility) */}
      {/* Hidden on mobile/tablet, shown on Large screens and up */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        
        {/* LEFT BADGE: CURATED DATA */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[5%] xl:left-[8%] bg-white/5 backdrop-blur-2xl p-4 xl:p-6 rounded-[25px] xl:rounded-[35px] border border-white/10 shadow-2xl flex items-center gap-4 xl:gap-5"
        >
          <div className="p-2.5 xl:p-3.5 bg-sky-500 rounded-xl xl:rounded-2xl shadow-lg">
            <BookOpen className="text-white w-5 h-5 xl:w-6 xl:h-6" />
          </div>
          <div className="pr-2 xl:pr-4">
            <p className="text-white/40 text-[8px] xl:text-[9px] font-black uppercase tracking-widest leading-none mb-1.5">Knowledge Base</p>
            <p className="text-white font-bold text-xs xl:text-sm tracking-tight">Curated Data</p>
          </div>
        </motion.div>

        {/* RIGHT BADGE: ANALYSIS */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[5%] xl:right-[8%] bg-white/5 backdrop-blur-2xl p-4 xl:p-6 rounded-[25px] xl:rounded-[35px] border border-white/10 shadow-2xl flex items-center gap-4 xl:gap-5"
        >
          <div className="p-2.5 xl:p-3.5 bg-white/10 rounded-xl xl:rounded-2xl">
            <Zap className="text-sky-400 w-5 h-5 xl:w-6 xl:h-6" />
          </div>
          <div className="pr-2 xl:pr-4">
            <p className="text-white/40 text-[8px] xl:text-[10px] font-black uppercase tracking-widest leading-none mb-1.5">Frequency</p>
            <p className="text-white font-bold text-xs xl:text-sm tracking-tight">Weekly Strategy</p>
          </div>
        </motion.div>

        {/* LOWER BADGE: COGNITIVE */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[10%] xl:left-[15%] bg-white/5 backdrop-blur-2xl p-4 xl:p-6 rounded-[25px] xl:rounded-[35px] border border-white/10 shadow-2xl flex items-center gap-4 xl:gap-5"
        >
          <div className="p-2.5 xl:p-3.5 bg-sky-500/20 rounded-xl xl:rounded-2xl">
            <Brain className="text-sky-400 w-5 h-5 xl:w-6 xl:h-6" />
          </div>
          <div className="pr-2 xl:pr-4">
            <p className="text-white/40 text-[8px] xl:text-[10px] font-black uppercase tracking-widest leading-none mb-1.5">Topic</p>
            <p className="text-sky-400 font-bold text-xs xl:text-sm tracking-tight">Cognitive Labs</p>
          </div>
        </motion.div>
      </div>

      {/* 4. SMALL RIPPLE WAVES (Bottom Transition) */}
      <div className="absolute bottom-[-1px] left-0 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-[60px] md:h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C120,100 240,20 360,60 C480,100 600,20 720,60 C840,100 960,20 1080,60 C1200,100 1320,20 1440,60 V120 H0 Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  )
}