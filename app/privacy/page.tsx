import Link from "next/link"
import { ShieldCheck, ArrowLeft, Camera, Lock, FileText, CheckCircle2, Mail } from "lucide-react"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
  title: "Privacy Policy | GritWit Cognitive Enrichment",
  description: "Official GritWit Student Data Protection and Privacy Policy.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      {/* HEADER HERO BANNER */}
      <PageBanner
        badge="Student Data Protection & Privacy Notice"
        title="GritWit Platform"
        titleHighlight="Privacy Policy."
        description="We are deeply committed to protecting the privacy, identity, and personal records of our students and parent community."
        bgImage="/gritwit/educator-founder.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]}
        stats={[
          { label: 'Student Data', value: 'Zero Ad-Tracking' },
          { label: 'Encryption', value: '256-bit SSL' },
          { label: 'Parent Consent', value: '100% Required' }
        ]}
        themeColor="teal"
      />

      {/* MAIN LEGAL CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-16">
        
        {/* Intro Card */}
        <div className="p-6 md:p-8 rounded-[30px] bg-slate-50 border border-slate-200/80 mb-12">
          <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
            Welcome to <strong>Chessmatic</strong>. We commit to protecting your personal data in accordance with the <strong>Singapore Personal Data Protection Act 2012 (PDPA)</strong>. This policy outlines how we collect, use, disclose, and manage your data, incorporating regulations regarding user-uploaded photography, images, and real-identity verification assets.
          </p>
        </div>

        <div className="space-y-12 text-slate-700">
          
          {/* SECTION 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-[1000] text-xs">01</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Collection of Personal Data
              </h2>
            </div>
            <p className="text-sm md:text-base font-medium leading-relaxed pl-2 sm:pl-11 text-slate-600">
              We collect personal data required to provide seamless online chess multiplayer services, tournament management, and fair-play tracking. This includes:
            </p>
            <div className="grid grid-cols-1 gap-3 pl-2 sm:pl-11 pt-2">
              {[
                { title: "Account Information", desc: "Username, email address, password, country, and birth year." },
                { title: "Gameplay & Performance Analytics", desc: "Move history, Elo ratings, timestamps, and anti-cheating telemetry metrics." },
                { title: "Photography and Visual Media", desc: "User-uploaded profile pictures (avatars), photographic evidence uploaded for tournament identity verification, promotional event snapshots, and webcam captures if explicitly authorized during proctored competitive events." },
                { title: "Payment Data", desc: "Transaction details through our third-party billing gateway operators." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1a365d] text-sm font-black block">{item.title}</strong>
                    <span className="text-slate-600 text-xs md:text-sm font-medium">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-[1000] text-xs">02</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Specific Rules for Photography & Images
              </h2>
            </div>
            <p className="text-sm md:text-base font-medium leading-relaxed pl-2 sm:pl-11 text-slate-600">
              When you upload photographs or grant camera permissions to Chessmatic, the following PDPA data protection mechanisms apply tightly:
            </p>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              {[
                { label: "Purpose Limitation", desc: "Profile images are used solely for user personalization. Identity-verification photos are utilized strictly to validate tournament eligibility and prevent multi-accounting. They are never repurposed for marketing without explicit, separate consent." },
                { label: "Biometric Data Clarification", desc: "Chessmatic does not extract geometric facial templates or utilize biometric processing algorithms unless explicitly stated for high-tier professional prize tournaments." },
                { label: "Public Exposure Control", desc: "Images uploaded as public avatars will be accessible to other network users. You can remove or replace your profile photograph at any point via your Account Settings dashboard." },
                { label: "Prohibited Content", desc: "Uploaded images must not contain explicit material, copyrighted works belonging to third parties, or metadata violating the privacy of other individuals." },
              ].map((rule, idx) => (
                <div key={idx} className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">{rule.label}</h4>
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-[1000] text-xs">03</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Compliance with PDPA Core Obligations
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              {[
                { title: "3.1 Consent & Purpose Limitation Obligations", desc: "By creating an account or uploading photographs, you consent to the processing of your data for the defined functionalities. We do not sell or lease your identity documents or personal imagery to advertisers." },
                { title: "3.2 Access and Correction Obligations", desc: "You maintain the legal right to request access to your historical account data or update outdated information (such as changing a profile photo or legal name). Contact our Data Protection Officer for formalized queries." },
                { title: "3.3 Protection Obligation", desc: "We implement institutional firewalls, transport-layer encryption (SSL/TLS), and restricted admin panels to safeguard all user records, especially sensitive identity documents and verification photography." },
                { title: "3.4 Retention Limitation Obligation", desc: "Verification photography is destroyed safely within 30 days following tournament completion. Standard profile pictures and logs are retained for the active lifecycle of your account or until deletion is formally requested." },
              ].map((obl, i) => (
                <div key={i} className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">{obl.title}</h4>
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">{obl.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-[1000] text-xs">04</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Data Protection Officer (DPO) Contact Info
              </h2>
            </div>
            <div className="pl-2 sm:pl-11 pt-2">
              <div className="p-6 md:p-8 rounded-[30px] bg-[#1a365d] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-slate-300 text-xs md:text-sm font-medium">
                    For any data correction requests, withdrawals of consent regarding photography or marketing tracking, or queries concerning our PDPA practices, please reach out directly to our DPO unit:
                  </p>
                  <p className="text-white font-bold text-sm">
                    <strong>Attention:</strong> Data Protection Officer, Chessmatic SG Team
                  </p>
                  <p className="text-sky-400 font-bold text-sm flex items-center gap-2">
                    <Mail size={16} /> <a href="mailto:info@chessmatic.com" className="hover:underline">info@chessmatic.com</a>
                  </p>
                </div>
                <a 
                  href="mailto:info@chessmatic.com"
                  className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-[1000] uppercase tracking-widest transition-all shadow-lg shrink-0"
                >
                  Contact DPO
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          Confidential & Proprietary | Chessmatic © 2026 • Singapore PDPA Compliant
        </div>

      </div>
    </main>
  )
}
