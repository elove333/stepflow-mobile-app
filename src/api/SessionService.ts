/**
 * SessionService - Handles session data and metrics
 * 
 * Note: All metric values are stored as decimals in range [0,1]
 */

export interface SessionMetrics {
  /** Average accuracy score (0..1 decimal) */
  averageAccuracy: number;
  /** Timing precision score (0..1 decimal) */
  timingScore: number;
  /** Movement quality score (0..1 decimal) */
  movementQuality: number;
}

export interface Session {
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  metrics: SessionMetrics;
  exerciseType: string;
}

/**
 * Mock implementation of SessionService
 */
class SessionServiceImpl {
  /**
   * Get session data by ID
   * @param sessionId - Session identifier
   * @returns Session data with metrics in decimal format (0..1)
   */
  async getSession(sessionId: string): Promise<Session> {
    // Mock data with metrics as decimals (0..1)
    return {
      id: sessionId,
      userId: 'user-123',
      startTime: '2026-01-25T10:00:00Z',
      endTime: '2026-01-25T10:30:00Z',
      metrics: {
        averageAccuracy: 0.85, // 85%
        timingScore: 0.78,      // 78%
        movementQuality: 0.82,  // 82%
      },
      exerciseType: 'rhythm-training',
    };
  }

  /**
   * Get recent sessions for a user
   * @param userId - User identifier
   * @returns Array of sessions with metrics in decimal format (0..1)
   */
  async getRecentSessions(userId: string): Promise<Session[]> {
    return [
      {
        id: 'session-001',
        userId,
        startTime: '2026-01-24T10:00:00Z',
        endTime: '2026-01-24T10:30:00Z',
        metrics: {
          averageAccuracy: 0.90,
          timingScore: 0.85,
          movementQuality: 0.88,
        },
        exerciseType: 'rhythm-training',
      },
      {
        id: 'session-002',
        userId,
        startTime: '2026-01-23T15:00:00Z',
        endTime: '2026-01-23T15:30:00Z',
        metrics: {
          averageAccuracy: 0.75,
          timingScore: 0.70,
          movementQuality: 0.73,
        },
        exerciseType: 'timing-control',
      },
    ];
  }
}

export const SessionService = new SessionServiceImpl();
export default SessionService;
