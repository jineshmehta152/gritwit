"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GritwitLogo } from "./gritwit-logo"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react"
import { BookAssessmentModal } from "./book-assessment-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Exactly 5 pages requested:
  // 1. Home ("/")
  // 2. About ("/about")
  // 3. Programs ("/program")
  // 4. Payments ("/payments")
  // 5. Contact ("/contact")
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/program", label: "Programs" },
    { href: "/payments", label: "Enrolment" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "mx-auto max-w-7xl mt-2 px-4 sm:px-6 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-stone-200/80"
            : "px-4 sm:px-8 py-3.5 bg-white/95 border-b border-stone-100"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <GritwitLogo />

          {/* Desktop Nav: 5 Pages */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active
                      ? "text-teal-700 bg-teal-50 font-bold shadow-sm"
                      : "text-stone-700 hover:text-stone-950 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Right Button on Navbar: Book Assessment (Opens Modal) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="sm"
              className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-black rounded-full px-5 py-2 shadow-sm hover:shadow transition-all group flex items-center gap-2 border border-amber-300/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
              <span>Book Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="sm" 
              className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-black text-xs px-3.5 py-1.5 h-8 rounded-full"
            >
              Book Assessment
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-stone-100 flex flex-col gap-1 pb-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    active
                      ? "text-teal-700 bg-teal-50 font-bold"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />}
                </Link>
              )
            })}

            <div className="mt-2 pt-2 border-t border-stone-100 flex flex-col gap-2">
              <Button
                onClick={() => {
                  setIsOpen(false)
                  setIsModalOpen(true)
                }}
                className="w-full text-center py-2.5 text-sm font-black text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Book Assessment</span>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* 5-Step Book Assessment Modal */}
      <BookAssessmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  )
}
