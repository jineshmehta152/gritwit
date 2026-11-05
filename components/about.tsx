"use client"

import { motion } from "framer-motion"
import { Target, MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function AboutSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: OVERLAPPING VISUALS (Responsive Layout) */}
          <div className="relative mb-16 lg:mb-0">
            {/* Top Image (The "Mind") */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 w-[85%] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-8 border-gray-50 shadow-2xl"
            >
              <img 
                src="/8.png" 
                alt="Strategic Chess Focus" 
                className="w-full h-auto grayscale-[0.2]"
              />
            </motion.div>

            {/* Bottom Image (Tactical Focus) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-12 -right-2 md:-right-4 z-20 w-[60%] rounded-[20px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white shadow-2xl"
            >
              <img 
                src="/5.png" 
                alt="Tactical Calculation Analysis" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* DECORATIVE SUCCESS BADGE (Responsive) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-10 -left-2 md:-left-6 z-30 bg-white p-3 md:p-5 rounded-2xl md:rounded-[28px] shadow-2xl border border-gray-100 flex items-center gap-3 md:gap-4"
            >
              <div className="bg-sky-500 p-2 md:p-3 rounded-xl shadow-lg">
                <Target className="text-white w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="pr-2">
                <p className="text-[#1a365d] text-lg md:text-xl font-black leading-none">100%</p>
                <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1">Focus Rate</p>
              </div>
            </motion.div>

            {/* DOT GRID (Desktop Only) */}
            <div className="absolute -bottom-20 -left-10 w-40 h-40 opacity-[0.1] -z-10 hidden md:block" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '16px 16px' }} />
          </div>

          {/* RIGHT SIDE: CONTENT & MISSION */}
          <div className="flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="inline-flex items-center self-center lg:self-start bg-[#f1f3f4] rounded-full p-1 border border-gray-200">
                <span className="bg-white px-4 md:px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-black tracking-[0.25em] uppercase shadow-sm">
                  Our Methodology
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-[1.1] md:leading-[0.95] uppercase italic">
                About the <br className="hidden sm:block" />
                <span style={{ color: cyan }}>Strategic Lifestyle.</span>
              </h2>

              <div className="space-y-4 text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  At <span className="text-[#1a365d] font-bold">Chessmatic</span>, we believe chess is more than just a game—it’s a powerful lab for building elite confidence, sharpening tactical calculation, and fostering mental resilience.
                </p>
                <p>
                  We bring a modern chess coaching academy to Singapore focusing on <span className="text-[#1a365d] font-bold">strategic mastery, critical thinking, and cognitive endurance</span>. Our curriculum is designed not just to teach the fundamentals, but to inspire critical performance on the board and beyond.
                </p>
              </div>
            </motion.div>

            {/* KEY POINTS LIST (Added for better mobile scannability) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
               {[
                 "Executive Decision Making",
                 "Tactical Pattern Recognition",
                 "Mental Endurance Labs",
                 "Social Strategic Growth"
               ].map((point, i) => (
                 <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                    <span className="text-[#1a365d] text-xs md:text-sm font-bold">{point}</span>
                 </div>
               ))}
            </div>

            {/* CTA BUTTON */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I would like to connect with a coach and learn more about your strategic methodology.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  style={{ backgroundColor: "#25D366" }}
                  className="w-full sm:w-auto hover:bg-[#20ba59] text-white px-8 md:px-10 py-6 md:py-7 rounded-full text-sm md:text-md font-bold shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={18} className="fill-current" />
                  Connect with a Coach (WhatsApp)
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}