"use client"

import React, { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true)

  const phoneNumber = "919429902012" // Official educator contact
  const message = encodeURIComponent(
    "Hello GritWit Team! I am interested in learning more about the cognitive enrichment programme for my child (Ages 6–9)."
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-stone-800 text-xs font-medium px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200 animate-in fade-in slide-in-from-right-3">
          <span>💬 Have questions for the educator? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with GritWit on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </div>
  )
}
