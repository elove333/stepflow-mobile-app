/**
 * SessionService
 * Mock service for managing training sessions
 * 
 * Note: All metric values are normalized decimals in [0,1]
 */

interface SessionMetrics {
  averageAccuracy: number; // Normalized decimal in [0,1]
  timingScore: number; // Normalized decimal in [0,1]
  movementQuality: number; // Normalized decimal in [0,1]
}

interface Session {
  id: string;
  date: string;
  duration: number; // in seconds
  metrics: SessionMetrics;
  completed: boolean;
}

/**
 * Get session details
 * @param sessionId - The session identifier
 * @returns Session object with normalized metric values (0..1)
 */
export const getSession = (sessionId: string): Session => {
  return {
    id: sessionId,
    date: '2026-01-25T00:00:00Z',
    duration: 1800,
    metrics: {
      averageAccuracy: 0.85,
      timingScore: 0.78,
      movementQuality: 0.82,
    },
    completed: true,
  };
};

export default {
  getSession,
};
