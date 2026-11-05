import React from 'react'
import { RazorpayPaymentSection } from '@/components/razorpay-payment-section'
import { ShieldCheck, Lock, Sparkles, CheckCircle2 } from 'lucide-react'
import { PageBanner } from '@/components/page-banner'

export const metadata = {
  title: 'Enrolment & Online Payment | GritWit Cognitive Enrichment',
  description: 'Enrol your child (Ages 6–9) securely via Razorpay (UPI, Credit/Debit Cards, NetBanking). Small interactive pods of 4–6 thinkers with 100% money-back guarantee.',
}

export default function PaymentsPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* 1. Header Banner */}
      <PageBanner
        badge="Admissions Open • Secure Razorpay Integration"
        title="Enrolment &"
        titleHighlight="Online Payment."
        description="Select your cohort plan and enrol your child securely online. Small interactive pods of 4–6 thinkers, certified educator instruction, and 100% Session 01 money-back guarantee."
        bgImage="/gritwit/skill-problem-solving.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Enrolment & Payments' }
        ]}
        stats={[
          { label: 'Payment Gateway', value: '100% Secure Razorpay' },
          { label: 'Cohort Capacity', value: '4–6 Thinkers Strictly' },
          { label: 'Satisfaction Policy', value: 'Session 01 Guarantee' }
        ]}
        themeColor="amber"
      />

      {/* 2. Razorpay Live Payment Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RazorpayPaymentSection />
      </section>

      {/* 3. Security & Guarantee FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Payment FAQs
          </span>
          <h3 className="text-2xl font-black text-stone-900">Clear & Transparent Policies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Session 01 Guarantee</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              If after the Thinker Check-In you feel GritWit is not the right fit, receive a 100% no-questions-asked refund before Session 02.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Bank-Grade Encryption</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              All transactions are processed directly over 256-bit SSL encrypted pathways through Razorpay. We never store credit card numbers or UPI PIN details.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Missed Session Catch-Ups</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Family trips or exams? We provide dedicated weekend catch-up sessions and complete take-home activity guides so no child misses a concept.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
