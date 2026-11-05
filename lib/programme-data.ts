export interface SessionItem {
  number: string
  title: string
  skillNumber?: string
  domain: 'Critical Thinking' | 'Logical Reasoning' | 'Comprehension' | 'Problem Solving' | 'Assessment & Milestones'
  type: string
  characterValue: string
  description: string
  exampleQuestion: string
}

export const PROGRAMME_STRUCTURE: {
  partTitle: string
  tagline: string
  color: string
  sessions: SessionItem[]
}[] = [
  {
    partTitle: "Foundation & Thinker Check-In",
    tagline: "Establishing baseline cognitive abilities & introducing Witty",
    color: "from-sky-500/10 to-teal-500/10 border-sky-200",
    sessions: [
      {
        number: "S01",
        title: "Thinker Check-In",
        domain: "Assessment & Milestones",
        type: "Baseline Pre-Assessment",
        characterValue: "Curiosity & Self-Awareness",
        description: "A fun, low-pressure cognitive discovery session where children explore puzzles across 4 domains. Provides parents with a concrete baseline report of the child's thinking instincts.",
        exampleQuestion: "How do you approach a puzzle when the instructions aren't given? Discovering instinctual problem solving."
      }
    ]
  },
  {
    partTitle: "Part 1 — Critical Thinking & Logical Reasoning",
    tagline: "Analysing visual relationships, detecting patterns, algorithmic sequences, and cause-effect chains",
    color: "from-teal-500/10 to-emerald-500/10 border-teal-200",
    sessions: [
      {
        number: "S02",
        title: "Visual Analogies",
        skillNumber: "Skill 1",
        domain: "Critical Thinking",
        type: "Analyse & Evaluate",
        characterValue: "Perspective Taking",
        description: "Children learn to decode geometric, spatial, and pictorial transformations: 'Shape A is to B as Shape C is to ?'.",
        exampleQuestion: "If a blue triangle turns upside down and doubles its sides, what happens to an orange pentagon?"
      },
      {
        number: "S03",
        title: "Identifying Patterns",
        skillNumber: "Skill 2",
        domain: "Logical Reasoning",
        type: "Deduce & Infer",
        characterValue: "Patience & Keen Observation",
        description: "Uncovering cyclic rules, alternating sequences, and hidden progression in numbers, matrices, and everyday situations.",
        exampleQuestion: "Spotting the secret alternating pattern in nature's spirals and numerical sequences."
      },
      {
        number: "S04",
        title: "Coding & Decoding",
        skillNumber: "Skill 3",
        domain: "Logical Reasoning",
        type: "Deduce & Infer",
        characterValue: "Integrity & Detail Orientation",
        description: "Translating cipher rules, symbol substitutions, and logic keys. Demystifies rule-following without needing computer screens.",
        exampleQuestion: "If 'BRAIN' is written as 'CSBJO', how do we send a secret encrypted message to our thinking partner?"
      },
      {
        number: "S05",
        title: "Algorithmic Thinking",
        skillNumber: "Skill 4",
        domain: "Logical Reasoning",
        type: "Step-by-step Precision",
        characterValue: "Consistency & Focus",
        description: "Breaking big tasks into unambiguous sequential instructions. Teaches children to debug reasoning loops when things go awry.",
        exampleQuestion: "Write an infallible step-by-step recipe to guide a blindfolded robot through an obstacle maze."
      },
      {
        number: "S06",
        title: "Cause & Effect",
        skillNumber: "Skill 5",
        domain: "Critical Thinking",
        type: "Analyse & Evaluate",
        characterValue: "Responsibility & Empathy",
        description: "Distinguishing between correlation and true causation. Understanding ripple consequences of actions in stories and real life.",
        exampleQuestion: "Did the rain cause the umbrella sales, or did the umbrella sales summon the rain? Untangling real causes."
      },
      {
        number: "S07",
        title: "Witty's Challenge Day 1",
        domain: "Assessment & Milestones",
        type: "Recap & Gamified Challenge",
        characterValue: "Sportsmanship & Collaboration",
        description: "No new lectures. Pure gamified thinking! Children team up or conquer puzzle escape rooms putting Skills 1-5 to the test.",
        exampleQuestion: "Solve Witty's Mystery Vault using ciphers, visual analogies, and sequence keys."
      }
    ]
  },
  {
    partTitle: "Part 2 — Critical Thinking & Comprehension",
    tagline: "Connecting context, reading between the lines, and extracting core insights",
    color: "from-amber-500/10 to-orange-500/10 border-amber-200",
    sessions: [
      {
        number: "S08",
        title: "Compare & Contrast",
        skillNumber: "Skill 6",
        domain: "Critical Thinking",
        type: "Analyse & Evaluate",
        characterValue: "Open-mindedness",
        description: "Moving beyond surface similarities to discover deep conceptual differences and common grounds.",
        exampleQuestion: "How are a submarine and a dolphin identical in principle, yet opposites in execution?"
      },
      {
        number: "S09",
        title: "Verbal Analogies",
        skillNumber: "Skill 7",
        domain: "Comprehension",
        type: "Interpret & Connect",
        characterValue: "Respectful Communication",
        description: "Understanding complex relational pairs in language: Part-to-Whole, Cause-to-Result, Tool-to-Craftsman.",
        exampleQuestion: "Architect is to Blueprint as Author is to ___? Mapping conceptual relationships."
      },
      {
        number: "S10",
        title: "Inference & Deduction",
        skillNumber: "Skill 8",
        domain: "Comprehension",
        type: "Interpret & Connect",
        characterValue: "Fair-mindedness",
        description: "Detecting clues that are never stated out loud. Learning how to formulate justified hunches without jumping to wild conclusions.",
        exampleQuestion: "The muddy boots, dripping umbrella, and empty cookie jar: What truly happened here?"
      },
      {
        number: "S11",
        title: "Main Idea & Core Distillation",
        skillNumber: "Skill 9",
        domain: "Comprehension",
        type: "Interpret & Connect",
        characterValue: "Clarity & Honesty",
        description: "Separating signal from noise in word problems, news briefs, and short narratives. Summarizing big ideas into one crisp thought.",
        exampleQuestion: "Strip away 100 extra words: What is the single beating heart of this 3-paragraph story?"
      },
      {
        number: "S12",
        title: "Words in Context",
        skillNumber: "Skill 10",
        domain: "Comprehension",
        type: "Interpret & Connect",
        characterValue: "Empathy & Nuance",
        description: "Deciphering unfamiliar vocabulary and idiomatic phrases from ambient context clues and tone.",
        exampleQuestion: "When someone says 'the argument hold no water', what does water have to do with truth?"
      },
      {
        number: "S13",
        title: "Witty's Challenge Day 2",
        domain: "Assessment & Milestones",
        type: "Recap & Verbal Escape Room",
        characterValue: "Grit & Resilience",
        description: "Mid-programme challenge day combining language comprehension, detective deductions, and analogical puzzles.",
        exampleQuestion: "Crack the Detective's Notebook using verbal inference and context evidence."
      }
    ]
  },
  {
    partTitle: "Part 3 — Applied Problem Solving & Synthesis",
    tagline: "Mathematical heuristics, spatial manipulation, data sufficiency, and real-world application",
    color: "from-purple-500/10 to-indigo-500/10 border-purple-200",
    sessions: [
      {
        number: "S14",
        title: "Estimation & Fermi Thinking",
        skillNumber: "Skill 11",
        domain: "Problem Solving",
        type: "Create & Apply",
        characterValue: "Pragmatism & Confidence",
        description: "Learning to make reasonable, structured estimates for complex, ambiguous questions without panic.",
        exampleQuestion: "How many tennis balls could fit inside our classroom? Formulating rational boundary bounds."
      },
      {
        number: "S15",
        title: "Numeric Patterns & Series",
        skillNumber: "Skill 12",
        domain: "Problem Solving",
        type: "Create & Apply",
        characterValue: "Perseverance",
        description: "Fibonacci leaps, geometric growth, triangular numbers, and non-linear progressions revealed visually.",
        exampleQuestion: "Discovering how sunflowers pack seeds in numeric spirals."
      },
      {
        number: "S16",
        title: "Equations & Balancing Logic",
        skillNumber: "Skill 13",
        domain: "Problem Solving",
        type: "Create & Apply",
        characterValue: "Balance & Fairness",
        description: "Algebraic thinking taught intuitively through balance scales, mystery weights, and equivalence logic.",
        exampleQuestion: "If 2 apples and 1 melon balance 7 oranges, how can we deduce the weight of an apple?"
      },
      {
        number: "S17",
        title: "Data Sufficiency",
        skillNumber: "Skill 14",
        domain: "Problem Solving",
        type: "Create & Apply",
        characterValue: "Critical Skepticism",
        description: "The hallmark of executive reasoning: 'Do I have enough information to solve this, or am I guessing?'.",
        exampleQuestion: "Can we know if Maya is taller than Rohan with just Clue A, Clue B, or both together?"
      },
      {
        number: "S18",
        title: "Spatial Visualisation & Origami Logic",
        skillNumber: "Skill 15",
        domain: "Problem Solving",
        type: "Create & Apply",
        characterValue: "Imaginative Foresight",
        description: "Mental rotation, net folding of 3D solids, paper cut unfolding, and isometric projections.",
        exampleQuestion: "If a folded paper triangle is punched twice with a hole puncher, what will it look like unfolded?"
      },
      {
        number: "S19",
        title: "Witty's Challenge Day 3",
        domain: "Assessment & Milestones",
        type: "Ultimate Cognitive Triathlon",
        characterValue: "Courage & Joy of Learning",
        description: "A fast-paced, celebratory cognitive quest weaving all 15 skills together in multi-step scenarios.",
        exampleQuestion: "The Grand Mind Quest: 5 team stages blending spatial nets, data checks, and ciphers."
      },
      {
        number: "S20",
        title: "Thinker Check-Out & Parent Connect",
        domain: "Assessment & Milestones",
        type: "Final Growth Review + Family Celebration",
        characterValue: "Gratitude & Lifelong Growth",
        description: "Post-assessment measuring comparative growth against Session 01. Joint session with parents where children showcase thinking strategies and receive personalized developmental pathways.",
        exampleQuestion: "Presenting my Thinking Journal to mum & dad and demonstrating real cognitive leaps."
      }
    ]
  }
]

