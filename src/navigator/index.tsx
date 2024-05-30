/*
 * @Author: GaoXiong
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @Date: 2023-01-04 18:54:11
 * @LastEditTime: 2023-11-24 22:58:34
 * @FilePath: /small-days/src/navigator/index.tsx
 * @Description:
 */
import React, {useEffect, useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import MainTabScreen, {MainTabParamList} from './MainTab';
import DetailScreen from '@pages/detail';
import LoginScreen from '@pages/login';
import WelcomeScreen from '@pages/welcome';
import HomeScreen from '@pages/home';
import ExampleScreen from '@pages/example-kuki-ui';
import {MainPageScreen} from '@pages/main-page';
import Theme from 'src/commom/theme';
import {navigationRef, useNavigate} from './router';

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Detail: undefined;
  Home: undefined;
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
  Example: undefined;
  MainPage: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

const hideHeaderOptions = {
  title: '',
  headerBackTitle: '',
  headerShown: false,
};

const rootStackScreenMap: {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: any;
}[] = [
  {name: 'Welcome', component: WelcomeScreen, options: hideHeaderOptions},
  {name: 'MainTab', component: MainTabScreen, options: {headerShown: false}},
  {name: 'Detail', component: DetailScreen, options: hideHeaderOptions},
  {name: 'Home', component: HomeScreen, options: hideHeaderOptions},
  {name: 'Example', component: ExampleScreen, options: hideHeaderOptions},
  {name: 'MainPage', component: MainPageScreen, options: hideHeaderOptions},
];

export const RootStackScreen: React.FC<{
  navigation: RootStackNavigation | any;
}> = () => {
  const rootStackScreenMemo: JSX.Element[] = useMemo(() => {
    let stackScreenArr: JSX.Element[] = [];
    rootStackScreenMap?.map(item => {
      stackScreenArr.push(
        <RootStack.Screen
          key={`${item.name}`}
          name={item.name}
          component={item.component}
          options={item.options}
        />,
      );
    });
    return stackScreenArr;
  }, []);

  const nav = useNavigate();

  useEffect(() => {
    nav('Login');
  });

  return (
    <RootStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <RootStack.Group>{rootStackScreenMemo}</RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

function Navigator() {
  const theme = Theme.useTheme();
  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <RootStackScreen navigation={RootStack} />
    </NavigationContainer>
  );
}

export default observer(Navigator);
