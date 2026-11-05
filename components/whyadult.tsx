"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Building2, Users, Shield, Star } from "lucide-react"

export default function CompactDifferentiation() {
  const points = [
    {
      id: "1",
      title: "Adult-Focused Lab",
      desc: "Small groups designed for the adult brain. We focus on strategic logic and executive decision-making.",
      color: "bg-[#1a365d]", // Navy
      icon: <Brain size={16} />,
      side: "left"
    },
    {
      id: "2",
      title: "Master-Led Coaching",
      desc: "Singapore’s premier adult training under titled coaches. Build opening mastery, deep calculation, and endgame technique.",
      color: "bg-sky-500", // Cyan
      icon: <Zap size={16} />,
      side: "right"
    },
    {
      id: "3",
      title: "Corporate Synergy",
      desc: "Interactive experiences translating chessboard tactics into actionable leadership ROI and strategic team synergy.",
      color: "bg-indigo-500", // Indigo
      icon: <Building2 size={16} />,
      side: "left"
    },
    {
      id: "4",
      title: "Social Networking",
      desc: "Beyond training, we provide a hub for networking. Join Friday social events with high-achievers.",
      color: "bg-amber-500", // Amber
      icon: <Users size={16} />,
      side: "right"
    },
    {
      id: "5",
      title: "Beginner-Friendly",
      desc: "Zero experience required. A safe, structured entry point into the world of strategy for new players.",
      color: "bg-rose-500", // Rose
      icon: <Shield size={16} />,
      side: "left"
    },
    {
      id: "6",
      title: "Premium Studio",
      desc: "Train in a high-end Woodlands studio designed to simulate real-world strategic focus and clarity.",
      color: "bg-emerald-500", // Emerald
      icon: <Star size={16} />,
      side: "right"
    }
  ]

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-100 mb-4">
            <span className="bg-white px-6 py-1 rounded-full text-[#1a365d] text-[9px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              The Chessmatic Edge
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            A Better Way <span className="text-sky-500">To Train.</span>
          </h2>
        </div>

        {/* COMPACT ALTERNATING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`
                relative flex items-center p-6 rounded-[30px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300
                ${point.side === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'}
              `}
            >
              {/* ACCENT STRIP */}
              <div className={`absolute top-6 bottom-6 w-1 rounded-full ${point.color} opacity-20 ${point.side === 'left' ? 'left-0' : 'right-0'}`} />

              {/* NUMBER BADGE */}
              <div className={`
                flex-shrink-0 w-14 h-14 rounded-full flex flex-col items-center justify-center text-white shadow-xl z-10 transition-transform group-hover:scale-110
                ${point.color}
                ${point.side === 'left' ? 'mr-6' : 'ml-6'}
              `}>
                <span className="text-lg font-[1000] leading-none">{point.id}</span>
                <div className="mt-0.5 opacity-60 scale-75">{point.icon}</div>
              </div>

              {/* TEXT CONTENT */}
              <div className="flex-1 space-y-1">
                <h3 className={`text-[#1a365d] text-lg font-[1000] tracking-tight uppercase`}>
                  {point.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed font-medium line-clamp-2 hover:line-clamp-none transition-all">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <div className="mt-12 text-center">
           <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[9px]">
             Calibrated for <span className="text-[#1a365d]">Performance</span> • Strategy starts here
           </p>
        </div>
        
      </div>
    </section>
  )
}