export const FOUR_CORE_SKILLS = [
  {
    id: "critical-thinking",
    title: "Critical Thinking",
    verbs: "Analyse • Evaluate",
    tagline: "Questioning assumptions, identifying bias, and evaluating evidence with clarity.",
    accent: "teal",
    bgLight: "bg-teal-50",
    borderLight: "border-teal-200",
    textLight: "text-teal-700",
    badgeBg: "bg-teal-100",
    iconName: "Compass",
    quote: "GritWit teaches children that 'why' is just as important as 'what'.",
    description: "In an era of instant answers and screen-fed recommendations, children rarely get the chance to interrogate where an answer came from. Critical Thinking trains children to dissect arguments, evaluate source claims, and weigh multiple viewpoints before drawing a conclusion.",
    inDailyLife: [
      {
        scenario: "Navigating Media & Opinions",
        description: "Children distinguish between objective facts ('The temperature is 32°C') and subjective opinions ('It is too hot to play outside')."
      },
      {
        scenario: "Understanding Perspective",
        description: "During disagreements with friends or siblings, they can step into the other child's shoes to grasp why they feel that way."
      },
      {
        scenario: "Smart Decision Making",
        description: "Instead of choosing on impulse, they can list pros, cons, and unintended ripple consequences."
      }
    ],
    sampleChallenge: {
      question: "Three children all claim they didn't touch the cake, yet chocolate crumbs are visible on someone's left sleeve. If Kabir is left-handed, Anya is allergic to dairy, and Dev says Kabir did it — what question must we ask first?",
      thinkingStep: "Instead of blaming Kabir right away, we evaluate the premise: Is the cake dairy-free? Did Kabir touch anything else? Critical thinkers verify before concluding."
    }
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    verbs: "Deduce • Infer",
    tagline: "Building rock-solid chains of logic, spotting patterns, and algorithmic sequencing.",
    accent: "sky",
    bgLight: "bg-sky-50",
    borderLight: "border-sky-200",
    textLight: "text-sky-700",
    badgeBg: "bg-sky-100",
    iconName: "Cpu",
    quote: "Logic is the language of the universe — from chess and code to daily decision making.",
    description: "Logical reasoning is the ability to move from premise to valid conclusion without logical fallacies. Our programme grounds children in deductive logic (if all A are B...), inductive pattern recognition, and algorithmic sequencing.",
    inDailyLife: [
      {
        scenario: "Organising Tasks & Planning",
        description: "Children can plan their evening study, playtime, and backpack packing in optimal sequence without feeling overwhelmed."
      },
      {
        scenario: "Spotting Rule Systems",
        description: "Whether learning the rules of chess, a board game, or musical scales, their brain recognises cyclic rules effortlessly."
      },
      {
        scenario: "Constructing Convincing Arguments",
        description: "They state their reasons methodically ('Because of X, Y happens, therefore we should do Z') instead of throwing tantrums."
      }
    ],
    sampleChallenge: {
      question: "All Glimmers are shiny. Some shiny things are coins. Can we conclude that all Glimmers are coins?",
      thinkingStep: "Children learn Venn logic: Just because Glimmers share the 'shiny' quality with coins doesn't mean they belong inside the coin circle! Deductive precision."
    }
  },
  {
    id: "comprehension",
    title: "Comprehension",
    verbs: "Interpret • Connect",
    tagline: "Reading between the lines, extracting main ideas, and grasping nuanced context.",
    accent: "amber",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-200",
    textLight: "text-amber-800",
    badgeBg: "bg-amber-100",
    iconName: "BookOpen",
    quote: "True comprehension isn't just word recognition; it is mental imagery and empathy.",
    description: "Many children can read words quickly, yet struggle to understand what the passage truly implies. Comprehension at GritWit trains deep listening, reading between the lines, identifying the speaker's emotional state, and extracting the distilled essence of dense information.",
    inDailyLife: [
      {
        scenario: "School Word Problems",
        description: "Filtering out irrelevant distracting numbers in multi-step math problems to find what the question is genuinely asking."
      },
      {
        scenario: "Deep Empathy in Family Conversations",
        description: "Picking up on unspoken tones: noticing when Mom or a friend says 'I'm fine' but their body language says they need a warm hug."
      },
      {
        scenario: "Synthesising Knowledge",
        description: "Reading a science article and explaining it to grandparents in 3 simple, lucid sentences."
      }
    ],
    sampleChallenge: {
      question: "'Rohan wiped the sweat from his forehead, tightened his shoelaces, and looked at the mountain peak while the cold wind began to howl.' Where is Rohan, and what is he preparing for?",
      thinkingStep: "The text doesn't say 'Rohan is a mountaineer embarking on a trek'. The child connects cues: sweat + mountain + howling wind = rigorous high-altitude ascent."
    }
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    verbs: "Create • Apply",
    tagline: "Breaking complex dilemmas into bite-sized pieces and persevering when the first try fails.",
    accent: "purple",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-200",
    textLight: "text-purple-700",
    badgeBg: "bg-purple-100",
    iconName: "Lightbulb",
    quote: "Grit + Wit = The unstoppable confidence to tackle problems you haven't seen before.",
    description: "Life does not come with pre-packaged multiple choice answers. When faced with a roadblock, children equipped with GritWit techniques don't freeze. They estimate boundaries, sketch diagrams, test inverse solutions, and keep a cool head.",
    inDailyLife: [
      {
        scenario: "Handling Unexpected Snags",
        description: "When a school project supply runs out, instead of crying, they brainstorm 3 alternative everyday household materials."
      },
      {
        scenario: "Spatial & Practical Dexterity",
        description: "Packing a travel suitcase or fitting toys into a storage chest using intuitive geometric tesselation."
      },
      {
        scenario: "Emotional Resilience (Grit)",
        description: "Treating mistakes as valuable data points rather than personal failures."
      }
    ],
    sampleChallenge: {
      question: "You have an empty 3-litre jug, an empty 5-litre jug, and an unlimited water tap. How can you measure exactly 4 litres?",
      thinkingStep: "A classic water-pour heuristic puzzle. Children learn to iterate step-by-step: Fill the 5L, pour into 3L (leaving 2L in the 5L jug), empty 3L, transfer the 2L into 3L, refill 5L and top up the 3L jug with 1L. Exactly 4L remains!"
    }
  }
]

