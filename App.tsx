import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppCore from './src/core/AppCore';
import {AppStateProvider} from './src/state/AppStateContext';

/**
 * Main App Component
 * Entry point for the StepFlow mobile application
 */
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AppStateProvider>
        <AppCore />
      </AppStateProvider>
    </SafeAreaProvider>
  );
};

export default App;
