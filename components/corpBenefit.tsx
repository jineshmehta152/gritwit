"use client"

import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp } from "lucide-react"

export default function TeamOutcomesCircular() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const outcomes = [
    {
      id: "PRT-01",
      label: "Better Communication",
      val: "92%",
      desc: "Protocol-driven clarity between departments.",
      gif: "/master.gif",
      color: "text-sky-400"
    },
    {
      id: "PRT-02",
      label: "Faster Decision-Making",
      val: "2.4x",
      desc: "Accelerated tactical instincts under pressure.",
      gif: "/life.gif",
      color: "text-amber-400"
    },
    {
      id: "PRT-03",
      label: "Focus Under Pressure",
      val: "85%",
      desc: "Maintained cognitive depth during crisis.",
      gif: "/focus.gif",
      color: "text-rose-400"
    },
    {
      id: "PRT-04",
      label: "Collaborative Thinking",
      val: "+78%",
      desc: "Synchronized strategic alignment.",
      gif: "/memory.gif",
      color: "text-emerald-400"
    },
    {
      id: "PRT-05",
      label: "Mental Resilience",
      val: "60%",
      desc: "Enhanced recovery from competitive setbacks.",
      gif: "/creative.gif",
      color: "text-indigo-400"
    },
    {
      id: "PRT-06",
      label: "Workplace Engagement",
      val: "High",
      desc: "Tangible increase in employee loyalty.",
      gif: "/report.gif",
      color: "text-sky-400"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED HEADER TRACK */}
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Impact Analytics
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Quantifiable <span style={{ color: cyan }}>Team Growth.</span>
          </motion.h2>
        </div>

        {/* DASHBOARD GRID - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#1a365d] rounded-[40px] md:rounded-[50px] p-6 sm:p-10 shadow-2xl border border-white/5 transition-all duration-500 hover:scale-[1.02] flex flex-col items-center text-center"
            >
              {/* TECHNICAL DOT GRID OVERLAY */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                   style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

              {/* 1. CIRCULAR GIF LENS - Scaled for Mobile */}
              <div className="relative mb-8 md:mb-12">
                 {/* Animated Pulse Rings */}
                 <div className="absolute -inset-3 md:-inset-4 border border-sky-500/20 rounded-full animate-pulse" />
                 <div className="absolute -inset-1 md:-inset-2 border border-sky-400/40 rounded-full" />
                 
                 {/* The Circular Container */}
                 <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#1a365d] shadow-[0_0_30px_rgba(14,165,233,0.3)] bg-black/40 z-10">
                    <img 
                      src={item.gif} 
                      alt={item.label} 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
                    />
                    
                    {/* Viewfinder Lens Overlay */}
                    <div className="absolute inset-0 border-[6px] md:border-[8px] border-[#1a365d]/80 rounded-full" />
                    <div className="absolute inset-0 border border-white/10 rounded-full" />
                 </div>

                 {/* Top-Right Status Pulse */}
                 <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-[#1a365d] rounded-full flex items-center justify-center border border-white/20 z-20">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-sky-400 animate-pulse" />
                 </div>
              </div>

              {/* 2. TEXT CONTENT */}
              <div className="relative z-10 space-y-3 md:space-y-4">
                <span className="text-sky-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-60">{item.id}</span>
                <div className="space-y-1">
                   <p className={`${item.color} text-4xl md:text-5xl font-[1000] tracking-tighter italic leading-none`}>{item.val}</p>
                   <h4 className="text-white text-lg md:text-xl font-[1000] uppercase tracking-tight">{item.label}</h4>
                </div>
                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-[240px] mx-auto">
                   {item.desc}
                </p>
              </div>

              {/* 3. TECHNICAL FOOTER */}
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/5 w-full relative z-10">
                 <div className="flex items-center justify-between mb-4">
                    <span className="text-white/20 text-[8px] md:text-[9px] font-black uppercase tracking-widest italic">Data Convergence</span>
                    <TrendingUp size={14} className="text-sky-500" />
                 </div>
                 
                 {/* Mini Outcome Sparkline */}
                 <svg className="w-full h-8 overflow-visible opacity-40">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                      d="M0 20 Q 30 5, 60 15 T 120 10 T 180 20 T 240 5"
                      fill="none"
                      stroke={cyan}
                      strokeWidth="2"
                    />
                 </svg>
              </div>

              {/* AMBIENT BACKGROUND GLOW */}
              <div className="absolute -bottom-20 -right-20 w-32 h-32 md:w-48 md:h-48 bg-sky-500/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none group-hover:bg-sky-500/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROI CAPTION - Responsive Pill */}
        <div className="mt-12 md:mt-20 flex justify-center">
           <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 md:px-10 py-4 md:py-5 rounded-[25px] md:rounded-full bg-[#f8fafc] border border-gray-100 shadow-sm text-center">
              <ShieldCheck size={18} className="text-[#1a365d] shrink-0" />
              <p className="text-[#1a365d] text-[10px] md:text-[11px] font-black uppercase tracking-widest leading-tight">
                All Outcomes <span className="text-sky-500">Validated</span> Through Post-Session Performance Reviews
              </p>
           </div>
        </div>

      </div>
    </section>
  )
}