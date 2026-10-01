import * as THREE from 'three'

/**
 * Procedural lathe geometries for dark glass chess pieces.
 * Created via precision spline curves for smooth glass refraction.
 */

// --- PAWN PROFILE ---
export function createPawnGeometry(): THREE.LatheGeometry {
  const points: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.55, 0),
    new THREE.Vector2(0.55, 0.08),
    new THREE.Vector2(0.48, 0.16),
    new THREE.Vector2(0.42, 0.22),
    new THREE.Vector2(0.44, 0.28),
    new THREE.Vector2(0.38, 0.35),
    new THREE.Vector2(0.24, 0.65),
    new THREE.Vector2(0.22, 0.85),
    new THREE.Vector2(0.32, 0.92),
    new THREE.Vector2(0.30, 0.98),
    new THREE.Vector2(0.18, 1.02),
    new THREE.Vector2(0.26, 1.15),
    new THREE.Vector2(0.28, 1.30),
    new THREE.Vector2(0.22, 1.45),
    new THREE.Vector2(0.12, 1.55),
    new THREE.Vector2(0, 1.58),
  ]
  return new THREE.LatheGeometry(points, 48)
}

// --- ROOK PROFILE ---
export function createRookGeometry(): THREE.LatheGeometry {
  const points: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.65, 0),
    new THREE.Vector2(0.65, 0.12),
    new THREE.Vector2(0.56, 0.22),
    new THREE.Vector2(0.52, 0.30),
    new THREE.Vector2(0.38, 0.45),
    new THREE.Vector2(0.36, 1.2),
    new THREE.Vector2(0.46, 1.35),
    new THREE.Vector2(0.48, 1.45),
    new THREE.Vector2(0.52, 1.5),
    new THREE.Vector2(0.52, 1.9),
    new THREE.Vector2(0.42, 1.9),
    new THREE.Vector2(0.42, 1.75),
    new THREE.Vector2(0, 1.75),
  ]
  return new THREE.LatheGeometry(points, 48)
}

// --- BISHOP PROFILE ---
export function createBishopGeometry(): THREE.LatheGeometry {
  const points: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.68, 0),
    new THREE.Vector2(0.68, 0.12),
    new THREE.Vector2(0.58, 0.22),
    new THREE.Vector2(0.52, 0.32),
    new THREE.Vector2(0.35, 0.55),
    new THREE.Vector2(0.28, 1.1),
    new THREE.Vector2(0.38, 1.25),
    new THREE.Vector2(0.34, 1.32),
    new THREE.Vector2(0.22, 1.38),
    new THREE.Vector2(0.36, 1.6),
    new THREE.Vector2(0.38, 1.85),
    new THREE.Vector2(0.24, 2.15),
    new THREE.Vector2(0.12, 2.3),
    new THREE.Vector2(0.08, 2.35),
    new THREE.Vector2(0.12, 2.45),
    new THREE.Vector2(0, 2.5),
  ]
  return new THREE.LatheGeometry(points, 48)
}

// --- KNIGHT PROFILE (Base & Sculpted Pedestal) ---
export function createKnightPedestalGeometry(): THREE.LatheGeometry {
  const points: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.7, 0),
    new THREE.Vector2(0.7, 0.12),
    new THREE.Vector2(0.6, 0.22),
    new THREE.Vector2(0.54, 0.32),
    new THREE.Vector2(0.45, 0.45),
    new THREE.Vector2(0.42, 0.7),
    new THREE.Vector2(0.48, 0.8),
    new THREE.Vector2(0, 0.8),
  ]
  return new THREE.LatheGeometry(points, 48)
}

// --- KING PROFILE ---
export function createKingGeometry(): THREE.LatheGeometry {
  const points: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.85, 0),
    new THREE.Vector2(0.85, 0.15),
    new THREE.Vector2(0.72, 0.28),
    new THREE.Vector2(0.65, 0.40),
    new THREE.Vector2(0.45, 0.70),
    new THREE.Vector2(0.36, 1.5),
    new THREE.Vector2(0.44, 1.7),
    new THREE.Vector2(0.52, 1.9),
    new THREE.Vector2(0.48, 2.05),
    new THREE.Vector2(0.35, 2.15),
    new THREE.Vector2(0.55, 2.4),
    new THREE.Vector2(0.62, 2.7),
    new THREE.Vector2(0.55, 2.95),
    new THREE.Vector2(0.3, 3.1),
    new THREE.Vector2(0.1, 3.2),
    new THREE.Vector2(0, 3.25),
  ]
  return new THREE.LatheGeometry(points, 56)
}

// --- QUEEN PROFILE (Central Hero Piece) ---
export function createQueenGeometry(): THREE.LatheGeometry {
  const points: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.82, 0),
    new THREE.Vector2(0.82, 0.14),
    new THREE.Vector2(0.70, 0.26),
    new THREE.Vector2(0.62, 0.38),
    new THREE.Vector2(0.42, 0.65),
    new THREE.Vector2(0.32, 1.35),
    new THREE.Vector2(0.40, 1.55),
    new THREE.Vector2(0.48, 1.75),
    new THREE.Vector2(0.44, 1.9),
    new THREE.Vector2(0.30, 2.0),
    new THREE.Vector2(0.48, 2.25),
    new THREE.Vector2(0.68, 2.65), // Flared crown coronet
    new THREE.Vector2(0.62, 2.75),
    new THREE.Vector2(0.48, 2.78),
    new THREE.Vector2(0.20, 2.82),
    new THREE.Vector2(0, 2.85),
  ]
  return new THREE.LatheGeometry(points, 64)
}

/**
 * Creates horse head geometry for the Knight using an extruded 2D profile.
 */
export function createKnightHeadGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(0.35, 0)
  shape.quadraticCurveTo(0.45, 0.3, 0.42, 0.6)
  shape.quadraticCurveTo(0.5, 0.8, 0.65, 0.95) // Muzzle forward
  shape.quadraticCurveTo(0.65, 1.15, 0.5, 1.25) // Nose tip
  shape.lineTo(0.38, 1.3) // Under jaw
  shape.lineTo(0.25, 1.5) // Ear base
  shape.lineTo(0.2, 1.7) // Ear tip
  shape.lineTo(0.1, 1.5)
  shape.quadraticCurveTo(-0.15, 1.2, -0.25, 0.8) // Arched mane curve
  shape.quadraticCurveTo(-0.35, 0.4, -0.3, 0)
  shape.closePath()

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    steps: 1,
    depth: 0.32,
    bevelEnabled: true,
    bevelThickness: 0.08,
    bevelSize: 0.06,
    bevelOffset: 0,
    bevelSegments: 4,
  }

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  geom.center()
  return geom
}
