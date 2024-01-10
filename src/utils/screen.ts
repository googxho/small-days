/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:44:45
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-21 21:45:00
 * @FilePath: /small-days/src/utils/screen.ts
 * @Description:
 */
import {Dimensions, Platform, NativeModules} from 'react-native';

const {PlatformConstants = {}} = NativeModules;
const {minor = 0} = PlatformConstants.reactNativeVersion || {};

export const window = Dimensions.get('window');

// 屏幕尺寸
export const screenRect = {
  height: window.height,
  width: window.width,
};

// 是否为 IOS 平台
export const isIOS = Platform.OS === 'ios';

// 是否为 IPhoneX
export const isIphoneX = () => {
  const iPhoneXFlag = screenRect.height === 375 && screenRect.width === 812;
  const iPhone12Flag = screenRect.height === 844 && screenRect.width === 390;
  return isIOS && (iPhoneXFlag || iPhone12Flag);
};
