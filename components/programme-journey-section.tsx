import React from 'react'
import Link from 'next/link'
import { Brain, BookOpen, Sparkles, Award, ArrowRight, CheckCircle2 } from 'lucide-react'
import { WittyMascot } from '@/components/witty-mascot'

export function ProgrammeJourneySection() {
  const steps = [
    {
      stepNumber: "01",
      sessionTag: "SESSION 01",
      title: "Thinker Check-In",
      subtitle: "Friendly Discovery",
      desc: "A fun, low-stress puzzle game where we see how your child likes to solve problems. No tests, no grades—just pure discovery!",
      icon: Brain,
      accentColor: "teal",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      iconBg: "bg-teal-600 text-white shadow-teal-600/20",
      borderHover: "hover:border-teal-400",
      takeaway: "Personalized Discovery Report"
    },
    {
      stepNumber: "02",
      sessionTag: "15 CORE SKILLS",
      title: "Playful Pods",
      subtitle: "Small Group Adventures",
      desc: "4 to 6 kids team up with an educator to tackle colorful visual puzzles, shape mysteries, secret ciphers, and balance games.",
      icon: BookOpen,
      accentColor: "amber",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
      iconBg: "bg-amber-500 text-stone-950 shadow-amber-500/20",
      borderHover: "hover:border-amber-400",
      takeaway: "Dedicated Educator Guidance"
    },
    {
      stepNumber: "03",
      sessionTag: "SESSIONS 7, 13 & 19",
      title: "Witty's Quest Days",
      subtitle: "Fun Mystery Challenges",
      desc: "No lectures ever! Kids use all their puzzle-cracking superpowers in escape quests, riddle vaults, and team treasure hunts.",
      icon: Sparkles,
      accentColor: "orange",
      badgeColor: "bg-orange-100 text-orange-900 border-orange-200",
      iconBg: "bg-orange-500 text-white shadow-orange-500/20",
      borderHover: "hover:border-orange-400",
      takeaway: "Big Celebration & Aha! Moments"
    },
    {
      stepNumber: "04",
      sessionTag: "SESSION 20",
      title: "Parent Celebration",
      subtitle: "See Their Growth",
      desc: "Parents join in! See how much more confident your child has become, celebrate their leap, and get fun games to play at home.",
      icon: Award,
      accentColor: "emerald",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      iconBg: "bg-emerald-600 text-white shadow-emerald-600/20",
      borderHover: "hover:border-emerald-400",
      takeaway: "Graduation & Home Game Kit"
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-stone-50/50 via-amber-50/20 to-stone-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-xs">
            <span className="text-amber-600 font-bold">✦</span>
            <span>20 Sessions • 3 Times a Week • 4–6 Kids per Pod</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            How The GritWit Adventure{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              Unfolds
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A step-by-step journey designed for big curiosity, joyful problem-solving, and growing confidence that stays with your child.
          </p>
        </div>

        {/* 4 Cards Grid with Connecting Visual Flow */}
        <div className="relative">
          
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-teal-200 via-amber-200 to-orange-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon

              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-[32px] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-2 border-amber-100/80 ${step.borderHover} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    
                    {/* Top Row: Icon Circle + Step Number */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-7 h-7 stroke-[2.2]" />
                      </div>
                      <span className="text-2xl font-black text-stone-300 group-hover:text-amber-500 transition-colors font-mono">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div>
                      <span className={`inline-block text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full border shadow-2xs ${step.badgeColor}`}>
                        {step.sessionTag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-0.5">
                      <h3 className="text-xl font-black text-stone-900 group-hover:text-teal-700 transition-colors leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs font-bold text-amber-700">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                  {/* Bottom Highlight Pill */}
                  <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{step.takeaway}</span>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Curriculum Link */}
        <div className="mt-12 text-center">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-stone-900 hover:text-stone-950 bg-amber-400 hover:bg-amber-500 border border-amber-300 px-6 py-3 rounded-full transition-all shadow-sm"
          >
            <span>See the 20-Session Day-by-Day Schedule</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
