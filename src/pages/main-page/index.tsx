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
import {Text, View} from 'react-native';
import React, {useRef} from 'react';
import {
  Cell,
  Form,
  FormInstance,
  Input,
  NoticeBar,
  Radio,
  Space,
} from 'src/component/rn-kuki-ui';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

interface FormValue {
  username: string;
  password: string;
}

const _MainPageScreen: React.FC = () => {
  // const store = useStore();
  // const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();
  const formRef = useRef<FormInstance<FormValue>>(null);
  return (
    <View style={{}}>
      <Text style={{fontSize: 20, marginTop: 20}}>MainPage</Text>
      <Form defaultValues={{type: 'mobile', account: '18888888888'}}>
        <Cell.Group inset>
          <Form.Item name="type" label="登录方式">
            <Radio.Group direction="horizontal">
              <Space>
                <Radio value="mobile">手机号</Radio>
                <Radio value="email">邮箱</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Subscribe to="type">
            {type => {
              return (
                <>
                  {type === 'mobile' && (
                    <Form.Item name="account" label="手机号">
                      <Input placeholder="请输入手机号" />
                    </Form.Item>
                  )}
                  {type === 'email' && (
                    <Form.Item name="account" label="邮箱">
                      <Input placeholder="请输入邮箱" />
                    </Form.Item>
                  )}
                </>
              );
            }}
          </Form.Subscribe>
          <Form.Subscribe to={['type', 'account']}>
            {([type, account]) => (
              <NoticeBar>
                你将使用 {type === 'mobile' ? '手机号' : '邮箱'} {account} 登录
              </NoticeBar>
            )}
          </Form.Subscribe>
        </Cell.Group>
      </Form>
    </View>
  );
};

export const MainPageScreen = observer(_MainPageScreen);
