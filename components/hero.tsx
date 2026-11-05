"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Target } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function HeroSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="relative w-full h-screen min-h-[700px] lg:min-h-[800px] overflow-hidden font-sans flex items-center justify-center">
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 sm:opacity-75"
          style={{ 
            backgroundImage: `url('/4.png')`, 
          }}
        />
        {/* Radial Spotlight: Enhanced contrast for clean text legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0.4)_0%,_rgba(2,6,23,0.92)_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* PRIMARY DATA & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6 sm:mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em]">
              Singapore’s Premier Adult Chess Academy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[1000] text-white leading-[1.08] sm:leading-[1] tracking-tighter mb-6 sm:mb-8 italic">
            Where Strategy & <br /> 
            <span style={{ color: cyan }}>Mastery</span> Meet Together
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium mb-8 sm:mb-12 max-w-3xl mx-auto opacity-95">
            Chessmatic brings a modern performance concept to Singapore by 
            combining <span className="text-white font-bold">structured adult chess strategy, tactical calculation depth, and corporate leadership labs</span> for adults and organizations.
          </p>

          {/* 3-BUTTON CTA GROUP */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full max-w-2xl px-4 sm:px-0">
            <Button asChild className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-6 rounded-full text-sm font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 group">
              <a 
                href={getWhatsAppUrl("Hi Chessmatic! I would like to join the Adult Chess Classes. Please share the schedule and enrollment details.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Adult Classes
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-6 rounded-full text-sm font-bold flex items-center justify-center gap-3 transition-all hover:scale-105">
              <a 
                href={getWhatsAppUrl("Hi Chessmatic! I would like to book/inquire about a Corporate Chess & Leadership Workshop for my team.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users size={18} className="text-sky-400" />
                Book Corporate
              </a>
            </Button>

            <Button asChild variant="ghost" className="w-full sm:w-auto text-white/90 hover:text-white hover:bg-white/10 px-8 py-6 rounded-full text-sm font-bold flex items-center justify-center gap-3 transition-all underline decoration-sky-500/60 underline-offset-8">
              <a 
                href={getWhatsAppUrl("Hi Chessmatic! I'm interested in exploring your Adult Chess Coaching and masterclasses.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Target size={18} className="text-sky-400" />
                View Programs
              </a>
            </Button>
          </div>
        </motion.div>

      </div>

      {/* 3. SIGNATURE CURVED BOTTOM (Navy & White) */}
      <div className="absolute bottom-[-2px] left-0 w-full z-20 pointer-events-none">
        <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-auto"
            preserveAspectRatio="none"
            style={{ height: 'auto', minHeight: '60px' }}
        >
          <path d="M0 120V60C240 120 480 120 720 60C960 0 1200 0 1440 60V120H0Z" fill={navy} />
          <path d="M0 120V80C240 130 480 130 720 80C960 30 1200 30 1440 80V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}