import React from 'react'
import { Star, Quote, CheckCircle2, Heart, Sparkles, MessageSquareQuote } from 'lucide-react'

export function ParentReviewsSection() {
  const reviews = [
    {
      parentName: "Pooja Mehta",
      childInfo: "Mother of Aarav (Age 7)",
      location: "Bengaluru",
      rating: 5,
      highlight: "From frustration to 'Wait, let me draw the clues first!'",
      quote: "Aarav used to get frustrated and cry whenever a math riddle didn't make immediate sense. After Session 6 (Cause & Effect) and Witty's Challenge, his first instinct now is to say: 'Wait, let me draw the clues first!' The patience leap and self-belief is extraordinary.",
      tag: "Patience & Cause-Effect",
      avatarBg: "bg-teal-700 text-white"
    },
    {
      parentName: "Dr. Rajesh Kulkarni",
      childInfo: "Father of Ananya (Age 8)",
      location: "Mumbai",
      rating: 5,
      highlight: "Totally unlike regular tuition. She looks forward to it!",
      quote: "GritWit is totally unlike regular tuition. It doesn't feel like stressful homework. Ananya looks forward to the sessions because of Witty and the mystery escape rooms. The Character Corner connecting logic to empathy is such a thoughtful touch.",
      tag: "Curiosity & Character",
      avatarBg: "bg-amber-600 text-white"
    },
    {
      parentName: "Sneha & Vikram T.",
      childInfo: "Parents of Meera (Age 9)",
      location: "New Delhi",
      rating: 5,
      highlight: "Tangible data on how our daughter evaluates evidence",
      quote: "The Thinker Check-In and Check-Out reports gave us tangible data on how our daughter evaluates evidence and makes deductions. It gave us the exact language to encourage her at home without helicoptering her homework.",
      tag: "Check-In Growth Data",
      avatarBg: "bg-sky-700 text-white"
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-stone-50/60 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-200/20 via-teal-100/30 to-sky-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Trusted by Thoughtful Parents Across India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            What Parents Notice{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              At Home
            </span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            The true test of cognitive enrichment is what happens outside the classroom — during family discussions, homework hurdles, and everyday problem-solving.
          </p>

          {/* Social Proof Aggregate Badge */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-stone-700">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9 / 5 Average Rating from Over 500+ Family Cohorts</span>
          </div>
        </div>

        {/* 3 Premium Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-7 sm:p-8 shadow-[0_10px_30px_rgb(0,0,0,0.06)] border border-stone-200/80 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            >
              {/* Subtle top quote mark */}
              <div className="absolute top-6 right-6 text-stone-200 group-hover:text-amber-200 transition-colors">
                <Quote className="w-10 h-10 rotate-180 opacity-60" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* 5-Star Row + Pill Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 px-2.5 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>

                {/* Catchy Highlight Quote */}
                <h3 className="text-base font-black text-stone-900 leading-snug group-hover:text-teal-800 transition-colors">
                  &ldquo;{rev.highlight}&rdquo;
                </h3>

                {/* Full Parent Observation */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author & Child Info Footer */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3.5 relative z-10">
                {/* Monogram Avatar */}
                <div className={`w-11 h-11 rounded-full ${rev.avatarBg} font-black text-xs flex items-center justify-center shrink-0 shadow-md`}>
                  {rev.parentName.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-extrabold text-stone-900 leading-none">
                      {rev.parentName}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <p className="text-xs font-semibold text-teal-700">
                    {rev.childInfo}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    {rev.location} • Verified GritWit Family
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm max-w-2xl mx-auto flex items-center justify-center gap-3 text-center text-xs text-stone-600">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <strong>100% Satisfaction Guarantee:</strong> If after Session 01 you feel GritWit is not the right fit for your child, receive a complete refund.
          </span>
        </div>

      </div>
    </section>
  )
}

