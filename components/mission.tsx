"use client"

import { Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function MissionVision() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-4 sm:mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Our Core Purpose
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none"
          >
            Strategy with <span style={{ color: cyan }}>Intention.</span>
          </motion.h2>
        </div>

        {/* MISSION & VISION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 lg:gap-20 max-w-5xl mx-auto">
          
          {/* CARD 01: MISSION (Sky Blue Theme) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center"
          >
            {/* The "Tray" Base */}
            <div className="absolute inset-x-0 bottom-0 h-[80%] sm:h-[85%] rounded-[30px] sm:rounded-[40px] bg-sky-500 shadow-2xl shadow-sky-500/20" />
            
            {/* White Content Card */}
            <div className="relative z-10 w-[92%] sm:w-[90%] bg-white rounded-[25px] sm:rounded-[35px] p-8 sm:p-10 mb-6 sm:mb-8 shadow-xl border border-gray-50 flex flex-col items-center text-center h-full">
              <div className="mb-6 p-4 bg-sky-50 rounded-2xl">
                <Target size={32} className="text-sky-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tighter mb-4">Our Mission</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                To empower adults and corporate teams with strategic clarity, tactical calculation mastery, and calm decision-making through world-class chess coaching.
              </p>
            </div>

            {/* Bottom Number Tag */}
            <div className="relative z-10 bg-white/20 backdrop-blur-md px-5 sm:px-6 py-2 rounded-full border border-white/30 mb-4">
              <span className="text-white font-black text-xs sm:text-sm tracking-widest">01</span>
            </div>
          </motion.div>

          {/* CARD 02: VISION (Navy Theme) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* The "Tray" Base */}
            <div className="absolute inset-x-0 bottom-0 h-[80%] sm:h-[85%] rounded-[30px] sm:rounded-[40px] bg-[#1a365d] shadow-2xl shadow-[#1a365d]/20" />
            
            {/* White Content Card */}
            <div className="relative z-10 w-[92%] sm:w-[90%] bg-white rounded-[25px] sm:rounded-[35px] p-8 sm:p-10 mb-6 sm:mb-8 shadow-xl border border-gray-100 flex flex-col items-center text-center h-full">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl">
                <Lightbulb size={32} className="text-[#1a365d]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tighter mb-4">Our Vision</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                To lead adult chess education across Singapore by creating an inspiring academy where tactical precision, cognitive endurance, and strategic foresight are mastered.
              </p>
            </div>

            {/* Bottom Number Tag */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md px-5 sm:px-6 py-2 rounded-full border border-white/10 mb-4">
              <span className="text-white font-black text-xs sm:text-sm tracking-widest">02</span>
            </div>
          </motion.div>

        </div>

        {/* VALUE PILLS */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-2 sm:gap-4">
           {['Strategic Depth', 'Tactical Mastery', 'Discipline', 'Community'].map((val, i) => (
             <motion.span 
               key={i} 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="px-4 sm:px-6 py-2 rounded-full border border-gray-200 text-[#1a365d] text-[8px] sm:text-[10px] font-black uppercase tracking-widest bg-white shadow-sm"
             >
               {val}
             </motion.span>
           ))}
        </div>
      </div>
    </section>
  )
}