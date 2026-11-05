"use client"

import { Brain, Dumbbell, Building2, Users, ArrowRight, Zap, Target, Star } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function WhatMakesUsDifferent() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const features = [
    {
      title: "Adult-Focused Learning",
      desc: "Small groups designed specifically for the adult brain. We focus on strategic logic and executive decision-making.",
      icon: <Brain className="text-white w-5 h-5" />,
      iconBg: "bg-sky-500",
      tag: "PHASE 1 → ADVANCED",
      side: "left"
    },
    {
      title: "Tactical Depth & Composure",
      desc: "Our signature calculation protocol. Build sharp pattern recognition and composure while managing high-pressure tournament clocks.",
      icon: <Zap className="text-white w-5 h-5" />,
      iconBg: "bg-[#1a365d]",
      tag: "TACTICAL EXCELLENCE",
      side: "left"
    },
    {
      title: "Corporate Integration",
      desc: "High-performance labs designed for HR initiatives, team synergy, and modern leadership development.",
      icon: <Building2 className="text-white w-5 h-5" />,
      iconBg: "bg-amber-500",
      tag: "B2B SOLUTIONS",
      side: "right"
    },
    {
      title: "Premium Atmosphere",
      desc: "Train in a calm, high-end studio environment designed to simulate real-world strategic focus and tournament-grade conditions.",
      icon: <Star className="text-white w-5 h-5" />,
      iconBg: "bg-sky-400",
      tag: "MODERN LAB STANDARDS",
      side: "right"
    }
  ]

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              The Lab Difference
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none">
            What Sets <span style={{ color: cyan }}>Chessmatic</span> Apart.
          </h2>
        </div>

        {/* MAIN INTERACTIVE GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0">
          
          {/* LEFT CARDS */}
          <div className="space-y-8 lg:pr-10">
            {features.filter(f => f.side === "left").map((item, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(`Hi Chessmatic! I'd like to learn more about ${item.title} (${item.tag}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-[35px] shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100 group transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`${item.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/10 transition-transform group-hover:rotate-6`}>
                     {item.icon}
                  </div>
                  <h3 className="text-xl font-[1000] text-[#1a365d] uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-sky-500 text-[10px] font-black tracking-widest uppercase">{item.tag}</span>
                     <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px]">
                       <span>WhatsApp</span>
                       <ArrowRight size={14} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                     </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* CENTER ASSET (The anchor piece) */}
          <div className="hidden lg:flex justify-center relative py-20">
             {/* TECHNICAL DOT GRID (Behind the piece) */}
             <div className="absolute inset-0 opacity-[0.1] -z-10 flex items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full" 
                     style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '20px 20px' }} />
             </div>

             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative"
             >
                {/* Replaced illustration with a premium brand icon/knight */}
                <div className="w-56 h-72 flex items-center justify-center">
                   <img 
                     src="/central.png" // Use your logo knight or a sketch-style icon
                     alt="Chessmatic Anchor"
                     className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(26,54,93,0.15)] mix-blend-multiply"
                   />
                </div>
             </motion.div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-8 lg:pl-10">
            {features.filter(f => f.side === "right").map((item, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(`Hi Chessmatic! I'd like to learn more about ${item.title} (${item.tag}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-[35px] shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100 group transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`${item.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/10 transition-transform group-hover:rotate-6`}>
                     {item.icon}
                  </div>
                  <h3 className="text-xl font-[1000] text-[#1a365d] uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-sky-500 text-[10px] font-black tracking-widest uppercase">{item.tag}</span>
                     <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px]">
                       <span>WhatsApp</span>
                       <ArrowRight size={14} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                     </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <div className="mt-20 text-center">
          <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[10px]">
            Engineered for <span className="text-[#1a365d]">Adult Learning</span> • Optimized for <span className="text-[#1a365d]">Performance</span>
          </p>
        </div>
      </div>
    </section>
  )
}