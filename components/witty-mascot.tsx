import React from 'react'

export function WittyMascot({ 
  className = "w-16 h-16", 
  expression = "happy", 
  bubbleText,
  animate = true 
}: { 
  className?: string
  expression?: 'happy' | 'thinking' | 'wink' | 'celebrate'
  bubbleText?: string
  animate?: boolean
}) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {bubbleText && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-stone-900 animate-bounce">
          {bubbleText}
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-amber-400 rotate-45 border-r border-b border-stone-900" />
        </div>
      )}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${animate ? 'transition-transform duration-300 hover:scale-110 hover:-rotate-3' : ''}`}
      >
        <defs>
          <linearGradient id="brainGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" /> {/* Sunny bright */}
            <stop offset="0.5" stopColor="#F59E0B" /> {/* Amber */}
            <stop offset="1" stopColor="#F97316" /> {/* Coral glow */}
          </linearGradient>
          <linearGradient id="blushGrad" x1="0" y1="0" x2="10" y2="10">
            <stop stopColor="#FB7185" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FDA4AF" stopOpacity="0.3" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Halo / Think Sparkle */}
        <path d="M60 10 L63 20 L73 23 L63 26 L60 36 L57 26 L47 23 L57 20 Z" fill="#FBBF24" />
        <circle cx="85" cy="24" r="3" fill="#38BDF8" />
        <circle cx="34" cy="26" r="2.5" fill="#A855F7" />

        {/* Brain Body Outline & Lobes */}
        {/* Shadow */}
        <ellipse cx="60" cy="108" rx="34" ry="7" fill="#000000" fillOpacity="0.12" />

        {/* Main Brain Left and Right Hemispheres */}
        <g filter="url(#softGlow)">
          <path
            d="M60 32
               C48 32, 32 38, 28 50
               C22 54, 20 64, 24 72
               C18 78, 22 90, 32 94
               C40 98, 52 96, 60 92
               C68 96, 80 98, 88 94
               C98 90, 102 78, 96 72
               C100 64, 98 54, 92 50
               C88 38, 72 32, 60 32 Z"
            fill="url(#brainGrad)"
            stroke="#1E293B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Brain Gyri / Folds (Playful friendly swirls) */}
        {/* Left Folds */}
        <path
          d="M34 52 C38 46, 50 48, 54 54 C50 62, 38 64, 32 60"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28 72 C35 70, 44 76, 48 82"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Folds */}
        <path
          d="M86 52 C82 46, 70 48, 66 54 C70 62, 82 64, 88 60"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M92 72 C85 70, 76 76, 72 82"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Center Hemispheric Seam */}
        <path
          d="M60 34 C58 48, 62 76, 60 92"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 1"
          fill="none"
        />

        {/* Friendly Cheeks */}
        <circle cx="36" cy="74" r="5" fill="url(#blushGrad)" />
        <circle cx="84" cy="74" r="5" fill="url(#blushGrad)" />

        {/* Eyes based on expression */}
        {expression === 'wink' ? (
          <>
            {/* Left Eye: Open & Curious */}
            <ellipse cx="44" cy="64" rx="4.5" ry="6" fill="#0F172A" />
            <circle cx="42.5" cy="62" r="2" fill="#FFFFFF" />
            {/* Right Eye: Wink */}
            <path d="M72 65 Q76 60 80 65" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        ) : expression === 'thinking' ? (
          <>
            {/* Eyes looking up curiously */}
            <ellipse cx="44" cy="62" rx="4.5" ry="5.5" fill="#0F172A" />
            <circle cx="43" cy="59" r="2" fill="#FFFFFF" />
            <ellipse cx="76" cy="62" rx="4.5" ry="5.5" fill="#0F172A" />
            <circle cx="75" cy="59" r="2" fill="#FFFFFF" />
            {/* Eyebrow raised */}
            <path d="M72 53 Q77 49 82 54" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            {/* Happy big bright friendly eyes */}
            <ellipse cx="45" cy="64" rx="4.5" ry="6" fill="#0F172A" />
            <circle cx="43.5" cy="61.5" r="2" fill="#FFFFFF" />
            <circle cx="46.5" cy="66" r="1" fill="#FFFFFF" />

            <ellipse cx="75" cy="64" rx="4.5" ry="6" fill="#0F172A" />
            <circle cx="73.5" cy="61.5" r="2" fill="#FFFFFF" />
            <circle cx="76.5" cy="66" r="1" fill="#FFFFFF" />
          </>
        )}

        {/* Glasses Option - Geek Chic / Wise Educator Touch */}
        <path
          d="M36 64 C36 58, 52 58, 52 64 C52 70, 36 70, 36 64 Z"
          stroke="#0D9488"
          strokeWidth="2.5"
          fill="#0D9488"
          fillOpacity="0.1"
        />
        <path
          d="M68 64 C68 58, 84 58, 84 64 C84 70, 68 70, 68 64 Z"
          stroke="#0D9488"
          strokeWidth="2.5"
          fill="#0D9488"
          fillOpacity="0.1"
        />
        <path d="M52 63 Q60 61 68 63" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />

        {/* Big confident Smile */}
        <path
          d="M51 77 Q60 86 69 77"
          stroke="#0F172A"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Smile tongue */}
        <path
          d="M55 81 Q60 85 65 81"
          fill="#FB7185"
        />

        {/* Small Graduation / Thinker Star badge */}
        <polygon points="60,95 62,99 67,99 63,102 65,107 60,104 55,107 57,102 53,99 58,99" fill="#0284C7" />
      </svg>
    </div>
  )
}

