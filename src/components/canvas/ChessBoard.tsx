import { useMemo } from 'react'
import * as THREE from 'three'
import {
  boardDarkTileMaterial,
  boardLightTileMaterial,
  boardFrameMaterial,
  boardGoldTrimMaterial,
} from './ChessMaterials'

export function ChessBoard() {
  const tileSize = 1.3
  const boardSize = 8 * tileSize // 10.4 units

  // Generate tiles array
  const tiles = useMemo(() => {
    const list: { key: string; x: number; z: number; isDark: boolean }[] = []
    const offset = (8 * tileSize) / 2 - tileSize / 2

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const x = col * tileSize - offset
        const z = row * tileSize - offset
        const isDark = (row + col) % 2 === 0
        list.push({
          key: `tile-${row}-${col}`,
          x,
          z,
          isDark,
        })
      }
    }
    return list
  }, [tileSize])

  const tileGeometry = useMemo(() => new THREE.BoxGeometry(tileSize * 0.98, 0.14, tileSize * 0.98), [tileSize])
  const basePlinthGeometry = useMemo(() => new THREE.BoxGeometry(boardSize + 0.8, 0.2, boardSize + 0.8), [boardSize])
  const frameGeometry = useMemo(() => new THREE.BoxGeometry(boardSize + 1.2, 0.28, boardSize + 1.2), [boardSize])

  return (
    <group position={[0, -0.15, 0]}>
      {/* Outer Titanium Rim Frame */}
      <mesh geometry={frameGeometry} material={boardFrameMaterial} position={[0, -0.16, 0]} receiveShadow />

      {/* Gold Inlay Trim */}
      <mesh geometry={basePlinthGeometry} material={boardGoldTrimMaterial} position={[0, -0.09, 0]} receiveShadow />

      {/* 8x8 Alternating Smoked & Obsidian Tiles */}
      {tiles.map((tile) => (
        <mesh
          key={tile.key}
          geometry={tileGeometry}
          material={tile.isDark ? boardDarkTileMaterial : boardLightTileMaterial}
          position={[tile.x, 0, tile.z]}
          receiveShadow
        />
      ))}

      {/* Subtle underglow plane */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[boardSize * 1.1, boardSize * 1.1]} />
        <meshBasicMaterial color="#d4a753" transparent opacity={0.06} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}
