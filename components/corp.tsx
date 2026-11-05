"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, Zap, Target, Users, 
  Timer, FileText, Gift, Presentation, 
  ChevronRight, Award, MessageCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CorporateEventsGrid() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const tiers = [
    {
      id: "PRO-01",
      title: "Opening Gambit",
      focus: "Light Team Building",
      duration: "1.5 - 2 Hours",
      capacity: "Up to 30 Pax",
      image: "/corp-gambit.jpg",
      desc: "Best for lunch-and-learns or icebreakers. Uses chess as a metaphor for corporate decision-making.",
      inclusions: [
        "Corporate Strategy Keynote",
        "Hand & Brain Mini-Games",
        "Strategic Communication Drills"
      ],
      deliverable: "Strategic Decision-Making Guide",
      highlight: false
    },
    {
      id: "PRO-02",
      title: "Middle-Game Strategy",
      focus: "Departmental Alignment",
      duration: "Half-Day (4 Hours)",
      capacity: "15 - 40 Pax",
      image: "/corp-strategy.jpg",
      desc: "Our signature retreat. Blends Swiss-system tournaments with tactical consultation challenges.",
      inclusions: [
        "'Blind Spot' Team Tournament",
        "Tactical Stress-Test Workshop",
        "Facilitated Puzzle Social Hour"
      ],
      deliverable: "Team Dynamic Analysis Report",
      highlight: true // Anchored Tier
    },
    {
      id: "PRO-03",
      title: "Grandmaster Executive",
      focus: "C-Suite Performance",
      duration: "Full-Day",
      capacity: "5 - 15 Pax",
      image: "/corp-executive.jpg",
      desc: "Elite leadership alignment. Deep-dive risk profiling through simultaneous Master exhibitions.",
      inclusions: [
        "Simul Challenge vs Master",
        "Peak Performance Coaching",
        "Grandmaster Post-Mortem Debrief"
      ],
      deliverable: "Executive Wooden Gift Boxes",
      highlight: false
    }
  ]

  return (
    <section className="py-24 bg-white font-sans overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Event Protocols
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Corporate <span style={{ color: cyan }}>Bonding.</span>
          </h2>
          <p className="mt-6 text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Stop doing trust falls. Build high-performing teams through the ultimate game of strategic logic and high-pressure calculation.
          </p>
        </div>

        {/* 2. THREE-TIER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                group relative flex flex-col rounded-[45px] overflow-hidden border transition-all duration-500
                ${pkg.highlight 
                  ? "bg-[#1a365d] border-[#1a365d] shadow-[0_30px_80px_rgba(26,54,93,0.25)] lg:scale-105 z-10 text-white" 
                  : "bg-white border-slate-100 shadow-xl text-[#1a365d]"
                }
              `}
            >
              {/* PHOTO VIEWPORT */}
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/30 to-transparent" />
                
                {/* Status Badges */}
                <div className="absolute top-5 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-white text-[9px] font-black uppercase tracking-widest">{pkg.id}</span>
                </div>

                {pkg.highlight && (
                  <div className="absolute top-5 right-6 bg-[#25D366] text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                    <Zap size={10} fill="white" /> Most Popular
                  </div>
                )}

                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-sky-400 text-[10px] font-black uppercase tracking-widest block mb-1">
                    {pkg.focus}
                  </span>
                  <h3 className="text-white text-2xl font-[1000] uppercase italic leading-none">{pkg.title}</h3>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* TECHNICAL SPECS BAR */}
                  <div className={`flex gap-6 mb-8 pb-6 border-b ${pkg.highlight ? 'border-white/10' : 'border-slate-100'}`}>
                     <div className="flex items-center gap-2">
                        <Timer size={14} className={pkg.highlight ? 'text-sky-400' : 'text-slate-400'} />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{pkg.duration}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Users size={14} className={pkg.highlight ? 'text-sky-400' : 'text-slate-400'} />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{pkg.capacity}</span>
                     </div>
                  </div>

                  <p className={`text-xs sm:text-sm font-medium leading-relaxed mb-8 ${pkg.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.desc}
                  </p>

                  {/* EXPERIENCE INCLUSIONS */}
                  <div className="space-y-6 mb-8">
                    <div className="space-y-3">
                      <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${pkg.highlight ? 'text-white/40' : 'text-slate-400'}`}>Protocol Inclusions</span>
                      <ul className="space-y-2.5">
                        {pkg.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ShieldCheck size={16} className="text-sky-500 shrink-0 mt-0.5" />
                            <span className={`text-[13px] font-bold leading-tight ${pkg.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DELIVERABLE HIGHLIGHT */}
                    <div className={`p-4 sm:p-5 rounded-[22px] border ${pkg.highlight ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                       <div className="flex items-center gap-2 mb-1.5">
                          <FileText size={12} className="text-sky-500" />
                          <span className={`text-[9px] font-black uppercase tracking-widest ${pkg.highlight ? 'text-white/40' : 'text-slate-400'}`}>Key Deliverable</span>
                       </div>
                       <p className="text-xs sm:text-sm font-black italic">{pkg.deliverable}</p>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <a
                  href={getWhatsAppUrl(`Hi Chessmatic! I would like to request a proposal for the Corporate Event: ${pkg.title} (${pkg.focus} - ${pkg.duration}, ${pkg.capacity}). Please provide customization and quote options.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6"
                >
                  <Button 
                    style={{ backgroundColor: pkg.highlight ? "#25D366" : navy }}
                    className="w-full h-14 rounded-full text-white font-[1000] uppercase tracking-widest text-[11px] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 group/btn flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} className="fill-current" />
                    Request Proposal
                    <ChevronRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>

              {/* TECHNICAL DOT GRID (Only in Navy Card) */}
              {pkg.highlight && (
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* 3. MARKETING QUOTE FOOTER */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-4 px-10 py-6 rounded-full bg-[#f8fafc] border border-slate-100 relative overflow-hidden group max-w-4xl mx-auto">
              <Presentation size={24} className="text-sky-500 shrink-0" />
              <p className="text-[#1a365d] text-sm md:text-lg font-bold italic leading-relaxed">
                “Teach your team how to calculate risk, communicate under pressure, and manage workplace stress through the ultimate game of strategy.”
              </p>
           </div>
        </div>

      </div>
    </section>
  )
}