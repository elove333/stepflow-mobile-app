import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CameraViewProps {
  isActive: boolean;
}

/**
 * CameraView Component
 * Displays camera feed for motion tracking
 */
const CameraView: React.FC<CameraViewProps> = ({isActive}) => {
  return (
    <View style={styles.container}>
      {isActive ? (
        <View style={styles.cameraActive}>
          <Text style={styles.cameraText}>📹 Camera Active</Text>
          <Text style={styles.placeholderText}>
            Camera feed will appear here
          </Text>
        </View>
      ) : (
        <View style={styles.cameraInactive}>
          <Text style={styles.cameraText}>📷 Camera Ready</Text>
          <Text style={styles.placeholderText}>
            Start a session to activate camera
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraActive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraInactive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  placeholderText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
  },
});

export default CameraView;
