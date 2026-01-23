/**
 * Environment Configuration
 */

export const ENV = {
  development: {
    apiBaseUrl: 'http://localhost:3000/api/v1',
    enableLogging: true,
    enableDebugTools: true,
  },
  staging: {
    apiBaseUrl: 'https://staging-api.stepflow.app/v1',
    enableLogging: true,
    enableDebugTools: false,
  },
  production: {
    apiBaseUrl: 'https://api.stepflow.app/v1',
    enableLogging: false,
    enableDebugTools: false,
  },
};

// Determine current environment
const getCurrentEnv = () => {
  if (__DEV__) {
    return ENV.development;
  }
  // Can be configured based on build settings
  return ENV.production;
};

export const currentEnv = getCurrentEnv();
