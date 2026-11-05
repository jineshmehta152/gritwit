"use client"

import { Users, Building2, UserCheck, ArrowRight, Zap, MessageCircle, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function WhoWeServe() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const segments = [
    {
      id: "SEGMENT 01",
      group: "Adults",
      title: "Executive Performance",
      desc: "For those looking to sharpen their tactical mind, calculation speed, and calm composure under clock pressure.",
      image: "/exe.png",
      icon: <UserCheck className="w-5 h-5 text-sky-500" />,
      segments: ["Professionals", "Beginners", "Hobby Players"],
      benefit: "Decision Logic",
      metric: "+85%",
      ctaText: "Book Executive Track",
      href: "/adult-classes",
      whatsappMsg: "Hi Chessmatic! I'd like to book / enquire about the Executive Performance track for Adults."
    },
    {
      id: "SEGMENT 02",
      group: "Corporate Teams",
      title: "Tactical Synergy",
      desc: "Custom-built labs for modern organizations focused on team alignment, strategic leadership, and collaborative problem solving.",
      image: "/comp.png",
      icon: <Building2 className="w-5 h-5 text-rose-500" />,
      segments: ["Leadership Labs", "Team Collaboration", "Strategic Alignment"],
      benefit: "Culture ROI",
      metric: "High",
      ctaText: "Book Corporate Lab",
      href: "/corporate",
      whatsappMsg: "Hi Chessmatic! I'd like to book / enquire about Tactical Synergy corporate workshops."
    },
    {
      id: "SEGMENT 03",
      group: "Community & Social",
      title: "Modern Connections",
      desc: "Curated social experiences for individuals who value intellectual growth and meaningful networking.",
      image: "/connect.jpg",
      icon: <Users className="w-5 h-5 text-amber-500" />,
      segments: ["Curated Events", "Social Experiences", "Elite Networking"],
      benefit: "Social Capital",
      metric: "Top Tier",
      ctaText: "Join Community",
      href: "/contact",
      whatsappMsg: "Hi Chessmatic! I'd like to enquire about joining the Modern Connections chess & social community."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 md:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] md:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Target Segments
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none"
          >
            Who Trains in {" "}
            <span style={{ color: cyan }}>The Lab.</span>
          </motion.h2>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {segments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-[35px] md:rounded-[45px] p-2 md:p-3 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-56 md:h-64 w-full rounded-[30px] md:rounded-[38px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-[#1a365d]/20 to-transparent" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full shadow-xl flex items-center gap-2">
                   <div className="bg-[#f1f3f4] p-1 rounded-md">{item.icon}</div>
                   <span className="text-[#1a365d] text-[8px] md:text-[10px] font-black uppercase tracking-widest">{item.group}</span>
                </div>

                <div className="absolute bottom-5 left-6 md:bottom-6 md:left-8">
                   <p className="text-white/40 text-[8px] md:text-[9px] font-black tracking-widest uppercase mb-1">{item.id}</p>
                   <h3 className="text-white text-xl md:text-2xl font-[1000] tracking-tight">{item.title}</h3>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                {/* TECHNICAL DOT GRID OVERLAY (Only visible on card hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500" 
                     style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

                <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-8 relative z-10">
                  {item.desc}
                </p>

                {/* SEGMENTS LIST (Pill Style) */}
                <div className="space-y-3 mb-8 md:mb-10 relative z-10">
                   <p className="text-[#1a365d] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Key Focus Areas</p>
                   <div className="flex flex-wrap gap-2">
                      {item.segments.map((seg, idx) => (
                        <div key={idx} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-50 border border-slate-100 text-[#1a365d] text-[10px] md:text-[11px] font-bold tracking-tight group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                           {seg}
                        </div>
                      ))}
                   </div>
                </div>

                {/* DATA FOOTER */}
                <div className="mt-auto pt-4 md:pt-6 border-t border-slate-50 flex items-center justify-between relative z-10">
                   <div className="flex flex-col">
                      <span className="text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Core Benefit</span>
                      <span className="text-[#1a365d] text-[11px] md:text-xs font-black">{item.benefit}</span>
                   </div>
                   <div className="text-right">
                      <span className="text-sky-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Impact</span>
                      <div className="flex items-center gap-1 justify-end">
                         <Zap size={10} className="text-sky-500 fill-sky-500" />
                         <span className="text-[#1a365d] text-base md:text-lg font-black">{item.metric}</span>
                      </div>
                   </div>
                </div>

                {/* CTA ACTIONS */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2.5 relative z-10">
                  <a
                    href={getWhatsAppUrl(item.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 sm:h-12 rounded-2xl bg-[#1a365d] hover:bg-[#25D366] text-white font-[1000] uppercase tracking-wider text-[10px] sm:text-[11px] shadow-md hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95"
                  >
                    <MessageCircle size={15} className="fill-current text-sky-400 group-hover:text-white transition-colors" />
                    <span>{item.ctaText}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  <Link
                    href={item.href}
                    title={`Explore ${item.title}`}
                    aria-label={`Explore ${item.title} page`}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 hover:bg-sky-50 text-[#1a365d] hover:text-sky-600 border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0 shadow-sm group/link"
                  >
                    <ArrowUpRight size={16} strokeWidth={2.5} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 text-center"
        >
          <a
            href={getWhatsAppUrl("Hi Chessmatic! I'd like to join the community and find out more about your programs.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#1a365d] font-black uppercase text-[10px] md:text-xs tracking-[0.3em] border-b-2 border-sky-500 pb-1 transition-all hover:text-sky-500 hover:gap-5 group"
          >
            Join the community
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}