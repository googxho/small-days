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
        root: ['./'],
        alias: {
          '^@/(.+)': './src/\\1',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
