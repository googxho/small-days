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
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useStore} from '@/stores/index';
import {ThemeContext} from 'src/component/ThemeContext';
import {FlashList} from '@shopify/flash-list';
import acidList from 'src/assets/7791387030.json';
import {Button, Cell} from 'src/component/rn-kuki-ui';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const ExampleScreen: React.FC = () => {
  // const store = useStore();
  const navigation = useNavigation<INavigateProps['navigation']>();
  const {global} = useStore();

  const theme = useContext(ThemeContext);

  const styles = global.theme === 'dark' ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.content}>
      <Cell.Group title="基础组件">
        <View style={{}}>
          <Button>Button 按钮</Button>
          <Button plain type="success">
            Cell 单元格
          </Button>
          <Button plain type="success">
            ConfigProvider 全局配置
          </Button>
          <Button plain type="success">
            Icon 图标
          </Button>
          <Button plain type="success">
            Image 图片
          </Button>
          <Button plain type="success">
            Layout 布局
          </Button>
          <Button plain type="success">
            Popup 弹出层
          </Button>
          <Button plain type="success">
            Toast 轻提示
          </Button>
          <Button plain type="success">
            Typography 文本
          </Button>
        </View>
      </Cell.Group>
      <Cell.Group title="表单组件">
        <View style={{}}>
          <Button plain type="success">
            Checkbox 复选框
          </Button>
          <Button plain type="success">
            DatetimePicker 时间选择
          </Button>
          <Button plain type="success">
            Field 输入框
          </Button>
          <Button plain type="success">
            Form 表单
          </Button>
          <Button plain type="success">
            ImagePicker 图片选择器
          </Button>
          <Button plain type="success">
            Input 输入框
          </Button>
          <Button plain type="success">
            NumberKeyboard 数字键盘
          </Button>
          <Button plain type="success">
            Picker 选择器
          </Button>
          <Button plain type="success">
            Radio 单选框
          </Button>
          <Button plain type="success">
            Rate 评分
          </Button>
          <Button plain type="success">
            Search 搜索
          </Button>
          <Button plain type="success">
            Selector 选择组
          </Button>
          <Button plain type="success">
            Slider 滑块
          </Button>
          <Button plain type="success">
            Stepper 步进器
          </Button>
          <Button plain type="success">
            Switch 开关
          </Button>
        </View>
      </Cell.Group>
      <Cell.Group title="反馈组件">
        <View style={{}}>
          <Button plain type="success">
            ActionSheet 动作面板
          </Button>
          <Button plain type="success">
            Dialog 弹出框
          </Button>
          <Button plain type="success">
            Loading 加载
          </Button>
          <Button plain type="success">
            Notify 消息提示
          </Button>
          <Button plain type="success">
            Overlay 遮罩层
          </Button>
          <Button plain type="success">
            SwipeCell 滑动单元格
          </Button>
        </View>
      </Cell.Group>
      <Cell.Group title="展示组件">
        <View style={{}}>
          <Button plain type="success">
            Badge 徽标
          </Button>
          <Button plain type="success">
            Circle 环形进度条
          </Button>
          <Button plain type="success">
            Collapse 折叠面板
          </Button>
          <Button plain type="success">
            Divider 分割线
          </Button>
          <Button plain type="success">
            Empty 空状态
          </Button>
          <Button plain type="success">
            ImagePreview 图片预览
          </Button>
          <Button plain type="success">
            NoticeBar 通知栏
          </Button>
          <Button plain type="success">
            Popover 气泡弹出框
          </Button>
          <Button plain type="success">
            Progress 进度条
          </Button>
          <Button plain type="success">
            Swiper 轮播
          </Button>
          <Button plain type="success">
            Tag 标签
          </Button>
        </View>
      </Cell.Group>
      <Cell.Group title="导航组件">
        <View style={{}}>
          <Button plain type="success">
            ActionBar 动作栏
          </Button>
          <Button plain type="success">
            Grid 宫格
          </Button>
          <Button plain type="success">
            IndexBar 索引栏
          </Button>
          <Button plain type="success">
            NavBar 导航栏
          </Button>
          <Button plain type="success">
            Tabs 标签页
          </Button>
        </View>
      </Cell.Group>
    </ScrollView>
  );
};

export default observer(ExampleScreen);

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
