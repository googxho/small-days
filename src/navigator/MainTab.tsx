/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:40:54
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-22 22:15:00
 * @FilePath: /small-days/src/navigator/MainTab.tsx
 * @Description:
 */
import * as React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {MainTabBar} from './MainTabBar';
// import {ContactScreen} from '@/pages/contact';
import {RouteProp} from '@react-navigation/native';
import {RootStackNavigation, RootStackParamList} from '.';
import {MeScreen} from '@/pages/me';
import IconFont from 'src/iconfont';
import {MainPageScreen} from '@/pages/main-page';
import PrintTableScreen from '@/pages/table';

export type MainTabParamList = {
  Home: undefined;
  Contact: undefined;
  Me: undefined;
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabParamList>;

export interface MainTabProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'MainTab'>;
}

const Tab = createBottomTabNavigator();

const RootStack: React.FC<MainTabProps> = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MainTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0025ff',
      }}>
      <Tab.Screen
        name="MainPage"
        options={{
          title: '首页',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconFont name="a-appround15" color={color} />
            ) : (
              <IconFont name="shouye" color={color} />
            );
          },
        }}
        component={MainPageScreen}
      />
      <Tab.Screen
        name="PrintTable"
        options={{
          title: '朋友',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconFont name="a-appround16" />
            ) : (
              <IconFont name="a-appround16" color={'#bfbfbf'} />
            );
          },
        }}
        component={PrintTableScreen}
      />
      <Tab.Screen
        name="Me"
        options={{
          title: '我的',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconFont name="a-appround23" />
            ) : (
              <IconFont name="wode" color={color} />
            );
          },
        }}
        component={MeScreen}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
