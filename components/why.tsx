"use client"

import { CheckCircle2, Brain, Activity, Users, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const advantages = [
    {
      id: "ELITE LOGIC",
      title: "Strategic Edge",
      program: "Adult Chess",
      description: "We rewire your decision-making habits for high-stakes professional environments.",
      image: "/5.png",
      benefits: ["Tactical Mastery", "Calculated Risk"],
      metricLabel: "Logic Gain",
      metricValue: 85,
      accent: "#3b82f6",
      icon: <Brain className="w-4 h-4" />
    },
    {
      id: "CALCULATION DEPTH",
      title: "Pressure Control",
      program: "Tactical Chess",
      description: "Build razor-sharp calculation velocity, pattern recognition, and calm composure under time controls.",
      image: "/10.png",
      benefits: ["Tactical Velocity", "Composure"],
      metricLabel: "Focus Depth",
      metricValue: 88,
      accent: "#0ea5e9",
      icon: <Activity className="w-4 h-4" />
    },
    {
      id: "CULTURE ROI",
      title: "Team Synergy",
      program: "Corporate Strategy",
      description: "Interactive tactical challenges that foster deep communication and team alignment.",
      image: "/comp.png",
      benefits: ["Team Synergy", "Strategic Alignment"],
      metricLabel: "Culture ROI",
      metricValue: 95,
      accent: "#f43f5e",
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "SOCIAL CAPITAL",
      title: "Elite Network",
      program: "Chess Community",
      description: "Join a community of high-achievers and modern thinkers focused on holistic growth.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
      benefits: ["Social Sparring", "Meaningful Ties"],
      metricLabel: "Network Power",
      metricValue: 80,
      accent: "#fbbf24",
      icon: <Globe className="w-4 h-4" />
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* CENTERED SECTION HEADER */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#1a365d]/5 rounded-full p-1 border border-[#1a365d]/10 mb-6"
          >
            <span className="bg-[#1a365d] px-6 md:px-8 py-2 rounded-full text-white text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-lg">
              The Advantage
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none"
          >
            Why the Modern Thinker <br className="hidden sm:block" />
            <span style={{ color: cyan }}>Chooses Chessmatic.</span>
          </motion.h2>
        </div>

        {/* 2-COLUMN GRID OF HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 group"
            >
              {/* IMAGE SECTION */}
              <div className="w-full md:w-[40%] relative h-52 md:h-auto min-h-[220px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1a365d]/40 to-transparent" />
                
                {/* FLOATING ID BADGE */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                  <span className="text-[#1a365d] p-1 bg-[#1a365d]/5 rounded-full">{item.icon}</span>
                  <span className="text-[#1a365d] text-[8px] md:text-[9px] font-[1000] tracking-widest">{item.id}</span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="w-full md:w-[60%] p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div>
                    <span className="text-sky-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 block">Through {item.program}</span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-[1000] text-[#1a365d] tracking-tight">{item.title}</h3>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3 pt-1">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
                        <CheckCircle2 size={12} className="text-sky-500" />
                        <span className="text-[#1a365d] text-[10px] md:text-[11px] font-bold tracking-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HORIZONTAL METRIC FOOTER */}
                <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-slate-50">
                  <div className="flex justify-between items-end mb-2.5">
                    <span className="text-[9px] font-black text-[#1a365d] uppercase tracking-wider">{item.metricLabel}</span>
                    <span className="text-[#1a365d] text-sm font-black">+{item.metricValue}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.metricValue}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      style={{ backgroundColor: item.accent }}
                      className="h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION FOOTER CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <button className="flex items-center gap-3 text-[#1a365d] font-black uppercase text-[10px] md:text-xs tracking-[0.25em] border-b-2 border-sky-500 pb-1 transition-all hover:text-sky-500 hover:gap-5 group">
            Discover the method
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}