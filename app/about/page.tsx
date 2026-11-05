import React from 'react'
import Link from 'next/link'
import { WittyMascot } from '@/components/witty-mascot'
import { 
  Sparkles, 
  Brain, 
  Heart, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Eye, 
  GraduationCap, 
  Users, 
  Award, 
  Lightbulb, 
  BookOpen, 
  Clock, 
  Star,
  CheckCircle,
  Puzzle,
  TrendingUp,
  MessageSquareQuote,
  Flame,
  Check,
  X,
  Layers,
  HelpCircle,
  PlayCircle,
  Shield,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/page-banner'

export const metadata = {
  title: 'About GritWit | Vision, Mission, Founder & Cognitive Philosophy',
  description: 'Discover GritWit’s founding story, vision, mission, educator-led pedagogy, developmental science, and our dedication to building independent thinkers aged 6–9.',
}

export default function AboutPage() {
  const theoreticalPillars = [
    {
      number: "01",
      title: "Bloom's Revised Taxonomy",
      tag: "Higher-Order Thinking",
      desc: "Transcending passive memorisation towards deep analysis, critical evaluation, and inventive hypothesis testing.",
      icon: Layers,
      highlight: "Analysis & Synthesis over Recall"
    },
    {
      number: "02",
      title: "Piaget's Concrete Operational Stage",
      tag: "Cognitive Milestones",
      desc: "Designed specifically for ages 6–9 when children make the neural shift into conservation, spatial nets, and reversible logic.",
      icon: Brain,
      highlight: "Spatial & Logical Reversibility"
    },
    {
      number: "03",
      title: "Gardner's Multiple Intelligences",
      tag: "Multi-Modal Reasoning",
      desc: "Equally stimulating visual-spatial puzzles, verbal analogies, logical syllogisms, and introspective metacognition.",
      icon: Lightbulb,
      highlight: "4 Complementary Modalities"
    },
    {
      number: "04",
      title: "Goleman's Emotional Intelligence",
      tag: "Self-Regulation",
      desc: "Nurturing emotional patience under ambiguity, impulse control, and compassionate collaboration during group quests.",
      icon: Heart,
      highlight: "Frustration Tolerance & Calm"
    },
    {
      number: "05",
      title: "Vygotsky's Scaffolding & ZPD",
      tag: "Educator Guidance",
      desc: "Mentoring children in the Zone of Proximal Development—just beyond current comfort, with precision prompts that prevent overwhelm.",
      icon: Compass,
      highlight: "Optimal Challenge Balance"
    },
    {
      number: "06",
      title: "Carol Dweck's Growth Mindset",
      tag: "Intellectual Courage",
      desc: "Celebrating smart missteps as critical clues; reframing struggle as the exact neurological moment when new synapses form.",
      icon: Flame,
      highlight: "Embracing Cognitive Struggle"
    },
    {
      number: "07",
      title: "Socratic Dialogic Inquiry",
      tag: "Curiosity Loops",
      desc: "Educators who never just give away answers, but ask surgical, thought-provoking questions that spark children's own eureka moments.",
      icon: MessageSquareQuote,
      highlight: "Discovery-Led Questioning"
    }
  ]

  const coreValues = [
    {
      icon: Brain,
      title: "Intellectual Courage",
      subtitle: "Comfort in the Unknown",
      description: "Empowering children to approach complex, unfamiliar challenges with open curiosity and resilience rather than anxiety."
    },
    {
      icon: Heart,
      title: "Empathy & Character",
      subtitle: "Character Corner",
      description: "Integrating moral reasoning, perspective-taking, and kindness into every single session alongside logical challenges."
    },
    {
      icon: Lightbulb,
      title: "Playful Ingenuity",
      subtitle: "Joyful Discovery",
      description: "Cognitive problem solving framed like thrilling detective mysteries, filled with joyful breakthroughs and 'Aha!' smiles."
    },
    {
      icon: ShieldCheck,
      title: "Pedagogical Integrity",
      subtitle: "Educator-Led Only",
      description: "Strictly capped pods of 4–6 thinkers led live by passionate primary educators, never pre-recorded videos or AI avatars."
    }
  ]

  const comparisonPoints = [
    {
      feature: "Core Focus",
      traditional: "Repetitive worksheets & syllabus test drills",
      gritwit: "Higher-order reasoning, deep puzzles & moral character",
      icon: Brain
    },
    {
      feature: "Student Attention Ratio",
      traditional: "25–35 children in crowded lecture rooms",
      gritwit: "Intimate pods strictly capped at 4–6 thinkers",
      icon: Users
    },
    {
      feature: "Instruction Style",
      traditional: "Passive listening; educator provides formula",
      gritwit: "Socratic inquiry; children discover solution strategies",
      icon: Lightbulb
    },
    {
      feature: "Handling Errors",
      traditional: "Penalised as failure; focus on final score",
      gritwit: "Celebrated as rich data points; focus on thinking process",
      icon: Flame
    },
    {
      feature: "Long-term Impact",
      traditional: "Transient memory discarded after school tests",
      gritwit: "Durable mental models that adapt to any future field",
      icon: TrendingUp
    }
  ]

  const sessionFlow = [
    {
      step: "01",
      title: "Cognitive Warm-Up",
      time: "8 mins",
      desc: "Playful lateral thinking riddle or visual optical illusion to awaken curiosity and get every child vocal."
    },
    {
      step: "02",
      title: "Core Skill Challenge",
      time: "24 mins",
      desc: "Multi-level tactile or digital problem pod (e.g. 3D spatial nets, cipher logic, or analogical deductions)."
    },
    {
      step: "03",
      title: "Witty's Quest",
      time: "10 mins",
      desc: "Collaborative mystery puzzle where children team up in pairs to synthesize clues and defend their reasoning."
    },
    {
      step: "04",
      title: "Character Corner & Reflection",
      time: "8 mins",
      desc: "Discussion of empathy, intellectual honesty, and perseverance, followed by a personalized take-home spark."
    }
  ]

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header Hero Banner */}
      <PageBanner
        badge="Our Story, Pedagogy & Leadership"
        title="Where Thinking Skills Meet"
        titleHighlight="Human Values."
        description="GritWit is a purposeful response to an educational culture that over-values memorised answers and under-values intellectual curiosity, resilience, and compassion."
        bgImage="/gritwit/educator-founder.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About GritWit' }
        ]}
        stats={[
          { label: 'Focus Age Group', value: '6–9 Years' },
          { label: 'Science-Backed Pillars', value: '7 Theoretical Pillars' },
          { label: 'Intimate Pod Ratio', value: '4–6 per Cohort' }
        ]}
        themeColor="teal"
      />

      {/* 2. UPGRADED ABOUT SECTION: MULTI-IMAGE COMPOSITION ON LEFT, TEXT ON RIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Multi-Image Asymmetrical Composition with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Primary Image: Collaborative Pod of Children */}
              <div className="relative rounded-[36px] rounded-tl-[72px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group z-10">
                <img
                  src="/gritwit/about-pod-thinking.jpg"
                  alt="Children collaborating over cognitive logic puzzles in GritWit pod"
                  className="w-full h-[320px] sm:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Top Badge on Primary Image */}
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-400/30 flex items-center gap-1.5 text-xs font-bold text-amber-300 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive Pod Learning</span>
                </div>
              </div>

              {/* Secondary Overlapping Image: Mentor Guiding a Thinker */}
              <div className="absolute -bottom-10 -right-4 sm:-right-8 w-48 sm:w-56 h-48 sm:h-56 rounded-[30px] rounded-br-[60px] overflow-hidden shadow-2xl border-4 border-white bg-teal-900 group z-20 hidden xs:block">
                <img
                  src="/gritwit/about-mentor-child.jpg"
                  alt="Educator gently mentoring child at GritWit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-stone-950/80 backdrop-blur-sm p-1.5 rounded-xl text-center text-[10px] font-bold text-amber-200 border border-teal-500/30">
                  1-on-1 Socratic Scaffolding
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-5 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md py-2 px-4 rounded-2xl shadow-xl border border-stone-200/90 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-black">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900">500+ Thinkers</span>
                  <span className="block text-[11px] font-semibold text-teal-700">Ages 6–9 Empowered</span>
                </div>
              </div>

              {/* Floating Star Badge (Brand Highlight) */}
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-600 to-amber-400 p-0.5 shadow-xl flex items-center justify-center z-20 transform -rotate-6">
                <div className="w-full h-full rounded-[14px] bg-stone-950 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-amber-300" />
                </div>
              </div>

              {/* Soft Ambient Background Glows */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Right Column: Detailed Narrative, Brand Highlights & Action Pillars */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-900 px-3.5 py-1.5 rounded-full text-xs font-bold border border-teal-200">
              <Compass className="w-3.5 h-3.5 text-teal-700" />
              <span>About GritWit & What Sets Us Apart</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-[1.2]">
              Building Independent Thinkers With{' '}
              <span className="inline-block bg-amber-400 text-stone-950 px-3 py-0.5 rounded-xl font-black shadow-sm transform -rotate-1 border border-amber-300">
                Resilience & Empathy.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              At GritWit, we believe every child is born naturally inquisitive. However, conventional classroom schooling often rewards immediate rote answers over deep exploratory problem solving.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              We created an educator-led sanctuary where children learn <em>how to think, not what to think</em>. Through multi-sensory challenges, spatial-visual dilemmas, verbal analogies, and moral dilemmas, children learn to navigate complexity with quiet confidence.
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">15 Higher-Order Skills</h4>
                  <p className="text-xs text-stone-500 leading-snug">Visual analogies, syllogisms, nets & Fermi logic.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Pods of 4–6 Thinkers</h4>
                  <p className="text-xs text-stone-500 leading-snug">Every child vocalises hypotheses with 100% voice time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Educator Mentorship</h4>
                  <p className="text-xs text-stone-500 leading-snug">Guided by trained primary specialists, never pre-recorded bots.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Check-In & Growth</h4>
                  <p className="text-xs text-stone-500 leading-snug">Session 01 to Session 20 measurable progress roadmap.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/program">
                <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-7 py-5 rounded-2xl shadow-lg flex items-center gap-2">
                  <span>Explore The 20 Sessions</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-stone-300 hover:bg-stone-50 text-stone-800 font-bold text-sm px-6 py-5 rounded-2xl">
                  <span>Book a Call with Educator</span>
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. UPGRADED VISION & MISSION SECTION WITH STATS AND CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white shadow-2xl overflow-hidden border border-teal-500/30 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-800/80 border border-teal-400/40 flex items-center justify-center text-teal-300 shadow-md">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-teal-300 bg-teal-900/60 border border-teal-700/60 px-3 py-1 rounded-full">
                  Our Long-Term Vision
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                A generation of children with the mental agility to solve tomorrow’s problems, and the empathy to serve the world kindly.
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We envision a world where a child’s intellectual worth is not measured by test speed or rote recall, but by their capacity to question assumptions, persevere through ambiguity, and bring empathetic clarity to complex situations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-teal-800/60">
                <div>
                  <span className="block text-2xl font-black text-amber-300">10,000+</span>
                  <span className="text-xs text-slate-300">Target Thinkers by 2028</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-teal-300">100%</span>
                  <span className="text-xs text-slate-300">Educator-Led Pods</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Nurturing Curiosity • Critical Reasoning • Emotional Grace</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-500/10 via-white to-amber-50/50 text-stone-900 shadow-2xl overflow-hidden border border-amber-300/80 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-md">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  Our Mission In Action
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                To scaffold essential cognitive habits and moral character in children aged 6–9 through joyful, interactive thinking pods.
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                By replacing passive worksheets with an evidence-based framework of 15 higher-order cognitive skills and an integrated Character Corner, we cultivate independent problem solvers who think clearly and act kindly.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-200">
                <div>
                  <span className="block text-2xl font-black text-stone-900">20 Sessions</span>
                  <span className="text-xs text-stone-500">Structured Cognitive Journey</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-teal-700">4 Core Skills</span>
                  <span className="text-xs text-stone-500">Critical, Logic, Comp, Problem</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-stone-200 flex items-center gap-2 text-xs font-bold text-teal-800">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span>Small 4–6 Pods • Zero Rote Drills • Lifelong Impact</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE COGNITIVE WINDOW: PIAGET CONCRETE OPERATIONAL STAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200">
              Developmental Window (Ages 6–9)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              Between ages 6 and 9, a child’s brain undergoes its most rapid reasoning leap.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              In developmental psychology (Jean Piaget), this corresponds to the critical transition into the <em>Concrete Operational Stage</em>. Children transition from purely visual, intuitive impressions into reversible mental operations, spatial geometry, classification, and relational causality.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              If children are exposed only to repetitive worksheets during this window, their brain learns to wait for instructions. But when invited to explore, test hypotheses, and deduce patterns, their neural architecture builds durable mental models that empower them for life.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 space-y-1.5">
                <span className="font-black text-teal-900 text-sm flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  Grit (Resilience)
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The patience to stay engaged with an ambiguous problem when the first solution doesn’t work immediately.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5">
                <span className="font-black text-amber-900 text-sm flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  Wit (Ingenuity)
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The sharpness to connect subtle clues, identify fallacies, and engineer elegant breakthrough solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[40px] rounded-tl-[90px] rounded-br-[70px] overflow-hidden shadow-2xl border-4 border-amber-300 bg-stone-900 group">
              <img
                src="/gritwit/hero-child.jpg"
                alt="Child engaged in cognitive thinking puzzles"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent p-8 flex flex-col justify-end text-white">
                <div className="inline-flex items-center gap-2 bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full w-fit mb-3 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>The GritWit Creed</span>
                </div>
                <blockquote className="text-base sm:text-lg font-semibold leading-relaxed italic border-l-4 border-teal-400 pl-4 text-slate-100">
                  &ldquo;A sharp thinker and a kind heart — that&apos;s what we are building together. Logic without empathy is cold; empathy without logic is ineffective. We need both.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. NEW: TRADITIONAL EDUCATION VS. GRITWIT COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200">
              Pedagogical Contrast
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Why Traditional Worksheets Fall Short
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Most after-school classes optimize for speed and rote drill. GritWit is built from the ground up to cultivate deep mental models and intellectual autonomy.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 px-4 font-black text-stone-900 text-base">Dimension</th>
                  <th className="py-4 px-4 font-bold text-stone-500 text-base w-5/12">Conventional Worksheets & Tutoring</th>
                  <th className="py-4 px-4 font-black text-teal-800 text-base w-5/12 bg-teal-50/60 rounded-t-2xl">The GritWit Cognitive Pod</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonPoints.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-stone-900 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-teal-600" />
                        <span>{item.feature}</span>
                      </td>
                      <td className="py-4 px-4 text-stone-600">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-stone-900 bg-teal-50/40">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item.gritwit}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. MEET THE FOUNDER SECTION (UPGRADED WITH PHILOSOPHICAL DEPTH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl border border-teal-700/40 relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Founder Photo & Accreditation */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-stone-800 group">
                <img
                  src="/gritwit/educator-founder.jpg"
                  alt="Founder and Lead Educator at GritWit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-2xl font-black text-white">Lead Educator & Founder</h3>
                <p className="text-amber-300 font-bold text-sm">Curriculum Architect & Cognitive Specialist</p>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-300">
                  <GraduationCap className="w-4 h-4 text-teal-400" />
                  <span>12+ Years in Primary Pedagogy & Cognitive Design</span>
                </div>
              </div>
            </div>

            {/* Founder Message & Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-400/40 text-xs font-bold text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Founder&apos;s Personal Narrative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                “Why I built GritWit — and what children truly need today.”
              </h2>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Having spent over a decade teaching in leading classrooms, I continually witnessed the same heartbreaking pattern: bright, imaginative children being conditioned to think that intelligence simply meant memorising pre-digested answers for the next standardised test.
                </p>
                <p>
                  When children are told exactly what to think and given formulas before questions, their natural curiosity atrophies. When faced with an unfamiliar puzzle, they freeze in fear of being &apos;wrong&apos;.
                </p>
                <p>
                  I created GritWit to restore what schooling often leaves behind: the thrill of the struggle, the joy of intellectual courage, and the gentle guidance of an educator who says: <em>&ldquo;You don&apos;t know the answer yet — let&apos;s think about it together.&rdquo;</em>
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-sm px-7 py-5 rounded-2xl shadow-xl flex items-center gap-2">
                    <span>Speak Directly with the Founder</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/program">
                  <Button size="lg" variant="outline" className="border-slate-600 bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm px-6 py-5 rounded-2xl">
                    <span>Explore 20-Session Plan</span>
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SEVEN RESEARCH-BACKED THEORETICAL PILLARS (UPGRADED WITH ICONS & HIGHLIGHTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-14 border border-stone-200/90 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200">
              Pedagogical Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Grounded in 7 Established Cognitive Learning Sciences
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Every single session, puzzle card, and take-home challenge is scaffolded by decades of developmental psychology research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theoreticalPillars.slice(0, 6).map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between hover:border-teal-400"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                          {pillar.number}
                        </div>
                        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                          {pillar.tag}
                        </span>
                      </div>
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>

                    <h3 className="font-black text-stone-900 text-base leading-snug">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 text-[11px] font-bold text-amber-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Special 7th Pillar Banner */}
          <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white p-6 sm:p-10 rounded-3xl border border-teal-600/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 bg-teal-950/70 border border-teal-500/40 px-3 py-1 rounded-full">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span>Pillar 07 • Socratic Dialogic Inquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Educators Who Ask Great Questions, Never Just Hand Out Answers
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                By guiding students through counter-examples and inquiry loops, children discover cognitive pride: the exhilarating feeling that *they* solved the riddle themselves.
              </p>
            </div>
            <Link href="/program" className="shrink-0">
              <Button className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-xs px-7 py-4 rounded-xl shadow-md">
                See How It Unfolds in Sessions
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 8. NEW: WHAT HAPPENS INSIDE A 50-MINUTE GRITWIT POD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200/90 shadow-sm space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              Session Anatomy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Inside a 50-Minute Thinking Pod
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Every session is meticulously scaffolded to maximize cognitive stretch while maintaining playful joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionFlow.map((step, idx) => (
              <div 
                key={idx}
                className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 space-y-3 relative hover:border-teal-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-teal-800/30">
                    {step.step}
                  </span>
                  <span className="text-xs font-black text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-base">{step.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. OUR FOUR CORE VALUES (UPGRADED WITH COLOR BADGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              The Values That Shape Every Pod
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              We hold ourselves to the highest pedagogical integrity in every single interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-sm space-y-4 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                        {val.subtitle}
                      </span>
                      <h3 className="font-black text-stone-900 text-lg">{val.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{val.description}</p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active In Every Session</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 10. WHY SMALL PODS (4-6 THINKERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50 via-teal-50/40 to-white rounded-3xl p-8 sm:p-12 border border-teal-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
                Intimate Pod Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Why We Strictly Limit Pods to 4–6 Thinkers
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                In large batches of 15–30 children, vocal students dominate discussions while reflective, deep thinkers fade into the background. In a GritWit pod of 4 to 6 children, our educators ensure every thinker vocalises their logic, tests multiple hypotheses, and receives immediate personalised feedback.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-700">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600" /> 100% Active Speaking Time</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Immediate Clarification</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Collaborative Peer Thinking</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2 w-full max-w-xs">
                <span className="text-4xl sm:text-5xl font-black text-teal-700 block">4–6</span>
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">Maximum Children Per Pod</span>
                <p className="text-xs text-stone-600 pt-1">Ensuring genuine psychological safety, individualized scaffolding, and deep educator mentorship.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FINAL ABOUT PAGE CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
          <WittyMascot className="w-4 h-4" expression="happy" animate={false} />
          <span>Take The First Step</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Ready to see your child think with clarity, joy and confidence?
        </h2>
        <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Explore our complete 20-session curriculum across all four cognitive domains, or schedule a free 15-minute educator discovery call.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/program" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 py-6 rounded-2xl shadow-lg flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Explore The 20-Session Plan</span>
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-stone-300 hover:bg-stone-50 text-stone-800 font-bold px-8 py-6 rounded-2xl shadow-sm flex items-center justify-center gap-2">
              <Compass className="w-5 h-5 text-teal-700" />
              <span>Book a Discovery Call</span>
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}
