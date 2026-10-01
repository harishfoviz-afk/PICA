import * as THREE from 'three'

/**
 * Photorealistic Crystal Glass materials for PICA 3D chess environment:
 * - Regular chess pieces: Luminous White Crystal Glass
 * - Queen piece: Radiant Golden Crystal Glass
 */

// Luminous White Crystal Glass for regular chess pieces
export const whiteCrystalGlassMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#ffffff'),
  transmission: 0.72,
  opacity: 0.98,
  transparent: true,
  roughness: 0.16,
  metalness: 0.08,
  ior: 1.54,
  thickness: 2.2,
  specularIntensity: 2.0,
  specularColor: new THREE.Color('#ffffff'),
  emissive: new THREE.Color('#cbd5e1'),
  emissiveIntensity: 0.35, // Luminous inner presence so pieces are clearly visible
  clearcoat: 1.0,
  clearcoatRoughness: 0.08,
  attenuationColor: new THREE.Color('#f8fafc'),
  attenuationDistance: 2.5,
})

// Radiant Golden Crystal Glass for the Hero Queen piece
export const goldenCrystalGlassMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#fcd34d'),
  transmission: 0.68,
  opacity: 1.0,
  transparent: true,
  roughness: 0.12,
  metalness: 0.15,
  ior: 1.58,
  thickness: 2.8,
  specularIntensity: 2.5,
  specularColor: new THREE.Color('#fef08a'),
  emissive: new THREE.Color('#d97706'),
  emissiveIntensity: 0.55, // Majestic golden glow
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  attenuationColor: new THREE.Color('#b45309'),
  attenuationDistance: 1.8,
})

// Chessboard Dark Tiles: Deep Obsidian Glass
export const boardDarkTileMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#0c0e14'),
  roughness: 0.2,
  metalness: 0.4,
  transmission: 0.3,
  transparent: true,
  opacity: 0.96,
  thickness: 0.8,
  clearcoat: 0.8,
  clearcoatRoughness: 0.1,
})

// Chessboard Light Tiles: Frosted Silver Slate
export const boardLightTileMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#222736'),
  roughness: 0.25,
  metalness: 0.2,
  transmission: 0.4,
  transparent: true,
  opacity: 0.98,
  thickness: 1.0,
  clearcoat: 0.7,
  clearcoatRoughness: 0.15,
  emissive: new THREE.Color('#1e293b'),
  emissiveIntensity: 0.15,
})

// Board Outer Titanium Frame
export const boardFrameMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#12151e'),
  roughness: 0.35,
  metalness: 0.85,
})

// Board Gold Inlay Trim
export const boardGoldTrimMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#e5b869'),
  roughness: 0.2,
  metalness: 0.9,
  emissive: new THREE.Color('#855d14'),
  emissiveIntensity: 0.3,
})

// Golden Additive Glow
export const goldGlowMaterial = new THREE.MeshBasicMaterial({
  color: new THREE.Color('#fbbf24'),
  transparent: true,
  opacity: 0.9,
  blending: THREE.AdditiveBlending,
})
