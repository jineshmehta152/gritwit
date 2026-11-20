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
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-teal-50/60 text-stone-900 pt-8 sm:pt-14 pb-0 border-b border-amber-100/50">
        
        {/* Soft Sunny Playful Ambient Blobs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between pb-12 sm:pb-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold text-stone-800 shadow-sm backdrop-blur-sm">
                <WittyMascot className="w-5 h-5" expression="wink" animate={false} />
                <span>A Thoughtful, Playful Learning Space for Kids Ages 6–9</span>
              </div>

              {/* Punchy, Conversational Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.2]">
                Teaching Children <br />
                <span className="bg-gradient-to-r from-teal-700 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  How to Think, Not What to Think.
                </span>
              </h1>

              {/* Conversational Subtitle */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                Where curious young minds learn to solve tricky puzzles, ask great questions, and build unshakeable confidence through <strong>20 joyful, mentor-led sessions</strong>.
              </p>

              {/* CTA Buttons: Contact and Program */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-base px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group flex items-center justify-center gap-2 border border-amber-300">
                    <PhoneCall className="w-5 h-5 text-stone-950" />
                    <span>Book a Call / Enquire</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="/program" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white hover:bg-amber-50/60 border-stone-200 text-stone-800 font-bold text-base px-7 py-6 rounded-2xl shadow-sm flex items-center justify-center gap-2">
                    <BookMarked className="w-5 h-5 text-teal-600" />
                    <span>Explore 20 Sessions</span>
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-stone-600 font-semibold">
                <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Small Pods (4–6 Thinkers)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Hands-on Puzzles & Games</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Measurable Growth Reports</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Photorealistic Hero Child Photo & Warm Mascot Card */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Child Thinker Photograph in Warm Card Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src="/gritwit/hero-child.jpg"
                    alt="Curious child thinking with GritWit puzzles"
                    className="w-full h-[380px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />

                  {/* Floating Mascot Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-200/90 flex items-center gap-3 shadow-xl">
                    <WittyMascot className="w-12 h-12 shrink-0" expression="celebrate" bubbleText="Meet Witty!" />
                    <div className="text-xs">
                      <span className="font-extrabold text-amber-700 block">Witty the Brain Buddy</span>
                      <span className="text-stone-600 text-[11px] leading-snug">
                        Making big thinking fun and friendly for children ages 6–9!
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Pillars pill bar in bright sunny colors */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-center shadow-2xs">
                    <span className="font-black block text-[11px]">Critical Thinking</span>
                    <span className="text-[10px] text-teal-700">Ask • Connect Clues</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-center shadow-2xs">
                    <span className="font-black block text-[11px]">Logical Reasoning</span>
                    <span className="text-[10px] text-amber-800">Patterns • Deduction</span>
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
        <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-teal-50/60 rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="shrink-0 relative">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-amber-100">
                <img
                  src="/gritwit/educator-founder.jpg"
                  alt="GritWit Educator and Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
                A Note From Our Educator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Designed for How Children Really Learn & Wonder
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                &ldquo;Too often, children are rushed into finding the single &apos;right answer&apos;. When they face a tricky puzzle, they feel nervous because they haven&apos;t been shown the fun of exploring clues. At GritWit, we turn that uncertainty into an exciting adventure—where guessing, testing ideas, and laughing through puzzles is how real confidence is built.&rdquo;
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-stone-700">
                <span className="bg-white px-3.5 py-1.5 rounded-xl border border-amber-200 shadow-2xs">Hands-on Puzzle Solving</span>
                <span className="bg-white px-3.5 py-1.5 rounded-xl border border-teal-200 shadow-2xs">Curiosity over Memorization</span>
                <span className="bg-white px-3.5 py-1.5 rounded-xl border border-amber-200 shadow-2xs">Confidence & Character Building</span>
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
