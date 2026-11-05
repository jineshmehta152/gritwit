"use client"

import { motion } from "framer-motion"
import { ChevronRight, Brain, Heart, Briefcase, Zap, Target } from "lucide-react"

export default function BenefitsSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const benefitCategories = [
    {
      title: "Mental Benefits",
      roi: "+92% Focus",
      icon: <Brain className="text-sky-500" size={24} />,
      points: [
        "Elite Focus Depth",
        "Memory Retention Protocol",
        "Advanced Pattern Recognition",
        "Tactical Decision-making"
      ]
    },
    {
      title: "Lifestyle Benefits",
      roi: "-40% Stress",
      icon: <Heart className="text-rose-500" size={24} />,
      points: [
        "High-Value Social Interaction",
        "Executive Confidence",
        "Chronic Stress Reduction",
        "Productive Analog Hobby"
      ]
    },
    {
      title: "Professional Benefits",
      roi: "High ROI",
      icon: <Briefcase className="text-[#1a365d]" size={24} />,
      points: [
        "Strategic Logic Thinking",
        "Patience Under Pressure",
        "Deep Analytical Skills",
        "Risk Mitigation Habits"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              The Cognitive ROI
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            The <span style={{ color: cyan }}>Impact</span> of Strategy.
          </motion.h2>
        </div>

        {/* 3-COLUMN BENEFIT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group bg-white rounded-[35px] md:rounded-[45px] p-7 md:p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-sky-100 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

              <div className="relative z-10 flex justify-between items-start mb-8 md:mb-10">
                 <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 shadow-inner group-hover:bg-white group-hover:shadow-lg transition-all">
                    {cat.icon}
                 </div>
                 <div className="bg-sky-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-sky-100">
                    <span className="text-sky-600 text-[8px] sm:text-[10px] font-black italic whitespace-nowrap">{cat.roi}</span>
                 </div>
              </div>

              <h3 className="relative z-10 text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight mb-6 md:mb-8">
                {cat.title}
              </h3>

              <div className="relative z-10 space-y-4 md:space-y-5">
                {cat.points.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + (idx * 0.05) }}
                    className="flex items-center gap-3 md:gap-4 group/point"
                  >
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover/point:scale-110 transition-transform">
                      {/* FIX: Removed md:size and used className for responsiveness */}
                      <ChevronRight strokeWidth={4} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    
                    <span className="text-slate-600 text-xs md:text-sm font-bold tracking-tight group-hover/point:text-[#1a365d] transition-colors leading-tight">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity hidden sm:block">
                 <Target size={120} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER SUMMARY */}
        <div className="mt-12 md:mt-20 flex justify-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-3 md:gap-4 px-6 md:px-10 py-5 md:py-6 rounded-[30px] md:rounded-full bg-[#1a365d] shadow-2xl relative overflow-hidden group text-center md:text-left">
              <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <Zap size={18} className="text-sky-400 shrink-0" />
              <p className="text-white text-xs md:text-sm font-bold tracking-tight px-2">
                "We don't just build chess players. We build high-performance human operating systems."
              </p>
           </div>
        </div>
      </div>
    </section>
  )
}