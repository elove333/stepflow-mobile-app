import {useState, useCallback} from 'react';
import {startCameraTracking, stopCameraTracking} from '../CameraTracking';
import {
  startSensorTracking,
  stopSensorTracking,
  getLatestSensorData,
  SensorData,
} from '../SensorTracking';

/**
 * Custom hook for motion tracking
 * Manages camera and sensor tracking state
 */
export const useMotionTracking = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [motionData, setMotionData] = useState<SensorData | null>(null);

  const startTracking = useCallback(async () => {
    try {
      await startCameraTracking();
      await startSensorTracking();
      setIsTracking(true);

      // Start polling sensor data
      const interval = setInterval(() => {
        const data = getLatestSensorData();
        if (data) {
          setMotionData(data);
        }
      }, 100); // Update every 100ms

      // Store interval ID for cleanup
      (startTracking as any).intervalId = interval;
    } catch (error) {
      console.error('Error starting tracking:', error);
      throw error;
    }
  }, []);

  const stopTracking = useCallback(async () => {
    try {
      // Clear interval
      if ((startTracking as any).intervalId) {
        clearInterval((startTracking as any).intervalId);
      }

      await stopCameraTracking();
      await stopSensorTracking();
      setIsTracking(false);
      setMotionData(null);
    } catch (error) {
      console.error('Error stopping tracking:', error);
    }
  }, [startTracking]);

  return {
    isTracking,
    motionData,
    startTracking,
    stopTracking,
  };
};
