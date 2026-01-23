# Contributing to StepFlow Mobile App

Thank you for your interest in contributing to StepFlow! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Project Structure](#project-structure)
5. [Coding Standards](#coding-standards)
6. [Testing Guidelines](#testing-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Issue Guidelines](#issue-guidelines)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Keep discussions on-topic and professional

## Getting Started

### Prerequisites

Before you begin, ensure you have:

- Node.js >= 16
- npm or yarn
- Git
- React Native development environment set up
  - For iOS: Xcode (macOS only)
  - For Android: Android Studio

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/stepflow-mobile-app.git
   cd stepflow-mobile-app
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/elove333/stepflow-mobile-app.git
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. For iOS, install pods:
   ```bash
   cd ios && pod install && cd ..
   ```

## Development Workflow

### Branch Naming Convention

Use descriptive branch names:
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation changes
- `refactor/description` - Code refactoring
- `test/description` - Test additions or updates

Example: `feature/add-progress-chart`

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Run tests:
   ```bash
   npm test
   ```

4. Run type checking:
   ```bash
   npm run type-check
   ```

5. Run linter:
   ```bash
   npm run lint
   ```

6. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test additions or updates
- `chore:` - Build process or auxiliary tool changes

Example:
```
feat: add progress chart component

- Implement progress chart using react-native-chart-kit
- Add data transformation utilities
- Update ProgressScreen to use new chart
```

## Project Structure

The app is organized into 10 main branches:

1. **App Core** (`src/core/`) - Main app logic and navigation
2. **UI Screens** (`src/screens/`) - Screen components
3. **Components** (`src/components/`) - Reusable UI components
4. **Motion Tracking** (`src/tracking/`) - Camera and sensor tracking
5. **API Layer** (`src/api/`) - Backend communication
6. **State Management** (`src/state/`) - Global state
7. **Utilities** (`src/utils/`) - Helper functions
8. **Assets** (`src/assets/`) - Images and fonts
9. **Config** (`src/config/`) - Configuration files
10. **Tests** (`src/tests/`) - Test files

See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed structure information.

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define interfaces for component props
- Use type inference where appropriate
- Avoid `any` type unless absolutely necessary

Example:
```typescript
interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, disabled = false}) => {
  // Implementation
};
```

### React/React Native

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract complex logic into custom hooks
- Use StyleSheet for styling

Example:
```typescript
const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
```

### File Organization

- One component per file
- Use index.ts for exports
- Group related files in directories
- Use path aliases (@/core, @/components, etc.)

### Naming Conventions

- **Components**: PascalCase (e.g., `CameraView.tsx`)
- **Utilities**: camelCase (e.g., `dateUtils.ts`)
- **Hooks**: camelCase with "use" prefix (e.g., `useMotionTracking.ts`)
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase with descriptive names

## Testing Guidelines

### Unit Tests

Write unit tests for:
- Utility functions
- Complex logic
- Data transformations

Example:
```typescript
describe('formatDuration', () => {
  it('should format duration correctly', () => {
    expect(formatDuration(65000)).toBe('01:05');
  });
});
```

### Component Tests

Test component behavior:
- Rendering
- User interactions
- State changes

Example:
```typescript
describe('Button', () => {
  it('should call onPress when clicked', () => {
    const onPress = jest.fn();
    const {getByText} = render(<Button title="Click" onPress={onPress} />);
    fireEvent.press(getByText('Click'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

### Test Coverage

- Aim for at least 80% code coverage
- Focus on critical paths
- Don't test implementation details

## Pull Request Process

### Before Submitting

1. Update your branch with latest upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Ensure all tests pass:
   ```bash
   npm test
   ```

3. Ensure code is properly formatted:
   ```bash
   npm run lint
   ```

4. Update documentation if needed

### Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request on GitHub

3. Fill out the PR template:
   - Clear description of changes
   - Link to related issues
   - Screenshots for UI changes
   - Testing instructions

4. Request review from maintainers

### PR Review Process

- Maintainers will review your code
- Address feedback and comments
- Make requested changes
- Once approved, your PR will be merged

### PR Checklist

- [ ] Code follows project coding standards
- [ ] Tests added/updated and passing
- [ ] Documentation updated if needed
- [ ] No breaking changes (or properly documented)
- [ ] Commit messages follow convention
- [ ] PR description is clear and complete

## Issue Guidelines

### Reporting Bugs

Include:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Device/OS information
- Screenshots if applicable

Example:
```
Title: Camera feed not displaying on Android 12

Description:
When starting a training session, the camera feed shows a black screen instead of the camera view.

Steps to reproduce:
1. Open the app
2. Navigate to Training screen
3. Start a session
4. Camera feed is black

Expected: Camera feed should display
Actual: Black screen

Device: Samsung Galaxy S21
OS: Android 12
App Version: 1.0.0
```

### Feature Requests

Include:
- Clear description of the feature
- Use case and motivation
- Proposed implementation (optional)
- Examples from other apps (optional)

### Questions

- Search existing issues first
- Provide context and what you've tried
- Be specific about what you need help with

## Getting Help

- Check existing documentation
- Search closed issues
- Ask in discussions
- Tag maintainers if urgent

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- GitHub contributors page

Thank you for contributing to StepFlow! 🎉
