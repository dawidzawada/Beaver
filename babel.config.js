module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          root: ['./'],
          alias: {
            '@scren': './src/screen',
            '@domain': './src/domain',
            '@shared': './src/shared',
            '@store': './src/store',
            '@src': './src',
          },
        },
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
