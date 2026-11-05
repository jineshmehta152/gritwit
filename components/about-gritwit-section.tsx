import React from 'react'
import Link from 'next/link'
import { Sparkles, Brain, Compass, Users, CheckCircle2, ArrowRight, Calendar, Heart, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutGritWitSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Styled Image with Asymmetric Curved Frame & GritWit Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow & Asymmetric Curved Container */}
              <div className="relative rounded-[40px] rounded-tl-[90px] rounded-br-[70px] overflow-hidden shadow-2xl border-4 border-white bg-teal-950 group">
                <img
                  src="/gritwit/skill-critical-thinking.jpg"
                  alt="Children learning cognitive enrichment at GritWit"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Badge (GritWit Teal & Amber) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-teal-100 flex items-center gap-1.5 text-xs font-black text-stone-900">
                  <span className="text-amber-500 font-bold">✦</span>
                  <span>500+ Young Thinkers Nurtured</span>
                </div>

                {/* Bottom-Left Star Badge in GritWit Teal & Amber Glow */}
                <div className="absolute bottom-5 left-5 w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-amber-400 p-0.5 shadow-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <div className="w-full h-full rounded-[14px] bg-stone-950 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-amber-300 fill-amber-300" />
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-xl border border-teal-500/30 text-[11px] font-semibold text-teal-200">
                  Ages 6–9 Specialized
                </div>
              </div>

              {/* Background Decorative Accent Ring in Brand Colors */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Headline with GritWit Brand Colors & 4-Grid Features */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Header with GritWit Brand Pill Highlights (Warm Sunny Amber & Deep Calm Teal) */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-stone-900 tracking-tight leading-[1.2]">
                Master Thinking{' '}
                <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
                  Step By Step
                </span>
                <br />
                Build Your{' '}
                <span className="inline-block bg-teal-700 text-white px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform rotate-1 mt-1 border border-teal-600">
                  Confident Mindset
                </span>
              </h2>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Founded with a singular vision to nurture independent thinking, intellectual courage, and sharp reasoning abilities, <strong className="text-teal-900">GritWit Academy</strong> provides a premier cognitive enrichment ecosystem for children aged 6–9. Moving beyond rote answers and test drills, our certified educators guide every child to understand <em>how</em> to think their way to real breakthroughs.
            </p>

            {/* 4 Feature Badges Grid (Themed in GritWit Brand Accents) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Feature 1 - Brand Teal */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full border-2 border-teal-500/40 bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Certified Cognitive Educators
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Direct instruction by specialists trained in Bloom&apos;s Taxonomy and Piaget&apos;s developmental stages.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Brand Amber */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full border-2 border-amber-400/50 bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Compass className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Structured 20-Session Plan
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    15 Higher-Order Thinking Skills across 4 domains with 3 Witty&apos;s Challenge Days and zero rote drills.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Soft Sky/Teal */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full border-2 border-teal-400/50 bg-teal-50/80 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Brain className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Check-In & Growth Analytics
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Scientific baseline pre-assessment and post-assessment measuring real cognitive leap data.
                  </p>
                </div>
              </div>

              {/* Feature 4 - Warm Amber/Rose */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full border-2 border-amber-500/40 bg-amber-50/70 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Heart className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Character In Every Session
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Character Corner connecting logic to honesty, empathy, and resilience in small pods of 4–6 thinkers.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs strictly matching GritWit Brand Palette */}
            <div className="space-y-3 pt-3">
              <Link href="/contact" className="block w-full">
                <Button
                  size="lg"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-sm sm:text-base py-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-amber-400"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Discovery Call / Assessment</span>
                </Button>
              </Link>

              <Link href="/program" className="block w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white hover:bg-teal-50/50 text-teal-900 font-bold text-sm sm:text-base py-6 rounded-2xl border-teal-200/90 shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore 20 Sessions & 4 Core Skills</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-teal-600" />
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
