import { useState, useEffect, useRef, useCallback } from 'react'
import { Trophy, ChevronLeft, ChevronRight, Medal, Sparkles } from 'lucide-react'

export interface TournamentStory {
  id: string
  title: string
  subtitle: string
  image: string
  category: string
  tag: string
  story: string
  date: string
}

export const STORIES: TournamentStory[] = [
  {
    id: 'tourney-5th-ceremony',
    title: '5th PICA Tournament Grand Prize Distribution',
    subtitle: 'Celebrating the Stars of Tomorrow',
    image: './images/tourney1.jpg',
    category: 'PICA Championship',
    tag: '5th Edition',
    story:
      'The 5th Pratyusha International Chess Academy Tournament concluded on a high note with a grand Prize Distribution Ceremony filled with cheers, proud parents, and joyful young champions! From the very first move to the final checkmate, our budding talents showcased incredible strategy and focus.',
    date: '5th Annual Edition',
  },
  {
    id: 'jithesh-acf',
    title: 'Jithesh Secures 5th Place in U-12 ACF Tournament',
    subtitle: 'Outstanding Performance on National Stage',
    image: './images/jithesh.jpg',
    category: 'National Circuit',
    tag: 'ACF Podium',
    story:
      'Congratulations to Jithesh for finishing 5th Place in the Under-12 Category at the prestigious ACF Chess Tournament! His tactical precision, dedication, and deep endgame study under WGM Bodda Pratyusha truly showed on the board.',
    date: 'Recent Victory',
  },
  {
    id: 'tourney-podium-celebration',
    title: 'Grand Champions & Trophies Presentation',
    subtitle: '5th PICA Tournament Honors',
    image: './images/tourney2.jpg',
    category: 'Tournament Honors',
    tag: 'Trophy Winners',
    story:
      'Proud moments as our young prodigies received their championship trophies, certificates, and medals. A celebration of discipline, sportsmanship, and strategic mastery.',
    date: 'PICA Prize Day',
  },
  {
    id: 'poojith-success',
    title: 'Poojith Ayan’s Tournament Triumph',
    subtitle: 'Consistent Top Finishes & Rating Progress',
    image: './images/poojith.jpg',
    category: 'Rising Champion',
    tag: 'Top Finisher',
    story:
      'Poojith has shown extraordinary growth in tactical vision and opening preparation, earning top honors across multiple regional and state rapid tournaments.',
    date: 'Tournament Hero',
  },
  {
    id: 'tourney-young-champions',
    title: 'Medal Winners & Joyful Young Masters',
    subtitle: '5th PICA Tournament Stage',
    image: './images/tourney3.jpg',
    category: 'Youth Excellence',
    tag: 'Medal Winners',
    story:
      'Budding champions proudly posing with their medals and certificates on the PICA tournament stage. Building confidence, poise, and competitive readiness at an early age.',
    date: 'PICA Ceremony',
  },
  {
    id: 'yuvaan-triumph',
    title: 'Yuvaan’s Outstanding Tournament Run',
    subtitle: 'Tactical Precision & Perfect Rounds',
    image: './images/yuvaan.jpg',
    category: 'Youth Prodigy',
    tag: 'Rapid Circuit',
    story:
      'Demonstrating composure under time pressure, Yuvaan delivered consecutive winning rounds in rapid tournaments, outplaying senior competitors with sharp tactical combinations.',
    date: 'Rising Star',
  },
  {
    id: 'chinmay-deekshith',
    title: 'Chinmay & Deekshith on the Honor Roll',
    subtitle: 'Danne & V Pro Tournament Accolades',
    image: './images/chinmay.jpg',
    category: 'Academy Pride',
    tag: 'Podium Honors',
    story:
      'Our students Chinmay, Deekshith, and Sanvi earned top ranks in the Danne and V Pro Rapid tournaments, showcasing why PICA is renowned for grooming future grandmasters.',
    date: 'Tournament Pride',
  },
]

export function TournamentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % STORIES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length)
  }, [])

  // Auto-play timer (changes every 5 seconds unless hovered/touched)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  // Precision touch handlers for mobile swipe (distinguishing swipe from vertical scroll)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null && touchStartY.current !== null) {
      const diffX = touchStartX.current - e.changedTouches[0].clientX
      const diffY = touchStartY.current - e.changedTouches[0].clientY

      // Only transition if horizontal displacement exceeds threshold AND exceeds vertical scroll drift
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
        if (diffX > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
      touchStartX.current = null
      touchStartY.current = null
    }
    setIsPaused(false)
  }

  const handleTouchCancel = () => {
    touchStartX.current = null
    touchStartY.current = null
    setIsPaused(false)
  }

  const activeStory = STORIES[currentIndex]

  return (
    <section
      id="winnings"
      className="relative py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto z-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>PICA Hall of Champions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display tracking-tight">
            Tournament Winnings & Stories
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Celebrating the pride of PICA: real moments from the 5th PICA Tournament, ACF and Danne Championships, and our young podium finishers.
          </p>
        </div>

        {/* Carousel Arrows */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous Story"
            className="w-10 h-10 rounded-full glass-panel hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center border border-white/15 transition-all focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-slate-300 px-2">
            {currentIndex + 1} / {STORIES.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next Story"
            className="w-10 h-10 rounded-full glass-panel hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center border border-white/15 transition-all focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Carousel Card */}
      <div
        className="glass-panel-elevated rounded-3xl overflow-hidden border border-amber-400/25 relative shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px]">
          {/* Left Column: Authentic Photo */}
          <div className="lg:col-span-7 relative bg-black/60 overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-full">
            <img
              src={activeStory.image}
              alt={activeStory.title}
              className="w-full h-full object-contain sm:object-cover max-h-[460px] transition-all duration-700 ease-out"
              loading="lazy"
            />
            {/* Gradient edge blends */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e18] via-transparent to-transparent lg:hidden" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e111d]" />

            {/* Photo Category Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-semibold">
              <Medal className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeStory.category}</span>
            </div>
          </div>

          {/* Right Column: Story & Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-b from-[#0e111d]/90 to-[#08080a]/95">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30">
                  {activeStory.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">{activeStory.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight mb-2">
                {activeStory.title}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-amber-300/90 mb-4 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeStory.subtitle}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeStory.story}
              </p>
            </div>

            {/* Carousel Bottom Controls & Thumbnails */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all focus:outline-none ${
                      currentIndex === idx
                        ? 'w-8 bg-amber-400'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                Swipe or click arrows to explore stories
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Thumbnails Strip for Quick Jump */}
      <div className="hidden sm:grid grid-cols-7 gap-3 mt-4">
        {STORIES.map((story, idx) => (
          <button
            key={story.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-16 rounded-xl overflow-hidden border transition-all relative group focus:outline-none ${
              currentIndex === idx
                ? 'border-amber-400 ring-2 ring-amber-400/40 scale-105'
                : 'border-white/10 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
          </button>
        ))}
      </div>
    </section>
  )
}
