"use client"

import { motion } from "framer-motion"
import { 
  Rocket, Building, Building2, Users, 
  Heart, Lightbulb, UserCheck, Search, 
  Settings, Play, BarChart3, ChevronRight, Target
} from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CorporateProcess() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const idealFor = [
    { label: "Startups", icon: <Rocket size={16} />, code: "STR-01" },
    { label: "SMEs", icon: <Building size={16} />, code: "SME-02" },
    { label: "Enterprises", icon: <Building2 size={16} />, code: "ENT-03" },
    { label: "Leadership", icon: <UserCheck size={16} />, code: "EXEC-04" },
    { label: "Strategic Teams", icon: <Target size={16} />, code: "STRAT-05" },
    { label: "Innovation", icon: <Lightbulb size={16} />, code: "INN-06" },
    { label: "Engagement", icon: <Users size={16} />, code: "TEAM-07" },
  ]

  const flow = [
    {
      step: "01",
      title: "Consultation",
      desc: "Deep-dive into your team goals and strategic bottlenecks.",
      status: "Alignment",
      icon: <Search size={20} />
    },
    {
      step: "02",
      title: "Calibration",
      desc: "Custom-built lab experience and protocol engineering.",
      status: "Engineering",
      icon: <Settings size={20} />
    },
    {
      step: "03",
      title: "Facilitation",
      desc: "Live Strategic Chess session execution at your office or our studio.",
      status: "Active",
      icon: <Play size={20} />
    },
    {
      step: "04",
      title: "Analytics",
      desc: "Impact reporting, team feedback, and strategic wrap-up.",
      status: "Results",
      icon: <BarChart3 size={20} />
    }
  ]

  return (
    <div className="space-y-16 md:space-y-32 py-16 md:py-24 bg-white font-sans overflow-hidden px-4 sm:px-6">
      
      {/* 7. IDEAL FOR: STRATEGIC MATRIX */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Target Profiles
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Ideal for <span style={{ color: cyan }}>High-Performers.</span>
          </motion.h2>
        </div>

        {/* Responsive Flex/Grid for Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {idealFor.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative px-6 py-5 md:px-8 md:py-6 rounded-[24px] md:rounded-[30px] bg-[#f8fafc] border border-slate-100 flex items-center gap-4 hover:bg-[#1a365d] hover:border-[#1a365d] hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-[#1a365d] flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-all shrink-0">
                {item.icon}
              </div>
              <div>
                 <p className="text-[#1a365d] text-base md:text-lg font-[1000] uppercase tracking-tight group-hover:text-white transition-colors">{item.label}</p>
                 <div className="flex items-center gap-2 mt-1">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest group-hover:text-sky-400">{item.code}</span>
                    <div className="w-1 h-1 rounded-full bg-sky-500 opacity-40" />
                    <span className="text-[8px] font-black text-sky-500 uppercase tracking-widest">100% Match</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. EVENT FLOW: PROTOCOL TRACK */}
      <section className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16 md:mb-20">
          <h3 className="text-sky-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Operational Flow</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">How the <br className="hidden lg:block" /> <span style={{ color: cyan }}>Lab Operates.</span></h2>
        </div>

        {/* THE TRACK - Responsive Line Logic */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Connecting Line - Desktop Horizontal */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-slate-100 hidden lg:block -z-10" />
          
          {/* Connecting Line - Tablet/Mobile Vertical (Only visible on smaller screens) */}
          <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-slate-100 lg:hidden -z-10" />

          {flow.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group pl-20 lg:pl-0"
            >
              {/* Step Circle - Adjusted for Mobile Stacking */}
              <div className="absolute left-0 lg:relative w-20 h-20 rounded-[24px] md:rounded-[30px] bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-8 z-10 group-hover:border-sky-500 transition-all duration-500">
                 <div className="absolute -top-3 -right-3 bg-[#1a365d] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                    {step.step}
                 </div>
                 <div className="text-[#1a365d] group-hover:text-sky-500 transition-colors">
                    {step.icon}
                 </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-sky-500 text-[9px] font-black uppercase tracking-widest">{step.status}</span>
                 </div>
                 <h4 className="text-[#1a365d] text-xl font-[1000] uppercase tracking-tight">{step.title}</h4>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed md:pr-4">{step.desc}</p>
              </div>

              {/* Technical Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                 <Target size={12} className="text-slate-400" />
                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Protocol Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BACKGROUND DOT GRID (Visible on all) */}
        <div className="absolute inset-0 opacity-[0.03] -z-20 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '30px 30px' }} />
      </section>

      {/* FINAL TRANSITION TO CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a 
          href={getWhatsAppUrl("Hi Chessmatic! I'd like to book an initial consultation for our corporate team's chess strategy workshop.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center gap-3 text-[#1a365d] font-black uppercase text-[10px] md:text-xs tracking-[0.3em] border-b-2 border-sky-500 pb-1 hover:text-sky-500 hover:gap-5 transition-all group cursor-pointer">
            Start your consultation
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </motion.div>

    </div>
  )
}