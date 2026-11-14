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
  }> = {
    "critical-thinking": {
      programId: "CORE SKILL 01",
      title: "Critical Thinking",
      subtitle: "Ask 'why' and 'what if', spot clues, and decide what is true vs. someone's opinion.",
      image: "/gritwit/skill-critical-thinking.jpg",
      outcomes: [
        "Spotting Clues & Hidden Links",
        "Fact vs. Opinion Sorting",
        "Understanding 'What Happened & Why?'",
        "Seeing From Other Perspectives"
      ],
      cognitiveFocus: "Curious Detective"
    },
    "logical-reasoning": {
      programId: "CORE SKILL 02",
      title: "Logical Reasoning",
      subtitle: "Follow step-by-step rules, solve secret codes, and predict what comes next.",
      image: "/gritwit/skill-logical-reasoning.jpg",
      outcomes: [
        "Grid & Shape Patterns",
        "Cracking Secret Codes & Rules",
        "Step-by-Step Problem Paths",
        "Deduction: If This, Then That!"
      ],
      cognitiveFocus: "Pattern Master"
    },
    "comprehension": {
      programId: "CORE SKILL 03",
      title: "Comprehension",
      subtitle: "Read between the lines, uncover hidden story meanings, and explain big ideas simply.",
      image: "/gritwit/skill-comprehension.jpg",
      outcomes: [
        "Word & Picture Riddles",
        "Reading Between the Lines",
        "Finding the Big Main Idea",
        "Understanding Story Feelings"
      ],
      cognitiveFocus: "Story Explorer"
    },
    "problem-solving": {
      programId: "CORE SKILL 04",
      title: "Problem Solving",
      subtitle: "Break big roadblocks into bite-sized steps with patience and trial-and-error fun.",
      image: "/gritwit/skill-problem-solving.jpg",
      outcomes: [
        "Smart Guessing & Ballpark Clues",
        "Balance Scales & Number Riddles",
        "Checking 'Do I Have Enough Info?'",
        "3D Shape Flipping & Mazes"
      ],
      cognitiveFocus: "Puzzle Solver"
    }
  }

  return (
    <section id="programs-overview" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>The Four Core Skills • Ages 6–9</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Playful Thinking Built Around{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              Four Core Skills
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Hands-on adventures designed to build mental independence, logical deduction, and fearless problem-solving in children aged 6 to 9.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {FOUR_CORE_SKILLS.map((skill) => {
            const config = cardConfig[skill.id]

            return (
              <div
                key={skill.id}
                className="bg-white rounded-[32px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-amber-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="space-y-5">
                  
                  {/* Top Full Image */}
                  <div className="relative h-48 w-full rounded-[24px] overflow-hidden bg-amber-50 shadow-inner">
                    <img
                      src={config.image}
                      alt={config.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent pointer-events-none" />

                    {/* Program ID Pill at Top Left */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-amber-200 shadow-sm">
                      <span className="text-[10px] font-black tracking-wider text-amber-900 uppercase">
                        {config.programId}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-xl font-black text-stone-900 tracking-tight">
                      {config.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {config.subtitle}
                    </p>
                  </div>

                  {/* Learning Outcomes Header & Bullet List */}
                  <div className="space-y-2.5 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-black tracking-wider text-stone-400 uppercase block">
                      WHAT KIDS LEARN
                    </span>
                    <ul className="space-y-2">
                      {config.outcomes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 stroke-[2.2]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cognitive Focus Pill */}
                  <div className="bg-amber-50/70 rounded-2xl p-3 border border-amber-200/70 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-stone-400 block">
                        FOCUS ROLE
                      </span>
                      <span className="text-xs font-black text-amber-900">
                        {config.cognitiveFocus}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-stone-400 block">
                        APPROACH
                      </span>
                      <span className="text-xs font-bold text-teal-700">
                        Joyful Puzzles
                      </span>
                    </div>
                  </div>

                </div>

                {/* View Details Button */}
                <div className="pt-5">
                  <Link
                    href={`/program#${skill.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-black bg-stone-100 hover:bg-amber-400 text-stone-800 hover:text-stone-950 transition-colors shadow-2xs group"
                  >
                    <span>Explore This Skill</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
