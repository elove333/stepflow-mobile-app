import {formatDate, formatTime, formatDuration, getRelativeTime} from '../utils/dateUtils';

describe('dateUtils', () => {
  describe('formatDate', () => {
    it('should format timestamp to date string', () => {
      const timestamp = new Date('2024-01-15').getTime();
      const result = formatDate(timestamp);
      expect(result).toMatch(/Jan/);
      expect(result).toMatch(/15/);
    });
  });

  describe('formatDuration', () => {
    it('should format duration in milliseconds to MM:SS', () => {
      expect(formatDuration(65000)).toBe('01:05');
      expect(formatDuration(120000)).toBe('02:00');
      expect(formatDuration(5000)).toBe('00:05');
    });
  });

  describe('getRelativeTime', () => {
    it('should return "just now" for recent timestamps', () => {
      const now = Date.now();
      expect(getRelativeTime(now)).toBe('just now');
    });

    it('should return correct relative time for hours ago', () => {
      const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000;
      expect(getRelativeTime(twoHoursAgo)).toBe('2 hours ago');
    });
  });
});
