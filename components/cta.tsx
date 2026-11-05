"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CompactCTA() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* COMPACT FLOATING CAPSULE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[50px] bg-[#f8fafc] border border-gray-100 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          
          {/* TECHNICAL DOTTED BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
               style={{ 
                 backgroundImage: `radial-gradient(#1a365d 1px, transparent 1px)`, 
                 backgroundSize: '24px 24px' 
               }} 
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* TEXT SIDE */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 mb-4 shadow-sm">
                <Sparkles size={14} className="text-sky-500" />
                <span className="text-[#1a365d] text-[10px] font-black tracking-[0.2em] uppercase">Limited Slots Available</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none mb-4">
                Ready to Join the <span style={{ color: cyan }}>Elite Lab?</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-xl">
                Experience Singapore’s premier adult chess academy where strategic logic meets tactical calculation mastery.
              </p>
            </div>

            {/* ACTION SIDE */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to join your Adult Classes at the Elite Lab. Please share schedule details.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  style={{ backgroundColor: "#25D366" }}
                  className="hover:bg-[#20ba59] text-white px-10 py-8 rounded-full text-md font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 group flex items-center gap-2"
                >
                  <MessageCircle size={18} className="fill-current" />
                  Join Adult Classes
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I would like to make a Corporate Enquiry for strategic team training.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost"
                  className="text-[#1a365d] border border-gray-300 hover:bg-white px-8 py-8 rounded-full text-md font-bold transition-all hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Corporate Enquiry
                </Button>
              </a>
            </div>
          </div>

          {/* DECORATIVE CORNER ELEMENT */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/5 rounded-full blur-3xl" />
        </motion.div>

      </div>
    </section>
  )
}