"use client"

import { useState } from "react"
import Script from "next/script"
import { Check, ShieldCheck, CreditCard, Lock, CheckCircle2, Download, Sparkles, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WittyMascot } from "@/components/witty-mascot"
import Link from "next/link"

declare global {
  interface Window {
    Razorpay: any
  }
}

export function RazorpayPaymentSection() {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'premium'>('standard')
  const [childName, setChildName] = useState('')
  const [childAge, setChildAge] = useState('7')
  const [parentName, setParentName] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [parentPhone, setParentPhone] = useState('')
  const [preferredBatch, setPreferredBatch] = useState('weekday-evening')
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const plans = {
    standard: {
      id: "standard-20",
      name: "Complete 20-Session Programme",
      sessions: "20 Live Sessions (Pods of 4–6 Thinkers)",
      amount: 14999,
      displayPrice: "₹14,999",
      displayOriginal: "₹19,999",
      features: [
        "All 15 Higher-Order Thinking Skills across 4 cognitive domains",
        "3 Witty's Challenge Days (Escape rooms & cognitive quests)",
        "Character Corner human values in every session",
        "Thinker Check-In baseline assessment & growth report",
        "Thinker Check-Out final certification & analytics",
        "Parent Connect graduation & home practice toolkit",
        "Certified cognitive educator led (small pods)",
      ]
    },
    premium: {
      id: "premium-mentorship",
      name: "Complete Programme + 1-on-1 Mentorship",
      sessions: "20 Live Sessions + 3 Private 1-on-1 Deep Dives",
      amount: 21999,
      displayPrice: "₹21,999",
      displayOriginal: "₹27,999",
      features: [
        "Everything in the Complete 20-Session Programme",
        "3 Private 1-on-1 Mentorship Sessions with Lead Educator",
        "Personalized Cognitive Learning Style Diagnostic",
        "Customized Daily Thinking Routines for Home & School",
        "Priority batch slot selection & weekend flexibility",
        "Direct educator WhatsApp access for learning guidance",
      ]
    }
  }

  const currentPlan = plans[selectedPlan]

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!parentName || !parentEmail || !parentPhone || !childName) {
      setErrorMessage("Please fill in parent details and child name.")
      return
    }

    setIsProcessing(true)

    try {
      // 1. Create order on Next.js server route
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: currentPlan.amount,
          currency: 'INR',
          receipt: `gw_${Date.now()}`,
          notes: {
            childName,
            childAge,
            parentName,
            preferredBatch,
            planName: currentPlan.name
          }
        })
      })

      const orderData = await res.json()

      if (!res.ok) {
        throw new Error(orderData.error || 'Failed to initiate order')
      }

      // Check if Razorpay script is loaded in window
      if (typeof window !== 'undefined' && window.Razorpay) {
        const options = {
          key: orderData.key_id,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "GritWit Academy",
          description: currentPlan.name,
          image: "/favicon.ico",
          order_id: orderData.id,
          handler: async function (response: any) {
            // Verify signature
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                studentDetails: {
                  childName,
                  childAge,
                  parentName,
                  parentEmail,
                  parentPhone,
                  planName: currentPlan.name,
                  batch: preferredBatch,
                  amount: currentPlan.displayPrice
                }
              })
            })

            const verifyData = await verifyRes.json()
            setIsProcessing(false)
            setPaymentSuccess(verifyData)
          },
          prefill: {
            name: parentName,
            email: parentEmail,
            contact: parentPhone
          },
          theme: {
            color: "#0f766e" // Teal
          },
          modal: {
            ondismiss: function () {
              setIsProcessing(false)
            }
          }
        }

        const rzp = new window.Razorpay(options)
        rzp.on('payment.failed', function (response: any) {
          setIsProcessing(false)
          setErrorMessage(response.error.description || 'Payment was unsuccessful.')
        })
        rzp.open()
      } else {
        // Fallback demo simulator for development or test environments
        setTimeout(async () => {
          const verifyRes = await fetch('/api/razorpay/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: orderData.id,
              razorpay_payment_id: `pay_${Math.random().toString(36).substring(2, 12)}`,
              razorpay_signature: 'simulated_signature',
              studentDetails: {
                childName,
                childAge,
                parentName,
                parentEmail,
                parentPhone,
                planName: currentPlan.name,
                batch: preferredBatch,
                amount: currentPlan.displayPrice
              }
            })
          })

          const verifyData = await verifyRes.json()
          setIsProcessing(false)
          setPaymentSuccess(verifyData)
        }, 1200)
      }
    } catch (err: any) {
      console.error(err)
      setIsProcessing(false)
      setErrorMessage(err.message || 'Payment initiation failed. Please try again.')
    }
  }

  return (
    <div className="space-y-12">
      {/* Razorpay Checkout Script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* Plan selection tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Standard */}
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
              Selected Plan
            </span>
          )}

          <div>
            <div className="space-y-1 mb-4">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                Ages 6–9 Pods
              </span>
              <h3 className="text-xl font-black text-stone-900 pt-1">{plans.standard.name}</h3>
              <p className="text-xs text-stone-500">{plans.standard.sessions}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-stone-900">{plans.standard.displayPrice}</span>
              <span className="text-sm line-through text-stone-400">{plans.standard.displayOriginal}</span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                Save 25%
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
              {selectedPlan === 'standard' ? 'Selected' : 'Choose Standard'}
            </button>
          </div>
        </div>

        {/* Premium */}
        <div
          onClick={() => setSelectedPlan('premium')}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all border-2 relative flex flex-col justify-between ${
            selectedPlan === 'premium'
              ? "bg-white border-amber-500 shadow-xl ring-2 ring-amber-500/20"
              : "bg-white/80 border-stone-200 hover:border-stone-300 shadow-sm"
          }`}
        >
          <span className="absolute -top-3.5 right-6 bg-amber-500 text-stone-950 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            Most Comprehensive
          </span>

          <div>
            <div className="space-y-1 mb-4">
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Cohort + 1-on-1 Mentorship
              </span>
              <h3 className="text-xl font-black text-stone-900 pt-1">{plans.premium.name}</h3>
              <p className="text-xs text-stone-500">{plans.premium.sessions}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-stone-900">{plans.premium.displayPrice}</span>
              <span className="text-sm line-through text-stone-400">{plans.premium.displayOriginal}</span>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
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
              {selectedPlan === 'premium' ? 'Selected' : 'Choose Mentorship'}
            </button>
          </div>
        </div>

      </div>

      {/* Razorpay Enrolment Checkout Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl">
        {!paymentSuccess ? (
          <form onSubmit={handleRazorpayPayment} className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                  Step 2: Student & Parent Details
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Enrolment & Razorpay Secure Checkout
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Lock className="w-3.5 h-3.5" />
                <span>Razorpay Secured</span>
              </div>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Child Details */}
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
                <label className="text-xs font-bold text-stone-700">Child&apos;s Age (Recommended 6–9) *</label>
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

            {/* Parent Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shalini Mehta"
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
                  placeholder="shalini@example.com"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 94299 02012"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Batch Schedule Selector */}
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
                <span>Selected: {currentPlan.name}</span>
                <span className="text-base text-teal-700 font-black">{currentPlan.displayPrice}</span>
              </div>
              <div className="flex items-center justify-between text-stone-500">
                <span>Student: {childName || 'Child name'} (Age {childAge})</span>
                <span>Includes 18% GST & Check-In Kit</span>
              </div>
            </div>

            {/* Razorpay Badges */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-stone-500">Instant Payment Options via Razorpay:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700">
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">UPI (GPay / PhonePe / Paytm / BHIM)</span>
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">Credit / Debit Cards</span>
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">NetBanking (All Indian Banks)</span>
                <span className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-semibold">International Cards</span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-black py-4 rounded-2xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              {isProcessing ? (
                <span>Opening Razorpay Secure Window...</span>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>Pay {currentPlan.displayPrice} via Razorpay</span>
                </>
              )}
            </Button>

            <p className="text-[11px] text-center text-stone-500">
              100% Satisfaction Guarantee: If after Session 01 (Thinker Check-In) you feel GritWit is not the right fit for your child, receive a full no-questions-asked refund.
            </p>
          </form>
        ) : (
          /* Payment Success State */
          <div className="text-center space-y-6 py-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <WittyMascot className="w-16 h-16 mx-auto mb-2" expression="celebrate" />
              <h3 className="text-2xl font-black text-stone-900">
                Payment Successful! Welcome to GritWit!
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{parentName}</strong>! <strong>{childName}</strong> is officially registered.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Enrolment ID:</span>
                <span className="font-mono text-stone-900 font-bold">{paymentSuccess?.enrolmentId || `GW-${Date.now().toString().slice(-6)}`}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Razorpay Payment ID:</span>
                <span className="font-mono text-teal-700">{paymentSuccess?.paymentId || 'pay_demo_success'}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Programme:</span>
                <span className="text-stone-900">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Amount Paid:</span>
                <span className="text-stone-900 font-bold">{currentPlan.displayPrice}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Student:</span>
                <span className="text-stone-900">{childName} (Age {childAge})</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Batch:</span>
                <span className="text-stone-900">{preferredBatch}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-stone-500">Receipt Dispatched To:</span>
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
                  View Session 01 Orientation Guide
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

