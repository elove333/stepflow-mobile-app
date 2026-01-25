/**
 * ProgressService
 * Mock service for tracking user progress and feedback history
 * 
 * Note: All metric values (score fields) are normalized decimals in [0,1]
 */

interface Feedback {
  id: string;
  date: string;
  score: number; // Normalized decimal in [0,1]
  feedback: string;
}

/**
 * Get feedback history for a user
 * @returns Array of feedback objects with normalized scores (0..1)
 */
export const getFeedbackHistory = (): Feedback[] => {
  return [
    {
      id: '1',
      date: '2026-01-20T10:30:00Z',
      score: 0.85,
      feedback: 'Great timing! Your rhythm accuracy has improved significantly.',
    },
    {
      id: '2',
      date: '2026-01-18T14:15:00Z',
      score: 0.72,
      feedback: 'Good effort. Focus on maintaining consistent movement speed.',
    },
    {
      id: '3',
      date: '2026-01-15T09:45:00Z',
      score: 0.68,
      feedback: 'Keep practicing! Try to stay more centered in your movements.',
    },
  ];
};

export default {
  getFeedbackHistory,
};
