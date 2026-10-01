import { useState } from 'react'
import { Trophy, Star, Quote, ChevronRight, CheckCircle2, Medal, Users, Award, X } from 'lucide-react'

export function AchievementsSection() {
  const [activeTab, setActiveTab] = useState<'tournaments' | 'reviews'>('tournaments')

  const tournaments = [
    {
      name: '5th PICA Annual Championship',
      location: 'Hyderabad, India',
      category: 'Academy Open Championship',
      summary:
        'Concluded with a grand Prize Distribution Ceremony filled with proud parents and young champions showcasing sharp tactics and sportsmanship.',
      highlights: [
        'Over 200+ budding talents competing across age brackets',
        'Official FIDE clock rules and arbiter-supervised rounds',
        'Cash prizes, trophies, and grandmaster masterclass passes awarded',
      ],
    },
    {
      name: 'ACF Chess Tournament',
      location: 'National Circuit',
      category: 'Youth FIDE Ranked',
      summary:
        'PICA students dominated podium positions with Jithesh finishing 5th place in the Under-12 category, alongside multiple top-10 finishes.',
      highlights: [
        'Multiple perfect score rounds recorded by PICA proteges',
        'Jithesh (Under-12) secured 5th place finish',
        'Significant FIDE rating escalations across participants',
      ],
    },
    {
      name: 'Danne Chess Tournament',
      location: 'Regional Youth Open',
      category: 'Rapid & Classical',
      summary:
        'Stellar performance with students securing 1st, 2nd, and 3rd podium finishes, reflecting hard work, discipline, and tactical foresight.',
      highlights: [
        'Gold & Silver medals in Under-9 and Under-11 brackets',
        'Undefeated streaks throughout opening and middle games',
        'Exceptional endgame conversion displayed by PICA students',
      ],
    },
    {
      name: 'V Pro Rapid & McNair Chess Tournaments',
      location: 'State & National Championship',
      category: 'Rapid Championship',
      summary:
        'PICA young talents took top positions across categories demonstrating tactical discipline and calm composure under time pressure.',
      highlights: [
        'Top 7 finishes secured across all age divisions',
        'Consistently outperforming higher-rated opponents',
        'Mastery in clock management and tactical counter-attacks',
      ],
    },
  ]

  const reviews = [
    {
      name: 'Arjun Kasam',
      role: 'PICA Student',
      text: 'PICA has transformed my approach to chess. The training, strategies, and personalized coaching have helped me achieve new milestones in my career and win competitive tournaments.',
      rating: 5,
    },
    {
      name: 'Advik Reddy’s Parent',
      role: 'Parent Review',
      text: 'My child’s progress at PICA has been phenomenal. The dedication of the coaches and the competitive environment have helped them grow into a confident, disciplined player.',
      rating: 5,
    },
    {
      name: 'Karthikeya',
      role: 'PICA Student',
      text: 'Under the leadership of SM Raviteja and the expert guidance of WGM Bodda Pratyusha, PICA is truly shaping future grandmasters. The academy’s dedication to excellence is commendable.',
      rating: 5,
    },
  ]

  const CHAMPIONS_DATA = [
    {
      name: 'Jithesh',
      title: 'ACF Under-12 National Trophy Winner',
      achievement: 'Secured 5th Place in the Under-12 Category at the prestigious ACF All India FIDE Rated Tournament with exceptional tactical endgame play.',
      badge: 'ACF Podium 5th',
      category: 'Under-12 Classical & Rapid',
      quote: 'Trained under WGM Bodda Pratyusha with tailored opening preparation against 1600+ rated opponents.',
    },
    {
      name: 'Poojith Ayan',
      title: 'Regional Rapid Circuit Champion',
      achievement: 'Delivered an outstanding tournament score across regional youth rapid meets, displaying sharp tactical combinations and composure.',
      badge: '1st Place Rapid',
      category: 'Junior Open Circuit',
      quote: 'Consistently outplaying senior competitors through disciplined middle-game calculation.',
    },
    {
      name: 'Yuvaan',
      title: 'Under-9 Youth Prodigy',
      achievement: 'Consecutive undefeated tournament streaks with bold piece coordination and clean checkmating conversions.',
      badge: 'Youth Gold Medal',
      category: 'Under-9 Category',
      quote: 'Demonstrates remarkable clock management and emotional composure under pressure.',
    },
    {
      name: 'Chinmay',
      title: 'Danne Regional Tournament Star',
      achievement: 'Podium 2nd Place finish in the Danne Youth Rapid tournament, winning 5 consecutive decisive rounds.',
      badge: 'Danne Silver Medal',
      category: 'Rapid Championship',
      quote: 'Mastering king and pawn endgames with grandmaster precision.',
    },
    {
      name: 'Deekshith',
      title: 'V Pro Rapid Top Contender',
      achievement: 'Top 3 finish across highly competitive open age brackets with aggressive defensive counters and positional play.',
      badge: 'V Pro Podium',
      category: 'Intermediate Rapid',
      quote: 'Unshakeable focus during time scrambles under 2 minutes.',
    },
    {
      name: 'Dorpogu',
      title: '5th PICA Tournament Top Scorer',
      achievement: 'Dominated the 5th PICA Championship junior bracket with 5 wins out of 6 rounds, earning trophy accolades.',
      badge: 'PICA 5th Trophy',
      category: 'Academy Open',
      quote: 'Sharp tactical vision nurtured in PICA Hyderabad campus batches.',
    },
    {
      name: 'Driti',
      title: 'Girls Youth Rapid Champion',
      achievement: 'Gold Medal in the State Girls U-10 Rapid Meet with flawless tactical combinations and King safety awareness.',
      badge: 'State Gold Medal',
      category: 'Girls Under-10',
      quote: 'Inspiring future female chess prodigies across Telangana and Andhra Pradesh.',
    },
    {
      name: 'Jithin',
      title: 'Rapid & Blitz Medalist',
      achievement: 'Finished top 5 in state blitz circuits, exhibiting lightning-quick calculation and tactical traps.',
      badge: 'Blitz Medalist',
      category: 'Rapid / Blitz',
      quote: 'Calm under extreme clock pressure with pinpoint accuracy.',
    },
    {
      name: 'Sanvi',
      title: 'Rising Star Trophy Winner',
      achievement: 'Recognized on the 5th PICA Championship stage for exceptional tactical defense, sportsmanship, and determination.',
      badge: '5th PICA Podium',
      category: 'Junior Girls',
      quote: 'A dedicated student demonstrating rapid tactical progress within 6 months.',
    },
    {
      name: 'Thanav Eshan',
      title: 'Under-8 Foundation Champion',
      achievement: 'Youngest podium finisher in regional cadet tournaments with perfect opening fundamentals and piece development.',
      badge: 'Cadet Champion',
      category: 'Under-8 Cadet',
      quote: 'Shows extraordinary patience and pattern recall at age 7.',
    },
  ]

  const [selectedChampion, setSelectedChampion] = useState<typeof CHAMPIONS_DATA[0] | null>(null)

  const handleSelectChampion = (champ: typeof CHAMPIONS_DATA[0]) => {
    setSelectedChampion((prev) => (prev?.name === champ.name ? null : champ))
  }

  return (
    <section id="achievements" className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Celebrating Student Champions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight">
            Our Tournament Victories & Reviews
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 glass-panel p-1.5 rounded-full border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('tournaments')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
              activeTab === 'tournaments'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Medal className="w-3.5 h-3.5" />
            <span>Tournaments</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
              activeTab === 'reviews'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Reviews</span>
          </button>
        </div>
      </div>

      {/* Roster of Rising Champions (Interactive Honor Roll) */}
      <div className="mb-10 p-5 sm:p-6 rounded-2xl glass-panel border border-amber-400/25 flex flex-col gap-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-0.5">
              ACADEMY HONOR ROLL
            </span>
            <div className="text-sm font-bold text-white">
              Recent Tournament Stars & Podium Finishers
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            {selectedChampion ? 'Click a champion again to close' : 'Click any champion below to view victory details'}
          </span>
        </div>

        {/* Interactive Champion Buttons */}
        <div className="flex flex-wrap gap-2.5">
          {CHAMPIONS_DATA.map((champ) => {
            const isSelected = selectedChampion?.name === champ.name
            return (
              <button
                key={champ.name}
                onClick={() => handleSelectChampion(champ)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-400/30 border-amber-400 scale-105'
                    : 'bg-white/5 border-white/10 text-slate-200 font-medium hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 hover:scale-105'
                }`}
              >
                <span>✦ {champ.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-slate-950/20 text-slate-950 font-semibold' : 'text-amber-400/80'
                  }`}
                >
                  {champ.badge}
                </span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Champion Spotlight Card (Shown when a champion is clicked) */}
        {selectedChampion && (
          <div className="mt-2 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#141828] to-[#0c0e18] border border-amber-400/40 animate-in fade-in slide-in-from-top-2 duration-300 relative shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-base font-bold text-white font-display">
                      {selectedChampion.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                      {selectedChampion.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Category: {selectedChampion.category}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-amber-400 mb-2">
                    {selectedChampion.title}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                    {selectedChampion.achievement}
                  </p>

                  <div className="text-[11px] text-slate-300 italic border-l-2 border-amber-400/50 pl-3 font-serif">
                    "{selectedChampion.quote}"
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedChampion(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                aria-label="Close Spotlight"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tab 1: Tournaments */}
      {activeTab === 'tournaments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 animate-in fade-in duration-300">
          {tournaments.map((tourney, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-amber-400/40 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                    {tourney.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{tourney.location}</span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-amber-200 transition-colors">
                  {tourney.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {tourney.summary}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10 mb-4">
                  {tourney.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>Verified PICA Achievement</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Reviews */}
      {activeTab === 'reviews' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 animate-in fade-in duration-300">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel-elevated rounded-2xl p-7 flex flex-col justify-between border border-white/10 relative overflow-hidden"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-7 h-7 text-amber-400/20 mb-2" />

                <p className="text-sm text-slate-200 italic leading-relaxed mb-6 font-serif">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display">{rev.name}</div>
                  <div className="text-xs text-amber-400 font-mono mt-0.5">{rev.role}</div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                  Verified Review
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
