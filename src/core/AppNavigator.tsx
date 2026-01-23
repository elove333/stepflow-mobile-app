import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@/screens/HomeScreen';
import TrainingScreen from '@/screens/TrainingScreen';
import ProgressScreen from '@/screens/ProgressScreen';
import SettingsScreen from '@/screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  Training: undefined;
  Progress: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/**
 * Main navigation configuration
 */
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200EE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'StepFlow'}}
        />
        <Stack.Screen
          name="Training"
          component={TrainingScreen}
          options={{title: 'Training Session'}}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{title: 'Your Progress'}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'Settings'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
