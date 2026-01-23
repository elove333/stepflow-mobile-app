/**
 * Application Constants
 */

// API Configuration
export const API_BASE_URL =
  process.env.API_BASE_URL || 'https://api.stepflow.app/v1';
export const API_TIMEOUT = 30000; // 30 seconds

// Tracking Configuration
export const CAMERA_FPS = 30;
export const CAMERA_RESOLUTION = {width: 640, height: 480};
export const SENSOR_UPDATE_INTERVAL = 100; // milliseconds

// Session Configuration
export const MIN_SESSION_DURATION = 30000; // 30 seconds
export const MAX_SESSION_DURATION = 3600000; // 1 hour

// UI Constants
export const COLORS = {
  primary: '#6200EE',
  secondary: '#03DAC6',
  success: '#00C853',
  warning: '#FFB300',
  error: '#D32F2F',
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

// Feature Flags
export const FEATURES = {
  cameraTracking: true,
  sensorTracking: true,
  aiAnalysis: true,
  offlineMode: false,
};
