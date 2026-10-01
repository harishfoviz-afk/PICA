import { ArrowRight, ChevronDown, Award, Globe, Users, Trophy } from 'lucide-react'

interface HeroSectionProps {
  onExplorePrograms: () => void
  onFocusLeadership: () => void
}

export function HeroSection({ onExplorePrograms, onFocusLeadership }: HeroSectionProps) {
  const coreFeatures = [
    {
      title: 'Grandmaster Guidance',
      desc: 'Mentorship led by WGM Bodda Pratyusha & seasoned FIDE masters',
      icon: Award,
    },
    {
      title: 'Structured Programs',
      desc: 'Beginner, Intermediate, Advanced, 1-on-1 & Kids specialized courses',
      icon: Users,
    },
    {
      title: 'Online & 3 Campuses',
      desc: 'Global online training + Moosapet, KPHB Kukatpally & Pragathi Nagar',
      icon: Globe,
    },
    {
      title: 'Tournament Success',
      desc: 'Consistent podium finishes across ACF, Danne & National tournaments',
      icon: Trophy,
    },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto z-10">
      {/* Top Hero Body */}
      <div className="flex-1 flex flex-col justify-center max-w-3xl pt-6 md:pt-12 relative">
        {/* Soft atmospheric dark contrast halo behind text copy */}
        <div className="absolute -inset-x-8 -inset-y-12 bg-gradient-to-r from-[#08080a]/95 via-[#08080a]/70 to-transparent blur-3xl -z-10 pointer-events-none rounded-3xl" />

        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-5 sm:mb-6 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Pratyusha Chess Academy // Hyderabad & Online</span>
        </div>

        {/* Primary Headline directly from pica.co.in with high contrast */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white font-display leading-[1.12] mb-5 sm:mb-6">
          Master the Game,{' '}
          <br className="hidden sm:inline" />
          <span className="text-gold-gradient font-serif italic font-semibold sm:font-bold tracking-normal inline-block">
            Master the Mind
          </span>
          <span className="text-amber-400">.</span>
        </h1>

        {/* Sub-headline from pica.co.in */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl mb-7 sm:mb-8">
          Welcome to <strong className="text-white font-bold">Pratyusha International Chess Academy</strong>, where passion meets grandmaster strategy. Founded by Woman Grandmaster (WGM) Bodda Pratyusha, our expert coaching helps students sharpen critical thinking, think ahead, and dominate the board.
        </p>

        {/* Action Buttons: Full width stack on small mobile, row on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <button
            onClick={onExplorePrograms}
            className="group justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:scale-105 transition-all flex items-center gap-2.5 focus:outline-none"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onFocusLeadership}
            className="justify-center px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2 focus:outline-none"
          >
            <span>Meet Founder (WGM Bodda Pratyusha)</span>
            <span className="text-amber-400">✦</span>
          </button>
        </div>
      </div>

      {/* Hero Bottom: Core Features (replaces arbitrary metric numbers) */}
      <div className="pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFeatures.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3.5 hover:border-amber-400/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {feat.title}
                  </div>
                  <div className="text-xs text-slate-300 leading-snug mt-1">
                    {feat.desc}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="flex justify-center pt-8">
        <button
          onClick={onExplorePrograms}
          className="flex flex-col items-center gap-1 text-[10px] tracking-[0.25em] text-slate-400 uppercase hover:text-amber-300 transition-colors focus:outline-none"
        >
          <span>Scroll to Explore Academy</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </button>
      </div>
    </section>
  )
}
