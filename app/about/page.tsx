import React from 'react'
import Link from 'next/link'
import { WittyMascot } from '@/components/witty-mascot'
import { 
  Sparkles, 
  Brain, 
  Heart, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Eye, 
  GraduationCap, 
  Users, 
  Lightbulb, 
  BookOpen, 
  Star,
  CheckCircle,
  Puzzle,
  TrendingUp,
  MessageSquareQuote,
  Flame,
  Check,
  X,
  Layers,
  HelpCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/page-banner'

export const metadata = {
  title: 'About GritWit | A Thoughtful, Playful Learning Space for Children',
  description: 'Meet the educator behind GritWit, our child-centered philosophy, and why we created a joyful thinking space where kids aged 6–9 learn how to explore, wonder, and think for themselves.',
}

export default function AboutPage() {
  const learningPillars = [
    {
      number: "01",
      title: "Learning by Doing & Exploring",
      tag: "Hands-on Puzzles",
      desc: "Children learn best when they can touch, test, and try things for themselves—not just listen to someone explain an answer.",
      icon: Layers,
      highlight: "Figuring it out through play"
    },
    {
      number: "02",
      title: "Designed Just for Ages 6–9",
      tag: "The Wonder Years",
      desc: "Tailored for the wonderful age when a child's brain begins to connect clues, spot sequences, and turn ideas around in their head.",
      icon: Brain,
      highlight: "When logical thinking first clicks"
    },
    {
      number: "03",
      title: "Every Child Thinks Differently",
      tag: "Words, Shapes & Logic",
      desc: "Some kids love picture riddles, others love word games or secret codes. We celebrate and build on each child's natural style.",
      icon: Lightbulb,
      highlight: "Multiple ways to shine"
    },
    {
      number: "04",
      title: "Staying Calm When Stuck",
      tag: "Patience & Grit",
      desc: "Getting stuck isn't a problem—it's a sign that a fun discovery is about to happen. We help kids take a breath and try another angle.",
      icon: Heart,
      highlight: "Patience and steady effort"
    },
    {
      number: "05",
      title: "A Gentle Nudge, Never the Answer",
      tag: "Caring Mentorship",
      desc: "Instead of handing over solutions, our educators offer a warm hint that helps your child take the next step on their own.",
      icon: Compass,
      highlight: "Just-right guidance at every step"
    },
    {
      number: "06",
      title: "Mistakes are Just Clues!",
      tag: "Courage to Try",
      desc: "When a guess doesn't work, we celebrate it as a helpful clue. That takes away fear and turns every puzzle into a playful adventure.",
      icon: Flame,
      highlight: "Trying with a smile"
    },
    {
      number: "07",
      title: "Asking Good Questions",
      tag: "Curiosity Sparks",
      desc: "We encourage questions like 'What if?' and 'Why do you think so?' so children experience the joy of saying: 'I figured it out!'",
      icon: MessageSquareQuote,
      highlight: "The pure joy of 'I did it!'"
    }
  ]

  const coreValues = [
    {
      icon: Brain,
      title: "Courage to Wonder",
      subtitle: "Trying Without Fear",
      description: "Helping children look at an unfamiliar puzzle with excitement and playful curiosity rather than feeling nervous."
    },
    {
      icon: Heart,
      title: "Kindness & Character",
      subtitle: "Character Corner",
      description: "Talking about empathy, fairness, and honesty in every single session, right alongside our thinking games."
    },
    {
      icon: Lightbulb,
      title: "Joyful Discovery",
      subtitle: "Smiles in Every Pod",
      description: "Puzzles framed like mini mystery quests, full of happy breakthroughs, friendly laughter, and 'Aha!' moments."
    },
    {
      icon: Users,
      title: "Educator-Led Only",
      subtitle: "Real Human Connection",
      description: "Small friendly pods of 4 to 6 children guided live by a caring educator—never pre-recorded videos or automated apps."
    }
  ]

  const comparisonPoints = [
    {
      feature: "What We Focus On",
      traditional: "Memorizing formulas and repetitive test worksheets",
      gritwit: "Curious thinking, hands-on puzzles, and moral character",
      icon: Brain
    },
    {
      feature: "Group Size",
      traditional: "25–35 children in crowded classrooms",
      gritwit: "Small friendly pods of just 4–6 children",
      icon: Users
    },
    {
      feature: "How Children Learn",
      traditional: "Passive listening; teacher hands out the formula",
      gritwit: "Children explore clues and discover answers for themselves",
      icon: Lightbulb
    },
    {
      feature: "When a Child Gets Stuck",
      traditional: "Marked wrong; focus is solely on the final mark",
      gritwit: "Celebrated as a great clue; focus is on how the child thought",
      icon: Flame
    },
    {
      feature: "The Lasting Result",
      traditional: "Forgotten quickly after the school exam ends",
      gritwit: "A calm, thoughtful approach to everyday challenges and life",
      icon: TrendingUp
    }
  ]

  const sessionFlow = [
    {
      step: "01",
      title: "Playful Warm-Up",
      time: "8 mins",
      desc: "A fun riddle or optical illusion puzzle to get every child smiling, relaxed, and talking."
    },
    {
      step: "02",
      title: "Today's Puzzle Quest",
      time: "24 mins",
      desc: "Hands-on shape riddles, pattern ciphers, or balance games explored in pairs and together."
    },
    {
      step: "03",
      title: "Witty's Mystery",
      time: "10 mins",
      desc: "A friendly team puzzle where kids share clues, explain their reasons, and celebrate together."
    },
    {
      step: "04",
      title: "Character Corner & Spark",
      time: "8 mins",
      desc: "A warm chat about kindness, patience, and trying again, plus a fun puzzle to share at dinner."
    }
  ]

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Header Hero Banner */}
      <PageBanner
        badge="A Personal Note from the Educator"
        title="Where Thinking Meets"
        titleHighlight="Kind Hearts."
        description="GritWit was born out of a simple wish: to give children aged 6–9 a warm, playful space where they can slow down, wonder out loud, and learn how to think for themselves."
        bgImage="/gritwit/about-pod-thinking.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About GritWit' }
        ]}
        stats={[
          { label: 'Ages Welcome', value: 'Ages 6–9' },
          { label: 'Small Pods', value: '4–6 Children' },
          { label: 'Learning Journey', value: '20 Fun Sessions' },
          { label: 'Guided Live', value: '100% Educator-Led' }
        ]}
        themeColor="cyan"
      />

      {/* 1.5 ABOUT AT A GLANCE: 3 SUMMARY METRIC CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="bg-gradient-to-br from-teal-50 to-white p-7 rounded-3xl border border-teal-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black shadow-md shadow-teal-600/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Small Friendly Pods</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Just 4 to 6 children per pod, giving every child the time and gentle encouragement to share ideas without feeling rushed.
            </p>
            <div className="pt-2 text-xs font-bold text-teal-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Every child is heard and valued</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-7 rounded-3xl border border-amber-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-md shadow-amber-400/20">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Joyful Puzzles & Logic</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              No boring worksheets or rote drill. Kids discover spatial shape nets, secret ciphers, balance scales, and story clues through play.
            </p>
            <div className="pt-2 text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Hands-on thinking through play</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-7 rounded-3xl border border-orange-200/80 shadow-sm space-y-3 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black shadow-md shadow-orange-500/20">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-900">Character In Every Session</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Thinking is only half the picture. Every session connects reasoning to empathy, honesty, and the patience to try again when stuck.
            </p>
            <div className="pt-2 text-xs font-bold text-orange-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>Logic meets kind hearts</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR STORY & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto">
              
              <div className="relative rounded-[36px] rounded-tl-[72px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group z-10">
                <img
                  src="/gritwit/about-pod-thinking.jpg"
                  alt="Children collaborating over puzzles at GritWit"
                  className="w-full h-[320px] sm:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 flex items-center gap-1.5 text-xs font-bold text-amber-300 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Small, Friendly Pod Learning</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-44 sm:w-52 h-44 sm:h-52 rounded-[28px] rounded-br-[56px] overflow-hidden shadow-2xl border-4 border-white bg-amber-100 group z-20 hidden xs:block">
                <img
                  src="/gritwit/about-mentor-child.jpg"
                  alt="Educator gently guiding a child at GritWit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-stone-950/80 backdrop-blur-sm p-1.5 rounded-xl text-center text-[10px] font-bold text-amber-200 border border-amber-400/30">
                  Gentle 1-on-1 Guidance
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 p-0.5 shadow-xl flex items-center justify-center z-20 transform -rotate-6">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  <Brain className="w-7 h-7 text-amber-600" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Right Column: Warm, Personal Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-200">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Why GritWit Exists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-[1.2]">
              A Thoughtful Space Where Children Learn to{' '}
              <span className="inline-block bg-amber-400 text-stone-950 px-3 py-0.5 rounded-xl font-black shadow-sm transform -rotate-1 border border-amber-300">
                Think for Themselves.
              </span>
            </h2>

            <p className="text-base text-stone-700 leading-relaxed font-normal">
              Children are naturally full of wonder. They ask questions constantly and love discovering how things work. But too often, conventional schooling rushes them to find the single &ldquo;right answer&rdquo; as quickly as possible.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              When children are only rewarded for fast recall, they start fearing the messy, wonderful process of figuring things out. We created GritWit as an antidote to that: a warm, playful space where making mistakes is welcomed, clues are explored with curiosity, and children discover that they are capable of solving big, interesting problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 font-bold">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">4 Core Thinking Areas</h4>
                  <p className="text-xs text-stone-600 leading-snug">Critical thinking, logic, comprehension, and problem solving.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Pods of 4–6 Friends</h4>
                  <p className="text-xs text-stone-600 leading-snug">Every child has voice, time, and personal attention.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80">
                <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Character & Values</h4>
                  <p className="text-xs text-stone-600 leading-snug">Honesty, empathy, and patience woven into every puzzle.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Clear Parent Updates</h4>
                  <p className="text-xs text-stone-600 leading-snug">Friendly check-ins show your child&apos;s growth over 20 sessions.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/program">
                <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-sm px-7 py-5 rounded-2xl shadow-md border border-amber-300 flex items-center gap-2">
                  <span>Explore the 20 Sessions</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm px-6 py-5 rounded-2xl">
                  <span>Have a Chat With Us</span>
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. A PERSONAL NOTE FROM THE EDUCATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-teal-50/60 rounded-3xl p-8 sm:p-14 text-stone-900 shadow-xl border border-amber-200/90 relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-amber-100 group">
                <img
                  src="/gritwit/educator-founder.jpg"
                  alt="Educator and founder of GritWit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-2xl font-black text-stone-900">A Message From the Educator</h3>
                <p className="text-amber-800 font-extrabold text-sm">Founder & Learning Mentor</p>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-stone-600">
                  <GraduationCap className="w-4 h-4 text-teal-600" />
                  <span>Passionate about how young minds think and grow</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-300 text-xs font-bold text-amber-900 shadow-2xs">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Why I Started GritWit</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight">
                &ldquo;Children don&apos;t need more pressure. They need the freedom to wonder.&rdquo;
              </h2>

              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  As an educator, I kept noticing the same heartbreaking moment: a bright 7-year-old would look at an unfamiliar problem and instantly freeze. Not because they couldn&apos;t solve it, but because they had been conditioned to believe that not knowing the answer right away was a failure.
                </p>
                <p>
                  Real thinking is different. It is curious, playful, and patient. When children are given permission to say, <em>&ldquo;I don&apos;t know yet, but let me try this clue,&rdquo;</em> something magical happens—their eyes light up, and their natural intelligence takes over.
                </p>
                <p>
                  I created GritWit to be that safe, joyful space. A place where children learn to enjoy the challenge, support their friends, and build a quiet confidence that serves them far beyond any classroom.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-sm px-7 py-5 rounded-2xl shadow-md border border-amber-300 flex items-center gap-2">
                    <span>Book a Discovery Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/program">
                  <Button size="lg" variant="outline" className="border-stone-300 bg-white hover:bg-amber-50/50 text-stone-800 font-bold text-sm px-6 py-5 rounded-2xl">
                    <span>See What Children Experience</span>
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW CHILDREN LEARN BEST (7 Core Ideas Explained Simply) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-14 border border-stone-200/90 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200">
              Our Educational Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              How Children Learn Best
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Everything we do in GritWit is built around these seven simple, child-friendly learning principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPillars.slice(0, 6).map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between hover:border-amber-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs">
                          {pillar.number}
                        </div>
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                          {pillar.tag}
                        </span>
                      </div>
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>

                    <h3 className="font-black text-stone-900 text-base leading-snug">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 text-[11px] font-bold text-teal-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 7th Principle Banner */}
          <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-teal-200 text-stone-950 p-6 sm:p-10 rounded-3xl border border-amber-300/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-950 bg-white/80 border border-amber-400 px-3 py-1 rounded-full">
                <MessageSquareQuote className="w-3.5 h-3.5 text-amber-600" />
                <span>Principle 07 • Asking Questions Instead of Giving Answers</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-950">
                Helping Kids Say: &ldquo;I Figured It Out Myself!&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">
                When a child asks for the answer, we ask a fun question right back. By nudging them toward their own eureka moment, they discover genuine confidence that no worksheet could ever give them.
              </p>
            </div>
            <Link href="/program" className="shrink-0">
              <Button className="bg-stone-950 hover:bg-stone-900 text-white font-black text-xs px-7 py-4 rounded-xl shadow-md">
                See the 20 Sessions
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. A DIFFERENT APPROACH TO LEARNING (Contrast Matrix) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              A Different Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Why We Move Beyond Traditional Worksheets
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Most after-school tuition focuses on speed and drilling formulas. GritWit focuses on genuine understanding, calm reasoning, and the joy of solving puzzles.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 px-4 font-black text-stone-900 text-base">What Matters Most</th>
                  <th className="py-4 px-4 font-bold text-stone-500 text-base w-5/12">Conventional Worksheets & Drills</th>
                  <th className="py-4 px-4 font-black text-teal-800 text-base w-5/12 bg-amber-50/60 rounded-t-2xl">The GritWit Learning Pod</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonPoints.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-stone-900 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-amber-600" />
                        <span>{item.feature}</span>
                      </td>
                      <td className="py-4 px-4 text-stone-600">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-stone-900 bg-amber-50/40">
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

      {/* 6. WHAT HAPPENS INSIDE A 50-MINUTE SESSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200/90 shadow-sm space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              Inside a Session
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              What Happens in a 50-Minute Pod?
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Every session is designed to keep kids engaged, cheerful, and curious from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionFlow.map((step, idx) => (
              <div 
                key={idx}
                className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 space-y-3 relative hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-amber-500/40">
                    {step.step}
                  </span>
                  <span className="text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full">
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

      {/* 7. OUR GUIDING VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              What We Believe In
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Values in Every Interaction
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              How we treat children and guide their thinking matters just as much as the puzzles we solve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-sm space-y-4 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
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
                    <span>Lived in every session</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 8. FINAL ABOUT PAGE CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          <WittyMascot className="w-4 h-4" expression="happy" animate={false} />
          <span>Come Say Hello</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Ready to see your child think with joy and confidence?
        </h2>
        <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          We&apos;d love to chat with you about your child, answer any questions, and see if our friendly thinking pods are the right fit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/program" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-950 font-black px-8 py-6 rounded-2xl shadow-lg border border-amber-300 flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Explore The 20 Sessions</span>
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
