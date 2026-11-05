"use client"

import { Trophy, Star, Award, ShieldCheck, Zap, ChevronRight, CheckCircle2, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function CoachesSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const coaches = [
    {
      name: "FM Arlan Cabe",
      title: "FIDE Master (FM) & Senior Chess Coach",
      badge: "FIDE Master & Champion",
      image: "/arlan-cabe.jpg",
      experience: "15+ Years Coaching",
      rating: "Master Strength",
      bio: "Multi-time tournament champion and accredited FIDE Master. Coach Arlan coaches ambitious adults, competitive tournament players, and executive students across deep opening theory, dynamic tactical visualization, and endgame precision.",
      achievements: [
        "1st Place Tournament Champion",
        "Official FIDE Master (FM) Titleist",
        "Senior Trainer for Intchess Asia",
        "Expert in Adult Repertoire & Psychology"
      ],
      specialties: [
        "Opening Repertoire Design",
        "Private 1-on-1 Mentorship",
        "Online Group Workshops",
        "Tactical Calculation Stamina"
      ]
    },
    {
      name: "FM Dino Ballecer",
      title: "FIDE Master (FM) & Certified FIDE Instructor",
      badge: "FIDE Master & Certified FIDE Instructor",
      image: "/dino.png",
      experience: "20+ Years Coaching",
      rating: "Peak FIDE 2434",
      bio: "FIDE Master (peak rating 2434), Certified FIDE Instructor since 2017, and accredited trainer with the Singapore Chess Federation. Architect of a dynamic, adaptive coaching system that nurtures players from novice to Grandmaster level, guiding school teams to national championships and adults to rapid rating breakthroughs.",
      achievements: [
        "Official FIDE Master (Peak Rating 2434)",
        "Certified FIDE Instructor (Since 2017)",
        "2x International Master (IM) Title Norms",
        "National Inter-School Champion Coach"
      ],
      specialties: [
        "Novice to Master Progression",
        "Tournament Strategy & Psychology",
        "Adaptive & Inclusive Coaching",
        "Accelerated FIDE Rating Growth"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <Trophy size={14} className="text-amber-500" />
            <span className="text-[#1a365d] text-[10px] font-[1000] tracking-widest uppercase">
              Master Chess Faculty
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-[1000] text-[#1a365d] tracking-tighter leading-tight uppercase italic">
            Learn From Certified <span style={{ color: cyan }}>Grandmasters & FIDE Masters.</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base mt-4">
            Our coaching team features certified FIDE Masters and seasoned tournament champions dedicated to accelerating your tactical acumen.
          </p>
        </div>

        {/* COACH PROFILE CARDS */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {coaches.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[36px] border border-slate-200/80 p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* PHOTO CONTAINER */}
                <div className="md:col-span-5 relative">
                  <div className="relative w-full aspect-[4/5] max-w-[280px] mx-auto rounded-[28px] overflow-hidden border-4 border-slate-50 shadow-lg">
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover grayscale-[0.05] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 via-transparent to-transparent" />
                    
                    {/* Floating Title Stamp */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-md flex items-center gap-1.5">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span className="text-[#1a365d] text-[9px] font-[1000] uppercase tracking-wider">FIDE Master</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="inline-block bg-[#1a365d]/90 backdrop-blur-md text-sky-400 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border border-white/10">
                        Senior Coach
                      </span>
                    </div>
                  </div>
                </div>

                {/* DETAILS CONTENT */}
                <div className="md:col-span-7 flex flex-col space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[9px] font-black uppercase tracking-wider mb-2">
                      <Trophy size={12} className="text-amber-600" />
                      {coach.badge}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-[1000] text-[#1a365d] tracking-tight uppercase italic">
                      {coach.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                      {coach.title}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {coach.bio}
                  </p>

                  {/* KEY HIGHLIGHTS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {coach.achievements.map((ach, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#1a365d]">
                        <CheckCircle2 size={14} className="text-sky-500 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* SPECIALTY TAGS & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {coach.specialties.slice(0, 3).map((spec, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100/80 rounded-lg text-[9px] font-black text-[#1a365d] uppercase tracking-wider">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full text-[10px] font-[1000] uppercase tracking-wider px-5 py-4 shrink-0 shadow-md">
                      <a 
                        href={getWhatsAppUrl(`Hi Chessmatic! I would like to book a chess coaching session with Coach ${coach.name}. Please share available dates and slots.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <MessageCircle size={14} className="fill-current" />
                        Book {coach.name}
                        <ChevronRight size={14} className="ml-0.5" />
                      </a>
                    </Button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
