/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-19 15:16:14
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-19 22:49:37
 * @FilePath: /small-days/babel.config.js
 * @Description:
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      // babel-plugin-transform-remove-console 可以帮你移除所有的console.*调用
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/components',
          '@config': './src/config',
          '@pages': './src/pages',
          '@api': './src/api',
          '@stores': './src/stores',
          '@types': './src/types',
          '@styles': './src/common/styles/index',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
