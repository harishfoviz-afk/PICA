import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { createQueenGeometry } from './ChessGeometries'
import { goldenCrystalGlassMaterial } from './ChessMaterials'

interface QueenHeroProps {
  isLeadershipActive?: boolean
  scrollProgress?: number
}

export function QueenHero({ isLeadershipActive = false, scrollProgress = 0 }: QueenHeroProps) {
  const groupRef = useRef<THREE.Group>(null)
  const arcRef = useRef<THREE.Group>(null)
  const ribbonRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Mesh>(null)
  const coreLightRef = useRef<THREE.PointLight>(null)

  // Geometries
  const queenGeom = useMemo(() => createQueenGeometry(), [])
  const crownBeadsGeom = useMemo(() => new THREE.SphereGeometry(0.075, 16, 16), [])
  const arcTorusGeom = useMemo(() => new THREE.TorusGeometry(1.45, 0.03, 16, 64, Math.PI * 1.4), [])
  const orbitRingGeom = useMemo(() => new THREE.RingGeometry(1.22, 1.28, 64), [])

  // Create 8 crown pearls in sparkling gold crystal
  const crownPoints = useMemo(() => {
    const points: [number, number, number][] = []
    const count = 8
    const radius = 0.62
    const height = 2.82
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      points.push([Math.cos(angle) * radius, height, Math.sin(angle) * radius])
    }
    return points
  }, [])

  // Create High-Res Canvas Texture for the "PRATYUSHA" glowing Typographic Arc in 3D
  const textTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, 1024, 128)
      ctx.fillStyle = 'rgba(0, 0, 0, 0)'
      ctx.fillRect(0, 0, 1024, 128)

      // Gold Glow and Text
      ctx.font = '700 36px "Space Grotesk", "Plus Jakarta Sans", sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Shadow glow
      ctx.shadowColor = '#f59e0b'
      ctx.shadowBlur = 18
      ctx.fillStyle = '#fef3c7'
      ctx.fillText('✦  WGM  BODDA  PRATYUSHA  ✦  FOUNDER  &  GRANDMASTER  ✦', 512, 64)

      ctx.shadowBlur = 4
      ctx.fillStyle = '#f59e0b'
      ctx.fillText('✦  WGM  BODDA  PRATYUSHA  ✦  FOUNDER  &  GRANDMASTER  ✦', 512, 64)
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.ClampToEdgeWrapping
    texture.needsUpdate = true
    return texture
  }, [])

  // Golden pearls material
  const pearlMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#fef08a'),
        roughness: 0.1,
        metalness: 0.9,
        emissive: new THREE.Color('#d97706'),
        emissiveIntensity: 0.6,
      }),
    []
  )

  // Floating golden embers around Queen
  const embers = useMemo(() => {
    const count = 40
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 0.8 + Math.random() * 1.6
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = 0.4 + Math.random() * 3.0
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // 1. Organic Idle Float
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.3) * 0.08
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.12
    }

    // 2. Typographic Arc Motion & Illumination
    // 2. Typographic Arc Motion & Illumination (Activated only during Leadership Spotlight)
    if (arcRef.current) {
      arcRef.current.rotation.y = t * 0.28

      const isTargetSection = isLeadershipActive || (scrollProgress >= 0.28 && scrollProgress <= 0.54)
      const targetOpacity = isTargetSection ? 1.0 : 0.0
      const targetScale = isTargetSection ? 1.08 : 0.9

      arcRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)

      if (ribbonRef.current) {
        const mat = ribbonRef.current.material as THREE.MeshBasicMaterial
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.08)
      }
      if (torusRef.current) {
        const mat = torusRef.current.material as THREE.MeshBasicMaterial
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity * 0.85, 0.08)
      }
      if (orbitRef.current) {
        const mat = orbitRef.current.material as THREE.MeshBasicMaterial
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity * 0.35, 0.08)
      }

      // Hide group completely when near zero opacity so it never interferes with Hero text
      const currentOpacity = ribbonRef.current ? (ribbonRef.current.material as THREE.MeshBasicMaterial).opacity : 0
      arcRef.current.visible = currentOpacity > 0.01
    }

    // 3. Core light pulsing with golden radiance
    if (coreLightRef.current) {
      const isTargetSection = isLeadershipActive || (scrollProgress >= 0.28 && scrollProgress <= 0.54)
      const pulseIntensity = isTargetSection
        ? 4.5 + Math.sin(t * 3.5) * 1.2
        : 2.2 + Math.sin(t * 2) * 0.5
      coreLightRef.current.intensity = pulseIntensity
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Queen Root with idle animation */}
      <group ref={groupRef}>
        {/* RADIANT GOLDEN CRYSTAL GLASS QUEEN BODY */}
        <mesh geometry={queenGeom} material={goldenCrystalGlassMaterial} castShadow receiveShadow />

        {/* 8 Crown Pearls in Gleaming Gold */}
        {crownPoints.map((pos, idx) => (
          <mesh key={idx} geometry={crownBeadsGeom} material={pearlMaterial} position={pos} />
        ))}

        {/* Apex Pearl Crown Jewel */}
        <mesh geometry={crownBeadsGeom} material={pearlMaterial} position={[0, 2.94, 0]} scale={1.6} />

        {/* Internal Radiant Golden Core Light */}
        <pointLight ref={coreLightRef} color="#fbbf24" distance={4.5} decay={2} position={[0, 1.8, 0]} />

        {/* Inner golden diamond core */}
        <mesh position={[0, 1.8, 0]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#fef08a" emissive="#f59e0b" emissiveIntensity={0.8} roughness={0.1} />
        </mesh>

        {/* TYPOGRAPHIC ARC "PRATYUSHA" IN 3D SPACE (Spotlight in Leadership Section) */}
        <group ref={arcRef} position={[0, 2.7, 0]}>
          {/* Curved Typographic Ribbon */}
          <mesh ref={ribbonRef} rotation={[0, 0, 0.04]}>
            <cylinderGeometry args={[1.4, 1.4, 0.35, 48, 1, true, 0, Math.PI * 2]} />
            <meshBasicMaterial
              map={textTexture}
              transparent
              opacity={0}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>

          {/* Glowing Golden Torus Arc Ring */}
          <mesh
            ref={torusRef}
            geometry={arcTorusGeom}
            rotation={[Math.PI / 2.2, 0.1, -Math.PI / 3]}
            position={[0, 0.05, 0]}
          >
            <meshBasicMaterial color="#f59e0b" transparent opacity={0} blending={THREE.AdditiveBlending} />
          </mesh>

          {/* Subtle Orbit Ring */}
          <mesh
            ref={orbitRef}
            geometry={orbitRingGeom}
            rotation={[-Math.PI / 2.1, 0, 0]}
            position={[0, -0.15, 0]}
          >
            <meshBasicMaterial color="#fcd34d" transparent opacity={0} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
          </mesh>
        </group>

        {/* Orbiting Golden Embers */}
        <points position={[0, 0, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[embers, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.07}
            color="#fef08a"
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      </group>
    </group>
  )
}
