import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CameraControllerProps {
  scrollProgress: number
  isLeadershipActive?: boolean
}

// Camera keyframes along the scroll journey
interface Keyframe {
  pos: [number, number, number]
  target: [number, number, number]
}

const KEYFRAMES: { progress: number; frame: Keyframe }[] = [
  {
    progress: 0.0, // Hero Section: frames Queen elegantly on right side for desktop, text clear on left
    frame: {
      pos: [-1.2, 5.0, 10.4],
      target: [-1.4, 0.8, 0],
    },
  },
  {
    progress: 0.18, // Why Chess: Strategic tactical philosophy
    frame: {
      pos: [-4.2, 3.4, 7.8],
      target: [-1.0, 1.0, 0.5],
    },
  },
  {
    progress: 0.38, // Founder Spotlight: WGM Bodda Pratyusha Golden Queen focus
    frame: {
      pos: [0, 2.2, 4.2],
      target: [0, 2.0, 0],
    },
  },
  {
    progress: 0.58, // Training Programs Grid
    frame: {
      pos: [4.8, 3.6, 6.8],
      target: [1.0, 0.9, -0.4],
    },
  },
  {
    progress: 0.78, // Tournament Winnings & Stories
    frame: {
      pos: [-2.8, 2.6, 6.2],
      target: [-0.6, 1.2, 0],
    },
  },
  {
    progress: 1.0, // Campuses, FAQ & Admissions Desk
    frame: {
      pos: [0, 2.2, 8.2],
      target: [0, 1.6, 0],
    },
  },
]

function interpolateKeyframes(p: number): Keyframe {
  const clampedP = Math.max(0, Math.min(1, p))

  // Find bounding keyframes
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const kf1 = KEYFRAMES[i]
    const kf2 = KEYFRAMES[i + 1]

    if (clampedP >= kf1.progress && clampedP <= kf2.progress) {
      const segmentRatio = (clampedP - kf1.progress) / (kf2.progress - kf1.progress)
      // Smooth step easing
      const t = segmentRatio * segmentRatio * (3 - 2 * segmentRatio)

      return {
        pos: [
          kf1.frame.pos[0] + (kf2.frame.pos[0] - kf1.frame.pos[0]) * t,
          kf1.frame.pos[1] + (kf2.frame.pos[1] - kf1.frame.pos[1]) * t,
          kf1.frame.pos[2] + (kf2.frame.pos[2] - kf1.frame.pos[2]) * t,
        ],
        target: [
          kf1.frame.target[0] + (kf2.frame.target[0] - kf1.frame.target[0]) * t,
          kf1.frame.target[1] + (kf2.frame.target[1] - kf1.frame.target[1]) * t,
          kf1.frame.target[2] + (kf2.frame.target[2] - kf1.frame.target[2]) * t,
        ],
      }
    }
  }

  return KEYFRAMES[KEYFRAMES.length - 1].frame
}

export function CameraController({ scrollProgress, isLeadershipActive = false }: CameraControllerProps) {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })
  const currentTargetRef = useRef(new THREE.Vector3(0, 1.2, 0))

  // Track window mouse for subtle agency parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // GSAP ScrollTrigger integration
  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    const founderEl = document.getElementById('founder') || document.getElementById('leadership')
    if (founderEl) {
      const st = ScrollTrigger.create({
        trigger: founderEl,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: true,
      })
      triggers.push(st)
    }

    return () => {
      triggers.forEach((st) => st.kill())
    }
  }, [])

  useFrame((state, delta) => {
    const { width, height } = state.size
    const aspect = width / Math.max(1, height)
    const isPortrait = aspect < 1.0

    // Adaptive mobile zoom: ensures chessboard fits within narrow portrait screens
    const responsiveDistMult = isPortrait ? Math.min(1.8, 1.08 / Math.max(0.5, aspect)) : 1.0
    const responsiveYMult = isPortrait ? 1.22 : 1.0
    const responsiveXMult = isPortrait ? 0 : 1.0

    // If founder/leadership section is active, snap to Queen close-up
    const activeKeyframe = isLeadershipActive
      ? {
          pos: [0, isPortrait ? 2.5 : 2.1, isPortrait ? 5.4 : 4.0] as [number, number, number],
          target: [0, 2.0, 0] as [number, number, number],
        }
      : interpolateKeyframes(scrollProgress)

    // Subtle idle camera breathing & mouse parallax (gentler on mobile)
    const t = state.clock.getElapsedTime()
    const idleOffsetX = Math.sin(t * 0.4) * 0.08 + mouseRef.current.x * (isPortrait ? 0.12 : 0.35)
    const idleOffsetY = Math.cos(t * 0.3) * 0.05 - mouseRef.current.y * (isPortrait ? 0.08 : 0.2)

    const targetPos = new THREE.Vector3(
      activeKeyframe.pos[0] * responsiveXMult + idleOffsetX,
      activeKeyframe.pos[1] * responsiveYMult + idleOffsetY,
      activeKeyframe.pos[2] * responsiveDistMult
    )

    const targetLookAt = new THREE.Vector3(
      activeKeyframe.target[0] * responsiveXMult + idleOffsetX * 0.15,
      activeKeyframe.target[1] * (isPortrait ? 1.1 : 1.0),
      activeKeyframe.target[2]
    )

    // Ultra smooth exponential damping
    const lerpSpeed = Math.min(delta * 3.5, 0.15)
    camera.position.lerp(targetPos, lerpSpeed)
    currentTargetRef.current.lerp(targetLookAt, lerpSpeed)
    camera.lookAt(currentTargetRef.current)
  })

  return null
}
