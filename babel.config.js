const aliases = require('./aliases');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [require.resolve('babel-plugin-module-resolver'), { alias: aliases }],
  ],
};
