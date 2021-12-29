module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src/',
          '@pages': './src/pages/',
          '@api': './src/api/',
          '@config': './src/config/',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
