"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Calendar, Trophy, Zap, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CoachesCTA() {
  const cyan = "#0ea5e9"

  const highlights = [
    {
      title: "1-on-1 Tactical Diagnostic",
      desc: "Deep game audit & tailored opening blueprint",
      icon: <Zap size={18} className="text-amber-400" />
    },
    {
      title: "Woodlands Studio & Online",
      desc: "In-person Singapore lab or interactive virtual sessions",
      icon: <Trophy size={18} className="text-sky-400" />
    },
    {
      title: "FIDE Master Mentorship",
      desc: "Direct study with FM Dino Ballecer & FM Arlan Cabe",
      icon: <ShieldCheck size={18} className="text-emerald-400" />
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PREMIUM COACHES CTA CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] md:rounded-[60px] bg-gradient-to-br from-[#0c1e38] via-[#1a365d] to-[#07243c] p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(14,165,233,0.18)] border border-white/10 overflow-hidden group"
        >
          {/* TECHNICAL DOTTED GRID BACKGROUND */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(white 1px, transparent 1px)`, 
              backgroundSize: '24px 24px' 
            }} 
          />

          {/* DYNAMIC AMBIENT GLOWS */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-sky-500/20 rounded-full blur-[110px] pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-[110px] pointer-events-none" />

          {/* MAIN CTA CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* LIVE STATUS PILL */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">
                Direct Master Faculty Access
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            </div>

            {/* HEADLINE */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-[1000] text-white tracking-tighter leading-[1.05] italic uppercase mb-5">
              Ready to Train With Our <br className="hidden sm:block" />
              <span style={{ color: cyan }}>Master Faculty?</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed mb-10">
              Whether you need opening repertoire specialization, deep calculation training, or private mentorship under competitive champions—book your personal strategy consultation today.
            </p>

            {/* 3 VALUE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10 text-left">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-sky-400/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-black uppercase tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTION BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* PRIMARY: WHATSAPP BOOKING */}
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to book a coaching session / consultation with your master faculty (FM Dino Ballecer / FM Arlan Cabe / Founder Wagish). Please share available slots.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  style={{ backgroundColor: "#25D366" }}
                  className="w-full sm:w-auto h-14 px-9 rounded-full text-white text-[11px] font-[1000] uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-[0_15px_35px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle size={18} className="fill-current" />
                  Book Faculty Session
                  <Zap size={15} className="fill-white" />
                </Button>
              </a>

              {/* SECONDARY: PRICING LINK */}
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto h-14 px-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-[11px] font-[1000] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  View Lesson Rates
                  <ArrowRight size={15} className="text-sky-400" />
                </Button>
              </Link>
            </div>

            {/* TRUST GUARANTEES FOOTER STRIP */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 text-xs font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Certified FIDE Masters</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-sky-400 shrink-0" />
                <span>Flexible Slots (Online & Woodlands Studio)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-amber-400 shrink-0" />
                <span>Tailored for Adults & Competitive Players</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
