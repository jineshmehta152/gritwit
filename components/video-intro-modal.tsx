"use client"

import { useState } from "react"
import { Play, X, Sparkles, BookOpen, Brain, Compass, Lightbulb, CheckCircle2, Star, ShieldCheck } from "lucide-react"
import { WittyMascot } from "@/components/witty-mascot"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function VideoIntroModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Video trigger card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900 via-stone-900 to-slate-900 text-white p-6 sm:p-8 shadow-2xl border border-teal-500/20 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-between">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>A Personal Message to Parents</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              &ldquo;Why I founded GritWit — and what children truly need today.&rdquo;
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              In this 2-minute message, our founder shares why easy answers and rote memory rob children of the joy of independent thinking — and how GritWit restores intellectual courage.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-stone-300">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-teal-400" /> Educator-Led Philosophy</span>
              <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-amber-400" /> Cognitive Science Backed</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-rose-400" /> Ages 6–9 Specialized</span>
            </div>
          </div>

          {/* Interactive Video Thumbnail */}
          <div className="shrink-0 relative">
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-64 sm:w-72 h-44 rounded-2xl overflow-hidden border-2 border-teal-400/40 bg-stone-800 shadow-xl flex items-center justify-center group/btn hover:scale-105 transition-all focus:outline-none"
              aria-label="Play founder video"
            >
              {/* Fallback educator placeholder artwork */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-950 via-stone-800 to-amber-950 flex flex-col items-center justify-center p-4">
                <WittyMascot className="w-16 h-16 mb-1 opacity-90 group-hover/btn:scale-110 transition-transform" expression="thinking" bubbleText="Listen to Founder" />
                <span className="text-xs text-amber-300 font-semibold mt-2">Founder&apos;s 2-Min Welcome</span>
              </div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-lg group-hover/btn:bg-amber-300 group-hover/btn:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-stone-950 ml-0.5" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-stone-300">
                02:18
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-stone-900 rounded-3xl overflow-hidden border border-stone-700 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-stone-800 bg-stone-950/70">
              <div className="flex items-center gap-3">
                <WittyMascot className="w-8 h-8" expression="happy" animate={false} />
                <div>
                  <h4 className="text-white font-bold text-sm">GritWit Founder Note</h4>
                  <p className="text-stone-400 text-xs">Why thinking skills & human values belong together</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Body */}
            <div className="aspect-video w-full bg-black flex flex-col items-center justify-center p-8 text-center text-stone-300 relative">
              {/* Natural Educator video container - can embed YouTube/Vimeo or HTML5 video */}
              <div className="max-w-md space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-teal-500/10 border-2 border-teal-500/30 flex items-center justify-center">
                  <WittyMascot className="w-14 h-14" expression="wink" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  &ldquo;Children don&apos;t need another tuition class. They need the tools to think for themselves.&rdquo;
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Our founder shares her background in cognitive pedagogy, how children develop mental frameworks between ages 6–9, and how the 20-session GritWit journey transforms everyday problem-solving.
                </p>
                <div className="pt-2">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs px-5">
                      Schedule a 1-on-1 Parent Discussion
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

