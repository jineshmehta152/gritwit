"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Sparkles, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CompactCTA() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* COMPACT PILL CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[50px] sm:rounded-[80px] bg-[#1a365d] p-8 md:p-16 shadow-2xl overflow-hidden group"
        >
          
          {/* TECHNICAL DOT GRID OVERLAY */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
               style={{ 
                 backgroundImage: `radial-gradient(white 1px, transparent 1px)`, 
                 backgroundSize: '24px 24px' 
               }} 
          />

          {/* DYNAMIC GLOW BACKGROUND */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* TEXT CONTENT */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-2">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">Active Lab Slots Available</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter leading-none">
                Ready to Join the <br />
                <span style={{ color: cyan }}>Strategic Elite?</span>
              </h2>
              
              <p className="text-slate-300 font-medium text-lg max-w-xl">
                Experience Singapore’s premier adult chess academy where tactical calculation meets strategic foresight.
              </p>
            </div>

            {/* BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I would like to join a class at Chessmatic. Please share available tracks.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  style={{ backgroundColor: "#25D366" }}
                  className="hover:bg-[#20ba59] text-white px-10 py-8 rounded-full text-md font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 group/btn flex items-center gap-2"
                >
                  <MessageCircle size={20} className="fill-current" />
                  Join a Class
                  <ArrowRight className="ml-1 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I would like to book a Corporate strategic thinking workshop for my company.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost"
                  className="text-white border border-white/20 hover:bg-white/10 px-8 py-8 rounded-full text-md font-black uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Book Corporate
                </Button>
              </a>
            </div>
          </div>

          {/* FLOATING STATUS PILL (Hidden on Mobile) */}
          <div className="absolute bottom-8 right-12 hidden xl:flex items-center gap-6 opacity-30">
             <div className="flex items-center gap-2">
                <Target size={12} className="text-sky-400" />
                <span className="text-white text-[8px] font-black uppercase tracking-widest">Tactics</span>
             </div>
             <div className="flex items-center gap-2">
                <Zap size={12} className="text-sky-400" />
                <span className="text-white text-[8px] font-black uppercase tracking-widest">Strategy</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}