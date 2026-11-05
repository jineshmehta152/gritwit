import Link from "next/link"
import { FileText, ArrowLeft, ShieldCheck, CheckCircle2, Mail, Award, Lock } from "lucide-react"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
  title: "Terms & Conditions | GritWit Cognitive Enrichment",
  description: "Official Terms and Conditions for GritWit cognitive enrichment cohorts, live pods, and enrolment policies.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      {/* HEADER HERO BANNER */}
      <PageBanner
        badge="Terms of Service & Cohort Guidelines"
        title="GritWit Platform"
        titleHighlight="Terms & Conditions."
        description="Official terms of service, pod participation standards, refund guarantee conditions, and intellectual property rights for the GritWit cognitive enrichment programme."
        bgImage="/gritwit/skill-comprehension.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions' }
        ]}
        stats={[
          { label: 'Updated', value: 'November 2026' },
          { label: 'Protection', value: '100% Student Safety' },
          { label: 'Policy', value: 'Session 01 Guarantee' }
        ]}
        themeColor="teal"
      />

      {/* MAIN LEGAL CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-16">
        
        {/* Intro Box */}
        <div className="p-6 md:p-8 rounded-[30px] bg-slate-50 border border-slate-200/80 mb-12">
          <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
            Welcome to <strong>Chessmatic</strong> ("Chessmatic", "we", "our"). By registering an account, attending in-person sessions at our Woodlands Studio, participating in virtual coaching batches, or booking corporate workshops, you agree to comply with these Platform Terms & Conditions and our <Link href="/privacy" className="text-sky-500 font-bold underline">PDPA Privacy Policy</Link>.
          </p>
        </div>

        <div className="space-y-12 text-slate-700">
          
          {/* 1. MEMBERSHIP & ACCOUNT CONDUCT */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-[1000] text-xs">01</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Account Registration & User Conduct
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Identity & Eligibility</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Users agree to provide accurate, up-to-date registration details. Profile pictures and avatar uploads must adhere to community guidelines and must not contain unauthorized third-party content.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Fair Play & Anti-Cheating</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  The use of external chess engine assistance, bots, or unauthorized software during rated platform matches or proctored tournaments is strictly prohibited and results in immediate disqualification and account termination.
                </p>
              </div>
            </div>
          </section>

          {/* 2. STUDIO STANDARDS & FAIR PLAY PROTOCOLS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-[1000] text-xs">02</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Studio Standards & Fair Play Protocols
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Fair Play & Etiquette</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Participants attending sessions at our Woodlands Studio agree to adhere to standard FIDE chess etiquette, respect coaches and fellow participants, and maintain a quiet, focused environment during game analysis and tournament simulations.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Studio Etiquette</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All attendees at our Woodlands Studio are expected to observe safety protocols, respect fellow participants, and handle studio training equipment with care.
                </p>
              </div>
            </div>
          </section>

          {/* 3. BOOKINGS, PAYMENTS & RESCHEDULING */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-[1000] text-xs">03</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Lesson Attendance, Makeup Policy & Tuition Terms
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Tuition Pricing & Minimum Purchase Requirement</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  <strong>The reflected pricing is for a minimum purchase of 4 lessons.</strong> All regular private and small/large group coaching packages are structured and billed on a 4-lesson bundle basis to guarantee cohort continuity, dedicated master coach scheduling, and consistent curriculum progression.
                </p>
              </div>

              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Academy Locations & Attendance</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All group or private lessons will be conducted exclusively at official Chessmatic academy studio locations (Woodlands Studio, Singapore) or via authorized online means. For all group and private lessons, students must strictly attend their assigned slot or timing to ensure cohort continuity.
                </p>
              </div>

              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Makeup Session Policy & Rescheduling Window</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  A maximum of <strong>1 makeup lesson</strong> is allowed for every <strong>4 lessons purchased</strong>. Any makeup session must be scheduled at least <strong>1 day (24 hours) prior</strong> to the initial lesson timing. Furthermore, the makeup lesson must be rescheduled to a date <strong>within 1 week</strong> from the original lesson date. Late cancellations or unattended slots without prior notification will be forfeited.
                </p>
              </div>

              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Discounts & Non-Stacking Policy</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All kinds of online coaching lessons are subject to a 20% discount. Bulk purchase of 12 or more sessions is subject to a 10% discount, and 24 or more sessions is subject to a 20% discount (calculated on the 4-lesson rates). For private lessons with a non-titled coach, a 20% discount is applicable as well. <strong>Any form of discount stacking is strictly not applicable.</strong>
                </p>
              </div>

              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Corporate Workshop Confirmation</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Corporate workshops and departmental retreat dates are secured upon formal proposal sign-off. Modifications to group sizing or schedule dates must be coordinated with our client team at least 7 days in advance.
                </p>
              </div>
            </div>
          </section>

          {/* 4. INTELLECTUAL PROPERTY & DATA PRIVACY */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-[1000] text-xs">04</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Intellectual Property & DPO Governance
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Proprietary Training Methodologies</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All training materials, tactical calculation modules and analysis reports developed by Chessmatic remain the exclusive intellectual property of Chessmatic.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Singapore PDPA Compliance</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All personal data, identity documentation, and user photography are governed strictly under our <Link href="/privacy" className="text-sky-500 font-bold underline">PDPA Policy</Link>. For any inquiries, reach our Data Protection Officer at <a href="mailto:info@chessmatic.com" className="text-sky-500 font-bold underline">info@chessmatic.com</a>.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          Chessmatic © 2026 • Singapore Jurisdiction
        </div>

      </div>
    </main>
  )
}
