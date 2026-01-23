import {isValidEmail, isValidSessionData, sanitizeString} from '../utils/validation';

describe('validation', () => {
  describe('isValidEmail', () => {
    it('should validate correct email format', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email format', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('isValidSessionData', () => {
    it('should validate complete session data', () => {
      const validData = {
        id: '123',
        startTime: 1000,
        endTime: 2000,
        motionData: [],
      };
      expect(isValidSessionData(validData)).toBe(true);
    });

    it('should reject incomplete session data', () => {
      expect(isValidSessionData({})).toBe(false);
      expect(isValidSessionData(null)).toBe(false);
      expect(isValidSessionData({id: '123'})).toBe(false);
    });
  });

  describe('sanitizeString', () => {
    it('should remove dangerous characters', () => {
      expect(sanitizeString('<script>alert("xss")</script>')).toBe(
        'scriptalert("xss")/script',
      );
      expect(sanitizeString('  test  ')).toBe('test');
    });
  });
});
