import { useState } from 'react'
import {
  Brain,
  GraduationCap,
  Crosshair,
  Compass,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Calendar,
  Sparkles,
} from 'lucide-react'

interface WhyChessSectionProps {
  onExplorePrograms: () => void
  onBookTrial: () => void
}

interface Pillar {
  id: string
  title: string
  subtitle: string
  badge: string
  icon: typeof GraduationCap
  teaser: string
  description: string
  benefits: string[]
}

export function WhyChessSection({ onExplorePrograms, onBookTrial }: WhyChessSectionProps) {
  // Store array of currently expanded pillar IDs
  const [expandedPillars, setExpandedPillars] = useState<string[]>([])

  const cognitivePillars: Pillar[] = [
    {
      id: 'academics',
      title: 'Academic & Mathematical Aptitude',
      subtitle: 'Spatial Geometry & Calculation',
      badge: '+17% STEM & Math Boost',
      icon: GraduationCap,
      teaser: 'Directly accelerates school mathematics, spatial reasoning, and logical deduction.',
      description:
        'Chess directly exercises the parietal and frontal lobes responsible for spatial orientation and numerical calculation. Children who study chess grasp complex arithmetic, coordinate systems, and logical deduction significantly faster in school.',
      benefits: [
        'Accelerates mental math, geometry, and pattern discovery',
        'Strengthens working memory and information processing speed',
        'Encourages structured scientific thinking and hypotheses',
      ],
    },
    {
      id: 'focus',
      title: 'Laser Attention Span & Focus',
      subtitle: 'The Antidote to Digital Distraction',
      badge: 'Deep Work Muscle',
      icon: Crosshair,
      teaser: 'Overcomes micro-screen dopamine loops by cultivating 45–90 mins of deep unbroken focus.',
      description:
        'In an age of instant dopamine and 10-second smartphone clips, chess trains a child to sit calmly, observe the entire board, and maintain unbroken concentration for 45 to 90 minutes. This voluntary deep focus directly elevates study stamina.',
      benefits: [
        'Cuts through digital screen fatigue and restlessness',
        'Trains the mind for high-stakes school and competitive exams',
        'Cultivates voluntary patience and thoroughness over rushed answers',
      ],
    },
    {
      id: 'foresight',
      title: 'Thinking 3 Moves Ahead',
      subtitle: 'Consequence Awareness & Planning',
      badge: 'Strategic Impulse Control',
      icon: Compass,
      teaser: 'Teaches children to evaluate consequences before acting, curbing impulsive decisions.',
      description:
        'Every move in chess has irreversible consequences. There is no undo button. Young players naturally adopt the grandmaster reflex: "Stop, evaluate all responses, calculate risks, and commit." This curbs rash impulsiveness in daily life.',
      benefits: [
        'Transforms impulsive reactions into calculated, wise choices',
        'Teaches proactive planning rather than passive reactivity',
        'Instills personal accountability for every decision made',
      ],
    },
    {
      id: 'resilience',
      title: 'Emotional Resilience & Composure',
      subtitle: 'Grace Under Time Pressure',
      badge: 'Unshakeable Grit',
      icon: ShieldCheck,
      teaser: 'Builds mental poise under the clock and transforms setbacks into analytical breakthroughs.',
      description:
        'Watching the chess clock tick down while calculating a critical defense teaches unshakeable poise. Losing a piece or a game teaches a child that a blunder is simply a puzzle to analyze, not a defeat. They grow into resilient, gracious winners.',
      benefits: [
        'Normalizes setbacks as stepping stones to mastery',
        'Maintains calm heart rate and clear head under tight deadlines',
        'Fosters true sportsmanship, humility, and mental endurance',
      ],
    },
  ]

  const togglePillar = (id: string) => {
    setExpandedPillars((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    if (expandedPillars.length === cognitivePillars.length) {
      setExpandedPillars([])
    } else {
      setExpandedPillars(cognitivePillars.map((p) => p.id))
    }
  }

  return (
    <section id="why-chess" className="relative py-28 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Brain className="w-3.5 h-3.5 text-amber-400" />
            <span>The Lifelong Cognitive Advantage // Beyond The 64 Squares</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Why Chess? The Secret Weapon for{' '}
            <span className="text-gold-gradient font-serif italic font-semibold sm:font-bold">
              Academic & Life Success
            </span>
            .
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Chess is high-performance training for the developing brain. Explore the 4 core pillars below—click any pillar to reveal its academic research and cognitive benefits.
          </p>
        </div>

        {/* Quick Expand All Toggle */}
        <button
          onClick={toggleAll}
          className="self-start md:self-auto px-4 py-2 rounded-full glass-panel hover:bg-white/10 text-xs font-mono text-amber-300 border border-white/15 transition-all flex items-center gap-2 focus:outline-none shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {expandedPillars.length === cognitivePillars.length ? 'Collapse All' : 'Expand All Insights'}
          </span>
        </button>
      </div>

      {/* 4 Clean Interactive Headings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cognitivePillars.map((pillar) => {
          const Icon = pillar.icon
          const isExpanded = expandedPillars.includes(pillar.id)

          return (
            <div
              key={pillar.id}
              onClick={() => togglePillar(pillar.id)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden group select-none ${
                isExpanded
                  ? 'bg-[#141829]/95 border-amber-400/50 shadow-[0_10px_35px_rgba(245,158,11,0.15)]'
                  : 'glass-panel-interactive border-white/10 hover:border-amber-400/40 hover:bg-white/[0.04]'
              }`}
            >
              {/* Card Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl transition-all pointer-events-none ${
                  isExpanded ? 'bg-amber-500/20' : 'bg-amber-500/5 group-hover:bg-amber-500/15'
                }`}
              />

              <div>
                {/* Top Bar with Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                      isExpanded
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                        : 'bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:scale-105 group-hover:bg-amber-500/25'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                    {pillar.badge}
                  </span>
                </div>

                {/* Subtitle / Category */}
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1.5 font-mono">
                  {pillar.subtitle}
                </div>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>

                {/* Teaser text (visible when closed) */}
                {!isExpanded && (
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                    {pillar.teaser}
                  </p>
                )}

                {/* Expanded Details (Revealed on Click) */}
                {isExpanded && (
                  <div className="pt-4 border-t border-white/10 animate-in fade-in duration-300">
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5">
                      {pillar.description}
                    </p>

                    <div className="bg-black/35 rounded-xl p-4 border border-white/5 space-y-2.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
                        Key Developmental Benefits:
                      </div>
                      {pillar.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Interactive Expand Indicator */}
              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs font-medium">
                <span className={isExpanded ? 'text-amber-300 font-semibold' : 'text-slate-400 group-hover:text-amber-300 transition-colors'}>
                  {isExpanded ? 'Click to collapse insight' : 'Click to know more'}
                </span>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isExpanded
                      ? 'rotate-180 bg-amber-400 text-slate-950 font-bold'
                      : 'bg-white/5 text-amber-400 group-hover:bg-amber-500/20'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Inspirational Grandmaster Quote Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden border border-amber-400/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
            <span>PHILOSOPHY FROM OUR FOUNDER</span>
            <span className="text-white/40">•</span>
            <span className="text-slate-300">WGM BODDA PRATYUSHA</span>
          </div>
          <p className="text-slate-100 text-sm sm:text-base md:text-lg italic font-serif leading-relaxed">
            "In school, children are often taught <span className="text-white font-bold not-italic">what</span> to think. Over the chessboard, children learn <span className="text-amber-300 font-bold not-italic">how</span> to think independently under pressure. That single distinction shapes their confidence for the rest of their lives."
          </p>
        </div>

        {/* Action CTAs leading seamlessly into Programs & Trial */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={onExplorePrograms}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 focus:outline-none"
          >
            <span>Explore Training Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBookTrial}
            className="px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 font-semibold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center justify-center gap-2 focus:outline-none"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Book Free Diagnostic Class</span>
          </button>
        </div>
      </div>
    </section>
  )
}
