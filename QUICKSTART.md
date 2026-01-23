# Quick Start Guide - StepFlow Mobile App

This guide will help you get the StepFlow mobile app up and running quickly.

## Prerequisites Check

Before starting, ensure you have these installed:

```bash
# Check Node.js version (should be >= 16)
node --version

# Check npm version
npm --version

# Check if you have React Native CLI
npx react-native --version
```

## Installation Steps

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/elove333/stepflow-mobile-app.git
cd stepflow-mobile-app

# Install dependencies
npm install
```

### 2. iOS Setup (macOS only)

```bash
# Install CocoaPods dependencies
cd ios
pod install
cd ..
```

### 3. Android Setup

Make sure you have:
- Android Studio installed
- Android SDK configured
- An emulator running or device connected

```bash
# Check Android setup
adb devices
```

## Running the App

### Option 1: Metro Bundler + Platform

```bash
# Terminal 1: Start Metro Bundler
npm start

# Terminal 2: Run iOS
npm run ios

# OR Terminal 2: Run Android
npm run android
```

### Option 2: Direct Run

```bash
# iOS
npm run ios

# Android
npm run android
```

## Development Workflow

### Common Tasks

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Type check
npm run type-check

# Lint code
npm run lint

# Clear Metro cache
npm start -- --reset-cache
```

### File Watching

Metro bundler automatically watches files and hot-reloads changes. Just save your file and see the changes!

## Project Structure Quick Reference

```
src/
├── core/         - App initialization & navigation
├── screens/      - Full page views
├── components/   - Reusable UI components
├── tracking/     - Motion & sensor tracking
├── api/          - Backend communication
├── state/        - Global state management
├── utils/        - Helper functions
├── config/       - Configuration
├── assets/       - Images & fonts
└── tests/        - Test files
```

## Path Aliases

Use these shortcuts in imports:

```typescript
import {HomeScreen} from '@/screens';
import {CameraView} from '@/components';
import {useMotionTracking} from '@/tracking';
import {API_BASE_URL} from '@/config';
```

## Common Issues & Solutions

### Issue: Metro Bundler Won't Start

```bash
# Clear cache and restart
npm start -- --reset-cache
```

### Issue: iOS Build Fails

```bash
# Clean and reinstall pods
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Issue: Android Build Fails

```bash
# Clean Gradle cache
cd android
./gradlew clean
cd ..
```

### Issue: TypeScript Errors

```bash
# Ensure dependencies are installed
npm install

# Check TypeScript configuration
npm run type-check
```

## Key Features to Explore

### 1. Home Screen
- Main dashboard
- Quick access to training
- Navigation to all features

### 2. Training Screen
- Camera feed (placeholder)
- Motion metrics display
- Start/stop session controls

### 3. Progress Screen
- Session statistics
- AI feedback history
- Progress visualization

### 4. Settings Screen
- Toggle camera/sensors
- AI analysis settings
- Data management

## Next Steps

1. **Explore the Code**: Start with `App.tsx` and follow the component tree
2. **Run Tests**: `npm test` to see the test suite
3. **Make Changes**: Try modifying a screen or component
4. **Check Documentation**: 
   - [README.md](README.md) - Project overview
   - [ARCHITECTURE.md](ARCHITECTURE.md) - Detailed architecture
   - [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines

## Debugging

### iOS Debugging

1. Open Developer Menu: `Cmd + D` (simulator) or shake device
2. Select "Debug JS Remotely" to use Chrome DevTools
3. Or use React Native Debugger

### Android Debugging

1. Open Developer Menu: `Cmd + M` (emulator) or shake device
2. Select "Debug" to use Chrome DevTools
3. View logs: `adb logcat`

### React Native Debugger (Recommended)

```bash
# Install React Native Debugger
brew install --cask react-native-debugger

# Run it
react-native-debugger
```

## Environment Configuration

### Development

Default configuration uses local/mock APIs.

### Custom API URL

Create `.env` file:
```
API_BASE_URL=https://your-api-url.com/v1
```

Update `src/config/environment.ts` to read from environment variables.

## Performance Tips

1. **Enable Fast Refresh**: Already enabled by default
2. **Use Hermes**: Enabled in `android/app/build.gradle`
3. **Optimize Images**: Use appropriate resolutions
4. **Lazy Load Screens**: Use React Navigation's lazy loading

## Useful Commands

```bash
# Install specific package
npm install package-name

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Run specific test file
npm test -- dateUtils.test.ts

# Generate test coverage
npm test -- --coverage
```

## Getting Help

1. **Check Documentation**: Read README, ARCHITECTURE, CONTRIBUTING
2. **Search Issues**: Look for similar problems on GitHub
3. **Ask Questions**: Open a discussion or issue
4. **Check Logs**: Look at console output for errors

## Resources

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Jest Testing Docs](https://jestjs.io/docs/getting-started)

## Quick Tips

✅ **DO:**
- Save often (Fast Refresh will auto-reload)
- Use TypeScript types
- Write tests for new features
- Follow the existing code style
- Check for console warnings

❌ **DON'T:**
- Commit `node_modules/`
- Ignore TypeScript errors
- Skip writing tests
- Make breaking changes without discussion

---

Happy Coding! 🚀

If you run into issues, check [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue on GitHub.
