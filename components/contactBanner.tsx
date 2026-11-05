"use client"

import { motion } from "framer-motion"
import { ChevronRight, Globe, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactBanner() {
  const cyan = "#0ea5e9"

  return (
    <section className="relative w-full min-h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden bg-slate-950 font-sans">
      
      {/* 1. IMMERSIVE BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`, 
        }}
      >
        {/* Darker overlay on mobile for better text readability */}
        <div className="absolute inset-0 bg-[#1a365d]/80 md:bg-[#1a365d]/60" />
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
            <span className="text-sky-400">Contact</span>
          </div>
        </motion.div>

        {/* PRIMARY HEADLINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-[1000] text-white tracking-tighter leading-[0.9] italic uppercase">
            Get in <span style={{ color: cyan }}>Touch.</span>
          </h1>
          <p className="text-slate-300 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
            Our Singapore Laboratory is <span className="text-white">Active.</span> <br className="hidden sm:block" />
            Strategy starts with a single conversation.
          </p>
        </motion.div>
      </div>

      {/* 3. FLOATING BADGES (Desktop/Tablet Landscape Only) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        
        {/* LEFT BADGE */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[5%] xl:left-[8%] bg-white/5 backdrop-blur-2xl p-4 xl:p-6 rounded-[25px] xl:rounded-[35px] border border-white/10 shadow-2xl flex items-center gap-4 xl:gap-5"
        >
          <div className="p-2.5 xl:p-3.5 bg-sky-500 rounded-xl xl:rounded-2xl shadow-lg">
            <MessageSquare className="text-white w-5 h-5 xl:w-6 xl:h-6" />
          </div>
          <div className="pr-2 xl:pr-4">
            <p className="text-white/40 text-[8px] xl:text-[9px] font-black uppercase tracking-widest leading-none mb-1.5">Direct Line</p>
            <p className="text-white font-bold text-xs xl:text-sm tracking-tight">Active Response</p>
          </div>
        </motion.div>

        {/* RIGHT BADGE */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-[5%] xl:right-[8%] bg-white/5 backdrop-blur-2xl p-4 xl:p-6 rounded-[25px] xl:rounded-[35px] border border-white/10 shadow-2xl flex items-center gap-4 xl:gap-5"
        >
          <div className="p-2.5 xl:p-3.5 bg-white/10 rounded-xl xl:rounded-2xl">
            <Globe className="text-sky-400 w-5 h-5 xl:w-6 xl:h-6" />
          </div>
          <div className="pr-2 xl:pr-4">
            <p className="text-white/40 text-[8px] xl:text-[10px] font-black uppercase tracking-widest leading-none mb-1.5">Global HQ</p>
            <p className="text-white font-bold text-xs xl:text-sm tracking-tight">Central Singapore</p>
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