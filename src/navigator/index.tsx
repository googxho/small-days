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
import DetailScreen from '@/pages/detail';
import LoginScreen from '@/pages/login';
import WelcomeScreen from '@/pages/welcome';
import HomeScreen from '@/pages/home';
import ExampleScreen from '@/pages/example-kuki-ui';
import {MainPageScreen} from '@/pages/main-page';
import Theme from 'src/commom/theme';
import {navigationRef, useNavigate} from './router';

// kuki-ui
import KukiButton from '@/pages/example-kuki-ui/pages/button';
import KukiCell from '@/pages/example-kuki-ui/pages/cell';
import KConfigProvider from '@/pages/example-kuki-ui/pages/config-provider';
import KIcon from '@/pages/example-kuki-ui/pages/icon';
import KImage from '@/pages/example-kuki-ui/pages/image';
import KLayout from '@/pages/example-kuki-ui/pages/layout';
import KPopup from '@/pages/example-kuki-ui/pages/popup';
import KToast from '@/pages/example-kuki-ui/pages/toast';
import KTypography from '@/pages/example-kuki-ui/pages/typography';
import KCheckbox from '@/pages/example-kuki-ui/pages/checkbox';
import KDatetimePicker from '@/pages/example-kuki-ui/pages/dateTimePicker';
import KField from '@/pages/example-kuki-ui/pages/field';
import KForm from '@/pages/example-kuki-ui/pages/form';
import KImagePicker from '@/pages/example-kuki-ui/pages/image-picker';
import KInput from '@/pages/example-kuki-ui/pages/input';
import KNumberKeyboard from '@/pages/example-kuki-ui/pages/number-keyboard';
import KPicker from '@/pages/example-kuki-ui/pages/picker';
import KRadio from '@/pages/example-kuki-ui/pages/radio';
import KRate from '@/pages/example-kuki-ui/pages/rate';
import KSearch from '@/pages/example-kuki-ui/pages/search';
import KSelector from '@/pages/example-kuki-ui/pages/selector';
import KSlider from '@/pages/example-kuki-ui/pages/slider';
import KStepper from '@/pages/example-kuki-ui/pages/stepper';
import KSwitch from '@/pages/example-kuki-ui/pages/switch';
import KActionSheet from '@/pages/example-kuki-ui/pages/actionSheet';
import KDialog from '@/pages/example-kuki-ui/pages/dialog';
import KLoading from '@/pages/example-kuki-ui/pages/loading';
import KNotify from '@/pages/example-kuki-ui/pages/notify';
import KOverlay from '@/pages/example-kuki-ui/pages/overlay';
import KSwipeCell from '@/pages/example-kuki-ui/pages/swipeCell';
import KBadge from '@/pages/example-kuki-ui/pages/badge';
import KCircle from '@/pages/example-kuki-ui/pages/circle';
import KCollapse from '@/pages/example-kuki-ui/pages/collapse';
import KDivider from '@/pages/example-kuki-ui/pages/divider';
import KEmpty from '@/pages/example-kuki-ui/pages/empty';
import KImagePreview from '@/pages/example-kuki-ui/pages/image-preview';
import KNoticeBar from '@/pages/example-kuki-ui/pages/notice-bar';
import KPopover from '@/pages/example-kuki-ui/pages/popover';
import KProgress from '@/pages/example-kuki-ui/pages/progress';
import KSwiper from '@/pages/example-kuki-ui/pages/swiper';
import KTag from '@/pages/example-kuki-ui/pages/tag';
import KActionBar from '@/pages/example-kuki-ui/pages/actionBar';
import KGrid from '@/pages/example-kuki-ui/pages/grid';
import KIndexBar from '@/pages/example-kuki-ui/pages/index-bar';
import KNavBar from '@/pages/example-kuki-ui/pages/navbar';
import KTabs from '@/pages/example-kuki-ui/pages/tab';
import KNumberInputKeyBoard from '@/pages/example-kuki-ui/pages/number-input-keyboard';

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

