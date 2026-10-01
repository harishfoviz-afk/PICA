import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Atmosphere() {
  const movingLightRef = useRef<THREE.PointLight>(null)
  const rimLightRef = useRef<THREE.PointLight>(null)
  const fillLightRef = useRef<THREE.DirectionalLight>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Floating atmospheric dust / glimmer particles
  const particleCount = 140
  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const ph = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = Math.random() * 8 + 0.2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      ph[i] = Math.random() * Math.PI * 2
    }
    return [pos, ph]
  }, [particleCount])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // 1. Moving dynamic golden flare drifting across crystal glass pieces
    if (movingLightRef.current) {
      movingLightRef.current.position.x = Math.sin(t * 0.45) * 6.5
      movingLightRef.current.position.z = Math.cos(t * 0.35) * 6.5
      movingLightRef.current.position.y = 4.2 + Math.sin(t * 0.5) * 1.5
    }

    // 2. Cyan / Silver rim light swaying gently
    if (rimLightRef.current) {
      rimLightRef.current.position.x = -6.5 + Math.cos(t * 0.3) * 2
      rimLightRef.current.position.z = -5.5 + Math.sin(t * 0.3) * 2
    }

    // 3. Floating atmospheric particles slow drift
    if (particlesRef.current) {
      const posAttr = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute
      const array = posAttr.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        array[i * 3 + 1] += Math.sin(t * 0.5 + phases[i]) * 0.003
        if (array[i * 3 + 1] > 8.5) array[i * 3 + 1] = 0.5
        if (array[i * 3 + 1] < 0.2) array[i * 3 + 1] = 8.0
      }
      posAttr.needsUpdate = true
    }
  })

  return (
    <>
      {/* Cinematic Fog with reduced density so white crystal pieces are crisply defined */}
      <fogExp2 attach="fog" args={['#08080a', 0.024]} />

      {/* Deep Ambient Base Light */}
      <ambientLight color="#1e2235" intensity={1.6} />

      {/* Primary Directional Keylight illuminating white crystal glass facets */}
      <directionalLight
        position={[7, 14, 8]}
        intensity={3.4}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      {/* Secondary Fill Light ensuring opposite silhouettes shine with silver radiance */}
      <directionalLight
        ref={fillLightRef}
        position={[-8, 10, -6]}
        intensity={2.0}
        color="#cbd5e1"
      />

      {/* Dynamic Golden Flare Light casting moving specular reflections */}
      <pointLight
        ref={movingLightRef}
        color="#fcd34d"
        intensity={4.8}
        distance={14}
        decay={2}
      />

      {/* Crisp Silver-Blue Rim Light for crystal edge definition */}
      <pointLight
        ref={rimLightRef}
        position={[-7, 5, -6]}
        color="#93c5fd"
        intensity={3.2}
        distance={16}
        decay={2}
      />

      {/* Dedicated Golden Spotlight focused sharply on the Queen Piece */}
      <spotLight
        position={[0, 8, 3.5]}
        target-position={[0, 1.8, 0]}
        color="#fbbf24"
        intensity={5.5}
        angle={0.55}
        penumbra={0.7}
        distance={14}
      />

      {/* Soft Ground Bounce Light */}
      <pointLight
        position={[0, 0.2, 0]}
        color="#e2e8f0"
        intensity={1.2}
        distance={8}
      />

      {/* Floating Ambient Embers & Glimmer */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#fef08a"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </>
  )
}
