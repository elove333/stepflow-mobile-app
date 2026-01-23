import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@/core/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

/**
 * Home Screen - Main dashboard
 * Entry point for users with quick access to all features
 */
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to StepFlow</Text>
      <Text style={styles.subtitle}>
        AI-Powered Rhythm Training with Motion Tracking
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Training')}>
          <Text style={styles.buttonText}>Start Training</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Progress')}>
          <Text style={styles.buttonText}>View Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Track your movement with camera and sensors
        </Text>
        <Text style={styles.infoText}>Get real-time AI feedback</Text>
        <Text style={styles.infoText}>Improve your rhythm and timing</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200EE',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  secondaryButton: {
    backgroundColor: '#03DAC6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default HomeScreen;
