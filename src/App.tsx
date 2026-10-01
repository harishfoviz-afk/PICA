import { useState, useEffect, useCallback, useRef } from 'react'
import { BackgroundCanvas } from './components/canvas/BackgroundCanvas'
import { Navbar } from './components/ui/Navbar'
import { HeroSection } from './components/ui/HeroSection'
import { WhyChessSection } from './components/ui/WhyChessSection'
import { ProgramsSection } from './components/ui/ProgramsSection'
import { LeadershipSection } from './components/ui/LeadershipSection'
import { TournamentCarousel } from './components/ui/TournamentCarousel'
import { AchievementsSection } from './components/ui/AchievementsSection'
import { CampusesAndFAQ } from './components/ui/CampusesAndFAQ'
import { ContactSection } from './components/ui/ContactSection'
import { Footer } from './components/ui/Footer'

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLeadershipActive, setIsLeadershipActive] = useState(false)
  const isUserInteractingRef = useRef(false)
  const idleResumeTimerRef = useRef<number | null>(null)

  // Track window scroll progress with high precision
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll
        setScrollProgress(Math.max(0, Math.min(1, currentProgress)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // AUTOMATIC AUTO-SCROLL ENGINE (Without Manual Button)
  // Automatically glides down page; pauses instantly on user touch/wheel, resumes when idle
  useEffect(() => {
    let animationFrameId: number
    const getScrollSpeed = () => (window.innerWidth < 768 ? 0.65 : 0.85)

    const step = () => {
      if (!isUserInteractingRef.current) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        if (window.scrollY >= maxScroll - 4) {
          // Reached bottom: smooth loop back to top
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          window.scrollBy(0, getScrollSpeed())
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    // Start auto-scroll after a short initial pause (1.2s)
    const initialStartTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(step)
    }, 1200)

    // User interaction detection: Pause when user is actively interacting, resume when idle
    const onUserInteraction = () => {
      isUserInteractingRef.current = true

      if (idleResumeTimerRef.current) {
        clearTimeout(idleResumeTimerRef.current)
      }

      // Resume auto-scrolling after 4 seconds of idle time without touch or manual gestures
      idleResumeTimerRef.current = window.setTimeout(() => {
        isUserInteractingRef.current = false
      }, 4000)
    }

    // Notice: We listen to user input gestures (wheel, touch, pointer, keys) rather than 'scroll'
    // because window.scrollBy emits 'scroll' events and would otherwise pause itself!
    window.addEventListener('wheel', onUserInteraction, { passive: true })
    window.addEventListener('touchstart', onUserInteraction, { passive: true })
    window.addEventListener('touchmove', onUserInteraction, { passive: true })
    window.addEventListener('touchend', onUserInteraction, { passive: true })
    window.addEventListener('pointerdown', onUserInteraction, { passive: true })
    window.addEventListener('keydown', onUserInteraction, { passive: true })

    return () => {
      clearTimeout(initialStartTimer)
      cancelAnimationFrame(animationFrameId)
      if (idleResumeTimerRef.current) clearTimeout(idleResumeTimerRef.current)
      window.removeEventListener('wheel', onUserInteraction)
      window.removeEventListener('touchstart', onUserInteraction)
      window.removeEventListener('touchmove', onUserInteraction)
      window.removeEventListener('touchend', onUserInteraction)
      window.removeEventListener('pointerdown', onUserInteraction)
      window.removeEventListener('keydown', onUserInteraction)
    }
  }, [])

  // Track when founder section enters viewport to spotlight the Golden Queen
  useEffect(() => {
    const founderEl = document.getElementById('founder')
    if (!founderEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLeadershipActive(true)
        } else {
          setIsLeadershipActive(false)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(founderEl)
    return () => observer.disconnect()
  }, [])

  const handleNavigate = useCallback((sectionId: string) => {
    isUserInteractingRef.current = true
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    // Resume auto-scroll after navigating
    if (idleResumeTimerRef.current) clearTimeout(idleResumeTimerRef.current)
    idleResumeTimerRef.current = window.setTimeout(() => {
      isUserInteractingRef.current = false
    }, 5000)
  }, [])

  const handleFocusLeadership = useCallback(() => {
    setIsLeadershipActive(true)
    handleNavigate('founder')
  }, [handleNavigate])

  const handleToggleQueenFocus = useCallback(() => {
    setIsLeadershipActive((prev) => !prev)
  }, [])

  const handleEnrollProgram = useCallback(
    (_programName: string) => {
      handleNavigate('contact')
    },
    [handleNavigate]
  )

  return (
    <div className="relative min-h-screen bg-[#08080a] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* FIXED 3D AMBIENT CANVAS BACKGROUND:
          White Crystal Glass Pieces + Radiant Golden Crystal Queen (z-0) */}
      <BackgroundCanvas
        scrollProgress={scrollProgress}
        isLeadershipActive={isLeadershipActive}
      />

      {/* FOREGROUND HIGH-CONTRAST HTML CONTENT (z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onNavigate={handleNavigate}
          onFocusLeadership={handleFocusLeadership}
        />

        <main className="flex-1">
          {/* Section 1: Hero */}
          <HeroSection
            onExplorePrograms={() => handleNavigate('why-chess')}
            onFocusLeadership={handleFocusLeadership}
          />

          {/* Section 2: Why Chess? Educational & Cognitive Hook */}
          <WhyChessSection
            onExplorePrograms={() => handleNavigate('programs')}
            onBookTrial={() => handleNavigate('contact')}
          />

          {/* Section 3: Founder & Grandmaster (WGM Bodda Pratyusha) */}
          <LeadershipSection
            onToggleQueenFocus={handleToggleQueenFocus}
            isQueenFocused={isLeadershipActive}
            onBookSession={() => handleNavigate('contact')}
          />

          {/* Section 4: Comprehensive Training Programs */}
          <ProgramsSection onEnroll={handleEnrollProgram} />

          {/* Section 4: Tournament Winnings & Stories Carousel */}
          <TournamentCarousel />

          {/* Section 5: Student Achievements & Reviews */}
          <AchievementsSection />

          {/* Section 6: Campuses & FAQ */}
          <CampusesAndFAQ />

          {/* Section 7: Admissions & Contact */}
          <ContactSection />
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  )
}

export default App
