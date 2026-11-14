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
      : 'from-amber-300 via-yellow-200 to-teal-300'

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col justify-between pt-8 sm:pt-12 pb-0">
      {/* Background Image: Maximum photographic clarity & prominent visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.1] saturate-[1.25] scale-100 transform motion-safe:transition-transform duration-1000"
        />
        {/* Lighter, softer directional gradient: covers only the text area on left, keeping the photo vibrant and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-8 sm:mb-10">
        <div className="max-w-3xl space-y-3.5 sm:space-y-4">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-xs font-bold text-slate-200/90 tracking-wide">
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
                    <span className="text-amber-300 font-extrabold">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Badge Pill */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md bg-stone-950/70 border border-amber-300/60 text-amber-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-white">{badge}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-sm">
            {title}{' '}
            {titleHighlight && (
              <span className={`bg-gradient-to-r ${highlightClass} bg-clip-text text-transparent`}>
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-medium max-w-2xl drop-shadow-sm">
            {description}
          </p>

          {/* Quick Stats or Highlights if provided */}
          {stats && stats.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-stone-950/75 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-md"
                >
                  <span className="font-black text-amber-300 text-sm sm:text-base">{s.value}</span>
                  <span className="text-slate-200 font-semibold text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scalloped Arch Wave Trim at bottom transitioning into page white/stone background */}
      <div className="relative z-10 w-full overflow-hidden leading-none">
        <MultiLayerWaves color="#ffffff" />
      </div>
    </section>
  )
}

