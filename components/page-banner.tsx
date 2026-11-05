import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { MultiLayerWaves } from '@/components/multi-layer-waves'

interface PageBannerProps {
  badge?: string
  title: string
  titleHighlight?: string
  description: string
  bgImage: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  stats?: Array<{ label: string; value: string }>
  themeColor?: 'teal' | 'amber' | 'emerald' | 'cyan'
}

export function PageBanner({
  badge,
  title,
  titleHighlight,
  description,
  bgImage,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  stats,
  themeColor = 'teal',
}: PageBannerProps) {
  const highlightClass =
    themeColor === 'amber'
      ? 'from-amber-300 via-amber-200 to-yellow-400'
      : themeColor === 'emerald'
      ? 'from-emerald-300 via-teal-200 to-amber-300'
      : themeColor === 'cyan'
      ? 'from-cyan-300 via-sky-200 to-amber-300'
      : 'from-teal-300 via-amber-200 to-amber-400'

  const badgeBorder =
    themeColor === 'amber'
      ? 'border-amber-400/40 text-amber-300 bg-amber-950/60'
      : 'border-teal-400/40 text-amber-300 bg-slate-900/80'

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between pt-10 sm:pt-14 pb-0">
      {/* Background Image with layered cinematic overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] saturate-[1.15] scale-100 transform motion-safe:transition-transform duration-1000"
        />
        {/* Balanced gradients: keeps photography vivid & clearly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-10 sm:mb-12">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300/90 tracking-wide">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-amber-300 transition-colors flex items-center gap-1"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-amber-300/90">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Badge Pill */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md backdrop-blur-md border border-slate-700/80">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-slate-100">{badge}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            {title}{' '}
            {titleHighlight && (
              <span className={`bg-gradient-to-r ${highlightClass} bg-clip-text text-transparent`}>
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          {/* Quick Stats or Highlights if provided */}
          {stats && stats.length > 0 && (
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/85 backdrop-blur-md border border-slate-700/70 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-sm"
                >
                  <span className="font-black text-amber-300 text-sm sm:text-base">{s.value}</span>
                  <span className="text-slate-300 font-medium text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scalloped Arch Wave Trim at bottom transitioning into page white/slate background */}
      <div className="relative z-10 w-full overflow-hidden leading-none">
        <MultiLayerWaves color="#ffffff" />
      </div>
    </section>
  )
}

