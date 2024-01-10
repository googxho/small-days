/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 22:25:09
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-21 22:25:17
 * @FilePath: /small-days/src/pages/detail/index.tsx
 * @Description:
 */
import * as React from 'react';
import { Text, View } from 'react-native';
import NativeInfoView from 'src/component/NativeInfoView';

export function DetailScreen() {
  return (
    <View style={{ backgroundColor: '#ffffff', width: '100%', height: '100%' }}>
      <Text>Detail</Text>
      <NativeInfoView />
    </View>
  );
}
