"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle, Zap, Target, ArrowRight } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function ContactCTA() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-20 bg-white font-sans flex justify-center">
      <div className="px-6 w-full max-w-5xl">
        
        {/* COMPACT RECTANGLE CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[45px] md:rounded-[60px] bg-[#1a365d] p-10 md:p-14 shadow-[0_20px_60px_rgba(26,54,93,0.2)] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 group"
        >
          
          {/* TECHNICAL DOT GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

          {/* LEFT: STRATEGIC HEADLINE */}
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
               <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
               <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Support Protocol: Active</span>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter leading-none italic uppercase">
                Need a Faster <span style={{ color: cyan }}>Response?</span>
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-3">
                Speak directly with a lead strategist via WhatsApp.
              </p>
            </div>
          </div>

          {/* RIGHT: SIDE-BY-SIDE ACTION BUTTONS */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            {/* PRIMARY: WHATSAPP */}
            <a
              href={getWhatsAppUrl("Hi Chessmatic! I need a fast response regarding coaching / training programs.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                style={{ backgroundColor: "#25D366" }}
                className="h-14 px-10 rounded-full text-[11px] font-[1000] uppercase tracking-widest text-white hover:bg-[#20ba59] transition-all shadow-xl active:scale-95 flex items-center gap-3"
              >
                <MessageCircle size={18} fill="white" />
                WhatsApp Now
              </Button>
            </a>

            {/* SECONDARY: CLASSES */}
            <a
              href={getWhatsAppUrl("Hi Chessmatic! I'd like to book adult chess coaching sessions.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="h-14 px-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-[11px] font-[1000] uppercase tracking-widest transition-all active:scale-95 flex items-center gap-3"
              >
                Book Classes
                <ArrowRight size={16} className="text-sky-400" />
              </Button>
            </a>
          </div>

          {/* DECORATIVE CORNER ELEMENT */}
          <div className="absolute -bottom-6 -right-6 opacity-5 pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
             <Target size={180} className="text-white" />
          </div>

        </motion.div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <div className="mt-12 text-center">
           <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[9px]">
             Strategy • Composure • Performance • <span className="text-[#1a365d]">The Lab</span>
           </p>
        </div>

      </div>
    </section>
  )
}