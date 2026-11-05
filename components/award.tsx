"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Building2, CheckCircle2, Star, Target } from "lucide-react"

export default function AwardSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-4 sm:mb-6"
          >
            <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Operational Excellence
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Certified <span style={{ color: cyan }}>Excellence.</span>
          </motion.h2>
        </div>

        {/* MAIN AWARD CARD */}
        <div className="relative rounded-[40px] md:rounded-[60px] bg-[#1a365d] p-6 sm:p-10 lg:p-20 shadow-2xl overflow-hidden group">
          
          {/* TECHNICAL DOT GRID (Higher contrast for visibility) */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(white 1.5px, transparent 1px)`, backgroundSize: '32px 32px' }} />

          {/* AMBIENT GLOWS - Responsive sizes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-sky-500/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-72 md:h-72 bg-sky-400/10 rounded-full blur-[60px] md:blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* LEFT: CERTIFICATE VISUAL */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-white group-hover:scale-[1.02] transition-transform duration-700">
                 <img 
                   src="/award.jpeg" 
                   alt="Singapore 500 SME Award 2025 - Chessmatic" 
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/30 via-transparent to-transparent" />
              </div>

              {/* FLOATING VERIFIED BADGE - Hidden on very small screens, visible on sm+ */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-5 rounded-[20px] sm:rounded-[30px] shadow-2xl flex items-center gap-2 sm:gap-4 border border-gray-100"
              >
                <div className="bg-sky-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
                   <ShieldCheck className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                   <p className="text-[#1a365d] text-[8px] sm:text-[10px] font-black uppercase tracking-widest leading-none mb-1">Status</p>
                   <p className="text-sky-500 font-bold text-xs sm:text-sm">Verified 2025</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: ACCOLADE DATA */}
            <div className="lg:col-span-7 space-y-8 md:space-y-10 order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                   <span className="text-sky-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em]">Official Recognition</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-white leading-[1.1] tracking-tight uppercase italic">
                  Singapore 500 <br /> <span style={{ color: cyan }}>SME Company.</span>
                </h3>
                
                <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Chessmatic has been awarded the prestige commercial status of a <span className="text-white font-bold underline decoration-sky-500 underline-offset-4">Singapore 500 SME Company</span> for 2025, based on elite assessments.
                </p>
              </div>

              {/* CRITERIA PROTOCOLS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                 {[
                   "Business Excellence",
                   "Quality Standards",
                   "Operational Performance",
                   "Professional Qualities"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default group/item">
                      <CheckCircle2 size={16} className="text-sky-400 group-hover/item:scale-110 transition-transform" />
                      <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
              </div>

              {/* ORGANIZATION LOGO / CREDIT */}
              <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-center lg:items-start gap-6 sm:gap-10">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                       <Building2 className="text-white opacity-50 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                       <p className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-none mb-1">Organised By</p>
                       <p className="text-white text-[10px] md:text-[11px] font-bold">ATC Association of Trade & Commerce</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                       <Star className="text-amber-400 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                       <p className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-none mb-1">Year of Issue</p>
                       <p className="text-amber-400 text-[10px] md:text-[11px] font-black tracking-widest uppercase">June 2025</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          {/* DECORATIVE CORNER TARGET - Adjusted position for mobile */}
          <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 opacity-[0.03] lg:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-1000">
             <Target size={200} className="text-white md:w-[350px] md:h-[350px]" />
          </div>
        </div>

      </div>
    </section>
  )
}