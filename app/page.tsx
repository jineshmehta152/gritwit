import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Brain, Heart, Award, Users, BookOpen, Clock, Calendar, CheckCircle2, PhoneCall, BookMarked } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WittyMascot } from '@/components/witty-mascot'
import { InteractiveThinkingPuzzle } from '@/components/interactive-thinking-puzzle'
import { SkillsOverviewSection } from '@/components/skills-overview-section'
import { MultiLayerWaves } from '@/components/multi-layer-waves'
import { AboutGritWitSection } from '@/components/about-gritwit-section'
import { ProgrammeJourneySection } from '@/components/programme-journey-section'
import { ParentReviewsSection } from '@/components/parent-reviews-section'
import { HomeFaqSection } from '@/components/home-faq-section'

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-800 text-white pt-10 sm:pt-16 pb-0">
        
        {/* Soft Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between pb-12 sm:pb-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 shadow-md backdrop-blur-sm">
                <WittyMascot className="w-5 h-5" expression="wink" animate={false} />
                <span>Cognitive Enrichment for Children Ages 6–9</span>
              </div>

              {/* Shortened, Punchy Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
                Teaching Children <br />
                <span className="bg-gradient-to-r from-teal-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                  How to Think, Not What to Think.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                GritWit is an educator-led cognitive enrichment programme developing <strong>Critical Thinking</strong>, <strong>Logical Reasoning</strong>, <strong>Comprehension</strong>, and <strong>Problem Solving</strong> through 20 joyful, interactive sessions.
              </p>

              {/* CTA Buttons: Contact and Program */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-base px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group flex items-center justify-center gap-2">
                    <PhoneCall className="w-5 h-5 text-stone-950" />
                    <span>Book a Call / Enquire</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="/program" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700/80 border-slate-600 text-slate-100 font-bold text-base px-7 py-6 rounded-2xl shadow-sm flex items-center justify-center gap-2">
                    <BookMarked className="w-5 h-5 text-teal-300" />
                    <span>Explore 20 Sessions</span>
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Small Pods (4–6 Thinkers)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>15 Higher-Order Skills</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Measurable Check-In & Check-Out</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Photorealistic Hero Child Photo & Mascot Badge */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Child Thinker Photograph */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-400/40 bg-slate-900 group">
                  <img
                    src="/gritwit/hero-child.jpg"
                    alt="Curious child thinking with GritWit puzzles"
                    className="w-full h-[380px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

                  {/* Floating Mascot Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 flex items-center gap-3 shadow-lg">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="celebrate" bubbleText="Meet Witty!" />
                    <div className="text-xs">
                      <span className="font-extrabold text-amber-300 block">Witty the Brain Buddy</span>
                      <span className="text-slate-300 text-[11px] leading-snug">
                        Turning complex reasoning into playful discovery for ages 6–9.
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Pillars pill bar */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-teal-900/70 border border-teal-500/40 text-teal-200 text-center">
                    <span className="font-bold block text-[11px]">Critical Thinking</span>
                    <span className="text-[10px] text-teal-300">Analyse • Evaluate</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-600 text-slate-200 text-center">
                    <span className="font-bold block text-[11px]">Logical Reasoning</span>
                    <span className="text-[10px] text-amber-300">Deduce • Infer</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Crisp White Scalloped Waves at Bottom of Hero Section */}
        <MultiLayerWaves position="bottom" color="#ffffff" />
      </section>

      {/* 2. ABOUT SECTION DIRECTLY BELOW HERO */}
      <AboutGritWitSection />

      {/* 3. PROGRAMS OVERVIEW (4-Column Modern Cards) */}
      <SkillsOverviewSection />

      {/* 4. INTERACTIVE TRY-IT-OUT PUZZLE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveThinkingPuzzle />
      </section>

      {/* 5. PROGRAMME JOURNEY SECTION (How The GritWit Journey Unfolds) */}
      <ProgrammeJourneySection />

      {/* 6. MEET THE EDUCATOR / FOUNDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-950 via-stone-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-teal-500/20 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="shrink-0 relative">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-teal-400/40 shadow-2xl bg-stone-800">
                <img
                  src="/gritwit/educator-founder.jpg"
                  alt="GritWit Educator and Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30">
                Founder-Led Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Designed by Educators Who Understand How Children Actually Think
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                &ldquo;I started GritWit because as both an educator and observer of current schooling, I saw how children are conditioned to hunt for the immediate &apos;right answer&apos;. When they stumble upon a tricky problem, anxiety kicks in because no one taught them how to navigate the messy, beautiful middle ground of reasoning. GritWit was born to turn that fear into pure intellectual adventure.&rdquo;
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-stone-300">
                <span className="bg-stone-800/80 px-3 py-1.5 rounded-xl border border-stone-700">Theoretical Foundations: Bloom & Piaget</span>
                <span className="bg-stone-800/80 px-3 py-1.5 rounded-xl border border-stone-700">Emotional Intelligence: Daniel Goleman</span>
                <span className="bg-stone-800/80 px-3 py-1.5 rounded-xl border border-stone-700">Multiple Intelligences: Howard Gardner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARENT REVIEWS SECTION */}
      <ParentReviewsSection />

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <HomeFaqSection />

      {/* 9. FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-teal-200 rounded-3xl p-8 sm:p-12 text-stone-950 text-center space-y-6 shadow-xl border border-amber-300/80 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <WittyMascot className="w-16 h-16 mx-auto" expression="happy" />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Give Your Child The Gift of Independent Thinking
            </h2>
            <p className="text-sm sm:text-base text-stone-900 font-medium leading-relaxed">
              Limited seats per cohort (4–6 children per pod) to guarantee individual educator attention. Book a discovery conversation or explore the full 20 sessions today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-stone-950 hover:bg-stone-900 text-white font-extrabold px-8 py-6 rounded-2xl shadow-lg flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Book a Call / Enquire</span>
                </Button>
              </Link>
              <Link href="/program" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/90 hover:bg-white border-stone-800 text-stone-950 font-bold px-7 py-6 rounded-2xl">
                  Explore 20 Sessions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
