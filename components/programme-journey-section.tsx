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
      subtitle: "Baseline Discovery",
      desc: "Low-stress cognitive pre-assessment discovering your child's baseline problem-solving instincts across 4 domains. Real data, zero pressure.",
      icon: Brain,
      accentColor: "teal",
      bgGradient: "from-teal-500/10 via-white to-white",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      iconBg: "bg-teal-700 text-white shadow-teal-700/20",
      borderHover: "hover:border-teal-400",
      takeaway: "Personalized Baseline Report"
    },
    {
      stepNumber: "02",
      sessionTag: "15 CORE SKILLS",
      title: "Deep Thinking Pods",
      subtitle: "Higher-Order Reasoning",
      desc: "Small interactive pods (4–6 children) tackling visual analogies, ciphers, Fermi estimation, spatial origami nets, and verbal inferences.",
      icon: BookOpen,
      accentColor: "sky",
      bgGradient: "from-sky-500/10 via-white to-white",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
      iconBg: "bg-sky-600 text-white shadow-sky-600/20",
      borderHover: "hover:border-sky-400",
      takeaway: "Certified Educator Guidance"
    },
    {
      stepNumber: "03",
      sessionTag: "SESSIONS 7, 13 & 19",
      title: "Witty's Challenge Days",
      subtitle: "Gamified Quests & Escapes",
      desc: "Zero lectures! Pure thinking fun. Children synthesize accumulated skills in gamified escape rooms, mystery vaults, and logic puzzles.",
      icon: Sparkles,
      accentColor: "amber",
      bgGradient: "from-amber-500/10 via-white to-white",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
      iconBg: "bg-amber-500 text-stone-950 shadow-amber-500/20",
      borderHover: "hover:border-amber-400",
      takeaway: "Pure Joyful Application"
    },
    {
      stepNumber: "04",
      sessionTag: "SESSION 20",
      title: "Parent Connect & Growth",
      subtitle: "Final Leap Validation",
      desc: "Check-Out assessment demonstrating clear cognitive expansion. Parents join to celebrate achievements and receive lifelong growth roadmaps.",
      icon: Award,
      accentColor: "emerald",
      bgGradient: "from-emerald-500/10 via-white to-white",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      iconBg: "bg-emerald-700 text-white shadow-emerald-700/20",
      borderHover: "hover:border-emerald-400",
      takeaway: "Graduation & Home Toolkit"
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-stone-50/50 via-white to-stone-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-teal-800 shadow-sm">
            <span className="text-amber-500 font-bold">✦</span>
            <span>20 Sessions • 3 Sessions Per Week • Small Pods</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            How The GritWit Journey{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              Unfolds
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A carefully scaffolded 20-session cognitive journey designed for sustained intellectual growth, measurable confidence, and enduring human values.
          </p>
        </div>

        {/* 4 Cards Grid with Connecting Visual Flow */}
        <div className="relative">
          
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-teal-200 via-amber-200 to-emerald-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon

              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-[32px] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-2 border-stone-100 ${step.borderHover} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
                >
                  <div className="space-y-5">
                    
                    {/* Top Row: Icon Circle + Step Number */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-7 h-7 stroke-[2.2]" />
                      </div>
                      <span className="text-2xl font-black text-stone-200 group-hover:text-stone-400 transition-colors font-mono">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div>
                      <span className={`inline-block text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full border shadow-xs ${step.badgeColor}`}>
                        {step.sessionTag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
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
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-stone-700">
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-teal-700 hover:text-teal-900 bg-teal-50/80 hover:bg-teal-100/80 border border-teal-200 px-6 py-3 rounded-full transition-all shadow-sm"
          >
            <span>View Complete 20-Session Day-by-Day Syllabus</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}

