import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useAppState} from '@/state/AppStateContext';
import {useMotionTracking} from '@/tracking/hooks/useMotionTracking';
import {sendSessionData} from '@/api/SessionService';
import CameraView from '@/components/CameraView';
import MetricsDisplay from '@/components/MetricsDisplay';

/**
 * Training Screen - Active training session
 * Displays camera feed, motion tracking, and real-time feedback
 */
const TrainingScreen: React.FC = () => {
  const {currentSession, startSession, endSession} = useAppState();
  const {isTracking, startTracking, stopTracking, motionData} =
    useMotionTracking();
  const [sessionActive, setSessionActive] = useState(false);

  const handleStartSession = async () => {
    try {
      await startTracking();
      startSession();
      setSessionActive(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to start tracking session');
      console.error(error);
    }
  };

  const handleEndSession = async () => {
    try {
      await stopTracking();
      
      if (currentSession) {
        // Send session data to backend
        await sendSessionData(currentSession);
      }
      
      endSession();
      setSessionActive(false);
      Alert.alert('Success', 'Session completed and saved!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save session data');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <CameraView isActive={sessionActive} />
      </View>

      <View style={styles.metricsContainer}>
        <MetricsDisplay motionData={motionData} isTracking={isTracking} />
      </View>

      <View style={styles.controlsContainer}>
        {!sessionActive ? (
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartSession}>
            <Text style={styles.buttonText}>Start Session</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.stopButton}
            onPress={handleEndSession}>
            <Text style={styles.buttonText}>End Session</Text>
          </TouchableOpacity>
        )}
      </View>

      {sessionActive && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            {isTracking ? '🟢 Tracking Active' : '🔴 Initializing...'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 2,
    backgroundColor: '#1a1a1a',
  },
  metricsContainer: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    padding: 16,
  },
  controlsContainer: {
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  startButton: {
    backgroundColor: '#00C853',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  stopButton: {
    backgroundColor: '#D32F2F',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 8,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TrainingScreen;
