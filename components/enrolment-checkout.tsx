"use client"

import { useState } from "react"
import { Check, ShieldCheck, Sparkles, CreditCard, ArrowRight, Lock, CheckCircle2, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WittyMascot } from "@/components/witty-mascot"
import Link from "next/link"

export function EnrolmentCheckoutSection() {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'premium'>('standard')
  const [childName, setChildName] = useState('')
  const [childAge, setChildAge] = useState('7')
  const [parentName, setParentName] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [parentPhone, setParentPhone] = useState('')
  const [preferredBatch, setPreferredBatch] = useState('weekday-evening')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPaid, setIsPaid] = useState(false)

  const plans = {
    standard: {
      name: "Complete 20-Session Programme",
      sessions: "20 Live Interactive Sessions (4–6 Thinkers Pod)",
      priceINR: "₹14,999",
      priceOriginal: "₹19,999",
      discountBadge: "Save 25% Today",
      features: [
        "All 15 Higher-Order Cognitive Skills",
        "3 Witty's Challenge Days (Escape Rooms & Quests)",
        "Character Corner values in every session",
        "Thinker Check-In baseline assessment & report",
        "Thinker Check-Out growth validation report",
        "Parent Connect graduation & home toolkits",
        "Witty's Take-Home Family Activity kit",
        "Certified Cognitive Educator guidance"
      ]
    },
    premium: {
      name: "Complete Programme + 1-on-1 Mentorship",
      sessions: "20 Live Sessions + 3 Private 1-on-1 Deep Dives",
      priceINR: "₹21,999",
      priceOriginal: "₹27,999",
      discountBadge: "Most Popular",
      features: [
        "Everything in the Complete Programme",
        "3 Dedicated 1-on-1 45-min Deep Dive Sessions with Lead Educator",
        "Personalized Cognitive Learning Style Diagnostic",
        "Customized Daily Thinking Routines for Home & School",
        "Priority scheduling for weekday/weekend batch slots",
        "Direct educator WhatsApp access for learning guidance"
      ]
    }
  }

  const activePlan = plans[selectedPlan]

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!parentName || !parentEmail || !parentPhone || !childName) {
      alert("Please fill in parent details and child information.")
      return
    }

    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsPaid(true)
    }, 1200)
  }

  return (
    <div className="space-y-12">
      
      {/* Plan Switcher Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Standard Plan */}
        <div
          onClick={() => setSelectedPlan('standard')}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all border-2 relative flex flex-col justify-between ${
            selectedPlan === 'standard'
              ? "bg-white border-teal-600 shadow-xl ring-2 ring-teal-600/20"
              : "bg-white/80 border-stone-200 hover:border-stone-300 shadow-sm"
          }`}
        >
          {selectedPlan === 'standard' && (
            <span className="absolute -top-3.5 right-6 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Selected Option
            </span>
          )}

          <div>
            <div className="space-y-1 mb-4">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                Ages 6–9 Cohort
              </span>
              <h3 className="text-xl font-black text-stone-900 pt-1">{plans.standard.name}</h3>
              <p className="text-xs text-stone-500">{plans.standard.sessions}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-stone-900">{plans.standard.priceINR}</span>
              <span className="text-sm line-through text-stone-400">{plans.standard.priceOriginal}</span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                {plans.standard.discountBadge}
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-stone-600">
              {plans.standard.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-100">
            <button
              type="button"
              className={`w-full py-3 rounded-xl font-bold text-xs transition-colors ${
                selectedPlan === 'standard'
                  ? "bg-stone-950 text-white"
                  : "bg-stone-100 text-stone-800 hover:bg-stone-200"
              }`}
            >
              {selectedPlan === 'standard' ? 'Active Selection' : 'Select Standard'}
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div
          onClick={() => setSelectedPlan('premium')}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all border-2 relative flex flex-col justify-between ${
            selectedPlan === 'premium'
              ? "bg-white border-amber-500 shadow-xl ring-2 ring-amber-500/20"
              : "bg-white/80 border-stone-200 hover:border-stone-300 shadow-sm"
          }`}
        >
          <span className="absolute -top-3.5 right-6 bg-amber-500 text-stone-950 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            {plans.premium.discountBadge}
          </span>

          <div>
            <div className="space-y-1 mb-4">
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Cohort + Private Pod Mentorship
              </span>
              <h3 className="text-xl font-black text-stone-900 pt-1">{plans.premium.name}</h3>
              <p className="text-xs text-stone-500">{plans.premium.sessions}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-stone-900">{plans.premium.priceINR}</span>
              <span className="text-sm line-through text-stone-400">{plans.premium.priceOriginal}</span>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                All-Inclusive
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-stone-600">
              {plans.premium.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-100">
            <button
              type="button"
              className={`w-full py-3 rounded-xl font-bold text-xs transition-colors ${
                selectedPlan === 'premium'
                  ? "bg-amber-500 text-stone-950 hover:bg-amber-600"
                  : "bg-stone-100 text-stone-800 hover:bg-stone-200"
              }`}
            >
              {selectedPlan === 'premium' ? 'Active Selection' : 'Select Mentorship'}
            </button>
          </div>
        </div>

      </div>

      {/* Checkout Form / Gateway Simulation */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-lg">
        {!isPaid ? (
          <form onSubmit={handleSimulatePayment} className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                  Secure Enrolment Step
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Register Child & Confirm Payment
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-bit Encrypted</span>
              </div>
            </div>

            {/* Child Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">Child&apos;s Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Mehta"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">Child&apos;s Age (Ages 6–9 recommended) *</label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="6">6 Years Old</option>
                  <option value="7">7 Years Old</option>
                  <option value="8">8 Years Old</option>
                  <option value="9">9 Years Old</option>
                  <option value="10">10 Years Old</option>
                </select>
              </div>
            </div>

            {/* Parent Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Mehta"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">Parent Email (for Reports) *</label>
                <input
                  type="email"
                  required
                  placeholder="priya@example.com"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">WhatsApp Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Preferred Batch Timing */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700">Preferred Batch Slot *</label>
              <select
                value={preferredBatch}
                onChange={(e) => setPreferredBatch(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="weekday-evening">Mon, Wed, Fri — 5:00 PM to 6:00 PM IST</option>
                <option value="weekday-late">Mon, Wed, Fri — 6:30 PM to 7:30 PM IST</option>
                <option value="tue-thu-sat">Tue, Thu, Sat — 5:00 PM to 6:00 PM IST</option>
                <option value="weekend-morning">Sat & Sun Intensive — 10:30 AM to 11:45 AM IST</option>
              </select>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-stone-900">
                <span>Selected: {activePlan.name}</span>
                <span className="text-base text-teal-700">{activePlan.priceINR}</span>
              </div>
              <div className="flex items-center justify-between text-stone-500">
                <span>Child: {childName || "Pending entry"} ({childAge} years)</span>
                <span>Includes 18% GST & Check-In Kit</span>
              </div>
            </div>

            {/* Payment Method Badges */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-stone-500">Supported Payment Methods:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700">
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">UPI (GPay / PhonePe / Paytm)</span>
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">Credit / Debit Cards</span>
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">NetBanking</span>
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">International Cards</span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-black py-4 rounded-2xl text-sm shadow-lg flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Securing Seat & Connecting Gateway...</span>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>Pay {activePlan.priceINR} & Confirm Registration</span>
                </>
              )}
            </Button>

            <p className="text-[11px] text-center text-stone-500">
              100% Satisfaction Guarantee: If after the Session 01 Thinker Check-In you feel GritWit is not the right fit for your child, receive a full no-questions-asked refund.
            </p>
          </form>
        ) : (
          /* Payment Success Confirmation */
          <div className="text-center space-y-6 py-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <WittyMascot className="w-16 h-16 mx-auto mb-2" expression="celebrate" />
              <h3 className="text-2xl font-black text-stone-900">
                Registration Confirmed! Welcome to GritWit!
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{parentName}</strong>! We are thrilled to welcome <strong>{childName}</strong> to the upcoming cohort.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Enrolment ID:</span>
                <span className="font-mono text-stone-900">GW-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Programme:</span>
                <span className="text-stone-900">{activePlan.name}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Amount Paid:</span>
                <span className="text-teal-700 font-bold">{activePlan.priceINR}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Child:</span>
                <span className="text-stone-900">{childName} (Age {childAge})</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Confirmation Sent To:</span>
                <span className="text-stone-900">{parentEmail} & WhatsApp ({parentPhone})</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => window.print()}
                variant="outline"
                className="text-xs font-bold rounded-xl border-stone-300"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Download Tax Invoice
              </Button>
              <Link href="/program">
                <Button className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl px-5">
                  Prepare for Session 01
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

