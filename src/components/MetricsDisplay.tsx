import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface MotionData {
  accelerometer?: {x: number; y: number; z: number};
  gyroscope?: {x: number; y: number; z: number};
  timestamp?: number;
}

interface MetricsDisplayProps {
  motionData: MotionData | null;
  isTracking: boolean;
}

/**
 * MetricsDisplay Component
 * Shows real-time motion tracking metrics
 */
const MetricsDisplay: React.FC<MetricsDisplayProps> = ({
  motionData,
  isTracking,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motion Metrics</Text>

      {isTracking && motionData ? (
        <>
          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>Accelerometer:</Text>
            <Text style={styles.metricValue}>
              X: {motionData.accelerometer?.x.toFixed(2) || '0.00'} Y:{' '}
              {motionData.accelerometer?.y.toFixed(2) || '0.00'} Z:{' '}
              {motionData.accelerometer?.z.toFixed(2) || '0.00'}
            </Text>
          </View>

          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>Gyroscope:</Text>
            <Text style={styles.metricValue}>
              X: {motionData.gyroscope?.x.toFixed(2) || '0.00'} Y:{' '}
              {motionData.gyroscope?.y.toFixed(2) || '0.00'} Z:{' '}
              {motionData.gyroscope?.z.toFixed(2) || '0.00'}
            </Text>
          </View>
        </>
      ) : (
        <Text style={styles.noDataText}>
          {isTracking ? 'Waiting for data...' : 'Start tracking to see metrics'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  metricRow: {
    marginBottom: 12,
  },
  metricLabel: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'monospace',
  },
  noDataText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MetricsDisplay;
