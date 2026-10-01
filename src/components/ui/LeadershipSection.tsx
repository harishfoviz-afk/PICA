import { useState } from 'react'
import {
  Crown,
  ChevronDown,
  Award,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
  CheckCircle,
} from 'lucide-react'

interface LeadershipSectionProps {
  onToggleQueenFocus?: () => void
  isQueenFocused?: boolean
  onBookSession: () => void
}

export function LeadershipSection({
  onBookSession,
}: LeadershipSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const milestones = [
    {
      title: 'Historical Woman Grandmaster (WGM) Title',
      subtitle: 'Third Telugu Woman in Chess History',
      icon: Crown,
      summary:
        'In 2020, Bodda Pratyusha made chess history by becoming the third Telugu woman ever to earn the prestigious Woman Grandmaster (WGM) title, following legends Koneru Humpy (2001) and Dronavalli Harika (2004).',
      details: [
        'Conferred Woman Grandmaster (WGM) title by FIDE in 2020',
        'Peak FIDE standard rating: 2328',
        'Represented India across premier international Olympiads, opens, and invitationals',
      ],
    },
    {
      title: 'National & International Championship Honors',
      subtitle: 'From Under-17 Champion to International Master',
      icon: Award,
      summary:
        'A prodigious journey from Andhra Pradesh: crowned Indian Girls’ Under-17 Champion in 2012, followed by earning the Woman International Master (WIM) title in April 2015.',
      details: [
        'Indian Girls’ Under-17 National Champion (2012)',
        'Woman International Master (WIM) title achieved in April 2015',
        'Multiple podium finishes across Asian and Commonwealth youth tournaments',
      ],
    },
    {
      title: 'PICA Academy Leadership & SM Raviteja Co-Guidance',
      subtitle: 'Institutional Coaching Excellence',
      icon: TrendingUp,
      summary:
        'Under the joint stewardship of Chairman SM Raviteja and WGM Bodda Pratyusha, PICA has established 3 state-of-the-art academy campuses in Hyderabad, alongside global online training.',
      details: [
        'Curriculum designed and personally supervised by active Woman Grandmaster',
        'Over hundreds of active students across India, USA, UK, UAE, and Singapore',
        'Systematic age-category tournament preparation for state and national selections',
      ],
    },
    {
      title: 'Holistic Mind Development & Strategic Pedagogy',
      subtitle: 'Beyond the 64 Squares',
      icon: BookOpen,
      summary:
        'Believing chess is a life-shaping discipline that instills lifelong emotional composure, deep analytical concentration, and decisive decision-making.',
      details: [
        'Cognitive enhancement protocols focusing on memory and pattern recall',
        'Psychological resilience and clock-pressure management techniques',
        'Corporate strategic workshops linking chess tactics to executive leadership',
      ],
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="founder" className="relative py-28 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto z-10">
      {/* Section Header: Elevated slightly up for perfect horizontal alignment between both blocks below */}
      <div className="mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Meet Our Founder & Grandmaster</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display tracking-tight leading-tight">
              WGM Bodda Pratyusha
            </h2>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-400 mt-2 font-mono">
              Woman Grandmaster (WGM) // FIDE Standard Rating 2328
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/25 w-fit">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>3RD TELUGU WOMAN GRANDMASTER IN CHESS HISTORY</span>
          </div>
        </div>
      </div>

      {/* Two Balanced Blocks: Perfectly in line against each other */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Block: Founder Photo & Profile Dossier Card */}
        <div className="lg:col-span-5 glass-panel-elevated rounded-3xl overflow-hidden border border-amber-400/30 flex flex-col justify-between shadow-2xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:flex-1 bg-black/60 overflow-hidden min-h-[320px] sm:min-h-[380px]">
            <img
              src="./images/pratyusha.jpg"
              alt="WGM Bodda Pratyusha - Founder of PICA"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-85" />

            {/* Title Overlay Badge inside photo */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    Bodda Pratyusha
                  </div>
                  <div className="text-[11px] text-amber-300 font-mono">
                    Woman Grandmaster (WGM)
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-mono font-bold text-amber-400">2328</div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400">FIDE Rating</div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#0d101b]/95 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Born in Tuni, East Godavari, Andhra Pradesh. The 3rd Telugu woman in history to earn the Woman Grandmaster title, following Koneru Humpy and Dronavalli Harika.
          </div>
        </div>

        {/* Right Block: Expandable Milestones & Honors Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel-elevated rounded-3xl p-5 sm:p-7 md:p-8 border border-white/15 relative h-full flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block mb-1">
                  OFFICIAL PROFILE & HONORS
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                  Grandmaster Journey & Credentials
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Crown className="w-3.5 h-3.5" />
                <span>WGM TITLE 2020</span>
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {milestones.map((item, idx) => {
                const isExpanded = expandedIndex === idx
                const Icon = item.icon

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isExpanded
                        ? 'bg-[#151928]/90 border-amber-400/50 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
                        : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isExpanded
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                              : 'bg-white/5 text-amber-400 border border-white/10'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white font-display group-hover:text-amber-200">
                            {item.title}
                          </h4>
                          <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/5 text-slate-300 transition-transform duration-300 shrink-0 ${
                          isExpanded ? 'rotate-180 bg-amber-400/20 text-amber-300' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable details */}
                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-white/5 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {item.summary}
                        </p>

                        <div className="bg-black/40 rounded-xl p-3.5 sm:p-4 border border-white/5">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
                            Key Highlights:
                          </div>
                          <ul className="space-y-2">
                            {item.details.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-200">
                                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Dossier footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span className="font-mono text-[11px]">
                Under Leadership of SM Raviteja & WGM Bodda Pratyusha
              </span>
              <button
                onClick={onBookSession}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors"
              >
                <span>Request Mentorship Session</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Full-Width Founder's Quote Block (Image 1) */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-8 md:p-10 rounded-3xl glass-panel-elevated relative overflow-hidden border border-amber-400/30 shadow-2xl">
        <div className="absolute top-2 right-6 text-8xl md:text-9xl text-amber-400/10 font-serif select-none pointer-events-none">
          “
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 sm:mb-4">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>FOUNDER'S PHILOSOPHY & VISION</span>
          </div>
          <p className="text-white text-base sm:text-lg md:text-2xl italic leading-relaxed font-serif">
            "Chess is more than just a game—it's a powerful tool to enhance critical thinking, strategic planning, and decision-making skills. Whether you're a beginner or an advanced player, our academy provides expert coaching to help you excel at every level."
          </p>
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm text-amber-300 font-mono">
            <span className="font-bold tracking-wider">✦ WGM BODDA PRATYUSHA</span>
            <span className="text-slate-300">FOUNDER, PICA // THIRD TELUGU WOMAN GRANDMASTER</span>
          </div>
        </div>
      </div>
    </section>
  )
}
