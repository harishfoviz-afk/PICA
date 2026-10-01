import { useState } from 'react'
import {
  BookOpen,
  Crosshair,
  Trophy,
  UserCheck,
  Smile,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

interface ProgramsSectionProps {
  onEnroll: (programName: string) => void
}

export function ProgramsSection({ onEnroll }: ProgramsSectionProps) {
  const [activeLevel, setActiveLevel] = useState<string | null>(null)

  const programs = [
    {
      id: 'beginner',
      title: 'Beginner Level',
      subtitle: 'Build a Rock-Solid Foundation',
      icon: BookOpen,
      tag: 'Foundation',
      description:
        'Learn the fundamentals of chess, including piece movement, basic strategies, coordinate reading, and opening principles. Perfect for those new to the game.',
      highlights: [
        'Piece movements & special rules (Castling, En Passant)',
        'Core opening principles & king safety',
        'Fundamental checkmate patterns & basic endgames',
        'Interactive puzzles & beginner sparring',
      ],
    },
    {
      id: 'intermediate',
      title: 'Intermediate Level',
      subtitle: 'Tactical Play & Calculation',
      icon: Crosshair,
      tag: 'Tactics & Middle-game',
      description:
        'Improve your tactical play, opening repertoires, and endgames. Learn advanced strategies, pattern recognition, and calculation techniques to sharpen your gameplay.',
      highlights: [
        'Tactical motifs: Forks, Pins, Skewers & Discovered Attacks',
        'Middle-game pawn structures & piece coordination',
        'Essential Rook & Pawn endgame technique',
        'Game analysis to eliminate tactical blunders',
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Level',
      subtitle: 'Mastery & Tournament Readiness',
      icon: Trophy,
      tag: 'Grandmaster Preparation',
      description:
        'Master high-level strategies, deep positional understanding, and psychological aspects of the game. Get tournament-ready with expert guidance and game analysis.',
      highlights: [
        'Deep positional play & prophylactic thinking',
        'Comprehensive tournament opening repertoires',
        'Clock management & competitive psychology',
        'Personalized master game debriefs',
      ],
    },
    {
      id: 'one-on-one',
      title: 'One-on-One Coaching',
      subtitle: 'Personalized Grandmaster Mentorship',
      icon: UserCheck,
      tag: 'Personalized Focus',
      description:
        'Personalized training sessions with expert mentors, focusing on individual strengths and weaknesses. Perfect for serious players aiming for rapid FIDE rating improvement.',
      highlights: [
        'Customized curriculum tailored to your playstyle',
        'Deep diagnostic of recent rated tournament games',
        'Direct 1-on-1 sparring & real-time move feedback',
        'Targeted rating progression roadmap',
      ],
    },
    {
      id: 'kids',
      title: 'Chess for Kids',
      subtitle: 'Fun, Interactive Mind Growth',
      icon: Smile,
      tag: 'Ages 4 - 14',
      description:
        'Specially designed programs for young minds, focusing on interactive learning, puzzle-solving, and fun gameplay to develop logical thinking and concentration.',
      highlights: [
        'Gamified learning modules & engaging animations',
        'Memory boost, patience, and focus building',
        'Friendly peer practice tournaments & badges',
        'Confidence building in a supportive environment',
      ],
    },
    {
      id: 'corporate',
      title: 'Corporate Chess Training',
      subtitle: 'Executive Decision-Making',
      icon: Briefcase,
      tag: 'Leadership & Strategy',
      description:
        'Special sessions for professionals and organizations to enhance decision-making, strategic thinking, crisis management, and problem-solving skills through chess.',
      highlights: [
        'Game theory applications to business leadership',
        'Risk assessment & anticipating competitor moves',
        'Team-building chess tournaments & workshops',
        'Composure under high-pressure time clocks',
      ],
    },
  ]

  return (
    <section id="programs" className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-10">
      {/* Section Header directly reflecting pica.co.in */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Learn, Train & Excel in Chess</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight mb-4">
          Our Comprehensive Training Programs
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          At Pratyusha International Chess Academy, we provide structured learning pathways tailored for every ambition—from young kids learning their first pawn move to tournament champions aiming for FIDE titles.
        </p>
      </div>

      {/* 6-Card Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {programs.map((prog) => {
          const Icon = prog.icon
          const isSelected = activeLevel === prog.id

          return (
            <div
              key={prog.id}
              onMouseEnter={() => setActiveLevel(prog.id)}
              onMouseLeave={() => setActiveLevel(null)}
              className={`glass-panel-interactive rounded-2xl p-7 flex flex-col justify-between group border relative overflow-hidden transition-all duration-300 ${
                isSelected
                  ? 'border-amber-400/50 bg-[#141828]/95 shadow-[0_10px_35px_rgba(245,158,11,0.15)]'
                  : 'border-white/10'
              }`}
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all" />

              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/25 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {prog.tag}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                  {prog.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-amber-200 transition-colors">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Curriculum Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                  {prog.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onEnroll(prog.title)}
                className="w-full mt-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-amber-300 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg focus:outline-none"
              >
                <span>Enroll in {prog.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
