/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-19 23:04:14
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-26 12:00:04
 * @FilePath: /small-days/App.tsx
 * @Description:
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import axios from 'axios';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from 'src/navigator';
import {useRequest} from 'ahooks';
import {
  useNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {configurePersistable} from 'mobx-persist-store';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

// add this line inside your App.tsx
if (__DEV__) {
  initializeMMKVFlipper({default: storage});
}

configurePersistable({
  storage: {
    setItem: (key: string, data: any) => storage.set(key, data),
    getItem: (key: string) => storage.getString(key) || null,
    removeItem: (key: string) => storage.delete(key),
  },
  // expireIn: 1000 * 3600 * 24 * 10, // 10天到期，默认无限期
  // removeOnExpiration: true, // 到期后删除
  stringify: true,
});

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <Navigator />;
}

export default App;
