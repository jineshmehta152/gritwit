"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { PROGRAMME_STRUCTURE, FOUR_CORE_SKILLS } from '@/lib/programme-data'
import { WittyMascot } from '@/components/witty-mascot'
import { 
  CheckCircle2, 
  Sparkles, 
  Brain, 
  Award, 
  Users, 
  Calendar, 
  ArrowRight, 
  Heart, 
  HelpCircle, 
  Compass, 
  Cpu, 
  BookOpen, 
  Lightbulb, 
  PhoneCall, 
  Filter, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Eye, 
  Check, 
  ChevronRight,
  TrendingUp,
  MessageCircle,
  Puzzle,
  Star,
  Quote
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/page-banner'

export default function ProgramPage() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all")
  const [activeSkillTab, setActiveSkillTab] = useState<string>("critical-thinking")

  const skillIcons = {
    "critical-thinking": Compass,
    "logical-reasoning": Cpu,
    "comprehension": BookOpen,
    "problem-solving": Lightbulb,
  }

  const skillImages: Record<string, string> = {
    "critical-thinking": "/gritwit/skill-critical-thinking.jpg",
    "logical-reasoning": "/gritwit/skill-logical-reasoning.jpg",
    "comprehension": "/gritwit/skill-comprehension.jpg",
    "problem-solving": "/gritwit/skill-problem-solving.jpg",
  }

  const domains = [
    { id: "all", label: "All 20 Sessions" },
    { id: "Critical Thinking", label: "Critical Thinking" },
    { id: "Logical Reasoning", label: "Logical Reasoning" },
    { id: "Comprehension", label: "Comprehension" },
    { id: "Problem Solving", label: "Problem Solving" },
    { id: "Assessment & Milestones", label: "Milestones & Quests" },
  ]

  const activeSkill = FOUR_CORE_SKILLS.find(s => s.id === activeSkillTab) || FOUR_CORE_SKILLS[0]
  const ActiveSkillIcon = skillIcons[activeSkill.id as keyof typeof skillIcons] || Lightbulb

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header Banner */}
      <PageBanner
        badge="Structured 20-Session Cognitive Curriculum"
        title="The GritWit Programme &"
        titleHighlight="Four Core Skills."
        description="15 Higher-Order Thinking Skills across 4 cognitive domains, 3 Witty's Challenge Days, Character Corner in every session, and measurable growth assessments for children aged 6–9."
        bgImage="/gritwit/skill-critical-thinking.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'The Programme & 4 Skills' }
        ]}
        stats={[
          { label: 'Total Sessions', value: '20 Live Sessions' },
          { label: 'Pace & Rhythm', value: '3 Sessions / Wk' },
          { label: 'Pod Size', value: '4–6 Thinkers' },
          { label: 'Higher-Order Skills', value: '15 Core Skills' }
        ]}
        themeColor="cyan"
      />

      {/* 2. PROGRAMME AT A GLANCE (3 Summary Metric Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="bg-gradient-to-br from-teal-50 to-white p-7 rounded-3xl border border-teal-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-black shadow-md shadow-teal-700/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Intimate Thinking Pods</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Strictly capped at 4–6 thinkers. Every child actively explains their hypotheses, explores alternative solutions, and never gets lost in a crowd.
            </p>
            <div className="pt-2 text-xs font-bold text-teal-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>100% Active Speaking Time</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-7 rounded-3xl border border-amber-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-md shadow-amber-400/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">3 Witty Challenge Days</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every 5 sessions (S07, S13, S19), pure gamified logic escape rooms and mystery vaults test accumulated skills. Zero lectures — pure exhilaration!
            </p>
            <div className="pt-2 text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Interactive Mystery Vaults</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-white p-7 rounded-3xl border border-sky-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-700 text-white flex items-center justify-center font-black shadow-md shadow-sky-700/20">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Character Corner</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every single session closes with a Character Corner — connecting that day&apos;s cognitive puzzle to an enduring human value (Honesty, Empathy, Grit).
            </p>
            <div className="pt-2 text-xs font-bold text-sky-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Logic Meets Moral Values</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE DEEP DIVE: THE FOUR CORE COGNITIVE FACULTIES */}
      <section id="four-skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold text-teal-800 shadow-sm">
            <Brain className="w-3.5 h-3.5 text-teal-600" />
            <span>Core Cognitive Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            The Four Core Skills{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              In Detail
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Select any cognitive domain to explore its daily application, pedagogical philosophy, and sample thinking challenges.
          </p>
        </div>

        {/* Interactive Skill Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FOUR_CORE_SKILLS.map((skill) => {
            const Icon = skillIcons[skill.id as keyof typeof skillIcons] || Lightbulb
            const isSelected = activeSkillTab === skill.id

            return (
              <button
                key={skill.id}
                onClick={() => setActiveSkillTab(skill.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  isSelected
                    ? "bg-teal-700 text-white shadow-lg shadow-teal-700/25 scale-105 border-2 border-teal-600"
                    : "bg-white text-stone-700 border border-stone-200/90 hover:bg-stone-50 hover:border-teal-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-amber-300" : "text-stone-500"}`} />
                <span>{skill.title}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Skill Showcase Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Skill Photorealistic Image & Verb Pill */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[32px] overflow-hidden border-4 border-stone-100 shadow-xl bg-stone-900 group h-80 sm:h-96">
                <img
                  src={skillImages[activeSkill.id]}
                  alt={activeSkill.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-amber-300 border border-amber-300/30">
                    {activeSkill.verbs}
                  </span>
                  <span className="text-xs font-bold text-white bg-teal-800/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    Domain Focus
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Deep Pedagogical Breakdown */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${activeSkill.bgLight} ${activeSkill.textLight} flex items-center justify-center font-bold`}>
                  <ActiveSkillIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-teal-700 block">Cognitive Faculty</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900">{activeSkill.title}</h3>
                </div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Quote from Curriculum */}
              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 text-xs sm:text-sm italic text-teal-950 flex items-start gap-3">
                <Quote className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>&ldquo;{activeSkill.quote}&rdquo;</span>
              </div>

              {/* Everyday School & Home Scenarios */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-black text-stone-900 uppercase tracking-wider block">
                  Everyday School & Real-World Application:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSkill.inDailyLife.map((item, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
                      <strong className="text-stone-900 block font-bold">{item.scenario}</strong>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Thinking Prompt Box */}
              <div className="p-5 rounded-2xl bg-slate-950 text-white text-xs space-y-2 shadow-inner">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Sample Thinking Challenge:
                </span>
                <p className="italic text-stone-200 text-sm">&ldquo;{activeSkill.sampleChallenge.question}&rdquo;</p>
                <div className="pt-2 border-t border-slate-800 text-teal-300 text-xs leading-relaxed">
                  <strong className="text-amber-300">The GritWit Way:</strong> {activeSkill.sampleChallenge.thinkingStep}
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 4. INTERACTIVE 20-SESSION ROADMAP WITH FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>Complete Curriculum Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Explore All{' '}
            <span className="inline-block bg-teal-700 text-white px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform rotate-1 border border-teal-600">
              20 Sessions
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Filter by cognitive domain or review the step-by-step scaffold designed for sustained developmental leaps.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {domains.map((d) => {
            const isSelected = selectedDomain === d.id
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDomain(d.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-stone-950 text-white shadow-md scale-105"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {d.label}
              </button>
            )
          })}
        </div>

        {/* Sessions Filtered List */}
        <div className="space-y-10">
          {PROGRAMME_STRUCTURE.map((part, partIdx) => {
            const filteredSessions = selectedDomain === "all"
              ? part.sessions
              : part.sessions.filter(s => s.domain === selectedDomain)

            if (filteredSessions.length === 0) return null

            return (
              <div key={partIdx} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
                
                {/* Part Header */}
                <div className={`p-5 rounded-2xl bg-gradient-to-r ${part.color} border space-y-1`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-black text-stone-900 text-lg sm:text-xl">
                      {part.partTitle}
                    </h3>
                    <span className="text-xs font-bold text-stone-700 bg-white/90 px-3 py-1 rounded-full border border-stone-200 w-fit">
                      {filteredSessions.length} {filteredSessions.length === 1 ? 'Session' : 'Sessions'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium">
                    {part.tagline}
                  </p>
                </div>

                {/* Sessions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredSessions.map((sess) => {
                    const isSpecial = sess.domain === 'Assessment & Milestones'

                    return (
                      <div
                        key={sess.number}
                        className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                          isSpecial
                            ? "bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 border-amber-300 shadow-sm"
                            : "bg-stone-50/60 border-stone-200/90 hover:bg-white hover:shadow-lg hover:border-teal-300"
                        }`}
                      >
                        <div className="space-y-3">
                          
                          {/* Number & Type Badge */}
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-black px-3 py-1 rounded-xl shadow-sm ${
                              isSpecial ? 'bg-amber-400 text-stone-950' : 'bg-stone-950 text-white'
                            }`}>
                              {sess.number}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full border border-teal-200">
                              {sess.skillNumber ? `${sess.skillNumber} • ${sess.domain}` : sess.domain}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="font-black text-stone-900 text-base">
                            {sess.title}
                          </h4>

                          <p className="text-xs text-stone-600 leading-relaxed">
                            {sess.description}
                          </p>

                          {/* Sample Question Box */}
                          <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 text-[11px] text-stone-700 space-y-1 shadow-sm">
                            <span className="font-bold text-teal-800 flex items-center gap-1">
                              <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                              Sample Prompt:
                            </span>
                            <p className="italic text-stone-600">{sess.exampleQuestion}</p>
                          </div>
                        </div>

                        {/* Character Corner Value Footer */}
                        <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center justify-between text-[11px]">
                          <span className="text-stone-500 font-medium">Character Corner:</span>
                          <span className="font-bold text-amber-900 bg-amber-100 border border-amber-200 px-2.5 py-0.5 rounded-lg">
                            {sess.characterValue}
                          </span>
                        </div>

                      </div>
                    )
                  })}
                </div>

              </div>
            )
          })}
        </div>
      </section>

      {/* 5. TAKE-HOME: WITTY'S FAMILY CHALLENGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-400/20 via-teal-100/30 to-sky-100/30 rounded-3xl p-8 sm:p-12 border border-amber-300/80 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-black uppercase tracking-wider text-amber-950 bg-amber-300 px-3.5 py-1 rounded-full border border-amber-400">
                Beyond The Screen
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Witty&apos;s 5-Minute Family Sparks
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                At the end of every session, children receive a 5-minute family challenge designed by Witty. These are not boring homework worksheets! They are dinner-table riddles, estimation games during grocery visits, and playful reasoning activities that turn dinner conversations into joyful thinking moments.
              </p>
              <div className="pt-1 flex flex-wrap gap-4 text-xs font-bold text-stone-800">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Zero Rote Drills</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Fun For Parents & Siblings</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Real-World Application</span>
              </div>
            </div>
            
            <div className="shrink-0 text-center">
              <WittyMascot className="w-28 h-28 mx-auto" expression="celebrate" bubbleText="Ask Dad at Dinner!" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA (Clean Redirect to Contact) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
          <WittyMascot className="w-4 h-4" expression="happy" animate={false} />
          <span>Limited Cohort Seats</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Ready to see your child think with clarity and confidence?
        </h3>
        <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Cohorts are capped at 4–6 children per pod to guarantee individual educator guidance. Talk to our educator team to reserve a seat in the upcoming cohort.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-950 font-black px-9 py-6 rounded-2xl shadow-xl flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5 text-stone-950" />
              <span>Talk to Educator & Reserve Seat</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-stone-300 hover:bg-stone-50 text-stone-800 font-bold px-8 py-6 rounded-2xl shadow-sm">
              Read Our Pedagogy & Story
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}
