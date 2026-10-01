import { useState, useEffect } from 'react'
import { Crown, Menu, X, Phone, Calendar } from 'lucide-react'

interface NavbarProps {
  onNavigate: (sectionId: string) => void
  onFocusLeadership: () => void
}

export function Navbar({ onNavigate, onFocusLeadership }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Why Chess', id: 'why-chess' },
    { label: 'WGM Pratyusha', id: 'founder', action: onFocusLeadership },
    { label: 'Programs', id: 'programs' },
    { label: 'Winnings & Stories', id: 'winnings' },
    { label: 'Tournaments', id: 'achievements' },
    { label: 'Campuses', id: 'campuses' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleItemClick = (item: { label: string; id: string; action?: () => void }) => {
    setMobileMenuOpen(false)
    if (item.action) {
      item.action()
    }
    onNavigate(item.id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/92 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#08080a]/85 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1e2235] to-[#0c0e18] border border-amber-400/40 flex items-center justify-center relative shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:border-amber-400 transition-all shrink-0">
            <Crown className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-wider font-display text-white">PICA</span>
              <span className="text-amber-400 font-extrabold text-lg">.</span>
            </div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.14em] text-slate-300 uppercase font-semibold whitespace-nowrap">
              Pratyusha Chess Academy
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 glass-panel px-3 xl:px-4 py-1.5 rounded-full border border-white/10 shrink-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="px-2.5 xl:px-3.5 py-1.5 text-[11px] xl:text-xs uppercase tracking-wider text-slate-200 hover:text-amber-300 font-semibold transition-colors rounded-full hover:bg-white/5 focus:outline-none whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Quick Call */}
          <a
            href="tel:+919440202728"
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-xs text-slate-300 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-mono whitespace-nowrap">+91 94402 02728</span>
          </a>

          {/* Book Trial Class CTA */}
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.45)] hover:scale-105 transition-all focus:outline-none whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Book Free Trial</span>
          </button>
        </div>

        {/* Mobile Header Quick Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+919440202728"
            className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 hover:bg-amber-500/25 transition-colors"
            aria-label="Call PICA Admissions"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm -z-10 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0c12]/98 backdrop-blur-2xl border-b border-white/10 p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="p-2.5 rounded-lg text-slate-200 hover:text-amber-300 hover:bg-white/5 text-sm font-semibold tracking-wide text-left"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+919440202728"
              className="flex items-center justify-center gap-2 py-3 rounded-xl glass-panel text-slate-200 text-xs font-mono"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Admissions: +91 94402 02728</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onNavigate('contact')
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Trial Class</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
