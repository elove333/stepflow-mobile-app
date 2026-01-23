module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/core': './src/core',
          '@/screens': './src/screens',
          '@/components': './src/components',
          '@/tracking': './src/tracking',
          '@/api': './src/api',
          '@/state': './src/state',
          '@/utils': './src/utils',
          '@/assets': './src/assets',
          '@/config': './src/config',
        },
      },
    ],
  ],
};
