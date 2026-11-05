import React from 'react'
import Link from 'next/link'

export function GritwitLogo({ 
  variant = 'default',
  className = '' 
}: { 
  variant?: 'default' | 'white' | 'compact'
  className?: string 
}) {
  const isWhite = variant === 'white'

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Brand Logo Emblem */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 bg-white p-0.5 shrink-0 group-hover:scale-105 transition-transform duration-300">
        <img
          src="/gritwit/logo.png"
          alt="GritWit Logo Emblem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`text-2xl font-black tracking-tight ${isWhite ? 'text-white' : 'text-slate-900'}`}>
            Grit<span className="text-teal-600">Wit</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-400 ml-1 inline-block animate-pulse" />
        </div>
        {variant !== 'compact' && (
          <span className={`text-[10px] tracking-wider font-semibold uppercase ${isWhite ? 'text-slate-300' : 'text-slate-500'}`}>
            Cognitive Enrichment
          </span>
        )}
      </div>
    </Link>
  )
}
