# StepFlow Mobile App
A rhythm training app that uses AI powered motion tracking to teach timing, movement accuracy, and rhythm control.

## 🎯 Purpose

StepFlow is designed to help users improve their rhythm and timing through:
- Real-time motion tracking using camera and device sensors
- AI-powered feedback and analysis
- Progress tracking and performance metrics
- Interactive training sessions

## 📱 Features

- **Motion Tracking**: Uses device camera and sensors (accelerometer, gyroscope) to track movement
- **AI Analysis**: Sends session data to backend for intelligent feedback
- **Progress Dashboard**: View statistics, charts, and improvement metrics
- **Training Sessions**: Guided rhythm training with real-time feedback
- **Customizable Settings**: Configure tracking preferences and app behavior

## 🏗️ App Structure

The application is organized into the following high-level components:

### 1. **App Core** (`src/core/`)
- `AppCore.tsx` - Main application component
- `AppNavigator.tsx` - Navigation configuration
- `AppInitializer.ts` - App initialization logic

### 2. **UI Screens** (`src/screens/`)
- `HomeScreen.tsx` - Main dashboard and entry point
- `TrainingScreen.tsx` - Active training session interface
- `ProgressScreen.tsx` - Progress tracking and statistics
- `SettingsScreen.tsx` - App configuration

### 3. **Components** (`src/components/`)
- `CameraView.tsx` - Camera feed display
- `MetricsDisplay.tsx` - Real-time motion metrics
- `ProgressChart.tsx` - Progress visualization
- `FeedbackCard.tsx` - AI feedback display

### 4. **Motion Tracking** (`src/tracking/`)
- `TrackingManager.ts` - Tracking coordination
- `CameraTracking.ts` - Camera-based motion detection
- `SensorTracking.ts` - Device sensor integration
- `hooks/useMotionTracking.ts` - Motion tracking React hook

### 5. **API Layer** (`src/api/`)
- `ApiClient.ts` - HTTP client configuration
- `SessionService.ts` - Session data endpoints
- `ProgressService.ts` - Progress and feedback endpoints

### 6. **State Management** (`src/state/`)
- `AppStateContext.tsx` - Global app state management

### 7. **Utilities** (`src/utils/`)
- `dateUtils.ts` - Date and time formatting
- `motionUtils.ts` - Motion data processing
- `validation.ts` - Input validation

### 8. **Assets** (`src/assets/`)
- `images/` - App images and icons
- `fonts/` - Custom fonts

### 9. **Config** (`src/config/`)
- `constants.ts` - App constants
- `environment.ts` - Environment configuration

### 10. **Tests** (`src/tests/`)
- Test setup and unit tests

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- React Native development environment
- iOS: Xcode (for iOS development)
- Android: Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elove333/stepflow-mobile-app.git
cd stepflow-mobile-app
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies (iOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

#### Start Metro Bundler
```bash
npm start
```

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## 🛠️ Development

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📦 Build

### Android
```bash
cd android && ./gradlew assembleRelease
```

### iOS
```bash
cd ios && xcodebuild -workspace StepFlow.xcworkspace -scheme StepFlow -configuration Release
```

## 🔧 Configuration

### API Configuration

Update the API base URL in `src/config/constants.ts`:
```typescript
export const API_BASE_URL = 'https://your-api-url.com/v1';
```

### Environment Variables

Create a `.env` file in the root directory:
```
API_BASE_URL=https://your-api-url.com/v1
```

## 📐 Architecture

The app follows a modular architecture with clear separation of concerns:

- **Presentation Layer**: React Native components and screens
- **Business Logic**: Custom hooks and services
- **Data Layer**: API services and state management
- **Utilities**: Helper functions and shared logic

## 🔐 Permissions

The app requires the following permissions:
- **Camera**: For motion tracking and pose detection
- **Motion & Fitness**: For accelerometer and gyroscope data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

StepFlow Team

## 📞 Support

For support, please open an issue in the GitHub repository.

---

Built with ❤️ using React Native
