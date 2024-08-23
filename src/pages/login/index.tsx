/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:46:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 00:05:51
 * @FilePath: /small-days/src/pages/login/index.tsx
 * @Description:
 */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigator';
import {MainTabParamList} from 'src/navigator/MainTab';
import {observer} from 'mobx-react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRequest} from 'ahooks';
import axios from 'axios';
import {transformBase64} from 'src/utils/read-excel';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const LoginScreen: React.FC = () => {
  // const store = useStore();
  // const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();
  const [base64Img, setBase64Img] = useState(transformBase64(''));
  const rq = async () => {
    // 需要超时时间 axios timeout 但是没生效
    return await axios.get('http://192.168.137.106:8888/getSecurityCode', {
      responseType: 'arraybuffer',
      params: {
        password: '123456',
        securityCodeKey: 'string',
        securityCodeValue: 'string',
        username: 'string',
      },
    });
  };
  const {data, run} = useRequest(rq, {
    manual: false,
    onBefore: params => {
      console.log(`Start Request: ${params[0]}`);
    },
    onSuccess: (result, params) => {
      // setState('');
      console.log('====================================');
      setBase64Img(transformBase64(result.data));
      // console.log(transformBase64(result.data));
      console.log('====================================');
      console.log(`The username was changed to "${params[0]}" !`);
    },
    onError: error => {
      console.log(error.message);
    },
    onFinally: (params, result, error) => {
      console.log('Request finish');
    },
  });
  useEffect(() => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  }, []);

  const openGallery = () => {
    const {SmallDaysApp} = NativeModules;
    SmallDaysApp.openGallery();
  };
  const getVersionName = () => {
    const {SmallDaysApp} = NativeModules;
    SmallDaysApp.getVersionName()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const {SmallDaysApp} = NativeModules;
  const {VersionName, VersionCode} = SmallDaysApp;
  return (
    <View
      style={{
        flex: 1,
        paddingTop: '45%',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, marginTop: 20}}>登录页</Text>
      <Text style={{fontSize: 20, marginTop: 20}}>
        {`版本名:"${VersionName}"版本号:"${VersionCode}"`}
      </Text>
      <Button title="获取验证码" onPress={run} />
      <Button title="打开相册" onPress={openGallery} />
      <Button title="获取版本号" onPress={getVersionName} />
      <Button
        title="跳转原生组件"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <Button
        title="跳转home组件"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="跳转MainTab组件"
        onPress={() => {
          navigation.navigate('MainTab');
        }}
      />
      <Button
        title="跳转kuki-ui组件"
        onPress={() => {
          navigation.navigate('Example');
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: base64Img,
        }}
      />
    </View>
  );
};

export default observer(LoginScreen);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 266,
    height: 88,
  },
});
