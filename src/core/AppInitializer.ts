import {initializeTracking} from '@/tracking/TrackingManager';
import {initializeAPI} from '@/api/ApiClient';

/**
 * Initialize application services and dependencies
 */
export const initializeApp = async (): Promise<void> => {
  try {
    console.log('Initializing StepFlow app...');
    
    // Initialize motion tracking services
    await initializeTracking();
    
    // Initialize API client
    initializeAPI();
    
    console.log('StepFlow app initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

/**
 * Cleanup application resources
 */
export const cleanupApp = async (): Promise<void> => {
  try {
    console.log('Cleaning up StepFlow app...');
    // Add cleanup logic here
  } catch (error) {
    console.error('Error cleaning up app:', error);
  }
};
