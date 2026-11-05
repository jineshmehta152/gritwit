"use client"

import { Check, Users, Shield, Trophy, Activity, Building2, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function ProgramsOverview() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const programs = [
    {
      id: "/01",
      level: "FOUNDATIONS & LOGIC",
      title: "Beginner Foundations",
      description: "Master essential rules, board geometry, core tactical motifs, piece coordination, and fundamental checkmating patterns.",
      motto: "“BUILD THE TACTICAL INTUITION THAT ANCHORS EVERY WINNING GAME.”",
      features: [
        "Core piece coordination & board visualization",
        "Fundamental tactical patterns (pins, forks, skewers)",
        "Essential opening principles without rote memorization",
        "Endgame fundamentals & king activity"
      ],
      footerIcon: <Shield size={18} className="text-sky-500" />,
      footerText: "Ideal for beginners and adult returners.",
      image: "/adult1.jpg",
      icon: <Shield size={20} className="text-white" />
    },
    {
      id: "/02",
      level: "TACTICAL & STRATEGIC DEPTH",
      title: "Intermediate Mastery",
      description: "Structured adult-focused chess designed to establish deep positional understanding, calculation velocity, and custom repertoire.",
      motto: "“FROM RECREATIONAL LOGIC TO MASTER-LEVEL TOURNAMENT EXECUTION.”",
      features: [
        "Positional evaluation & strategic pawn structures",
        "Deep tactical calculation & candidate moves",
        "Personalized opening repertoire with White & Black",
        "Complex rook and minor piece endgames"
      ],
      footerIcon: <Trophy size={18} className="text-sky-500" />,
      footerText: "Customized for competitive players & club rated adults.",
      image: "/7.png",
      icon: <Trophy size={20} className="text-white" />
    },
    {
      id: "/03",
      level: "CORPORATE & EXECUTIVE",
      title: "Executive Strategic Labs",
      description: "High-impact chess masterclasses for leaders and corporate teams connecting board strategy to leadership, risk mitigation, and execution.",
      motto: "“TRANSFORM BOARDROOM DECISION-MAKING THROUGH 64 SQUARES OF LOGIC.”",
      features: [
        "Strategic foresight & resource allocation",
        "High-stakes composure under time limits",
        "Interactive team tournaments & simultaneous exhibitions",
        "Bespoke workshops at your office or Woodlands studio"
      ],
      footerIcon: <Building2 size={18} className="text-sky-500" />,
      footerText: "Customized for executive leadership & corporate teams.",
      image: "/corp-strategy.jpg",
      icon: <Building2 size={20} className="text-white" />
    }
  ]

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              The Programs
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Training <span style={{ color: cyan }}>Curriculum.</span>
          </h2>
        </div>

        {/* 3-COLUMN PROGRAM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white rounded-[50px] overflow-hidden border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(26,54,93,0.08)] hover:border-sky-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE HEADER VIEWPORT */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/90 via-[#1a365d]/20 to-transparent" />
                
                {/* LIVE STATUS OVERLAY */}
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-white text-[8px] font-black uppercase tracking-widest">Lab Active</span>
                </div>

                {/* BOTTOM LEFT LABEL */}
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-500 flex items-center justify-center border border-white/20 shadow-xl group-hover:rotate-6 transition-transform">
                    {prog.icon}
                  </div>
                  <div>
                    <span className="text-sky-400 text-[10px] font-[1000] tracking-widest uppercase mb-1 block">
                      {prog.level}
                    </span>
                    <h3 className="text-white text-2xl font-[1000] tracking-tight uppercase leading-none">{prog.title}</h3>
                  </div>
                </div>
              </div>

              {/* CONTENT BODY */}
              <div className="p-10 flex-1 flex flex-col relative">
                {/* Subtle Background Numbering */}
                <span className="absolute top-10 right-10 text-slate-50 text-7xl font-[1000] pointer-events-none -z-10 select-none">
                  {prog.id}
                </span>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {prog.description}
                </p>

                <p className="text-sky-600 text-xs font-[1000] tracking-wide leading-relaxed mb-10 uppercase italic border-l-2 border-sky-500/30 pl-4">
                  {prog.motto}
                </p>

                {/* PROTOCOL FEATURE LIST */}
                <div className="space-y-4 mb-12">
                  <span className="text-slate-300 text-[9px] font-black uppercase tracking-[0.3em] block mb-2">Protocol Inclusions</span>
                  {prog.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-lg bg-sky-50 flex items-center justify-center group-hover/item:bg-sky-500 transition-colors">
                        <Check size={12} className="text-sky-500 group-hover/item:text-white transition-colors" strokeWidth={4} />
                      </div>
                      <span className="text-[#1a365d] text-[13px] font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* OPERATIONAL FOOTER BOX & WHATSAPP BUTTON */}
                <div className="mt-auto space-y-4">
                  <div className="bg-[#f8fafc] rounded-3xl p-5 border border-slate-100 flex items-start gap-4 relative overflow-hidden">
                    {/* Technical Dot Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                         style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
                    
                    <div className="mt-1 relative z-10">{prog.footerIcon}</div>
                    <p className="text-[#1a365d] text-[11px] font-[1000] uppercase tracking-wider leading-relaxed opacity-70 relative z-10">
                      {prog.footerText}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hi Chessmatic! I'd like to book / enquire about the ${prog.title} (${prog.level}) curriculum. Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button className="w-full h-12 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-[1000] uppercase tracking-widest text-[11px] shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                      <MessageCircle size={16} className="fill-current" />
                      Book {prog.title}
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION CTA */}
        <div className="mt-20 text-center">
           <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
             Strategy • Performance • <span className="text-[#1a365d]">The Lab Standard</span>
           </p>
        </div>

      </div>
    </section>
  )
}