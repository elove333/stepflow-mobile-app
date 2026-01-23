/**
 * Test Setup
 * Configuration for Jest tests
 */

// Mock react-native modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock navigation
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Mock react-native-sensors
jest.mock('react-native-sensors', () => ({
  accelerometer: {
    subscribe: jest.fn(),
  },
  gyroscope: {
    subscribe: jest.fn(),
  },
}));

// Mock react-native-camera
jest.mock('react-native-camera', () => ({
  RNCamera: {
    Constants: {
      Type: {
        back: 'back',
        front: 'front',
      },
    },
  },
}));

// Silence console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
