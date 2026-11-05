"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, Sparkles, Users, ShieldCheck, 
  HelpCircle, MessageCircle, ArrowRight,
  Award, MapPin, Laptop, 
  CheckCircle2, ChevronDown, ChevronUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function ChessPricingSection() {
  const [deliveryMode, setDeliveryMode] = useState<"inPerson" | "online">("inPerson")
  const [showTable, setShowTable] = useState(false)

  const cyan = "#0ea5e9"
  const isOnline = deliveryMode === "online"

  const formatPrice = (val: number) => {
    return val % 1 !== 0 ? val.toFixed(2) : val.toString()
  }

  // Pricing Data - Per-lesson display with 4-lesson bundle specification
  const plans = [
    {
      id: "assessment",
      name: "1-on-1 Assessment",
      subtitle: "Diagnostic Benchmark",
      badge: "Diagnostic",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      icon: <HelpCircle className="w-5 h-5 text-sky-500" />,
      ratePerLesson: isOnline ? 80 : 100,
      totalPackagePrice: isOnline ? 80 : 100,
      periodLabel: "Single Evaluation",
      rateUnit: "/ evaluation",
      packageNote: "60-min skill evaluation",
      highlight: false,
      popular: false,
      features: [
        "1-on-1 benchmark with titled coach",
        "Tactical & opening strengths audit",
        "Custom roadmap & syllabus advice"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to book an Assessment (1-on-1) ${isOnline ? "Online ($80)" : "In-Person ($100)"}. Please share available evaluation slots.`
    },
    {
      id: "private-titled",
      name: "(Titled Coach) Private",
      subtitle: "1-on-1 FIDE Master Mentorship",
      badge: "Faculty Highlight",
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      // 4-Lesson total: $600 in-person ($150/ea) or $480 online ($120/ea)
      ratePerLesson: isOnline ? 120 : 150,
      totalPackagePrice: isOnline ? 480 : 600,
      periodLabel: "4-Lesson Pack",
      rateUnit: "/ lesson",
      packageNote: isOnline ? "Billed as $480 for 4 lessons" : "Billed as $600 for 4 lessons",
      highlight: true,
      popular: true,
      features: [
        "Dedicated certified FIDE Master coach",
        "Tailored opening repertoire & game review",
        "Async WhatsApp game checks between lessons"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to enroll in (Titled Coach) Private 1-on-1 coaching (${isOnline ? "$120/lesson - $480 for 4 lessons (Online)" : "$150/lesson - $600 for 4 lessons (In-Person)"}). Please share coach availability.`
    },
    {
      id: "small-group",
      name: "Small Group (2-4 Pax)",
      subtitle: "Semi-Private Cohorts",
      badge: "High Synergy",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      // 4-Lesson total: $250 in-person ($62.50/ea) or $200 online ($50/ea)
      ratePerLesson: isOnline ? 50 : 62.5,
      totalPackagePrice: isOnline ? 200 : 250,
      periodLabel: "4-Lesson Pack",
      rateUnit: "/ lesson",
      packageNote: isOnline ? "Billed as $200 for 4 lessons" : "Billed as $250 for 4 lessons",
      highlight: false,
      popular: false,
      features: [
        "2 to 4 players for high attention",
        "Timed clock sparring & critical review",
        "Dynamic endgame & tactical drills"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to join Small Group (2 to 4 Pax) coaching (${isOnline ? "$50/lesson - $200 for 4 lessons (Online)" : "$62.50/lesson - $250 for 4 lessons (In-Person)"}). Please share upcoming cohort schedules.`
    },
    {
      id: "large-group",
      name: "Large Group (5-8 Pax)",
      subtitle: "Weekly Group Workshops",
      badge: "Best Value",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      icon: <Users className="w-5 h-5 text-purple-500" />,
      // 4-Lesson total: $200 in-person ($50/ea) or $160 online ($40/ea)
      ratePerLesson: isOnline ? 40 : 50,
      totalPackagePrice: isOnline ? 160 : 200,
      periodLabel: "4-Lesson Pack",
      rateUnit: "/ lesson",
      packageNote: isOnline ? "Billed as $160 for 4 lessons" : "Billed as $200 for 4 lessons",
      highlight: false,
      popular: false,
      features: [
        "Structured cohort curriculum (5-8 pax)",
        "Opening themes & tactical puzzle sets",
        "Arena tournaments with coach review"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to enroll in Large Group (5 to 8 Pax) coaching (${isOnline ? "$40/lesson - $160 for 4 lessons (Online)" : "$50/lesson - $200 for 4 lessons (In-Person)"}). Please share dates and details.`
    }
  ]

  return (
    <section id="pricing" className="py-12 md:py-16 bg-[#f8fafc] font-sans border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#1a365d] text-[10px] font-black tracking-widest uppercase">
              Transparent Tuition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tight leading-tight uppercase italic">
            Academy <span style={{ color: cyan }}>Price List.</span>
          </h2>
          <p className="text-slate-500 font-medium text-xs sm:text-base mt-2">
            Switch between in-person Woodlands Studio and online interactive coaching below.
          </p>
        </div>

        {/* =========================================================
            CLEAN LOCATION SWITCHER (IN-PERSON VS ONLINE)
           ========================================================= */}
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-white p-3 sm:p-4 rounded-3xl border-2 border-slate-200/90 shadow-md">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1.5 px-1 mb-2">
              <MapPin size={12} className="text-sky-500" />
              Select Coaching Mode
            </span>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setDeliveryMode("inPerson")}
                className={`py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                  deliveryMode === "inPerson"
                    ? "bg-[#1a365d] text-white shadow-md scale-[1.02]"
                    : "text-slate-600 hover:text-[#1a365d] hover:bg-white/60"
                }`}
              >
                <MapPin size={13} className={deliveryMode === "inPerson" ? "text-sky-400" : "text-slate-400"} />
                <span>In-Person</span>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMode("online")}
                className={`py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                  deliveryMode === "online"
                    ? "bg-sky-500 text-white shadow-md scale-[1.02]"
                    : "text-slate-600 hover:text-sky-600 hover:bg-white/60"
                }`}
              >
                <Laptop size={13} />
                <span>Online</span>
                <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full ${
                  deliveryMode === "online" ? "bg-white text-sky-600" : "bg-sky-200 text-sky-800"
                }`}>
                  -20%
                </span>
              </button>
            </div>
          </div>

          {/* ACTIVE STATUS INDICATOR */}
          <div className="mt-2.5 text-center text-xs font-bold text-slate-500 flex items-center justify-center gap-2">
            <span>Currently showing:</span>
            <span className="text-[#1a365d] font-black underline decoration-sky-500 decoration-2">
              {deliveryMode === "inPerson" ? "In-Person Woodlands Studio" : "Online Interactive (-20%)"}
            </span>
            <span>•</span>
            <span className="text-[#1a365d] font-black underline decoration-emerald-500 decoration-2">
              Per-Lesson Rates (4-Lesson Bundle)
            </span>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight 
                  ? "bg-white border-2 border-sky-400 shadow-xl shadow-sky-900/10 ring-4 ring-sky-100" 
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
                  <Sparkles size={11} className="fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-1 mb-2.5">
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-100">
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-[1000] text-[#1a365d] tracking-tight leading-tight">
                  {plan.name}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {plan.subtitle}
                </p>

                {/* PRICE BOX */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-200 mb-4">
                  
                  {/* Period tag */}
                  <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    <span>{plan.id === "assessment" ? "Diagnostic Fee" : "Fee Per Lesson"}</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                      {plan.periodLabel}
                    </span>
                  </div>

                  {/* Big Headline Price - PER LESSON RATE */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-black text-slate-400">SGD</span>
                    <span className="text-3xl sm:text-4xl font-[1000] text-[#1a365d] tracking-tight leading-none">
                      ${formatPrice(plan.ratePerLesson)}
                    </span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider ml-1">
                      {plan.rateUnit}
                    </span>
                  </div>

                  {/* Sub breakdown - States that it is for 4 lessons */}
                  <div className="text-xs font-black text-sky-700 mt-2 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-sky-500 shrink-0" />
                    <span>{plan.packageNote}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-5 text-[11px] text-slate-600">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check size={13} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="font-semibold text-slate-700 leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 mt-auto">
                <Button 
                  asChild 
                  size="sm"
                  className={`w-full rounded-2xl py-5 font-[1000] uppercase tracking-wider text-[10px] shadow-md transition-all active:scale-95 ${
                    plan.highlight 
                      ? "bg-[#25D366] hover:bg-[#20ba59] text-white" 
                      : "bg-[#1a365d] hover:bg-[#152c4d] text-white"
                  }`}
                >
                  <a 
                    href={getWhatsAppUrl(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={14} className="fill-current" />
                    <span>Book {plan.id === 'assessment' ? 'Diagnostic' : 'Now'}</span>
                    <ArrowRight size={13} />
                  </a>
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* COMPARISON ACCORDION / TOGGLE BUTTON */}
        <div className="text-center mb-6">
          <button
            type="button"
            onClick={() => setShowTable(!showTable)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-[#1a365d] hover:bg-slate-50 text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <span>{showTable ? "Hide Side-by-Side Comparison" : "Compare All Rates in 1 Table"}</span>
            {showTable ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* EXPANDABLE COMPARISON TABLE */}
        <AnimatePresence>
          {showTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8"
            >
              <div className="p-4 bg-slate-100/80 border-b border-slate-200">
                <h3 className="text-sm font-[1000] text-[#1a365d] uppercase tracking-wider">
                  Full Rate Comparison Matrix (SGD)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[#1a365d] text-[10px] font-black uppercase tracking-wider border-b border-slate-200">
                      <th className="py-3 px-4">Track</th>
                      <th className="py-3 px-4 bg-sky-50 text-sky-900">In-Person (Woodlands Studio)</th>
                      <th className="py-3 px-4 bg-emerald-50 text-emerald-900">Online Interactive (-20%)</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold">
                    <tr>
                      <td className="py-3 px-4">
                        <strong className="text-[#1a365d]">1-on-1 Assessment</strong>
                        <p className="text-[10px] text-slate-400">60-min diagnostic test</p>
                      </td>
                      <td className="py-3 px-4 bg-sky-50/40 font-black text-[#1a365d]">$100 (Single Evaluation)</td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-black text-emerald-800">$80 (Single Evaluation)</td>
                      <td className="py-3 px-4 text-right">
                        <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-[10px] font-black py-1 px-3">
                          <a href={getWhatsAppUrl("Hi Chessmatic! I'd like to book an Assessment.")} target="_blank" rel="noopener noreferrer">Book</a>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <strong className="text-[#1a365d]">(Titled Coach) Private</strong>
                        <p className="text-[10px] text-slate-400">1-on-1 Mentorship (4 Lessons)</p>
                      </td>
                      <td className="py-3 px-4 bg-sky-50/40 font-black text-[#1a365d]">
                        $150 <span className="text-[10px] font-bold text-slate-500">/ lesson ($600 for 4)</span>
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-black text-emerald-800">
                        $120 <span className="text-[10px] font-bold text-slate-500">/ lesson ($480 for 4)</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-[10px] font-black py-1 px-3">
                          <a href={getWhatsAppUrl("Hi Chessmatic! I'd like to book Private coaching.")} target="_blank" rel="noopener noreferrer">Book</a>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <strong className="text-[#1a365d]">Small Group (2-4 Pax)</strong>
                        <p className="text-[10px] text-slate-400">Semi-Private Cohort (4 Lessons)</p>
                      </td>
                      <td className="py-3 px-4 bg-sky-50/40 font-black text-[#1a365d]">
                        $62.50 <span className="text-[10px] font-bold text-slate-500">/ lesson ($250 for 4)</span>
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-black text-emerald-800">
                        $50 <span className="text-[10px] font-bold text-slate-500">/ lesson ($200 for 4)</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-[10px] font-black py-1 px-3">
                          <a href={getWhatsAppUrl("Hi Chessmatic! I'd like to book Small Group coaching.")} target="_blank" rel="noopener noreferrer">Book</a>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <strong className="text-[#1a365d]">Large Group (5-8 Pax)</strong>
                        <p className="text-[10px] text-slate-400">Weekly Workshops (4 Lessons)</p>
                      </td>
                      <td className="py-3 px-4 bg-sky-50/40 font-black text-[#1a365d]">
                        $50 <span className="text-[10px] font-bold text-slate-500">/ lesson ($200 for 4)</span>
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-black text-emerald-800">
                        $40 <span className="text-[10px] font-bold text-slate-500">/ lesson ($160 for 4)</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-[10px] font-black py-1 px-3">
                          <a href={getWhatsAppUrl("Hi Chessmatic! I'd like to book Large Group coaching.")} target="_blank" rel="noopener noreferrer">Book</a>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* POLICY FOOTNOTE */}
        <div className="text-center text-slate-500 text-[11px] font-semibold mb-6 flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} className="text-sky-500 shrink-0" />
          <span>
            * Reflected pricing is for a 4-lesson bundle (minimum purchase requirement). Structured for consistent progression and cohort continuity.
          </span>
        </div>

        {/* POLICY RIBBON */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600 text-[11px] font-semibold text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <strong>Tuition Terms:</strong> 4-lesson bundles guarantee cohort continuity.
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <strong>Online Lessons:</strong> Automatic 20% off
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <strong>Bulk Savings:</strong> 12+ (10% off) • 24+ (20% off)
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <strong>Non-Titled Coach:</strong> 20% off
            </span>
            <span className="text-slate-400 text-[10px] italic">
              (Discounts are non-stackable)
            </span>
          </div>

          <Link 
            href="/terms" 
            className="inline-flex items-center gap-1.5 text-[11px] font-black text-sky-600 hover:text-[#1a365d] shrink-0 uppercase tracking-wider transition-colors"
          >
            <ShieldCheck size={13} />
            <span>View Full Terms</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
