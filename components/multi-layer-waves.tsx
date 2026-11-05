import React from 'react'

export function ScallopWaves({ 
  position = "bottom",
  color = "#ffffff",
  className = ""
}: { 
  position?: "top" | "bottom"
  color?: string
  className?: string
}) {
  const isTop = position === "top"

  // 32 clean consecutive rounded arches across 1440 width:
  // Each arch is 45px wide.
  const count = 32
  const w = 1440 / count // 45px

  // Bottom of dark section: White arches pointing UP into the dark background:
  let bottomArchD = `M 0 26 `
  for (let i = 0; i < count; i++) {
    const x1 = (i + 1) * w
    bottomArchD += `A 22.5 16 0 0 1 ${x1} 26 `
  }
  const bottomPath = `${bottomArchD} L 1440 28 L 0 28 Z`

  // Top of dark section (e.g. Footer top):
  // The dark footer color forms convex semicircles/arches pointing UPWARD into the light section above:
  let topArchD = `M 0 26 `
  for (let i = 0; i < count; i++) {
    const x1 = (i + 1) * w
    // Arches curving UPWARD from y=26 to y=10
    topArchD += `A 22.5 16 0 0 1 ${x1} 26 `
  }
  // Fill downward into the dark footer body (from y=26 down to y=28)
  const topPath = `${topArchD} L 1440 28 L 0 28 Z`

  return (
    <div 
      className={`w-full overflow-hidden leading-none pointer-events-none select-none relative block ${className}`}
      style={{ marginTop: isTop ? '-2px' : '0', marginBottom: isTop ? '0' : '-1px' }}
    >
      <svg 
        className="block w-full h-3 sm:h-5 md:h-6" 
        viewBox="0 0 1440 28" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill={color}
          d={isTop ? topPath : bottomPath}
        />
      </svg>
    </div>
  )
}

export const MultiLayerWaves = ScallopWaves
