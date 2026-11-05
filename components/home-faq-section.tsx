"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Sparkles, BookOpen, Users, Compass, ShieldCheck, Home } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  id: string
  name: string
  icon: any
  tagline: string
  questions: FAQItem[]
}

export function HomeFaqSection() {
  const categories: FAQCategory[] = [
    {
      id: "curriculum",
      name: "Programme & Curriculum",
      icon: BookOpen,
      tagline: "Syllabus, 20 sessions & four core skills",
      questions: [
        {
          question: "Why is GritWit specifically designed for children aged 6 to 9?",
          answer: "Between ages 6 and 9 (the concrete operational stage identified by Jean Piaget), a child's brain undergoes a pivotal leap from observational copying to structured logic and mental reversibility. Developing foundational reasoning during this formative window prevents fear of complex problems and builds lifelong intellectual self-reliance."
        },
        {
          question: "How does GritWit differ from a regular tuition centre or coding class?",
          answer: "Tuition centres primarily drill syllabus answers for upcoming school exams, and coding classes jump straight into computer syntax. GritWit trains the core cognitive architecture that sits beneath all of them: critical thinking, deductive logic, spatial visualisation, and verbal comprehension. We don't focus only on getting the right answer — we teach children how to navigate their way towards it."
        },
        {
          question: "What are Witty's Challenge Days?",
          answer: "Every 5 sessions (Sessions 7, 13, and 19), children step away from structured learning to compete in pure gamified logic escape rooms and mystery quests. There is no new teaching on these days — just pure thinking, teamwork, and joyful application of the skills learned."
        },
        {
          question: "What is the Character Corner in every session?",
          answer: "Every single session closes with a 5-minute Character Corner connecting the day's cognitive skill to an enduring human value (Honesty, Fair-Mindedness, Grit, and Empathy). Because sharp thinking and a kind heart belong together."
        }
      ]
    },
    {
      id: "sessions",
      name: "Sessions & Batch Format",
      icon: Users,
      tagline: "Timings, pod size & educator guidance",
      questions: [
        {
          question: "What is the batch size and delivery format?",
          answer: "Sessions are conducted live online with certified cognitive educators in intimate pods of 4 to 6 children. This guarantees that every child is heard, actively participates in debates, and receives personalized feedback on their unique thinking instincts."
        },
        {
          question: "How often do classes take place?",
          answer: "The programme spans 20 sessions conducted 3 times per week over approximately 7 weeks. We offer flexible weekday evening and weekend morning batches to suit your child's routine."
        },
        {
          question: "What happens if my child misses a live session?",
          answer: "We understand family schedules! Every session includes comprehensive recap notes and Witty's Challenge toolkit. We also offer scheduled weekend catch-up pods so no child falls behind."
        }
      ]
    },
    {
      id: "assessments",
      name: "Assessments & Growth",
      icon: Compass,
      tagline: "Thinker Check-In, Check-Out & parent reports",
      questions: [
        {
          question: "How do parents see concrete growth?",
          answer: "Every child begins with a low-pressure baseline 'Thinker Check-In' in Session 01 and completes a 'Thinker Check-Out' in Session 20. Parents receive a detailed cognitive growth report measuring comparative leaps across all 4 domains, accompanied by an interactive Parent Connect graduation session."
        },
        {
          question: "What happens during the Session 20 Parent Connect?",
          answer: "The final session brings parents into the pod. We celebrate your child's growth together, review their progress from Check-In to Check-Out, and provide you with personalized home toolkits to keep building their cognitive confidence."
        }
      ]
    },
    {
      id: "homework",
      name: "Homework & Family Life",
      icon: Home,
      tagline: "Witty's 5-minute take-home challenges",
      questions: [
        {
          question: "Is there heavy homework between sessions?",
          answer: "No tedious worksheets! Instead, children receive 'Witty's Family Challenges' — engaging 5-minute riddles and estimation games designed by our mascot Witty to be played at the dinner table or on family walks, reinforcing cognitive habits organically."
        },
        {
          question: "Do children need to prepare anything before joining?",
          answer: "No prior preparation or advance study is required! Just a curious mind, a piece of paper, pencils/markers, and a quiet space with an internet connection."
        }
      ]
    },
    {
      id: "guarantee",
      name: "Fees & Guarantee",
      icon: ShieldCheck,
      tagline: "Transparent fees & 100% money-back policy",
      questions: [
        {
          question: "What is your 100% Satisfaction Guarantee?",
          answer: "We want every parent to be completely confident. If after Session 01 (Thinker Check-In) you feel that GritWit is not the right developmental fit for your child, simply notify us before Session 02 and you will receive a full 100% refund."
        },
        {
          question: "How does enrolment and payment work?",
          answer: "You can book a free educator call first to understand if GritWit matches your child's developmental stage. Once you decide to enrol, our team shares a secure direct invoice link supporting UPI, Cards, and NetBanking."
        }
      ]
    }
  ]

  const [activeTab, setActiveTab] = useState<string>("curriculum")
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0]

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setOpenIdx(0) // Open first question of newly selected category
  }

  const toggleQuestion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-teal-800 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Frequently Asked{' '}
            <span className="inline-block bg-amber-400 text-stone-950 px-3.5 py-0.5 rounded-2xl font-black shadow-sm transform -rotate-1 border border-amber-300">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Select a category on the left to explore answers on curriculum, batch timings, growth tracking, and fees.
          </p>
        </div>

        {/* 2-Column Split: Category Navigation on Left, Questions on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Category Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-black tracking-wider uppercase text-stone-400 block px-1">
              Select Category
            </span>
            
            <div className="space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = activeTab === cat.id

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                      isActive
                        ? "bg-teal-700 text-white border-teal-700 shadow-lg shadow-teal-900/10 scale-[1.01]"
                        : "bg-white text-stone-800 border-stone-200/80 hover:border-teal-200 hover:bg-stone-50/80 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? "bg-white/20 text-white" : "bg-teal-50 text-teal-700"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`text-sm sm:text-base font-bold ${isActive ? "text-white" : "text-stone-900"}`}>
                          {cat.name}
                        </h4>
                        <p className={`text-xs ${isActive ? "text-teal-100" : "text-stone-500"}`}>
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <div className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-amber-400 text-stone-950" : "bg-stone-100 text-stone-600"
                    }`}>
                      {cat.questions.length}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Questions Accordion for the Selected Category */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-black tracking-wider uppercase text-teal-800">
                {activeCategory.name} ({activeCategory.questions.length} Questions)
              </span>
              <span className="text-xs text-stone-400 hidden sm:inline">Click to expand</span>
            </div>

            <div className="space-y-3">
              {activeCategory.questions.map((item, idx) => {
                const isOpen = openIdx === idx

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? "bg-white border-teal-300 shadow-md ring-1 ring-teal-500/10"
                        : "bg-white border-stone-200/90 hover:border-teal-200 shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleQuestion(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {item.question}
                      </h4>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-teal-700 text-white rotate-180" : "bg-stone-100 text-stone-600"
                      }`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-teal-50 animate-in fade-in duration-200">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
