/**
 * Validation Utilities
 */

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate session data completeness
 */
export const isValidSessionData = (sessionData: any): boolean => {
  return (
    sessionData &&
    sessionData.id &&
    sessionData.startTime &&
    sessionData.endTime &&
    sessionData.motionData &&
    Array.isArray(sessionData.motionData)
  );
};

/**
 * Sanitize string input
 */
export const sanitizeString = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};
