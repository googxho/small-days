/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:46:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-21 22:38:56
 * @FilePath: /small-days/src/pages/home/index.tsx
 * @Description:
 */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigator';
import {MainTabParamList} from 'src/navigator/MainTab';
import {observer} from 'mobx-react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useStore} from '@stores/index';
import {ThemeContext} from 'src/component/ThemeContext';
import {FlashList} from '@shopify/flash-list';
import acidList from 'src/assets/7791387030.json';
import {
  Button,
  Cell,
  Image,
  NumberKeyboard,
  SwipeCell,
  Swiper,
  Switch,
  Tag,
  Toast,
  Typography,
  useSetState,
} from 'src/component/rn-kuki-ui';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const _HomeScreen: React.FC = () => {
  // const store = useStore();
  const navigation = useNavigation<INavigateProps['navigation']>();
  const {global} = useStore();

  const theme = useContext(ThemeContext);

  const styles = global.theme === 'dark' ? darkStyles : lightStyles;

  const [state, set] = useSetState({
    v1: true,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
  });

  const onInput = (v: string) => Toast.info(`输入${v}`);
  const onDelete = () => Toast.info('删除');

  return (
    <View style={styles.content}>
      <Button
        onPress={() => {
          if (global.theme === 'dark') {
            global.setTheme('light');
          } else {
            global.setTheme('dark');
          }
          console.log('====================================');
          console.log(global, theme);
          console.log('====================================');
        }}>
        切换主题HOME
      </Button>
      {/* <FlatList
        data={acidList}
        keyExtractor={item => item?.wid}
        renderItem={({item, index}) => (
          <View style={{width: '100%', marginVertical: 20}}>
            <Text style={{fontSize: 26, color: '#000'}}>{item?.content}</Text>
            <View style={{justifyContent: 'flex-start'}}>
              {item?.img_urls
                ?.split(' ')
                .filter(v => v.length > 0)
                .map(url => (
                  <Image
                    key={url}
                    resizeMode="cover"
                    source={{uri: url}}
                    style={{width: 160, height: 200}}
                  />
                ))}
            </View>
          </View>
        )}
      /> */}
      <Cell.Group title="按钮">
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Button
            plain
            type="primary"
            onPress={() => {
              Toast.loading('朴素按钮');
            }}>
            朴素按钮
          </Button>
          <Button plain type="success">
            朴素按钮
          </Button>
          <Button loading type="primary" />
          <Button loading type="primary" loadingType="spinner" />
          <Button loading type="success" loadingText="加载中..." />
        </View>
      </Cell.Group>
      <Cell.Group title="开关">
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Switch loading defaultChecked />
          <Switch
            activeColor="#ee0a24"
            inactiveColor="#dcdee0"
            defaultChecked
          />
        </View>
      </Cell.Group>
      <Cell.Group title="数字键盘">
        {/* <NumberKeyboard
        visible={state.v1}
        onBlur={() => {
          set({v1: false});
        }}
        onInput={onInput}
        onDelete={onDelete}
      /> */}
      </Cell.Group>
      <Cell.Group title="滑动单元格">
        <SwipeCell
          onOpen={() => Toast.info('打开')}
          onClose={() => Toast.info('关闭')}
          rightAction={
            <Button style={{height: '100%'}} square type="danger">
              删除
            </Button>
          }
          leftAction={
            <Button style={{height: '100%'}} square type="primary">
              选择
            </Button>
          }>
          <Cell title="左滑选择" value="右滑删除" />
        </SwipeCell>
        <SwipeCell
          rightAction={
            <Button style={{height: '100%'}} square type="danger">
              删除
            </Button>
          }>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              paddingHorizontal: 16,
              paddingVertical: 10,
              backgroundColor: 'white',
            }}>
            <Image
              imageStyle={{width: 88, height: 99, marginRight: 10}}
              source={{uri: 'https://img.yzcdn.cn/vant/ipad.jpeg'}}
            />
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <View>
                <Typography.Title level={5}>商品标题</Typography.Title>
                <Typography.Text type="secondary">
                  这里是商品描述
                </Typography.Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                }}>
                <Typography.Text strong size="lg">
                  ¥2.00
                </Typography.Text>
                <Typography.Text size="sm" type="secondary">
                  x2
                </Typography.Text>
              </View>
            </View>
          </View>
        </SwipeCell>
      </Cell.Group>
      <Cell.Group title="Swiper轮播图">
        <Swiper
          autoplay={3000}
          style={{
            height: 200,
            backgroundColor: '#876',
          }}>
          <Swiper.Item>
            <Text>1</Text>
          </Swiper.Item>
          <Swiper.Item>
            <Text>2</Text>
          </Swiper.Item>
          <Swiper.Item>
            <Text>3</Text>
          </Swiper.Item>
          <Swiper.Item>
            <Text>4</Text>
          </Swiper.Item>
        </Swiper>
      </Cell.Group>
      <Cell.Group title="Tag标签">
        <View style={{flexDirection: 'row'}}>
          <Tag type="primary">标签</Tag>
          <Tag type="success">标签</Tag>
          <Tag type="danger">标签</Tag>
          <Tag type="warning">标签</Tag>
        </View>
      </Cell.Group>
    </View>
  );
};

export default observer(_HomeScreen);

const darkStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#353535',
  },
});

const lightStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
  },
});
