/**
 * ProgressService - Handles user progress tracking and feedback
 * 
 * Note: All score values are stored as decimals in range [0,1]
 */

export interface Feedback {
  id: string;
  /** User's performance score (0..1 decimal) */
  score: number;
  date: string;
  comments?: string;
  sessionId?: string;
}

export interface ProgressSummary {
  userId: string;
  totalSessions: number;
  /** Average score across all sessions (0..1 decimal) */
  averageScore: number;
  improvementRate: number;
}

/**
 * Mock implementation of ProgressService
 */
class ProgressServiceImpl {
  /**
   * Get feedback history for a user
   * @param userId - User identifier
   * @returns Array of feedback items with scores in decimal format (0..1)
   */
  async getFeedbackHistory(userId: string): Promise<Feedback[]> {
    // Mock data with scores as decimals (0..1)
    return [
      {
        id: 'feedback-001',
        score: 0.85, // 85%
        date: '2026-01-25',
        comments: 'Great improvement in timing accuracy!',
        sessionId: 'session-001',
      },
      {
        id: 'feedback-002',
        score: 0.72, // 72%
        date: '2026-01-24',
        comments: 'Good effort. Focus more on movement quality.',
        sessionId: 'session-002',
      },
      {
        id: 'feedback-003',
        score: 0.68, // 68%
        date: '2026-01-23',
        comments: 'Keep practicing rhythm patterns.',
        sessionId: 'session-003',
      },
    ];
  }

  /**
   * Get progress summary for a user
   * @param userId - User identifier
   * @returns Progress summary with average score in decimal format (0..1)
   */
  async getProgressSummary(userId: string): Promise<ProgressSummary> {
    return {
      userId,
      totalSessions: 15,
      averageScore: 0.78, // 78% average
      improvementRate: 0.12, // 12% improvement rate
    };
  }

  /**
   * Submit new feedback
   * @param feedback - Feedback data with score in decimal format (0..1)
   */
  async submitFeedback(feedback: Omit<Feedback, 'id'>): Promise<Feedback> {
    return {
      id: `feedback-${Date.now()}`,
      ...feedback,
    };
  }
}

export const ProgressService = new ProgressServiceImpl();
export default ProgressService;
