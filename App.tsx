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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigator from 'src/navigator';
import {useNavigationContainerRef} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {StoreContext, rootStore} from '@stores/index';

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreContext.Provider value={rootStore}>
      <Navigator />
    </StoreContext.Provider>
  );
}

export default App;
