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
import {MeScreen} from '@pages/me';
import IconFont from 'src/iconfont';

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
        name="Home"
        options={{
          title: '消息',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconFont name="shouye" color={color} />
            ) : (
              <IconFont name="shouye" color={color} />
            );
          },
        }}
        component={MeScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{
          title: '朋友',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconFont
                name="yuangongjiangliwodejianglijiangpinwodelipin"
                color={color}
              />
            ) : (
              <IconFont
                name="yuangongjiangliwodejianglijiangpinwodelipin"
                color={color}
              />
            );
          },
        }}
        component={MeScreen}
      />
      <Tab.Screen
        name="Me"
        options={{
          title: '我的',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconFont name="wode" color={color} />
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
