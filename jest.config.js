module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  moduleNameMapper: {
    '^@/core/(.*)$': '<rootDir>/src/core/$1',
    '^@/screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/tracking/(.*)$': '<rootDir>/src/tracking/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/state/(.*)$': '<rootDir>/src/state/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/tests/**',
  ],
};
