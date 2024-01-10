/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:46:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-24 23:00:51
 * @FilePath: /small-days/src/pages/welcome.tsx
 * @Description:
 */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigator';
import {MainTabParamList} from 'src/navigator/MainTab';
import {observer} from 'mobx-react';
import {Text, View} from 'react-native';
import React, {useEffect} from 'react';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const WelcomeScreen: React.FC = () => {
  // const store = useStore();
  // const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();

  useEffect(() => {
    navigation.navigate('Login');
  });
  return (
    <View
      style={{
        flex: 1,
        paddingTop: '45%',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, marginTop: 20}}>
        {/* {userInfo.nickname}({userInfo.id}) */}login
      </Text>
    </View>
  );
};

export default WelcomeScreen;
