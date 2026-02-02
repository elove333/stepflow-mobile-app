
export interface WeeklyStatItem {
  weekStart: string;
  weekEnd: string;
  sessions: number;
  averageScore: number;
  improvementRate: number;
}

export interface ProgressData {
  totalSessions: number;
  averageScore: number;
  improvementRate: number;
  weeklyStats: WeeklyStatItem[];
}

export interface FeedbackItem {
  id: string;
  date: string;
  score: number;
  feedback: string;
}

/**
 * Get user progress data
 */
export const getProgressData = async (): Promise<ProgressData> => {
  try {
    // const response = await get('/progress');
    // return response;
    
    // Mock response for development
    return {
      totalSessions: 12,
      averageScore: 78.5,
      improvementRate: 15.2,
      weeklyStats: [],
    };
  } catch (error) {
    console.error('Error fetching progress data:', error);
    return {
      totalSessions: 0,
      averageScore: 0,
      improvementRate: 0,
      weeklyStats: [],
    };
  }
};

/**
 * Get AI feedback history
 */
export const getFeedbackHistory = async (): Promise<FeedbackItem[]> => {
  try {
    // const response = await get('/feedback');
    // return response;
    
    // Mock response for development
    return [
      {
        id: '1',
        date: new Date().toISOString(),
        score: 85,
        feedback: 'Excellent rhythm control! Your timing has improved significantly.',
      },
      {
        id: '2',
        date: new Date(Date.now() - 86400000).toISOString(),
        score: 72,
        feedback: 'Good effort. Work on maintaining consistent movement speed.',
      },
      {
        id: '3',
        date: new Date(Date.now() - 172800000).toISOString(),
        score: 68,
        feedback: 'Keep practicing! Focus on smoother transitions between movements.',
      },
    ];
  } catch (error) {
    console.error('Error fetching feedback history:', error);
    return [];
  }
};
