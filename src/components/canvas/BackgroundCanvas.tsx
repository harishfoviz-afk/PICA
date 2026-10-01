import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { ChessBoard } from './ChessBoard'
import { ChessPieces } from './ChessPieces'
import { QueenHero } from './QueenHero'
import { Atmosphere } from './Atmosphere'
import { CameraController } from './CameraController'

interface BackgroundCanvasProps {
  scrollProgress: number
  isLeadershipActive: boolean
}

export function BackgroundCanvas({ scrollProgress, isLeadershipActive }: BackgroundCanvasProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        camera={{
          fov: 42,
          near: 0.1,
          far: 60,
          position: [0, 5.8, 10.8],
        }}
      >
        <Atmosphere />
        <ChessBoard />
        <ChessPieces />
        <QueenHero isLeadershipActive={isLeadershipActive} scrollProgress={scrollProgress} />
        <CameraController scrollProgress={scrollProgress} isLeadershipActive={isLeadershipActive} />
      </Canvas>

      {/* Balanced atmospheric dark gradient overlays: preserving clear crystal piece visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/60 via-transparent to-[#08080a]/80 pointer-events-none" />
      {/* Left-to-right contrast vignette to ensure left-aligned headline always has crisp readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/85 via-[#08080a]/40 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle at center, transparent 45%, #08080a 95%)' }}
      />
    </div>
  )
}
