"use client"

import { motion } from "framer-motion"
import { ChevronRight, Trophy, Award, Brain } from "lucide-react"
import Link from "next/link"

export default function CoachesBanner() {
  const cyan = "#0ea5e9"

  return (
    <section className="relative w-full h-screen min-h-[600px] lg:h-[100vh] flex items-center justify-center overflow-hidden bg-slate-950 font-sans">
      
      {/* 1. IMMERSIVE BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('/adult4.png')`, 
        }}
      >
        {/* Navy Depth & Strategic Spotlight */}
        <div className="absolute inset-0 bg-[#1a365d]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.9)_85%)]" />
      </div>

      {/* TECHNICAL DOT GRID OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        {/* BREADCRUMB PILL */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full text-white/70 text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-sky-500" />
            <span className="text-sky-400">Coaches & Faculty</span>
          </div>
        </motion.div>

        {/* PRIMARY HEADLINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-[1000] text-white tracking-tighter leading-none italic uppercase">
            Master <span style={{ color: cyan }}>Faculty.</span>
          </h1>
          <p className="text-slate-300 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-4">
            Elite Chess Mentorship & Leadership Coaching Through <br className="hidden sm:block" />
            Certified FIDE Masters & Founders in Singapore.
          </p>
        </motion.div>
      </div>

      {/* 3. FLOATING DASHBOARD BADGES (Desktop Only) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        
        {/* LEFT BADGE: FACULTY GRADE */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[6%] bg-white/5 backdrop-blur-2xl p-5 rounded-[30px] border border-white/10 shadow-2xl flex items-center gap-4"
        >
          <div className="p-3 bg-sky-500 rounded-2xl shadow-lg">
            <Trophy className="text-white w-5 h-5" />
          </div>
          <div className="pr-2">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-widest leading-none mb-1">Title Grade</p>
            <p className="text-white font-bold text-xs tracking-tight">Certified FIDE Masters</p>
          </div>
        </motion.div>

        {/* RIGHT BADGE: TOURNAMENT PEDIGREE */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-[6%] bg-white/5 backdrop-blur-2xl p-5 rounded-[30px] border border-white/10 shadow-2xl flex items-center gap-4"
        >
          <div className="p-3 bg-white/10 rounded-2xl">
            <Award className="text-sky-400 w-5 h-5" />
          </div>
          <div className="pr-2">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-widest leading-none mb-1">Track Record</p>
            <p className="text-white font-bold text-xs tracking-tight">35+ Yrs Coaching</p>
          </div>
        </motion.div>

        {/* LOWER BADGE: METHODOLOGY */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[10%] bg-white/5 backdrop-blur-2xl p-5 rounded-[30px] border border-white/10 shadow-2xl flex items-center gap-4"
        >
          <div className="p-3 bg-sky-500/20 rounded-2xl border border-sky-500/20">
            <Brain className="text-sky-400 w-5 h-5" />
          </div>
          <div className="pr-2">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-widest leading-none mb-1">Methodology</p>
            <p className="text-sky-400 font-bold text-xs tracking-tight">1-on-1 & Strategic Batches</p>
          </div>
        </motion.div>
      </div>

      {/* 4. SMALL RIPPLE WAVES (Bottom Transition to White) */}
      <div className="absolute bottom-[-1px] left-0 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ minHeight: '60px' }}
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
