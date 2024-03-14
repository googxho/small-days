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
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Switch} from '@gongxh/rn-vant';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const WelcomeScreen: React.FC = () => {
  // const store = useStore();
  // const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Login');
    }, 3000);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Switch defaultChecked />
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Text style={{fontSize: 40}}>Sweet Life</Text>
      <Text style={{fontSize: 20, marginTop: 20}}>小日子</Text>
      <View style={styles.bottom}>
        <View style={[styles.watchFace, loading && styles.pulse]}>
          {/* <!-- 底部按钮动画 --> */}
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
        {/* <!-- start --> */}
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bottom: {},
  watchFace: {},
  pulse: {},
  circle: {
    backgroundColor: '#fff',
    height: 125,
    width: 125,
    borderRadius: 100,
    position: 'absolute',
    // transform: translate(0, 0),
  },
});
