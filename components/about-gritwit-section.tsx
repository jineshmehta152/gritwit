import React from 'react'
import Link from 'next/link'
import { Sparkles, Brain, Compass, Users, CheckCircle2, ArrowRight, Calendar, Heart, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutGritWitSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Styled Image with Asymmetric Curved Frame & GritWit Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow & Asymmetric Curved Container */}
              <div className="relative rounded-[40px] rounded-tl-[90px] rounded-br-[70px] overflow-hidden shadow-2xl border-4 border-white bg-amber-100 group">
                <img
                  src="/gritwit/skill-critical-thinking.jpg"
                  alt="Children learning cognitive enrichment at GritWit"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-amber-200 flex items-center gap-1.5 text-xs font-black text-stone-900">
                  <span className="text-amber-500 font-bold">✦</span>
                  <span>500+ Happy Young Thinkers</span>
                </div>

                {/* Bottom-Left Star Badge in Warm Sun & Amber Glow */}
                <div className="absolute bottom-5 left-5 w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 p-0.5 shadow-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-amber-500 fill-amber-500" />
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl border border-amber-200 text-[11px] font-extrabold text-stone-800 shadow-sm">
                  Ages 6–9 Specialized
                </div>
              </div>

              {/* Background Decorative Accent Ring in Brand Colors */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400/25 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/25 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Friendly Headline & Visual Feature Cards */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-stone-900 tracking-tight leading-[1.2]">
                Learning How To Think{' '}
                <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
                  Step By Step
                </span>
                <br />
                With A Big Smile &{' '}
                <span className="inline-block bg-teal-600 text-white px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform rotate-1 mt-1">
                  Real Confidence
                </span>
              </h2>
            </div>

            {/* Narrative Paragraph - Conversational */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-stone-900">GritWit Academy</strong>, we believe every child has a brilliant detective inside them. Instead of memorising answers for tests, children ages 6–9 discover how to look at clues, test different paths, and celebrate &ldquo;aha!&rdquo; breakthrough moments in joyful, small groups of 4 to 6 friends.
            </p>

            {/* 4 Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 shadow-sm font-bold">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    Caring Mentors
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Patient educators who guide kids with fun questions instead of handing them answers.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-teal-50/60 border border-teal-200/80">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm font-bold">
                  <Compass className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    20 Adventure Sessions
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Visual puzzles, maze ciphers, and balance scales—no boring worksheets or drills.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-orange-50/60 border border-orange-200/80">
                <div className="w-10 h-10 rounded-xl bg-orange-400 text-stone-950 flex items-center justify-center shrink-0 shadow-sm font-bold">
                  <Brain className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    Clear Growth Insights
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Simple check-ins show you how your child&apos;s thinking confidence blossoms over time.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm font-bold">
                  <Heart className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    Patience & Teamwork
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Every session helps kids listen to others, stay calm, and try again when things get tricky.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-3">
              <Link href="/contact" className="block w-full">
                <Button
                  size="lg"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-sm sm:text-base py-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-amber-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Discovery Call / Assessment</span>
                </Button>
              </Link>

              <Link href="/program" className="block w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white hover:bg-amber-50/50 text-stone-800 font-bold text-sm sm:text-base py-6 rounded-2xl border-stone-300 shadow-sm flex items-center justify-center gap-2 transition-colors"
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
