import React, {createContext, useContext, useState, ReactNode} from 'react';
import {SessionData} from '@/api/SessionService';

interface AppSettings {
  cameraEnabled: boolean;
  sensorsEnabled: boolean;
  aiAnalysisEnabled: boolean;
  autoSave: boolean;
}

interface AppState {
  currentSession: SessionData | null;
  settings: AppSettings;
  isLoading: boolean;
}

interface AppStateContextType extends AppState {
  startSession: () => void;
  endSession: () => void;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  setLoading: (loading: boolean) => void;
}

const defaultSettings: AppSettings = {
  cameraEnabled: true,
  sensorsEnabled: true,
  aiAnalysisEnabled: true,
  autoSave: true,
};

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

/**
 * App State Provider
 * Manages global application state
 */
export const AppStateProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [currentSession, setCurrentSession] = useState<SessionData | null>(
    null,
  );
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(false);

  const startSession = () => {
    const newSession: SessionData = {
      id: `session_${Date.now()}`,
      startTime: Date.now(),
      endTime: 0,
      duration: 0,
      motionData: [],
      metrics: {
        averageAccuracy: 0,
        timingScore: 0,
        movementQuality: 0,
      },
    };
    setCurrentSession(newSession);
    console.log('Session started:', newSession.id);
  };

  const endSession = () => {
    if (currentSession) {
      const updatedSession = {
        ...currentSession,
        endTime: Date.now(),
        duration: Date.now() - currentSession.startTime,
      };
      console.log('Session ended:', updatedSession.id);
      setCurrentSession(null);
    }
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({...prev, ...newSettings}));
    console.log('Settings updated:', newSettings);
  };

  const value: AppStateContextType = {
    currentSession,
    settings,
    isLoading,
    startSession,
    endSession,
    updateSettings,
    setLoading: setIsLoading,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

/**
 * Hook to use app state
 */
export const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
};
