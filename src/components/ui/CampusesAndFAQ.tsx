import { useState } from 'react'
import { MapPin, ChevronDown, HelpCircle, Navigation } from 'lucide-react'

export function CampusesAndFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const campuses = [
    {
      name: 'Moosapet Campus',
      tag: 'Main Center',
      address:
        '1st Floor, Flat No. 465, Anjaneya Nagar Main Rd, Anjaneya Nagar, AGI Colony, Moosapet, Hyderabad, Telangana 500018',
      phone: '+91 94402 02728',
      badge: 'In-Person & Tournament Hall',
    },
    {
      name: 'KPHB Kukatpally Campus',
      tag: 'Branch Academy',
      address:
        'Door No. 2-23-248, 1st Floor, Plot No. 377, HMT Sathavahana Nagar, Opposite KPHB, Kukatpally, Hyderabad - 500072',
      phone: '+91 86397 99535',
      badge: 'Youth & Advanced Batches',
    },
    {
      name: 'Pragathi Nagar Campus',
      tag: 'Branch Academy',
      address:
        'Plot No. 544, #101 Sri Murali Narayanam Residency, near Peacock Circle, Pragathi Nagar, Hyderabad, Telangana 500090',
      phone: '+91 73307 41123',
      badge: 'Weekend & Kids Training',
    },
    {
      name: 'Global Online Campus',
      tag: 'Worldwide Digital',
      address:
        'Live 1-on-1 and interactive group batches via digital board, screen share, and AI puzzle analysis for students worldwide.',
      phone: '+91 94402 02728',
      badge: 'USA • UK • UAE • SG • IND',
    },
  ]

  const faqs = [
    {
      q: 'Who can join Pratyusha International Chess Academy?',
      a: 'Anyone with a passion for chess! We welcome students of all ages and skill levels, from young beginners (starting age 4) to competitive players aiming for FIDE ratings and corporate executives.',
    },
    {
      q: 'Do you offer both online and offline coaching?',
      a: 'Yes! We provide structured live online coaching for students worldwide and offline classes at our 3 physical campuses in Hyderabad for those who prefer hands-on over-the-board training.',
    },
    {
      q: 'What are the different levels of coaching available?',
      a: 'We offer structured programs at: Beginner Level (fundamentals & openings), Intermediate Level (tactics, middle-game & endgame technique), Advanced Level (grandmaster strategy & tournament prep), One-on-One Coaching (personalized rating progression), Chess for Kids, and Corporate Chess Training.',
    },
    {
      q: 'How do I enroll in a program or book a free trial class?',
      a: 'You can enroll by filling out our online registration form on this page, calling our admissions desk directly at +91 94402 02728, or visiting any of our 3 Hyderabad academies. Our team will schedule an initial diagnostic session to determine the ideal batch for you.',
    },
    {
      q: 'Does PICA conduct tournaments for students?',
      a: 'Yes! We regularly organize the official PICA Tournament (currently concluding the 5th edition) featuring official clock times, arbiter supervision, cash awards, and trophies to build real competitive experience.',
    },
  ]

  return (
    <section id="campuses" className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-10">
      {/* Campuses Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Our Centers & Online Academy</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight mb-4">
          3 Hyderabad Campuses + Global Online
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Conveniently located physical centers in Moosapet, Kukatpally, and Pragathi Nagar, equipped with tournament boards, chess clocks, and grandmaster study materials.
        </p>
      </div>

      {/* 4 Campuses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {campuses.map((camp, idx) => (
          <div
            key={idx}
            className="glass-panel-interactive rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-amber-400/40"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                  {camp.tag}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">{camp.badge}</span>
              </div>

              <h3 className="text-lg font-bold text-white font-display mb-3">
                {camp.name}
              </h3>

              <div className="flex items-start gap-2.5 text-xs text-slate-300 mb-4 leading-relaxed">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{camp.address}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-amber-400 font-bold">{camp.phone}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div id="faq" className="max-w-4xl mx-auto pt-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            Find answers related to enrollment, coaching methods, tournaments, and progress tracking.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-[#151928]/90 border-amber-400/40 shadow-lg'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white font-display">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/5 text-slate-300 transition-transform ${
                      isOpen ? 'rotate-180 bg-amber-400/20 text-amber-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
