"use client"

import React, { useState } from 'react'
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Compass, 
  BookOpen, 
  Award,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WittyMascot } from '@/components/witty-mascot'

interface BookAssessmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookAssessmentModal({ isOpen, onClose }: BookAssessmentModalProps) {
  const [step, setStep] = useState<number>(1)
  const totalSteps = 5

  // Form State
  const [childAge, setChildAge] = useState<string>("")
  const [thinkingStage, setThinkingStage] = useState<string>("")
  const [startDate, setStartDate] = useState<string>("")
  const [goal, setGoal] = useState<string>("")
  const [parentName, setParentName] = useState<string>("")
  const [parentEmail, setParentEmail] = useState<string>("")
  const [parentPhone, setParentPhone] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  if (!isOpen) return null

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!parentName || !parentEmail || !parentPhone) {
      alert("Please fill in your name, email, and phone number.")
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setStep(1)
    setChildAge("")
    setThinkingStage("")
    setStartDate("")
    setGoal("")
    setParentName("")
    setParentEmail("")
    setParentPhone("")
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Promotional Header Pill */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white px-5 py-2.5 flex items-center justify-between text-xs font-bold border-b border-teal-700/50">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✦</span>
            <span className="text-amber-300 font-extrabold">Free Cognitive Assessment</span>
            <span className="bg-teal-700/80 text-[10px] text-teal-200 px-2 py-0.5 rounded-full border border-teal-500/40">
              Session 01
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          
          {!submitted ? (
            <>
              {/* Progress Bar & Step Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {step > 1 ? (
                    <button 
                      onClick={handleBack}
                      className="w-8 h-8 rounded-full border border-stone-200 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="w-8" />
                  )}

                  {/* 5-Step Progress Indicators */}
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          s === step
                            ? "w-7 bg-amber-500"
                            : s < step
                            ? "w-4 bg-teal-600"
                            : "w-3 bg-stone-200"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-stone-400">
                    Step {step} of {totalSteps}
                  </span>
                </div>
              </div>

              {/* STEP 1: Child's Age */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="happy" animate={false} />
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">Hi there!</span>
                      <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
                        How old is your child?
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {[
                      { age: "Under 6", tag: "Early Explorer", emoji: "🌱" },
                      { age: "6–7 Years", tag: "Concrete Reasoning", emoji: "🧩", recommended: true },
                      { age: "8–9 Years", tag: "Deductive Thinker", emoji: "🎯", recommended: true },
                      { age: "10+ Years", tag: "Advanced Logic", emoji: "🚀" }
                    ].map((item, idx) => {
                      const isSelected = childAge === item.age
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setChildAge(item.age)
                            handleNext()
                          }}
                          className={`p-4 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between ${
                            isSelected
                              ? "border-teal-700 bg-teal-50 shadow-md"
                              : "border-stone-200 bg-stone-50/60 hover:bg-white hover:border-teal-400"
                          }`}
                        >
                          {item.recommended && (
                            <span className="absolute -top-2.5 right-2 bg-amber-400 text-stone-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
                              Core Batch
                            </span>
                          )}
                          <span className="text-2xl mb-2">{item.emoji}</span>
                          <span className="font-extrabold text-stone-900 text-sm">{item.age}</span>
                          <span className="text-[10px] text-stone-500 font-medium">{item.tag}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Current Thinking Stage */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 bg-teal-50/80 p-3.5 rounded-2xl border border-teal-200/80">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="thinking" animate={false} />
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">Awesome!</span>
                      <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
                        Where are they with thinking skills?
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {[
                      {
                        title: "Curious Beginner",
                        desc: "Loves stories & puzzles, but needs guided structure",
                        icon: Compass
                      },
                      {
                        title: "Loves Riddles",
                        desc: "Enjoys crosswords, spatial blocks & logic games",
                        icon: Brain
                      },
                      {
                        title: "School Test Rote",
                        desc: "Gets good grades but hesitates with open-ended problems",
                        icon: BookOpen
                      },
                      {
                        title: "Advanced Thinker",
                        desc: "Craves higher cognitive challenges & math olympiad puzzles",
                        icon: Zap
                      }
                    ].map((item, idx) => {
                      const Icon = item.icon
                      const isSelected = thinkingStage === item.title
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setThinkingStage(item.title)
                            handleNext()
                          }}
                          className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                            isSelected
                              ? "border-teal-700 bg-teal-50 shadow-md"
                              : "border-stone-200 bg-stone-50/60 hover:bg-white hover:border-teal-400"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-2">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-stone-900 text-sm block leading-snug">{item.title}</span>
                            <span className="text-[10px] text-stone-500 font-medium leading-tight block mt-1">{item.desc}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Timeline / Start Preference */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="wink" animate={false} />
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">Got it!</span>
                      <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
                        When would you like to start?
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {[
                      { label: "Immediately", sub: "Next available pod", emoji: "🚀" },
                      { label: "Within a Week", sub: "Upcoming Monday batch", emoji: "📅" },
                      { label: "Within a Month", sub: "Planning ahead", emoji: "🗓️" },
                      { label: "Just Exploring", sub: "Curious about curriculum", emoji: "🧭" }
                    ].map((item, idx) => {
                      const isSelected = startDate === item.label
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setStartDate(item.label)
                            handleNext()
                          }}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            isSelected
                              ? "border-teal-700 bg-teal-50 shadow-md"
                              : "border-stone-200 bg-stone-50/60 hover:bg-white hover:border-teal-400"
                          }`}
                        >
                          <span className="text-2xl mb-1 block">{item.emoji}</span>
                          <span className="font-extrabold text-stone-900 text-sm block">{item.label}</span>
                          <span className="text-[10px] text-stone-500 block">{item.sub}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Parent's Goal for Child */}
              {step === 4 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 bg-teal-50/80 p-3.5 rounded-2xl border border-teal-200/80">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="celebrate" animate={false} />
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">Almost there!</span>
                      <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
                        What is your primary goal for your child?
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {[
                      {
                        title: "Critical Thinking & Reasoning",
                        desc: "Learn to question assumptions, filter facts, and analyze deep causes"
                      },
                      {
                        title: "Problem Solving & Independence",
                        desc: "Break complex multi-step roadblocks with perseverance and zero tears"
                      },
                      {
                        title: "Comprehension & Vocabulary Depth",
                        desc: "Read between lines, extract nuanced inferences, and express ideas clearly"
                      },
                      {
                        title: "Character & Emotional Resilience",
                        desc: "Build patience under ambiguity, kindness, and intellectual courage"
                      }
                    ].map((item, idx) => {
                      const isSelected = goal === item.title
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setGoal(item.title)
                            handleNext()
                          }}
                          className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? "border-teal-700 bg-teal-50 shadow-sm"
                              : "border-stone-200 bg-stone-50/60 hover:bg-white hover:border-teal-400"
                          }`}
                        >
                          <div>
                            <span className="font-extrabold text-stone-900 text-sm block">{item.title}</span>
                            <span className="text-[11px] text-stone-500 block">{item.desc}</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 ${
                            isSelected ? "border-teal-700 bg-teal-700 text-white" : "border-stone-300"
                          }`}>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Final Contact Details */}
              {step === 5 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="happy" animate={false} />
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">Final Step</span>
                      <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
                        Just three quick details!
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">Your Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Shalini Sharma"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          className="w-full text-xs pl-9 pr-3 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">Email for Assessment Details</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="shalini@example.com"
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          className="w-full text-xs pl-9 pr-3 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">WhatsApp / Phone Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 94299 02012"
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          className="w-full text-xs pl-9 pr-3 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-stone-950 font-black py-4 rounded-2xl text-sm shadow-xl flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Confirm Free Assessment Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-[11px] text-stone-500 text-center leading-tight pt-1">
                    🔒 100% Privacy. No spam. Direct educator confirmation on WhatsApp.
                  </p>
                </form>
              )}
            </>
          ) : (
            /* Submission Success State */
            <div className="text-center space-y-4 py-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-stone-900">Assessment Booked!</h3>
                <p className="text-xs font-bold text-teal-800">Welcome to GritWit, {parentName}!</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 text-stone-600">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <span className="font-bold text-stone-800">Child Age Group:</span>
                  <span className="text-teal-700 font-bold">{childAge || "Ages 6–9"}</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <span className="font-bold text-stone-800">Focus Domain:</span>
                  <span className="text-teal-700 font-bold">{goal || "Cognitive Thinking"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-800">Confirmation:</span>
                  <span className="text-emerald-700 font-bold">Sent to WhatsApp</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                Our educator team will connect with you on <strong>{parentPhone}</strong> within 2 hours to confirm your child&apos;s Session 01 Thinker Check-In slot.
              </p>

              <div className="pt-2">
                <Button
                  onClick={handleReset}
                  className="bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs px-6 py-3 rounded-xl"
                >
                  Done
                </Button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

