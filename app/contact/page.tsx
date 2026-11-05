"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Compass, 
  BookOpen, 
  PhoneCall, 
  Globe 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WittyMascot } from "@/components/witty-mascot"
import { PageBanner } from "@/components/page-banner"

export default function ContactPage() {
  const [parentName, setParentName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [childAge, setChildAge] = useState("7")
  const [question, setQuestion] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!parentName || !email || !phone) {
      alert("Please enter your name, email, and phone number.")
      return
    }
    setSubmitted(true)
  }

  const contactFaqs = [
    {
      q: "How soon will an educator get back to us?",
      a: "Our educational mentors review parent enquiries daily. You can expect a personalized response via WhatsApp or email within 2 to 4 business hours, along with our complete curriculum pack."
    },
    {
      q: "Can we schedule a 1-on-1 discovery call before making any commitment?",
      a: "Absolutely! We actively encourage parents to hop on a 15-minute informal video call with our lead educator. We discuss your child's thinking habits, current challenges, and identify if GritWit is the right developmental fit."
    },
    {
      q: "Are the sessions delivered online or in person?",
      a: "All GritWit sessions are conducted live in real-time via interactive Zoom pods capped strictly at 4 to 6 children. We welcome young thinkers from across India, Singapore, the UAE, and international time zones."
    },
    {
      q: "What if my child feels shy or hesitates to speak up?",
      a: "Our pods are purposefully small (never 20+ children) so our certified educators can provide warm, gentle Socratic encouragement. Shy children flourish quickly because everyone gets equal speaking time with zero judgment."
    },
    {
      q: "What is your refund policy if we decide to enrol?",
      a: "We offer a 100% money-back guarantee. If after Session 01 (Thinker Check-In) you feel the programme is not the right fit for your child, simply let us know before Session 02 for a complete, no-questions-asked refund."
    }
  ]

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header Banner */}
      <PageBanner
        badge="Educator Team & Admissions Support"
        title="Contact &"
        titleHighlight="Parent Enquiries."
        description="Have questions about whether GritWit is right for your child? Talk directly with our educator team or request a personalized cognitive assessment discussion."
        bgImage="/gritwit/skill-logical-reasoning.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact & Enquiries' }
        ]}
        stats={[
          { label: 'Response Time', value: '< 2 Hours' },
          { label: 'Admissions Format', value: 'Direct Educator Call' },
          { label: 'Direct WhatsApp', value: '+91 94299 02012' }
        ]}
        themeColor="teal"
      />

      {/* 2. Main Contact Form & Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <WittyMascot className="w-12 h-12" expression="happy" animate={false} />
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg">We&apos;re Here to Help</h3>
                  <p className="text-xs text-stone-500">Every child thinks differently. Let&apos;s talk.</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Email Admissions</span>
                    <a href="mailto:hello@gritwit.com" className="text-teal-700 hover:underline">hello@gritwit.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Phone & Discovery Call</span>
                    <a href="tel:+919429902012" className="text-stone-700 hover:underline">+91 94299 02012</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">WhatsApp Support</span>
                    <a
                      href="https://wa.me/919429902012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      Chat on WhatsApp (+91 94299 02012)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Learning Studio Reach</span>
                    <span>Live Interactive Small Pods via Zoom (Pan-India & Global Cohorts)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Promise Card */}
            <div className="bg-stone-950 text-white p-7 rounded-3xl space-y-3 shadow-md border border-stone-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Our Founder&apos;s Promise</span>
              <p className="text-xs text-stone-300 leading-relaxed italic">
                &ldquo;You won&apos;t get aggressive sales calls or high-pressure pitches. We are educators first. We will honestly tell you if GritWit is the right developmental match for your child.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-stone-900">Enquire About GritWit</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill out the quick form below. Our educator team will respond within 2 to 4 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Parent / Guardian Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Sharma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Child&apos;s Age *</label>
                    <select
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="6">6 Years Old</option>
                      <option value="7">7 Years Old</option>
                      <option value="8">8 Years Old</option>
                      <option value="9">9 Years Old</option>
                      <option value="other">Other Age (10+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="shalini@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94299 02012"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">What would you like to know or share about your child?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your child's thinking interests, reading habits, school grade, or specific questions about the 20-session curriculum..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-black py-4 rounded-2xl text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry to Educator Team</span>
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-8 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-stone-900">Thank You, {parentName}!</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received. One of our educators will reach out to you via WhatsApp / email within 2 to 4 hours with details on the upcoming batch and assessment schedule.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="text-xs rounded-xl"
                  >
                    Submit Another Query
                  </Button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. MAP SECTION: LEARNING STUDIO & GUJARAT LOCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold text-teal-800">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Admissions Hub & Regional Studios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Our Gujarat Learning Studio & Global Pods
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Visit our flagship learning studio in Gujarat or connect with interactive virtual pods spanning India and international time zones.
          </p>
        </div>

        {/* Studio Card + Interactive Map Frame */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Location Info Card */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  Primary Gujarat Studio HQ
                </span>
                <h3 className="text-2xl font-black text-stone-900 pt-1">GritWit Academy (Gujarat)</h3>
                <p className="text-xs text-stone-500">Cognitive Enrichment & Pedagogical Innovation Center</p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Studio Address</span>
                    <span>Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Admissions & Visit Hours</span>
                    <span>Monday – Saturday • 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Gujarat Admissions Helpline</span>
                    <span>+91 94299 02012 / admissions@gritwit.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Virtual Pod Timezones</span>
                    <span>Pan-Gujarat, Metro India (IST), Singapore/Dubai (SGT/GST), and US/UK</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://maps.google.com/?q=Sindhu+Bhavan+Road+Ahmedabad+Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-stone-300">•</span>
                <a
                  href="https://wa.me/919429902012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Get Directions via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Map Embed / Graphic Frame */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-200 shadow-inner h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="GritWit Gujarat Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697920786523!2d72.5020!3d23.0373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521640d4b%3A0x6b5e0c69d447be6!2sSindhu%20Bhavan%20Marg%2C%20Bodakdev%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-105"
              />
              <div className="absolute top-4 right-4 bg-stone-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-amber-300 border border-teal-400/40 shadow-md pointer-events-none">
                ✦ Gujarat Flagship Studio & Broadcast Hub
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs font-bold text-amber-900">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Frequently Asked Admissions Questions
          </h2>
          <p className="text-sm text-stone-600">
            Clear, upfront information to help you make the best developmental decision for your child.
          </p>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-teal-800 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-700" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-2xl border border-teal-500/40 relative overflow-hidden">
          
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Small Pods Cap Out Fast</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Ready to See Your Child Fall in Love With Thinking?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every month, our educators form curated pods of 4–6 thinkers for ages 6–9. Schedule an informal 15-minute educator discovery call or explore the full 20-session curriculum today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/919429902012"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-950 font-black px-8 py-6 rounded-2xl shadow-xl flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5 text-stone-950" />
                  <span>Chat on WhatsApp Directly</span>
                </Button>
              </a>

              <Link href="/program" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold px-7 py-6 rounded-2xl flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5 text-teal-300" />
                  <span>Explore The 20 Sessions</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
