import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import AppNavigator from './AppNavigator';
import {initializeApp} from './AppInitializer';

/**
 * AppCore - Main application core component
 * Handles app initialization and root navigation
 */
const AppCore: React.FC = () => {
  useEffect(() => {
    // Initialize app services
    initializeApp();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6200EE" />
      <AppNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppCore;
