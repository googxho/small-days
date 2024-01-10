/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:46:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-21 22:38:56
 * @FilePath: /small-days/src/pages/home/index.tsx
 * @Description:
 */
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigator';
import { MainTabParamList } from 'src/navigator/MainTab';
import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import React from 'react';
import NativeInfoView from 'src/component/NativeInfoView';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const _HomeScreen: React.FC = () => {
  // const store = useStore();
  // const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: '45%',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 20, color: 'red', marginTop: 20 }}>
        {/* {userInfo.nickname}({userInfo.id}) */}home
      </Text>
    </View>
  );
};

export const MeScreen = observer(_HomeScreen);
