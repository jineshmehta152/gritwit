"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  User, Users, Laptop, Layers, 
  Building2, ArrowRight, MessageCircle,
  Clock, MapPin, CheckCircle2, Sparkles, X, Info
} from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

interface FormatItem {
  id: string
  title: string
  tag: string
  desc: string
  icon: React.ReactNode
  color: string
  outcome: string
  val: string
  duration: string
  location: string
  batchSize: string
  idealFor: string
  highlights: string[]
  inclusions: string[]
}

export default function TrainingFormatsGrid() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const [selectedFormat, setSelectedFormat] = useState<FormatItem | null>(null)

  const formats: FormatItem[] = [
    {
      id: "FMT-01",
      title: "Group Coaching Workshops",
      tag: "IN-PERSON COHORTS",
      desc: "Interactive cohort workshops designed for collaborative learning, tactical sparring, and structured group progression.",
      icon: <Users size={20} />,
      color: "bg-sky-500",
      outcome: "Tactical Synergy",
      val: "High Impact",
      duration: "75 - 90 mins / session",
      location: "Woodlands Studio, Singapore",
      batchSize: "Small Cohorts (4-8 Players)",
      idealFor: "Adults and youth players who thrive in a social, competitive atmosphere and want hands-on tournament sparring.",
      highlights: [
        "Master game calculation principles & opening repertoire breakdowns",
        "Over-the-board live tactical sparring with timed clock conditions",
        "Real-time blunder detection and instant coach critique",
        "Dynamic endgame conversion drills and collaborative calculation sprints"
      ],
      inclusions: [
        "Weekly curated PGN master files and tactical homework packs",
        "Direct coach game review and positional evaluations",
        "Access to in-house Chessmatic sparring arena and leaderboards",
        "Integrated mental stamina & breathwork activation routines"
      ]
    },
    {
      id: "FMT-02",
      title: "Private Lessons",
      tag: "1-ON-1 IN STUDIO",
      desc: "Personalized in-person coaching in our Woodlands Studio tailored to your unique pace, opening repertoire, and rating goals.",
      icon: <User size={20} />,
      color: "bg-blue-600",
      outcome: "Maximum Precision",
      val: "100% Focus",
      duration: "60 mins / session",
      location: "Woodlands Studio, Singapore",
      batchSize: "1-on-1 Dedicated Master Coach",
      idealFor: "Busy executives, tournament players, or beginners seeking rapid, 100% customized rating growth with zero distractions.",
      highlights: [
        "Full diagnostic audit of your calculation velocity, weaknesses, and habits",
        "Bespoke opening repertoire engineered specifically for your style",
        "Move-by-move deconstruction of your recent tournament and online games",
        "In-depth calculation training (candidate moves & pattern recognition)"
      ],
      inclusions: [
        "Tailored developmental roadmap updated after every session",
        "Private annotated PGN repertoire database built for you",
        "Asynchronous coach messaging support for quick game checks between lessons",
        "Tactical calculation & endgame technique exercises"
      ]
    },
    {
      id: "FMT-03",
      title: "Online Private Lessons",
      tag: "1-ON-1 VIRTUAL",
      desc: "Direct digital 1-on-1 sessions featuring screen-share interactive board analysis, custom PGN prep, and async game reviews.",
      icon: <Laptop size={20} />,
      color: "bg-indigo-600",
      outcome: "Flexible Mastery",
      val: "Global Access",
      duration: "60 mins / session",
      location: "Virtual (Zoom / Google Meet + Lichess/Chess.com)",
      batchSize: "1-on-1 Dedicated Virtual Coach",
      idealFor: "Busy professionals, frequent travelers, and international students needing elite chess coaching with complete scheduling freedom.",
      highlights: [
        "Interactive screen-share analysis with live digital board annotations",
        "Targeted positional puzzles, calculation sprints, and blunder mitigation",
        "Real-time online sparring with immediate grandmaster-grade review",
        "Targeted preparation against specific upcoming tournament opponents"
      ],
      inclusions: [
        "Full HD session recordings accessible 24/7 for unlimited review",
        "Comprehensive annotated PGN study files delivered after every class",
        "Weekly tactical homework with automated accuracy tracking",
        "Async coach review for your online blitz/rapid games"
      ]
    },
    {
      id: "FMT-04",
      title: "Online Group Lessons",
      tag: "VIRTUAL COHORTS",
      desc: "Dynamic live virtual cohorts that allow students to analyze games, solve tactical puzzles, and compete in online batches.",
      icon: <Layers size={20} />,
      color: "bg-amber-500",
      outcome: "Group Sparring",
      val: "Cost-Effective",
      duration: "60 mins / session",
      location: "Virtual Classroom + Discord Arena",
      batchSize: "Small Online Cohorts (4-8 Students)",
      idealFor: "Students seeking an affordable, highly interactive, and community-driven digital chess training cohort.",
      highlights: [
        "Live cohort calculation sprints and speed puzzle-solving battles",
        "Thematic masterclasses covering critical middlegame and opening concepts",
        "Private cohort arena tournaments with live coach commentary",
        "Step-by-step progressive curriculum tailored to cohort rating band"
      ],
      inclusions: [
        "Weekly digital study packets and curated homework assignments",
        "Cohort leaderboard and tournament matchmaking access",
        "Community discussion group for ongoing sparring and game reviews",
        "Regular progress assessments and rating milestone tracking"
      ]
    },
    {
      id: "FMT-05",
      title: "Corporates",
      tag: "B2B STRATEGY & RETREATS",
      desc: "Customized workshops for corporate teams translating chess logic into executive decision-making, team synergy, and resilience.",
      icon: <Building2 size={20} />,
      color: "bg-[#1a365d]",
      outcome: "Leadership ROI",
      val: "Team Scale",
      duration: "Half-Day / Full-Day / Multi-Week Series",
      location: "On-site at Client Office / Retreat / Woodlands Studio",
      batchSize: "Custom Cohorts (10 to 100+ Participants)",
      idealFor: "Corporate teams, executive leadership retreats, offsite strategic retreats, and companies looking for high-impact team bonding.",
      highlights: [
        "Executive Decision-Making: Translating chess calculation into business strategy",
        "Tactical Consultation Matches: Collaborative calculation under tournament clocks",
        "Turnkey Corporate Tournaments with custom branding, trophies & medals",
        "Composure Under Pressure: Stress management and decision agility"
      ],
      inclusions: [
        "Customized workshop curriculum aligned with corporate KPIs & themes",
        "All tournament chess equipment, digital timers, and strategic challenge worksheets provided",
        "High-res event photography, video highlights, and certificates of completion",
        "Corporate strategic follow-up guides & internal chess club toolkit"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white font-sans px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Engagement Channels
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-3xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Training <span style={{ color: cyan }}>Formats.</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs">
            Available across Private • Online • Group Batches • Corporate Workshops
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-black uppercase tracking-wider transition-all border border-sky-200/60 shadow-sm"
            >
              <span>View Official Price List</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* RESPONSIVE 3-COLUMN / 2-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {formats.map((item, i) => {
            const whatsappMsg = `Hi Chessmatic! I'd like to book a trial for ${item.title} (${item.tag}). ROI: ${item.outcome} (${item.val}). Please share available slots, schedule, and pricing.`
            const whatsappUrl = getWhatsAppUrl(whatsappMsg)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative flex flex-col h-full bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-sky-200 transition-all duration-500 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* TOP: HEADER & ID */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                   <div className={`${item.color} w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                   </div>
                   <span className="text-slate-300 text-[9px] md:text-[10px] font-black tracking-widest">{item.id}</span>
                </div>

                {/* MIDDLE: CONTENT */}
                <div className="flex-1 space-y-3 md:space-y-4">
                  <span className="text-sky-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">{item.tag}</span>
                  <h3 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* BOTTOM: SYSTEM OUTCOME & ACTIONS */}
                <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-slate-50 flex flex-col gap-4">
                   <div className="flex justify-between items-end px-1">
                      <div className="flex flex-col">
                         <span className="text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-none">Format ROI</span>
                         <span className="text-[#1a365d] text-[11px] md:text-xs font-black italic mt-1">{item.outcome}</span>
                      </div>
                      <div className="flex items-baseline gap-0.5">
                         <span className="text-[#1a365d] text-base md:text-lg font-black">{item.val}</span>
                      </div>
                   </div>
                   
                   {/* Technical Progress Bar */}
                   <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className={`h-full ${item.color} opacity-40`}
                      />
                      <div className="absolute right-0 top-0 h-full w-4 bg-white/40 skew-x-12" />
                   </div>

                   {/* Action buttons: Book Trial (WhatsApp) + More Info Arrow (Modal) */}
                   <div className="pt-2 flex items-center gap-3">
                      {/* WhatsApp Button */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] md:text-xs font-[1000] uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={15} className="fill-current" />
                        <span>Book Trial</span>
                      </a>

                      {/* Arrow Button: Opens More Info Modal */}
                      <button
                        type="button"
                        onClick={() => setSelectedFormat(item)}
                        aria-label={`View full details for ${item.title}`}
                        title="View format details & syllabus"
                        className="w-11 h-11 rounded-xl bg-slate-50 text-slate-500 hover:bg-[#1a365d] hover:text-white group-hover:border-sky-300 border border-slate-200/60 transition-all shadow-sm flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                         <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
                   </div>
                </div>

                {/* TECHNICAL DOT GRID OVERLAY (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.05]" 
                     style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
              </motion.div>
            )
          })}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center px-4"
        >
           <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">
             Customized operational tracks available • <span className="text-[#1a365d]">Chessmatic Standard</span>
           </p>
        </motion.div>

      </div>

      {/* MORE INFO MODAL */}
      <AnimatePresence>
        {selectedFormat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFormat(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden z-10 flex flex-col max-h-[92vh] my-auto"
            >
              {/* MODAL HEADER (shrink-0 ensures it never squishes or cuts text) */}
              <div className="relative shrink-0 p-5 sm:p-7 md:p-8 bg-gradient-to-br from-[#1a365d] to-[#0f2444] text-white">
                {/* Ambient Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '16px 16px' }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedFormat(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md z-20"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>

                <div className="relative z-10 flex items-center gap-2.5 mb-2.5 pr-10">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 border border-white/20 text-sky-300 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em]">
                    {selectedFormat.tag}
                  </span>
                  <span className="text-white/50 text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                    {selectedFormat.id}
                  </span>
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-[1000] text-white tracking-tight uppercase leading-tight pr-10">
                  {selectedFormat.title}
                </h3>
                <p className="relative z-10 mt-2 text-slate-300 text-xs sm:text-sm font-medium leading-relaxed pr-6">
                  {selectedFormat.desc}
                </p>
              </div>

              {/* MODAL BODY (flex-1 min-h-0 overflow-y-auto ensures smooth inner scrolling) */}
              <div className="flex-1 min-h-0 p-5 sm:p-7 md:p-8 overflow-y-auto space-y-5 sm:space-y-6 text-slate-700">
                
                {/* QUICK SPEC CHIPS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-slate-400 block">Session Length</span>
                      <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{selectedFormat.duration}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-slate-400 block">Delivery Venue</span>
                      <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{selectedFormat.location}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Users size={16} />
                    </div>
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-slate-400 block">Batch Setup</span>
                      <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{selectedFormat.batchSize}</span>
                    </div>
                  </div>
                </div>

                {/* WHO IT'S IDEAL FOR */}
                <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-3.5 sm:p-4 flex items-start gap-3">
                  <Info size={18} className="text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-sky-900 block mb-0.5">
                      Target Learner Profile
                    </span>
                    <p className="text-xs font-medium text-sky-800 leading-relaxed">
                      {selectedFormat.idealFor}
                    </p>
                  </div>
                </div>

                {/* CURRICULUM HIGHLIGHTS */}
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-sky-500" />
                    <h4 className="text-[11px] sm:text-xs font-[1000] uppercase tracking-wider text-[#1a365d]">
                      Curriculum & Training Focus
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {selectedFormat.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <CheckCircle2 size={14} className="text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-700 leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WHAT'S INCLUDED */}
                <div className="space-y-2.5 sm:space-y-3">
                  <h4 className="text-[11px] sm:text-xs font-[1000] uppercase tracking-wider text-[#1a365d]">
                    Deliverables & Inclusions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {selectedFormat.inclusions.map((inclusion, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span className="text-xs font-medium text-slate-600 leading-snug">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* MODAL FOOTER ACTIONS (shrink-0 ensures it's always fully visible) */}
              <div className="shrink-0 p-4 sm:p-5 md:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFormat(null)}
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Chessmatic! I reviewed the details for ${selectedFormat.title} (${selectedFormat.tag}) and would like to book a trial / schedule consultation. Please share available slots.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 sm:py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-[1000] uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="fill-current" />
                  <span>Book Trial for {selectedFormat.title}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}