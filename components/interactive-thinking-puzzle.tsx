"use client"

import { useState } from "react"
import { Check, HelpCircle, Sparkles, ArrowRight, Brain } from "lucide-react"
import { WittyMascot } from "./witty-mascot"

export function InteractiveThinkingPuzzle() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const puzzle = {
    title: "Witty's Mini-Challenge: The Lighthouse Clue",
    skill: "Logical Reasoning & Cause-Effect",
    scenario: "Three light towers stand on the shore. Tower A blinks every 2 seconds. Tower B blinks every 3 seconds. Tower C blinks only when Tower A and Tower B blink at the exact same second.",
    question: "At which second will Tower C blink for the second time? (They all started together at 0)",
    options: [
      { text: "At Second 6", feedback: "Close! That's when Tower C blinks for the FIRST time (LCM of 2 and 3 = 6)." },
      { text: "At Second 12", feedback: "Spot on! 6 seconds was the 1st time, and 12 seconds is the 2nd time! You reasoned through the multiple cycles like a GritWit thinker!", correct: true },
      { text: "At Second 9", feedback: "Think about Tower A: Tower A blinks at 2, 4, 6, 8, 10... it never blinks at 9!" },
      { text: "At Second 10", feedback: "At second 10, Tower A blinks (10/2=5), but Tower B does not (10/3 has a remainder)." }
    ]
  }

  const handleSelect = (idx: number) => {
    setSelectedOption(idx)
    setHasSubmitted(true)
  }

  return (
    <div className="bg-gradient-to-br from-amber-50/80 via-white to-teal-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
      <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-amber-100">
        <div className="flex items-center gap-3">
          <WittyMascot className="w-11 h-11" expression="thinking" animate={false} />
          <div>
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded-full">
              {puzzle.skill}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
              {puzzle.title}
            </h4>
          </div>
        </div>
        <span className="text-xs text-stone-500 hidden sm:inline-block">Try with your child!</span>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-stone-700 bg-white/90 p-4 rounded-2xl border border-stone-200/70 leading-relaxed">
          {puzzle.scenario}
        </p>

        <p className="text-sm font-bold text-stone-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-teal-600" />
          {puzzle.question}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {puzzle.options.map((opt, idx) => {
            const isChosen = selectedOption === idx
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-3.5 rounded-2xl text-left text-sm font-semibold transition-all border flex items-center justify-between ${
                  isChosen
                    ? opt.correct
                      ? "bg-teal-600 text-white border-teal-600 shadow-md"
                      : "bg-rose-50 text-rose-900 border-rose-300 shadow-sm"
                    : "bg-white hover:bg-stone-50 text-stone-800 border-stone-200 hover:border-amber-400"
                }`}
              >
                <span>{opt.text}</span>
                {isChosen && (
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${opt.correct ? 'bg-white text-teal-700' : 'bg-rose-200 text-rose-800'}`}>
                    {opt.correct ? '✓' : '✗'}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {hasSubmitted && selectedOption !== null && (
          <div className={`p-4 rounded-2xl text-xs sm:text-sm animate-in fade-in duration-300 ${
            puzzle.options[selectedOption].correct 
              ? "bg-emerald-50 border border-emerald-200 text-emerald-900" 
              : "bg-amber-50 border border-amber-200 text-amber-900"
          }`}>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{puzzle.options[selectedOption].feedback}</p>
                <p className="text-xs text-stone-600 mt-1">
                  At GritWit, we celebrate the reasoning path rather than guessing. Children learn how to diagram cycles, identify lowest common multiples naturally, and articulate their thought process with confidence!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

