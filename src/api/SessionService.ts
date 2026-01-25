import {post} from './ApiClient';

export interface MotionDataPoint {
  timestamp: number;
  accelerometer: {
    x: number;
    y: number;
    z: number;
  };
  gyroscope: {
    x: number;
    y: number;
    z: number;
  };
}

export interface SessionData {
  id: string;
  startTime: number;
  endTime: number;
  duration: number;
  motionData: MotionDataPoint[];
  metrics: {
    averageAccuracy: number;
    timingScore: number;
    movementQuality: number;
  };
}

/**
 * Send session data to backend for AI analysis
 */
export const sendSessionData = async (
  sessionData: SessionData,
): Promise<any> => {
  try {
    console.log('Sending session data to backend...');
    const response = await post('/sessions', sessionData);
    console.log('Session data sent successfully');
    return response;
  } catch (error) {
    console.error('Error sending session data:', error);
    // Return mock response for development
    return {
      success: true,
      sessionId: sessionData.id,
      feedback: {
        score: 75,
        message: 'Good rhythm! Focus on consistent timing in the next session.',
      },
    };
  }
};

/**
 * Get session by ID
 */
export const getSession = async (sessionId: string): Promise<SessionData> => {
  try {
    // const response = await get(`/sessions/${sessionId}`);
    // return response;
    
    // Mock response for development
    return {
      id: sessionId,
      startTime: Date.now() - 600000,
      endTime: Date.now(),
      duration: 600000,
      motionData: [],
      metrics: {
        averageAccuracy: 0.85,
        timingScore: 0.78,
        movementQuality: 0.82,
      },
    };
  } catch (error) {
    console.error('Error fetching session:', error);
    throw error;
  }
};
