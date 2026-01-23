import {
  calculateMagnitude,
  normalizeVector,
  lowPassFilter,
} from '../utils/motionUtils';

describe('motionUtils', () => {
  describe('calculateMagnitude', () => {
    it('should calculate vector magnitude correctly', () => {
      expect(calculateMagnitude(3, 4, 0)).toBe(5);
      expect(calculateMagnitude(1, 1, 1)).toBeCloseTo(1.732, 2);
    });
  });

  describe('normalizeVector', () => {
    it('should normalize vector to unit length', () => {
      const result = normalizeVector(3, 4, 0);
      expect(result.x).toBeCloseTo(0.6, 1);
      expect(result.y).toBeCloseTo(0.8, 1);
      expect(result.z).toBe(0);
    });

    it('should handle zero vector', () => {
      const result = normalizeVector(0, 0, 0);
      expect(result).toEqual({x: 0, y: 0, z: 0});
    });
  });

  describe('lowPassFilter', () => {
    it('should apply low-pass filter', () => {
      const result = lowPassFilter(10, 5, 0.1);
      expect(result).toBeCloseTo(5.5, 1);
    });
  });
});
