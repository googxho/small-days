/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:46:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-23 23:05:59
 * @FilePath: /small-days/src/pages/me/index.tsx
 * @Description:
 */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigator';
import {MainTabParamList} from 'src/navigator/MainTab';
import {observer} from 'mobx-react';
import {Button, Text, View} from 'react-native';
import React from 'react';
import {useRequest} from 'ahooks';
import {getSecurityCode} from 'src/services/login';
import {csvToJson} from 'src/utils/csv-to-json';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const _MeScreen: React.FC = () => {
  // const store = useStore();
  // const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();

  const {data, run, loading} = useRequest(csvToJson, {
    manual: true,
    onBefore: params => {
      console.log(`Start Request: ${params[0]}`);
    },
    onSuccess: (result, params) => {
      // setState('');
      console.log(`The username was changed to "${params[0]}" !`);
    },
    onError: error => {
      console.log(error.message);
    },
    onFinally: (params, result, error) => {
      console.log('Request finish');
    },
  });

  return (
    <View
      style={{
        flex: 1,
        paddingTop: '45%',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, marginTop: 20}}>
        {/* {userInfo.nickname}({userInfo.id}) */}me
      </Text>
      <Text>{loading ? '请求中...' : '已完成'}</Text>
      <Button title="请求" onPress={run} />
    </View>
  );
};

export const MeScreen = observer(_MeScreen);
