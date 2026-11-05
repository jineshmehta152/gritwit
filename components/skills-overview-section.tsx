import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react'
import { FOUR_CORE_SKILLS } from '@/lib/programme-data'

export function SkillsOverviewSection() {
  const cardConfig: Record<string, {
    programId: string
    title: string
    subtitle: string
    image: string
    outcomes: string[]
    cognitiveFocus: string
    masteryCurve: number
  }> = {
    "critical-thinking": {
      programId: "PROGRAM 01",
      title: "CRITICAL THINKING",
      subtitle: "Master the art of questioning assumptions, verifying claims, and evaluating multi-sided evidence.",
      image: "/gritwit/skill-critical-thinking.jpg",
      outcomes: [
        "Visual & Spatial Analogies",
        "Fact vs. Opinion Filtering",
        "Cause & Effect Untangling",
        "Perspective & Intent Analysis"
      ],
      cognitiveFocus: "Analytical",
      masteryCurve: 88
    },
    "logical-reasoning": {
      programId: "PROGRAM 02",
      title: "LOGICAL REASONING",
      subtitle: "Build rock-solid chains of deduction, algorithmic sequences, and cyclic pattern mastery.",
      image: "/gritwit/skill-logical-reasoning.jpg",
      outcomes: [
        "Matrix & Sequential Patterns",
        "Coding & Cipher Rules",
        "Algorithmic Thinking Loops",
        "Deductive Syllogisms"
      ],
      cognitiveFocus: "Algorithmic",
      masteryCurve: 92
    },
    "comprehension": {
      programId: "PROGRAM 03",
      title: "COMPREHENSION",
      subtitle: "Read between the lines, interpret nuanced context clues, and distill dense information.",
      image: "/gritwit/skill-comprehension.jpg",
      outcomes: [
        "Verbal & Relational Analogies",
        "Contextual Inference Keys",
        "Main Idea Distillation",
        "Tone & Emotional Nuance"
      ],
      cognitiveFocus: "Linguistic",
      masteryCurve: 85
    },
    "problem-solving": {
      programId: "PROGRAM 04",
      title: "PROBLEM SOLVING",
      subtitle: "Break complex multi-step roadblocks into bite-sized heuristics with emotional resilience.",
      image: "/gritwit/skill-problem-solving.jpg",
      outcomes: [
        "Fermi Estimation & Bounds",
        "Balance Scale Equations",
        "Data Sufficiency Checks",
        "Spatial Visualisation & Nets"
      ],
      cognitiveFocus: "Heuristic",
      masteryCurve: 95
    }
  }

  return (
    <section id="programs-overview" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-teal-800 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>The Four Core Pillars • Ages 6–9</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Cognitive Programs Built on{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              Four Core Skills
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Structured cognitive enrichment engineered to help children develop mental independence, logical deduction, and problem-solving courage.
          </p>
        </div>

        {/* 4 Cards Matching Uploaded Screenshot UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {FOUR_CORE_SKILLS.map((skill) => {
            const config = cardConfig[skill.id]

            return (
              <div
                key={skill.id}
                className="bg-white rounded-[32px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-200/90 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="space-y-5">
                  
                  {/* Top Full Image with Rounded Container & Program ID Pill (Matching Screenshot) */}
                  <div className="relative h-48 w-full rounded-[24px] overflow-hidden bg-gradient-to-tr from-teal-900 via-teal-800 to-slate-900 shadow-inner">
                    <img
                      src={config.image}
                      alt={config.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Program ID Pill at Top Left (Matching screenshot "PROGRAM 01") */}
                    <div className="absolute top-3.5 left-3.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      <span className="text-[11px] font-black tracking-wider text-white uppercase">
                        {config.programId}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl font-black text-stone-900 tracking-tight">
                      {config.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {config.subtitle}
                    </p>
                  </div>

                  {/* Learning Outcomes Header & Bullet List with Blue Checkmark Circles */}
                  <div className="space-y-3 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-black tracking-wider text-stone-400 uppercase block">
                      LEARNING OUTCOMES
                    </span>
                    <ul className="space-y-2.5">
                      {config.outcomes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 stroke-[2.2]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cognitive Focus & Mastery Curve Metrics Bar (Matching screenshot metric pill container) */}
                  <div className="bg-stone-50/90 rounded-2xl p-3.5 border border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-stone-400 block">
                        COGNITIVE FOCUS
                      </span>
                      <span className="text-xs font-black text-stone-800">
                        {config.cognitiveFocus}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-stone-400 block">
                        MASTERY CURVE
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="w-14 h-2 bg-stone-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-teal-600 rounded-full" 
                            style={{ width: `${config.masteryCurve}%` }} 
                          />
                        </div>
                        <span className="text-xs font-black text-stone-800">
                          {config.masteryCurve}%
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom View Full Page Button (Matching screenshot curved blue pill button with arrow) */}
                <div className="pt-5">
                  <Link href="/program#four-skills" className="block w-full">
                    <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                      <span>VIEW FULL PAGE</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
