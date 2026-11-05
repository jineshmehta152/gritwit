import React from 'react'
import Link from 'next/link'
import { GritwitLogo } from './gritwit-logo'
import { WittyMascot } from './witty-mascot'
import { MultiLayerWaves } from './multi-layer-waves'
import { Heart, Mail, Phone, MapPin, Sparkles, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-stone-950 text-stone-300">
      {/* Upper Scallop Waves trimming the top of the dark footer */}
      <div className="w-full relative z-10 -mt-3 sm:-mt-5 md:-mt-6">
        <MultiLayerWaves position="top" color="#0c0a09" />
      </div>

      <div className="pt-8 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
            
            {/* Brand Col */}
            <div className="lg:col-span-2 space-y-4">
              <GritwitLogo variant="white" />
              <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                GritWit is a premium cognitive enrichment programme for children aged 6–9. We don&apos;t just focus on getting the right answer — we help children understand how to think their way towards it.
              </p>
              <div className="flex items-center gap-3 bg-stone-900/90 p-3 rounded-2xl border border-stone-800 w-fit">
                <WittyMascot className="w-10 h-10" expression="celebrate" animate={false} />
                <div className="text-xs">
                  <span className="text-amber-400 font-bold block">Meet Witty!</span>
                  <span className="text-stone-300">&ldquo;A sharp thinker and a kind heart.&rdquo;</span>
                </div>
              </div>
            </div>

            {/* Core Skills (within Programs) */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Four Core Skills</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/program#four-skills" className="hover:text-teal-400 transition-colors">
                    Critical Thinking (Analyse & Evaluate)
                  </Link>
                </li>
                <li>
                  <Link href="/program#four-skills" className="hover:text-teal-400 transition-colors">
                    Logical Reasoning (Deduce & Infer)
                  </Link>
                </li>
                <li>
                  <Link href="/program#four-skills" className="hover:text-teal-400 transition-colors">
                    Comprehension (Interpret & Connect)
                  </Link>
                </li>
                <li>
                  <Link href="/program#four-skills" className="hover:text-teal-400 transition-colors">
                    Problem Solving (Create & Apply)
                  </Link>
                </li>
                <li>
                  <Link href="/program#character-corner" className="hover:text-amber-400 transition-colors">
                    Character Corner (Human Values)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Exactly 5 pages */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Website Pages</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="hover:text-teal-400 transition-colors">
                    1. Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-teal-400 transition-colors">
                    2. About GritWit
                  </Link>
                </li>
                <li>
                  <Link href="/program" className="hover:text-teal-400 transition-colors">
                    3. The Programme & 4 Skills
                  </Link>
                </li>
                <li>
                  <Link href="/payments" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                    <span>4. Enrolment & Admissions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal-400 transition-colors">
                    5. Contact & Enquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Admissions Office</h4>
              <div className="space-y-3 text-sm text-stone-400">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <a href="mailto:hello@gritwit.com" className="hover:text-white transition-colors">hello@gritwit.com</a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>+91 94299 02012</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Small Interactive Pods (4–6 Thinkers)</span>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2.5 rounded-xl transition-all shadow-md"
                >
                  <span>Book a Call / Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} GritWit Academy. All rights reserved. Where thinking skills meet human values.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
              <span className="flex items-center gap-1 text-stone-400">
                Nurturing young minds with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
