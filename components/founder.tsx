"use client"

import { Linkedin, MapPin, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function FounderSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: COMPACT VISUAL */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-full rounded-[32px] overflow-hidden border-4 border-gray-100 shadow-xl max-w-sm mx-auto aspect-[4/5]"
            >
              <img 
                src="/wagish-action.png" 
                alt="Wagish - Founder of Chessmatic" 
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a365d]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-white text-[9px] font-black uppercase tracking-widest">Director & Founder</span>
                </div>
              </div>
            </motion.div>

            {/* DECORATIVE DOT GRID */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-[0.08] -z-10 hidden md:block" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '16px 16px' }} />
          </div>

          {/* RIGHT SIDE: THE BIO & ECOSYSTEM */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-center lg:text-left"
            >
              <div className="inline-flex items-center self-center lg:self-start bg-[#f1f3f4] rounded-full p-1 border border-gray-200">
                <span className="bg-white px-5 py-1 rounded-full text-[#1a365d] text-[9px] font-black tracking-[0.2em] uppercase shadow-sm">
                  The Founder
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-[1000] text-[#1a365d] tracking-tighter leading-none uppercase italic">
                Meet <span style={{ color: cyan }}>Wagish.</span>
              </h2>

              <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Wagish is the Founder of <span className="text-[#1a365d] font-bold">Chessmatic</span> and the Director of <span className="text-[#1a365d] font-bold">Intchess</span>. In Singapore, he pioneers high-performance adult chess coaching and tactical masterclasses.
                </p>
                
                <p>
                  With years of competitive chess expertise and leadership coaching, Wagish champions a structured standard: <span className="text-sky-600 italic font-black">"A sharper strategic mind backed by deep calculation, positional foresight, and calm composure."</span>
                </p>

                <p>
                  He offers comprehensive programs in Chess across private 1-on-1 lessons, group workshops, online batches, and corporate engagements at our <span className="text-[#1a365d] font-bold underline decoration-sky-500 decoration-2 underline-offset-4">Woodlands Studio</span>.
                </p>
              </div>
            </motion.div>

            {/* COMPACT STATS & INFO STRIP */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-[#f8fafc] rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-sky-500" />
                  <div>
                    <p className="text-[#1a365d] text-sm font-[1000] leading-tight">Intchess</p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-wider">Director</p>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-slate-200" />

                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-sky-500" />
                  <div>
                    <p className="text-[#1a365d] text-sm font-[1000] leading-tight">Woodlands</p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-wider">Singapore Studio</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <a 
                  href="https://www.linkedin.com/in/wagish-chessmatic" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Wagish LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#1a365d] text-white flex items-center justify-center hover:bg-sky-500 transition-all shadow-md active:scale-95"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}