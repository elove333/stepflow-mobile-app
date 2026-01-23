/**
 * Motion Data Processing Utilities
 */

/**
 * Calculate magnitude of 3D vector
 */
export const calculateMagnitude = (x: number, y: number, z: number): number => {
  return Math.sqrt(x * x + y * y + z * z);
};

/**
 * Normalize 3D vector
 */
export const normalizeVector = (
  x: number,
  y: number,
  z: number,
): {x: number; y: number; z: number} => {
  const magnitude = calculateMagnitude(x, y, z);
  if (magnitude === 0) return {x: 0, y: 0, z: 0};
  return {
    x: x / magnitude,
    y: y / magnitude,
    z: z / magnitude,
  };
};

/**
 * Calculate angle between two 3D vectors
 */
export const calculateAngle = (
  v1: {x: number; y: number; z: number},
  v2: {x: number; y: number; z: number},
): number => {
  const dotProduct = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  const mag1 = calculateMagnitude(v1.x, v1.y, v1.z);
  const mag2 = calculateMagnitude(v2.x, v2.y, v2.z);
  const cosAngle = dotProduct / (mag1 * mag2);
  return Math.acos(Math.max(-1, Math.min(1, cosAngle)));
};

/**
 * Apply low-pass filter to smooth sensor data
 */
export const lowPassFilter = (
  current: number,
  previous: number,
  alpha: number = 0.1,
): number => {
  return alpha * current + (1 - alpha) * previous;
};
