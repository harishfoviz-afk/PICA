import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {
  createKingGeometry,
  createKnightPedestalGeometry,
  createKnightHeadGeometry,
  createBishopGeometry,
  createRookGeometry,
  createPawnGeometry,
} from './ChessGeometries'
import { whiteCrystalGlassMaterial } from './ChessMaterials'

interface PieceConfig {
  type: 'king' | 'knight' | 'bishop' | 'rook' | 'pawn'
  x: number
  z: number
  rotationY?: number
  scale?: number
  phaseOffset: number
}

// Tactical board distribution for high-converting grandmaster visual
const PIECE_CONFIGS: PieceConfig[] = [
  // Partner King behind the Queen
  { type: 'king', x: -1.3, z: -2.6, rotationY: 0.2, phaseOffset: 0.8 },

  // Knights flanking
  { type: 'knight', x: 2.6, z: -1.3, rotationY: -Math.PI / 4, phaseOffset: 1.5 },
  { type: 'knight', x: -2.6, z: 1.3, rotationY: Math.PI / 3, phaseOffset: 2.3 },

  // Bishops on sharp diagonals
  { type: 'bishop', x: -1.3, z: 1.3, rotationY: -0.5, phaseOffset: 3.1 },
  { type: 'bishop', x: 2.6, z: 2.6, rotationY: 0.8, phaseOffset: 0.4 },

  // Rooks anchoring the perimeter
  { type: 'rook', x: 3.9, z: -3.9, rotationY: 0, phaseOffset: 4.0 },
  { type: 'rook', x: -3.9, z: 3.9, rotationY: 0.1, phaseOffset: 1.2 },

  // Forward tactical pawns in glowing white crystal
  { type: 'pawn', x: 0, z: 2.6, phaseOffset: 0.3 },
  { type: 'pawn', x: 1.3, z: 1.3, phaseOffset: 1.8 },
  { type: 'pawn', x: -2.6, z: -1.3, phaseOffset: 2.7 },
  { type: 'pawn', x: 3.9, z: 0, phaseOffset: 3.6 },
  { type: 'pawn', x: -3.9, z: -1.3, phaseOffset: 4.4 },
]

export function ChessPieces() {
  const piecesGroupRef = useRef<THREE.Group>(null)

  // Geometries
  const kingGeom = useMemo(() => createKingGeometry(), [])
  const knightBaseGeom = useMemo(() => createKnightPedestalGeometry(), [])
  const knightHeadGeom = useMemo(() => createKnightHeadGeometry(), [])
  const bishopGeom = useMemo(() => createBishopGeometry(), [])
  const rookGeom = useMemo(() => createRookGeometry(), [])
  const pawnGeom = useMemo(() => createPawnGeometry(), [])

  // Floating refs for individual pieces
  const pieceRefs = useRef<(THREE.Group | null)[]>([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    pieceRefs.current.forEach((ref, index) => {
      if (ref) {
        const config = PIECE_CONFIGS[index]
        if (!config) return

        // Soft organic idle gliding/bobbing
        const floatY = Math.sin(t * 1.1 + config.phaseOffset) * 0.05
        const subtleRock = Math.sin(t * 0.8 + config.phaseOffset) * 0.02

        ref.position.y = floatY
        ref.rotation.z = subtleRock
      }
    })
  })

  return (
    <group ref={piecesGroupRef}>
      {PIECE_CONFIGS.map((piece, index) => {
        return (
          <group
            key={`piece-${piece.type}-${index}`}
            ref={(el) => {
              pieceRefs.current[index] = el
            }}
            position={[piece.x, 0, piece.z]}
            rotation={[0, piece.rotationY || 0, 0]}
            scale={piece.scale || 1}
          >
            {piece.type === 'king' && (
              <group>
                <mesh geometry={kingGeom} material={whiteCrystalGlassMaterial} castShadow receiveShadow />
                {/* King cross finial in gleaming gold */}
                <mesh position={[0, 3.38, 0]}>
                  <boxGeometry args={[0.1, 0.34, 0.1]} />
                  <meshStandardMaterial color="#fcd34d" roughness={0.2} metalness={0.9} emissive="#b45309" emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[0, 3.42, 0]}>
                  <boxGeometry args={[0.26, 0.1, 0.1]} />
                  <meshStandardMaterial color="#fcd34d" roughness={0.2} metalness={0.9} emissive="#b45309" emissiveIntensity={0.3} />
                </mesh>
              </group>
            )}

            {piece.type === 'knight' && (
              <group>
                <mesh geometry={knightBaseGeom} material={whiteCrystalGlassMaterial} castShadow receiveShadow />
                <mesh
                  geometry={knightHeadGeom}
                  material={whiteCrystalGlassMaterial}
                  position={[0, 1.45, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  castShadow
                  receiveShadow
                />
              </group>
            )}

            {piece.type === 'bishop' && (
              <group>
                <mesh geometry={bishopGeom} material={whiteCrystalGlassMaterial} castShadow receiveShadow />
                {/* Bishop finial in gold */}
                <mesh position={[0, 2.55, 0]}>
                  <sphereGeometry args={[0.08, 16, 16]} />
                  <meshStandardMaterial color="#fcd34d" roughness={0.2} metalness={0.9} emissive="#b45309" emissiveIntensity={0.3} />
                </mesh>
              </group>
            )}

            {piece.type === 'rook' && (
              <mesh geometry={rookGeom} material={whiteCrystalGlassMaterial} castShadow receiveShadow />
            )}

            {piece.type === 'pawn' && (
              <mesh geometry={pawnGeom} material={whiteCrystalGlassMaterial} castShadow receiveShadow />
            )}
          </group>
        )
      })}
    </group>
  )
}
