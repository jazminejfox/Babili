/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'react-native-dotenv'],
  };
};
