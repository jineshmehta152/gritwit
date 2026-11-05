"use client"

import { motion } from "framer-motion"
import { 
  Users, Coffee, Trophy, Globe, 
  Calendar, Clock, UserCheck, Building2, 
  ArrowRight, Zap, Sparkles, MessageCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CommunityAndSchedule() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const availability = [
    { label: "Weekday Evenings", time: "17:00 - 21:00", icon: <Clock size={18} />, tag: "AFTER WORK" },
    { label: "Weekend Classes", time: "09:00 - 21:00", icon: <Calendar size={18} />, tag: "PRIME TIME" },
    { label: "Private Bookings", time: "Custom Slots", icon: <UserCheck size={18} />, tag: "1-ON-1" },
    { label: "Corporate Sessions", time: "Flexible", icon: <Building2 size={18} />, tag: "B2B ONLY" },
    { label: "Flexi-Timings", time: "On-Demand", icon: <Zap size={18} />, tag: "ANYTIME" },
  ]

  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 bg-white font-sans overflow-hidden">
      
      {/* 8. COMMUNITY & SOCIAL ENVIRONMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              The Ecosystem
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Beyond the <span style={{ color: cyan }}>Board.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row bg-[#1a365d] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl"
        >
          {/* LEFT: SOCIAL IMAGE */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200" 
              alt="Chessmatic Community" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#1a365d]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/20">
               <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Sparkles size={14} className="text-sky-400" /> Networking Atmosphere
               </p>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center relative">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              <h3 className="text-white text-2xl md:text-3xl font-[1000] uppercase tracking-tight italic">The Elite Network.</h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                Chessmatic is a hub for like-minded achievers. Our <span className="text-white font-bold">Social Chess Evenings</span> and community tournaments foster a vibrant intellectual community that prioritizes both mastery and connection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                 {[
                   { icon: <Users size={16}/>, text: "Meet High-Achievers" },
                   { icon: <Coffee size={16}/>, text: "Friday Social Nights" },
                   { icon: <Trophy size={16}/>, text: "Community Leagues" },
                   { icon: <Globe size={16}/>, text: "Strategic Connections" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-sky-400 font-bold text-sm">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-white/80">{item.text}</span>
                   </div>
                 ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="text-sky-400 text-[9px] font-black uppercase tracking-widest">Community Impact</span>
                    <span className="text-white text-lg font-black italic">Social Capital +80%</span>
                 </div>
                 <Button variant="ghost" className="text-white hover:bg-white/5 font-black uppercase text-[10px] tracking-widest underline decoration-sky-500 underline-offset-8">
                    View Gallery
                 </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. CLASS SCHEDULE & FLEXIBILITY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* CONTENT SIDE */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200">
               <span className="bg-white px-4 md:px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
                 Availability
               </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
              Operational <br className="hidden lg:block" /> <span style={{ color: cyan }}>Windows.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              We understand the executive schedule. Our Lab operates on a multi-tier flexibility model to ensure your training never stops.
            </p>
            <div className="pt-4">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to check real-time availability and booking slots for chess coaching sessions.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={{ backgroundColor: "#25D366" }} className="w-full sm:w-auto px-10 py-7 rounded-full text-white hover:bg-[#20ba59] font-[1000] uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <MessageCircle size={18} className="fill-current" />
                  Check Real-time Slots (WhatsApp)
                </Button>
              </a>
            </div>
          </div>

          {/* DASHBOARD SIDE */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availability.map((item, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(`Hi Chessmatic! I'd like to enquire and book a slot for ${item.label} (${item.time} - ${item.tag}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${i === 0 ? "sm:col-span-2" : "col-span-1"}`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[24px] md:rounded-[35px] border border-slate-100 bg-[#f8fafc] group hover:bg-[#1a365d] transition-all duration-500 cursor-pointer h-full flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-10 h-10 rounded-xl bg-white text-[#1a365d] flex items-center justify-center shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                        {item.icon}
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-400 transition-colors">
                       {item.tag}
                     </span>
                  </div>
                  <div>
                     <h4 className="text-[#1a365d] font-[1000] uppercase text-base md:text-lg group-hover:text-white transition-colors">{item.label}</h4>
                     <p className="text-slate-400 text-xs font-bold mt-1 group-hover:text-white/50 transition-colors">{item.time}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Book via WhatsApp</span>
                     <ArrowRight size={18} className="text-sky-400" />
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL TRANSITION WAVE - Adaptive Aspect Ratio */}
      <div className="w-full mt-10">
         <svg 
           viewBox="0 0 1440 80" 
           fill="none" 
           xmlns="http://www.w3.org/2000/svg" 
           className="w-full h-auto" 
           preserveAspectRatio="none"
           style={{ minHeight: '40px' }}
          >
            <path d="M0,40 C120,70 240,10 360,40 C480,70 600,10 720,40 C840,70 960,10 1080,40 C1200,70 1320,10 1440,40 V80 H0 Z" fill="#f8fafc" />
         </svg>
      </div>

    </div>
  )
}