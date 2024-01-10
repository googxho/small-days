/*
 * @Author: GaoXiong
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @Date: 2023-01-04 18:54:11
 * @LastEditTime: 2023-11-24 22:58:34
 * @FilePath: /small-days/src/navigator/index.tsx
 * @Description:
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import MainTabScreen, { MainTabParamList } from './MainTab';
import { DetailScreen } from '@pages/detail';
import LoginScreen from '@pages/login';
import WelcomeScreen from '@pages/welcome';
// import { TableScreen } from '@/pages/table';

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Detail: undefined;
  H5: {
    url: string;
    title?: string;
  };
  Welcome: undefined;
  Login: undefined;
  Animate: undefined;
  Fs: undefined;
  Camera: undefined;
  Table: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

function RootStackScreen({ navigation }: { navigation: RootStackNavigation }) {
  const hideHeaderOptions = {
    title: '',
    headerBackTitle: '',
    headerShown: false,
  };

  useEffect(() => {
    // navigation.navigate('Login');
  });

  return (
    <RootStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <RootStack.Group>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen
          name="MainTab"
          options={{ headerShown: false }}
          component={MainTabScreen}
        />
        <RootStack.Screen
          name="Detail"
          options={hideHeaderOptions}
          component={DetailScreen}
        />
        {/* <RootStack.Screen
          name="Table"
          options={hideHeaderOptions}
          component={TableScreen}
        /> */}
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <RootStackScreen navigation={RootStack} />
    </NavigationContainer>
  );
}

export default observer(Navigator);
