# StepFlow Mobile App - Project Structure

## Overview
This document provides a detailed view of the StepFlow mobile app architecture and file organization.

## Directory Structure

```
stepflow-mobile-app/
├── src/
│   ├── core/              # App Core (Branch 2.1)
│   │   ├── AppCore.tsx           - Main app component
│   │   ├── AppNavigator.tsx      - Navigation configuration
│   │   ├── AppInitializer.ts     - App initialization logic
│   │   └── index.ts              - Core exports
│   │
│   ├── screens/           # UI Screens (Branch 2.2)
│   │   ├── HomeScreen.tsx        - Dashboard/home screen
│   │   ├── TrainingScreen.tsx    - Training session interface
│   │   ├── ProgressScreen.tsx    - Progress tracking view
│   │   ├── SettingsScreen.tsx    - App settings
│   │   └── index.ts              - Screen exports
│   │
│   ├── components/        # Components (Branch 2.3)
│   │   ├── CameraView.tsx        - Camera feed display
│   │   ├── MetricsDisplay.tsx    - Motion metrics display
│   │   ├── ProgressChart.tsx     - Progress visualization
│   │   ├── FeedbackCard.tsx      - AI feedback card
│   │   └── index.ts              - Component exports
│   │
│   ├── tracking/          # Motion Tracking (Branch 2.4)
│   │   ├── TrackingManager.ts    - Tracking coordination
│   │   ├── CameraTracking.ts     - Camera-based tracking
│   │   ├── SensorTracking.ts     - Sensor data handling
│   │   ├── hooks/
│   │   │   └── useMotionTracking.ts - Motion tracking hook
│   │   └── index.ts              - Tracking exports
│   │
│   ├── api/               # API Layer (Branch 2.5)
│   │   ├── ApiClient.ts          - HTTP client & interceptors
│   │   ├── SessionService.ts     - Session API endpoints
│   │   ├── ProgressService.ts    - Progress API endpoints
│   │   └── index.ts              - API exports
│   │
│   ├── state/             # State Management (Branch 2.6)
│   │   ├── AppStateContext.tsx   - Global state context
│   │   └── index.ts              - State exports
│   │
│   ├── utils/             # Utilities (Branch 2.7)
│   │   ├── dateUtils.ts          - Date/time utilities
│   │   ├── motionUtils.ts        - Motion data processing
│   │   ├── validation.ts         - Input validation
│   │   └── index.ts              - Utility exports
│   │
│   ├── assets/            # Assets (Branch 2.8)
│   │   ├── images/               - App images & icons
│   │   ├── fonts/                - Custom fonts
│   │   └── README.md             - Assets documentation
│   │
│   ├── config/            # Config (Branch 2.9)
│   │   ├── constants.ts          - App constants
│   │   ├── environment.ts        - Environment config
│   │   └── index.ts              - Config exports
│   │
│   └── tests/             # Tests (Branch 2.10)
│       ├── setup.ts              - Test configuration
│       ├── App.test.tsx          - App component tests
│       ├── dateUtils.test.ts     - Date utility tests
│       ├── motionUtils.test.ts   - Motion utility tests
│       └── validation.test.ts    - Validation tests
│
├── App.tsx                # Root app component
├── index.js               # App entry point
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler config
├── jest.config.js         # Jest test configuration
├── app.json               # React Native app config
├── .eslintrc.js          # ESLint configuration
├── .prettierrc.js        # Prettier configuration
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## Architecture Layers

### 1. Presentation Layer
- **Screens**: Full-page views with navigation
- **Components**: Reusable UI elements
- **Styling**: Component-level StyleSheet definitions

### 2. Business Logic Layer
- **State Management**: Global app state via Context API
- **Hooks**: Custom React hooks for reusable logic
- **Services**: Business logic and data transformations

### 3. Data Layer
- **API Services**: Backend communication
- **Tracking Services**: Motion and sensor data
- **Local Storage**: AsyncStorage for persistence

### 4. Utility Layer
- **Utils**: Helper functions and shared logic
- **Config**: Configuration and constants
- **Validation**: Input and data validation

## Key Features by Module

### App Core
- Application initialization
- Navigation routing
- Root component setup

### UI Screens
- **Home**: Main dashboard with quick actions
- **Training**: Active session with camera feed
- **Progress**: Statistics and AI feedback history
- **Settings**: User preferences and configuration

### Components
- **CameraView**: Displays camera feed during tracking
- **MetricsDisplay**: Shows real-time motion data
- **ProgressChart**: Visualizes progress over time
- **FeedbackCard**: Displays AI feedback items

### Motion Tracking
- Camera-based pose detection
- Accelerometer and gyroscope integration
- Motion data processing and filtering

### API Layer
- RESTful API client with Axios
- Session data submission
- Progress and feedback retrieval
- Request/response interceptors

### State Management
- Global application state
- Session management
- Settings persistence
- Loading states

### Utilities
- Date and time formatting
- Motion data calculations
- Input validation
- Vector mathematics

## TypeScript Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
@/core/*       -> src/core/*
@/screens/*    -> src/screens/*
@/components/* -> src/components/*
@/tracking/*   -> src/tracking/*
@/api/*        -> src/api/*
@/state/*      -> src/state/*
@/utils/*      -> src/utils/*
@/assets/*     -> src/assets/*
@/config/*     -> src/config/*
```

## Testing Strategy

- **Unit Tests**: Individual utility functions
- **Component Tests**: UI component rendering
- **Integration Tests**: Feature workflows
- **E2E Tests**: Full user journeys (future)

## Development Workflow

1. **Start Metro Bundler**: `npm start`
2. **Run iOS**: `npm run ios`
3. **Run Android**: `npm run android`
4. **Run Tests**: `npm test`
5. **Type Check**: `npm run type-check`
6. **Lint**: `npm run lint`

## Build Configuration

- **Development**: Local API, debug tools enabled
- **Staging**: Staging API, logging enabled
- **Production**: Production API, optimized build

## Dependencies

### Core
- React Native 0.72
- React 18
- TypeScript 5

### Navigation
- React Navigation 6
- Stack Navigator

### Data & State
- Axios (HTTP client)
- AsyncStorage (persistence)
- Context API (state)

### Motion Tracking
- react-native-camera
- react-native-sensors
- react-native-reanimated

### Development
- Jest (testing)
- ESLint (linting)
- Prettier (formatting)
- TypeScript (type safety)

## Next Steps

1. Add actual camera implementation with react-native-vision-camera
2. Integrate real sensor data streams
3. Connect to backend API
4. Implement local data persistence
5. Add authentication flow
6. Enhance UI with animations
7. Add comprehensive E2E tests
8. Optimize performance
9. Add offline mode support
10. Implement push notifications
