import { useState } from 'react'
import { Crown, ArrowUp, Phone, Mail, MapPin, Check } from 'lucide-react'

interface FooterProps {
  onNavigate: (sectionId: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterStatus(true)
      setTimeout(() => {
        setNewsletterEmail('')
        setNewsletterStatus(false)
      }, 4000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 pt-16 pb-12 px-6 md:px-10 z-10 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">
          {/* Col 1: Brand & Founder Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e2235] to-[#0c0e18] border border-amber-400/40 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-wider font-display text-white">
                  PICA<span className="text-amber-400">.</span>
                </div>
                <p className="text-[10px] tracking-[0.16em] text-slate-400 uppercase font-semibold">
                  Pratyusha Chess Academy
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              At Pratyusha International Chess Academy, we are committed to nurturing the next generation of chess champions. Under the leadership of SM Raviteja and the expert mentorship of WGM Bodda Pratyusha.
            </p>

            <div className="text-xs text-amber-400/90 font-mono">
              ★ FIDE Standard Rated Mentorship
            </div>
          </div>

          {/* Col 2: Programs Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Academy Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Beginner Level Fundamentals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Intermediate Tactical Play
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Advanced Tournament Mastery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  One-on-One Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Chess for Kids (Ages 4-14)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Corporate Strategic Workshops
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hyderabad Campuses */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Campuses & Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Moosapet, KPHB Kukatpally & Pragathi Nagar, Hyderabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+91 94402 02728 / 86397 99535</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:picamakeyourmovenow@gmail.com" className="hover:text-amber-300">
                  picamakeyourmovenow@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Tournament Updates */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Tournament Newsletter
            </h4>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Subscribe to receive upcoming PICA tournament schedules, tactical chess puzzles, and free masterclass alerts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="parent@gmail.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-md bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
                >
                  {newsletterStatus ? <Check className="w-3.5 h-3.5" /> : 'Join'}
                </button>
              </div>
              {newsletterStatus && (
                <div className="text-[11px] text-emerald-400 font-mono">
                  ✓ Successfully subscribed to PICA tournament updates.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Pratyusha International Chess Academy</strong> (PICA). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('founder')}
              className="hover:text-amber-300 transition-colors"
            >
              WGM Bodda Pratyusha
            </button>
            <button
              onClick={() => onNavigate('campuses')}
              className="hover:text-amber-300 transition-colors"
            >
              Hyderabad Centers
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
