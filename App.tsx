/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-19 23:04:14
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-26 12:00:04
 * @FilePath: /small-days/App.tsx
 * @Description:
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {RootStackScreen} from 'src/navigator';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {StoreContext, rootStore} from '@stores/index';
import Theme from '../small-days/src/commom/theme';
import RootStack from '../small-days/src/navigator/MainTab';

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  const theme = Theme.useTheme();

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreContext.Provider value={rootStore}>
      <NavigationContainer theme={theme} ref={navigationRef}>
        <RootStackScreen navigation={RootStack} />
      </NavigationContainer>
    </StoreContext.Provider>
  );
}

export default App;
