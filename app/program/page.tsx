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
  ChevronRight,
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
    { id: "Assessment & Milestones", label: "Witty's Quests & Milestones" },
  ]

  const activeSkill = FOUR_CORE_SKILLS.find(s => s.id === activeSkillTab) || FOUR_CORE_SKILLS[0]
  const ActiveSkillIcon = skillIcons[activeSkill.id as keyof typeof skillIcons] || Lightbulb

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Header Banner */}
      <PageBanner
        badge="A Playful 20-Session Learning Journey"
        title="What Children Experience"
        titleHighlight="at GritWit."
        description="A joyful step-by-step journey across 4 thinking areas, featuring 3 Witty Challenge Quests, friendly character chats, and playful puzzles designed specifically for ages 6–9."
        bgImage="/gritwit/skill-critical-thinking.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'The Programme & 4 Skills' }
        ]}
        stats={[
          { label: 'Total Sessions', value: '20 Live Sessions' },
          { label: 'Rhythm', value: '3 Times a Week' },
          { label: 'Pod Size', value: '4–6 Children' },
          { label: 'Format', value: '100% Playful Puzzles' }
        ]}
        themeColor="cyan"
      />

      {/* 2. PROGRAMME AT A GLANCE (3 Summary Metric Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="bg-gradient-to-br from-teal-50 to-white p-7 rounded-3xl border border-teal-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black shadow-md shadow-teal-600/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Small Friendly Pods</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Strictly 4 to 6 children per pod so every child has space to ask questions, test ideas, and be heard with gentle educator guidance.
            </p>
            <div className="pt-2 text-xs font-bold text-teal-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Every child is heard and valued</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-7 rounded-3xl border border-amber-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-md shadow-amber-400/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">3 Witty Challenge Quests</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every few weeks (Sessions 7, 13, and 19), kids team up for exciting mystery escape rooms and riddle vaults. Zero tests—just pure fun!
            </p>
            <div className="pt-2 text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Exciting Team Challenges</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-7 rounded-3xl border border-orange-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black shadow-md shadow-orange-500/20">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Character In Every Session</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every session wraps up with a warm Character Corner connecting that day&apos;s puzzle to kindness, honesty, and trying again.
            </p>
            <div className="pt-2 text-xs font-bold text-orange-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>Logic meets moral values</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE DEEP DIVE: THE FOUR CORE SKILLS */}
      <section id="four-skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-28">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-2xs">
            <Brain className="w-3.5 h-3.5 text-amber-600" />
            <span>The Four Core Thinking Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            How Children Learn to{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              Think Deeply
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Click through the four areas to see sample puzzles, real-life examples, and how we guide children step by step.
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
                    ? "bg-amber-400 text-stone-950 shadow-md scale-105 border-2 border-amber-400"
                    : "bg-white text-stone-700 border border-stone-200/90 hover:bg-amber-50/50 hover:border-amber-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-stone-950" : "text-amber-600"}`} />
                <span>{skill.title}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Skill Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Skill Image & Visual Tag */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden border-4 border-amber-100 shadow-md bg-stone-900 group h-72 sm:h-88">
                <img
                  src={skillImages[activeSkill.id]}
                  alt={activeSkill.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider bg-stone-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-amber-300 border border-amber-300/40">
                    {activeSkill.verbs}
                  </span>
                  <span className="text-xs font-bold text-stone-900 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                    Ages 6–9
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Conversational Breakdown */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <ActiveSkillIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Core Area</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900">{activeSkill.title}</h3>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm italic text-stone-800 flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>&ldquo;{activeSkill.quote}&rdquo;</span>
              </div>

              {/* Everyday Real-World Examples */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-black text-stone-900 uppercase tracking-wider block">
                  Everyday Moments Where This Helps:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSkill.inDailyLife.map((item, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
                      <strong className="text-stone-900 block font-bold">{item.scenario}</strong>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Thinking Challenge Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50/40 to-teal-50/40 text-stone-900 text-xs space-y-2 border border-amber-200/90 shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Try a Sample Puzzle:
                </span>
                <p className="italic text-stone-800 text-sm font-semibold">&ldquo;{activeSkill.sampleChallenge.question}&rdquo;</p>
                <div className="pt-2 border-t border-amber-200/70 text-stone-700 text-xs leading-relaxed">
                  <strong className="text-amber-900 font-black">How We Guide It:</strong> {activeSkill.sampleChallenge.thinkingStep}
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 4. VISUAL 20-SESSION ADVENTURE MAP (Compact, visual cards with icons & sample activities) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>The 20-Session Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Explore All{' '}
            <span className="inline-block bg-teal-600 text-white px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform rotate-1">
              20 Sessions
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Every session brings a fresh, playful challenge. Filter by skill area or explore the journey step by step.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {domains.map((d) => {
            const isSelected = selectedDomain === d.id
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDomain(d.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-amber-400 text-stone-950 font-black shadow-sm scale-105 border border-amber-400"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {d.label}
              </button>
            )
          })}
        </div>

        {/* Sessions Visual Grid */}
        <div className="space-y-8">
          {PROGRAMME_STRUCTURE.map((part, partIdx) => {
            const filteredSessions = selectedDomain === "all"
              ? part.sessions
              : part.sessions.filter(s => s.domain === selectedDomain)

            if (filteredSessions.length === 0) return null

            return (
              <div key={partIdx} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-5">
                
                {/* Part Header */}
                <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${part.color} border space-y-1`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-black text-stone-900 text-base sm:text-lg">
                      {part.partTitle}
                    </h3>
                    <span className="text-xs font-bold text-stone-700 bg-white/90 px-3 py-1 rounded-full border border-stone-200 w-fit">
                      {filteredSessions.length} {filteredSessions.length === 1 ? 'Session' : 'Sessions'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-medium">
                    {part.tagline}
                  </p>
                </div>

                {/* Sessions Visual Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {filteredSessions.map((sess) => {
                    const isSpecial = sess.domain === 'Assessment & Milestones'

                    return (
                      <div
                        key={sess.number}
                        className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                          isSpecial
                            ? "bg-gradient-to-br from-amber-50 via-white to-amber-50/60 border-amber-300 shadow-sm"
                            : "bg-stone-50/60 border-stone-200 hover:bg-white hover:shadow-md hover:border-amber-300"
                        }`}
                      >
                        <div className="space-y-3">
                          
                          {/* Top Tag & Number */}
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-black px-2.5 py-0.5 rounded-lg shadow-2xs ${
                              isSpecial ? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-white'
                            }`}>
                              {sess.number}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full border border-teal-200">
                              {sess.domain === 'Assessment & Milestones' ? 'Quest Day' : sess.domain}
                            </span>
                          </div>

                          {/* Session Title */}
                          <h4 className="font-black text-stone-900 text-base">
                            {sess.title}
                          </h4>

                          {/* Snappy Description */}
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {sess.description}
                          </p>

                          {/* Visual Sample Activity Box */}
                          <div className="bg-white p-3 rounded-xl border border-amber-100 text-[11px] text-stone-700 space-y-1 shadow-2xs">
                            <span className="font-bold text-amber-800 flex items-center gap-1">
                              <Puzzle className="w-3.5 h-3.5 text-amber-600" />
                              What Kids Explore:
                            </span>
                            <p className="italic text-stone-600">{sess.exampleQuestion}</p>
                          </div>
                        </div>

                        {/* Character Corner Value Footer */}
                        <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center justify-between text-[11px]">
                          <span className="text-stone-500 font-medium">Character Corner:</span>
                          <span className="font-bold text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-md text-[10px]">
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

      {/* 5. TAKE-HOME: WITTY'S FAMILY SPARKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-400/20 via-orange-100/30 to-teal-100/30 rounded-3xl p-8 sm:p-12 border border-amber-300/80 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-black uppercase tracking-wider text-amber-950 bg-amber-300 px-3.5 py-1 rounded-full border border-amber-400">
                Beyond The Screen
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Witty&apos;s 5-Minute Dinner Table Sparks
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                At the end of every session, children take home a playful 5-minute family challenge. These aren&apos;t boring worksheets! They are fun dinner riddles, estimation games during grocery trips, and mystery clues that turn family conversations into joyful thinking moments.
              </p>
              <div className="pt-1 flex flex-wrap gap-4 text-xs font-bold text-stone-800">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Zero Rote Drills</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Fun For Parents & Siblings</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Joyful Everyday Moments</span>
              </div>
            </div>
            
            <div className="shrink-0 text-center">
              <WittyMascot className="w-28 h-28 mx-auto" expression="celebrate" bubbleText="Ask Dad at Dinner!" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          <WittyMascot className="w-4 h-4" expression="happy" animate={false} />
          <span>Small Friendly Pods (4–6 Kids)</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Ready to see your child think with joy and confidence?
        </h3>
        <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Each pod is intentionally small so every child receives warm, individualized attention. Reach out to our educator to chat about your child or reserve a spot in an upcoming pod.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-950 font-black px-9 py-6 rounded-2xl shadow-xl flex items-center justify-center gap-2 border border-amber-300">
              <PhoneCall className="w-5 h-5 text-stone-950" />
              <span>Talk to the Educator</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-stone-300 hover:bg-stone-50 text-stone-800 font-bold px-8 py-6 rounded-2xl shadow-sm">
              Read Our Story & Values
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}
