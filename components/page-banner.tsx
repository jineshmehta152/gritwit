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
      ? 'from-amber-600 via-orange-500 to-amber-700'
      : themeColor === 'emerald'
      ? 'from-teal-600 via-emerald-600 to-amber-600'
      : themeColor === 'cyan'
      ? 'from-teal-600 via-cyan-600 to-amber-600'
      : 'from-teal-700 via-amber-600 to-orange-600'

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50/90 via-orange-50/30 to-teal-50/50 text-stone-900 min-h-[300px] sm:min-h-[350px] lg:min-h-[390px] flex flex-col justify-between pt-8 sm:pt-12 pb-0 border-b border-amber-100/60">
      {/* Background Image with warm bright sunny overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 filter contrast-[1.05] saturate-[1.2] scale-100 transform motion-safe:transition-transform duration-1000"
        />
        {/* Soft, warm, sunny daylight gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 via-amber-50/80 to-amber-50/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-amber-100/30" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-300/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-8 sm:mb-10">
        <div className="max-w-3xl space-y-3.5 sm:space-y-4">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-xs font-bold text-stone-600 tracking-wide">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-amber-700 transition-colors flex items-center gap-1"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-amber-800 font-extrabold">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Badge Pill */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-sm bg-white/90 border border-amber-300 text-stone-900 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{badge}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
            {title}{' '}
            {titleHighlight && (
              <span className={`bg-gradient-to-r ${highlightClass} bg-clip-text text-transparent`}>
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium max-w-2xl">
            {description}
          </p>

          {/* Quick Stats or Highlights if provided */}
          {stats && stats.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-md border border-amber-200/90 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-sm"
                >
                  <span className="font-black text-amber-700 text-sm sm:text-base">{s.value}</span>
                  <span className="text-stone-700 font-semibold text-xs">{s.label}</span>
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

