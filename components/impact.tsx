"use client"

import { useState } from "react"
import { Play, TrendingUp, Zap, Heart, Brain, Quote, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, MessageCircle, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function TransformationSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const testimonials = [
    {
      name: "Sarah Lim",
      role: "Project Manager • Member since 2022",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      text: "The split-second decision making required in high-intensity chess has translated perfectly to my agile project environment. My focus levels have never been sharper during high-stakes sprints.",
      joinedCount: 28,
      category: "Managers"
    },
    {
      name: "David Teo",
      role: "HR Director • Corporate Partner",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      text: "Our corporate team engagement shot up after introducing Chessmatic. It's the first time our team actually looked forward to a strategy workshop. Truly a superpower for synergy.",
      joinedCount: 15,
      category: "Executives"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const aggregateStats = [
    { label: "Focus Improvement", value: "94%", icon: <Brain size={14} /> },
    { label: "Stress Reduction", value: "40%", icon: <Zap size={14} /> },
    { label: "Team Synergy", value: "+65%", icon: <TrendingUp size={14} /> },
    { label: "Calculation Speed", value: "88%", icon: <Target size={14} /> },
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER & AGGREGATE IMPACT BAR */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-black tracking-[0.25em] uppercase shadow-sm">
              The Transformation
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none mb-8"
          >
            From Tactical Play to <br />
            <span style={{ color: cyan }}>Lifestyle Evolution.</span>
          </motion.h2>

          {/* IMPACT METRICS TRACK - Responsive Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-[#1a365d] rounded-[30px] md:rounded-[40px] p-4 flex flex-col sm:flex-row flex-wrap items-center justify-around shadow-2xl gap-4 sm:gap-0"
          >
            {aggregateStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 md:py-6 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 w-full sm:w-auto">
                <div className="p-2 bg-white/10 rounded-xl text-sky-400">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="text-white text-lg md:text-xl font-black leading-none">{stat.value}</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. THE TRANSFORMATION CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* LEFT: DYNAMIC TESTIMONIAL CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f8fafc] rounded-[40px] md:rounded-[48px] p-8 md:p-14 border border-gray-100 flex flex-col justify-between min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl object-cover shadow-lg border-2 border-white" 
                    alt={testimonials[activeIndex].name}
                  />
                  <div>
                    <h4 className="text-[#1a365d] text-xl sm:text-2xl font-[900] tracking-tight leading-none">{testimonials[activeIndex].name}</h4>
                    <p className="text-sky-500 text-[10px] font-black tracking-widest uppercase mt-2">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                <div className="relative">
                   <Quote size={40} className="text-[#1a365d]/5 absolute -top-4 -left-2" />
                   <p className="text-[#1a365d] text-lg sm:text-xl font-bold leading-relaxed italic relative z-10">
                     "{testimonials[activeIndex].text}"
                   </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS & SOCIAL PROOF */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200" />)}
                  </div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">
                    Joined by {testimonials[activeIndex].joinedCount} other <br/> {testimonials[activeIndex].category}
                  </p>
               </div>

               <div className="flex items-center gap-3">
                  <button onClick={prevTestimonial} className="p-4 rounded-full bg-white border border-gray-100 text-[#1a365d] hover:bg-sky-500 hover:text-white transition-all shadow-sm active:scale-90">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-4 rounded-full bg-white border border-gray-100 text-[#1a365d] hover:bg-sky-500 hover:text-white transition-all shadow-sm active:scale-90">
                    <ChevronRight size={20} />
                  </button>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: DATA & VIDEO PREVIEW */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-6 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-10">
                 <h5 className="text-[#1a365d] font-[1000] uppercase text-[10px] tracking-[0.2em]">Mindset Transformation</h5>
                 <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[8px] font-black tracking-widest uppercase border border-green-100">Verified Results</span>
              </div>
              
              <div className="space-y-8">
                {/* Metric 01 */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-full sm:w-24 text-center sm:text-right">
                    <span className="text-slate-300 text-[8px] font-black uppercase tracking-widest block mb-1">Before</span>
                    <p className="text-slate-400 font-bold text-xs">Scattered</p>
                  </div>
                  <div className="flex-1 w-full h-3 bg-slate-100 rounded-full relative overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-slate-200 via-sky-400 to-[#1a365d]" />
                    <div className="absolute left-[30%] top-0 bottom-0 w-1 bg-white/50 z-10" />
                  </div>
                  <div className="w-full sm:w-24 text-center sm:text-left">
                    <span className="text-[#1a365d] text-[8px] font-black uppercase tracking-widest block mb-1">After</span>
                    <p className="text-[#1a365d] font-black text-xs">Strategic Depth</p>
                  </div>
                </div>

                {/* Metric 02 */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-full sm:w-24 text-center sm:text-right">
                    <span className="text-slate-300 text-[8px] font-black uppercase tracking-widest block mb-1">Before</span>
                    <p className="text-slate-400 font-bold text-xs">Reactive</p>
                  </div>
                  <div className="flex-1 w-full h-3 bg-slate-100 rounded-full relative overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-gradient-to-r from-slate-200 via-sky-400 to-[#1a365d]" />
                    <div className="absolute left-[40%] top-0 bottom-0 w-1 bg-white/50 z-10" />
                  </div>
                  <div className="w-full sm:w-24 text-center sm:text-left">
                    <span className="text-[#1a365d] text-[8px] font-black uppercase tracking-widest block mb-1">After</span>
                    <p className="text-[#1a365d] font-black text-xs">Calm Control</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sky-500" />
                  <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Confidential Performance Protocol</span>
                </div>
                <p className="text-[#1a365d] text-sm font-black italic tracking-tighter">+45% Output Gain</p>
              </div>
            </motion.div>

            {/* VIDEO TESTIMONIAL PREVIEW */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative h-56 md:h-48 rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl border-4 border-white"
            >
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Video Preview"/>
               <div className="absolute inset-0 bg-[#1a365d]/60 backdrop-blur-[1px] flex items-center justify-center transition-all group-hover:bg-[#1a365d]/40">
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play fill={navy} className="text-[#1a365d] ml-1" size={20} />
                     </div>
                     <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Watch Experience</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>



        {/* FINAL TRANSFORMATION CTA */}
        <div className="mt-12 flex flex-col items-center">
          <a
            href={getWhatsAppUrl("Hi Chessmatic! I'd like to start my transformation and book an initial assessment session at the Woodlands Studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-10 py-8 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={22} className="fill-current" />
              Start Your Transformation <ArrowRight className="ml-1" />
            </Button>
          </a>
          <p className="mt-4 text-slate-400 text-[9px] font-black uppercase tracking-widest italic">Book your initial assessment session on WhatsApp today</p>
        </div>

      </div>
    </section>
  )
}