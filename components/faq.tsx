"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Target, Zap } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Do I need prior experience to join adult chess classes?",
    answer: "Not at all. We cater to all skill levels from complete beginners to advanced competitors. Whether you are learning piece movement or looking for intensive 1-on-1 tournament strategy, sessions are calibrated to your level."
  },
  {
    question: "What chess skill levels do you teach?",
    answer: "We offer structured tracks across Beginner Foundations, Intermediate Tactical Calculation, Advanced Tournament Mastery, and Executive Corporate Strategy."
  },
  {
    question: "What formats do you offer for coaching?",
    answer: "We offer 5 primary formats: Group Coaching Workshops, Private Lessons (1-on-1 in-studio), Online Private Lessons (1-on-1 virtual), Online Group Lessons (virtual batches), and Corporate team sessions."
  },
  {
    question: "What can I expect in my first chess session?",
    answer: "Every new adult player undergoes a comprehensive diagnostic evaluation covering calculation velocity, tactical awareness, board visualization, and opening habits, followed by a personalized developmental roadmap."
  },
  {
    question: "Where are the in-person sessions held in Singapore?",
    answer: "We operate out of our studio in Woodlands, Singapore, and we also provide on-site corporate facilitation for businesses across Singapore."
  },
  {
    question: "What are your coaching rates and packages?",
    answer: "For in-person training with our accredited FIDE Masters, tuition rates are $150/lesson for Private (1-on-1), $62.50/lesson for Small Group (2-4 Pax), and $50/lesson for Large Group (5-8 Pax). Please note that the reflected pricing is for a minimum purchase of 4 lessons ($600, $250, and $200 per 4-lesson bundle respectively). Single per-lesson drop-in rates are $200 (Private), $80 (Small Group), and $70 (Large Group). Initial 1-on-1 skill assessments are $100."
  },
  {
    question: "Do you offer discounts for online lessons or bulk bookings?",
    answer: "Yes! All online coaching lessons receive an automatic 20% discount. In addition, bulk purchases receive 10% off for 12+ sessions and 20% off for 24+ sessions (applied to the 4-lesson rate). Private lessons with non-titled coaches also enjoy a 20% discount. (Discounts are non-stackable)."
  },
  {
    question: "What is your makeup and rescheduling policy?",
    answer: "Students are allowed a maximum of 1 makeup session for every 4 lessons purchased. Rescheduling requests must be submitted at least 1 day (24 hours) in advance, and the makeup session must be completed within 1 week of the original lesson date."
  }
]

export default function FAQSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Strategic Support
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none"
          >
            Common <span style={{ color: cyan }}>Enquiries.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: REFINED FAQ STYLE */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeIdx === idx
                return (
                  <div key={idx} className="relative">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        backgroundColor: isOpen ? "#f8fafc" : "rgba(255,255,255,0)",
                        paddingLeft: isOpen ? "1.5rem" : "0.5rem",
                        paddingRight: isOpen ? "1.5rem" : "0.5rem",
                      }}
                      className={`rounded-[24px] md:rounded-[32px] transition-all duration-500 overflow-hidden ${
                        isOpen ? "shadow-xl border border-sky-100" : "border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => setActiveIdx(isOpen ? null : idx)}
                        className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-4 md:gap-6">
                          <span className={`text-[10px] md:text-xs font-black tracking-widest ${isOpen ? "text-sky-500" : "text-slate-300"}`}>
                            0{idx + 1}
                          </span>
                          <span className={`font-bold text-base md:text-lg tracking-tight transition-colors ${isOpen ? "text-[#1a365d]" : "text-slate-500 group-hover:text-[#1a365d]"}`}>
                            {faq.question}
                          </span>
                        </div>
                        <div className={`flex-shrink-0 transition-transform duration-500 rounded-full p-2 ${isOpen ? "bg-sky-500 text-white rotate-180 shadow-lg shadow-sky-200" : "bg-gray-100 text-slate-400 group-hover:bg-sky-50"}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          >
                            <div className="pb-8 pl-10 md:pl-14 pr-4">
                              <div className="h-[2px] w-8 bg-sky-500 mb-4 rounded-full" />
                              <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-md">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    {!isOpen && idx !== faqs.length - 1 && (
                      <div className="h-[1px] w-[95%] mx-auto bg-gray-100 mt-1" />
                    )}
                  </div>
                )
              })}

              <div className="pt-6 text-center lg:text-left">
                <Link 
                  href="/faq" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a365d] text-white hover:bg-sky-500 transition-all font-black text-xs uppercase tracking-widest shadow-md group"
                >
                  <span>Explore Full Knowledge Base & Categorized FAQs</span>
                  <ChevronDown className="-rotate-90 group-hover:translate-x-1 transition-transform" size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE & FLOATING UI */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-[#1a365d] p-2 md:p-3 shadow-2xl"
            >
               <img 
                 src="/faq.png" 
                 alt="Chessmatic FAQ Visual"
                 className="w-full h-[350px] md:h-[550px] object-cover rounded-[32px] md:rounded-[36px] opacity-90"
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-transparent to-transparent opacity-40 pointer-events-none" />

              

              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}