// kuki-ui例子
export const KukiUIRouter: any = [
  {name: 'KButton', component: KukiButton, options: hideHeaderOptions},
  {name: 'KCell', component: KukiCell, options: hideHeaderOptions},
  {
    name: 'KConfigProvider',
    component: KConfigProvider,
    options: hideHeaderOptions,
  },
  {name: 'KIcon', component: KIcon, options: hideHeaderOptions},
  {name: 'KImage', component: KImage, options: hideHeaderOptions},
  {name: 'KLayout', component: KLayout, options: hideHeaderOptions},
  {name: 'KPopup', component: KPopup, options: hideHeaderOptions},
  {name: 'KToast', component: KToast, options: hideHeaderOptions},
  {name: 'KTypography', component: KTypography, options: hideHeaderOptions},
  {name: 'KCheckbox', component: KCheckbox, options: hideHeaderOptions},
  {
    name: 'KDatetimePicker',
    component: KDatetimePicker,
    options: hideHeaderOptions,
  },
  {name: 'KField', component: KField, options: hideHeaderOptions},
  {name: 'KForm', component: KForm, options: hideHeaderOptions},
  {name: 'KImagePicker', component: KImagePicker, options: hideHeaderOptions},
  {name: 'KInput', component: KInput, options: hideHeaderOptions},
  {
    name: 'KNumberKeyboard',
    component: KNumberKeyboard,
    options: hideHeaderOptions,
  },
  {name: 'KPicker', component: KPicker, options: hideHeaderOptions},
  {name: 'KRadio', component: KRadio, options: hideHeaderOptions},
  {name: 'KRate', component: KRate, options: hideHeaderOptions},
  {name: 'KSearch', component: KSearch, options: hideHeaderOptions},
  {name: 'KSelector', component: KSelector, options: hideHeaderOptions},
  {name: 'KSlider', component: KSlider, options: hideHeaderOptions},
  {name: 'KStepper', component: KStepper, options: hideHeaderOptions},
  {name: 'KSwitch', component: KSwitch, options: hideHeaderOptions},
  {name: 'KActionSheet', component: KActionSheet, options: hideHeaderOptions},
  {name: 'KDialog', component: KDialog, options: hideHeaderOptions},
  {name: 'KLoading', component: KLoading, options: hideHeaderOptions},
  {name: 'KNotify', component: KNotify, options: hideHeaderOptions},
  {name: 'KOverlay', component: KOverlay, options: hideHeaderOptions},
  {name: 'KSwipeCell', component: KSwipeCell, options: hideHeaderOptions},
  {name: 'KBadge', component: KBadge, options: hideHeaderOptions},
  {name: 'KCircle', component: KCircle, options: hideHeaderOptions},
  {name: 'KCollapse', component: KCollapse, options: hideHeaderOptions},
  {name: 'KDivider', component: KDivider, options: hideHeaderOptions},
  {name: 'KEmpty', component: KEmpty, options: hideHeaderOptions},
  {name: 'KImagePreview', component: KImagePreview, options: hideHeaderOptions},
  {name: 'KNoticeBar', component: KNoticeBar, options: hideHeaderOptions},
  {name: 'KPopover', component: KPopover, options: hideHeaderOptions},
  {name: 'KProgress', component: KProgress, options: hideHeaderOptions},
  {name: 'KSwiper', component: KSwiper, options: hideHeaderOptions},
  {name: 'KTag', component: KTag, options: hideHeaderOptions},
  {name: 'KActionBar', component: KActionBar, options: hideHeaderOptions},
  {name: 'KGrid', component: KGrid, options: hideHeaderOptions},
  {name: 'KIndexBar', component: KIndexBar, options: hideHeaderOptions},
  {name: 'KNavBar', component: KNavBar, options: hideHeaderOptions},
  {name: 'KTabs', component: KTabs, options: hideHeaderOptions},
  {
    name: 'KNumberInputKeyBoard',
    component: KNumberInputKeyBoard,
    options: hideHeaderOptions,
  },
];

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
  ...KukiUIRouter,
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
