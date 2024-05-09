import React from 'react';

import {
  Search,
  NumberKeyboard,
  IndexBar,
  ImagePicker,
  ImagePreview,
  Form,
  Selector,
  Input,
  Popover,
  SwipeCell,
  Collapse,
  Picker,
  Stepper,
  Grid,
  Notify,
  Typography,
  Empty,
  Field,
  ActionBar,
  Dialog,
  Cell,
  Layout,
  Loading,
  Button,
  Overlay,
  Popup,
  Toast,
  Checkbox,
  Image,
  Radio,
  Switch,
  Tag,
  Divider,
  NavBar,
  NoticeBar,
  Rate,
  Progress,
  Badge,
  Circle,
  Slider,
  Swiper,
  ActionSheet,
  ConfigProvider,
  // DateTimePicker,
  // Tab,
  // Icon,
} from 'src/component/rn-kuki-ui';
import DateTimePicker from '../component/rn-kuki-ui/DatetimePicker';

export type RouteItem = {
  name: string;
  href: string;
  component: React.FC;
  group: EnumGroup;
  scrollEnabled?: boolean;
};

// eslint-disable-next-line no-shadow
enum EnumGroup {
  base = '基础组件',
  form = '表单组件',
  feedback = '反馈组件',
  exhibit = '展示组件',
  navigation = '导航组件',
}

export const routes: RouteItem[] = [
  {
    name: 'ConfigProvider 全局配置',
    href: '/config-provider',
    component: ConfigProvider,
    group: EnumGroup.base,
  },
  {
    name: 'Search 搜索',
    href: '/search',
    component: Search,
    group: EnumGroup.form,
  },
  {
    name: 'NumberKeyboard 数字键盘',
    href: '/number-keyboard',
    component: NumberKeyboard,
    group: EnumGroup.form,
  },
  {
    name: 'IndexBar 索引栏',
    href: '/index-bar',
    component: IndexBar,
    group: EnumGroup.navigation,
    scrollEnabled: false,
  },
  {
    name: 'ImagePicker 图片选择器',
    href: '/image-picker',
    component: ImagePicker,
    group: EnumGroup.form,
  },
  {
    name: 'ImagePreview 图片预览',
    href: '/image-preview',
    component: ImagePreview,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Form 表单',
    href: '/form',
    component: Form,
    group: EnumGroup.form,
  },
  {
    name: 'Selector 选择组',
    href: '/selector',
    component: Selector,
    group: EnumGroup.form,
  },
  {
    name: 'Input 输入框',
    href: '/input',
    component: Input,
    group: EnumGroup.form,
  },
  {
    name: 'Popover 气泡弹出框',
    href: '/popover',
    component: Popover,
    group: EnumGroup.exhibit,
  },
  {
    name: 'SwipeCell 滑动单元格',
    href: '/swipe-cell',
    component: SwipeCell,
    group: EnumGroup.feedback,
  },
  {
    name: 'Collapse 折叠面板',
    href: '/collapse',
    component: Collapse,
    group: EnumGroup.exhibit,
  },
  {
    name: 'DatetimePicker 时间选择',
    href: '/datetime-picker',
    component: DateTimePicker,
    group: EnumGroup.form,
  },
  {
    name: 'Picker 选择器',
    href: '/picker',
    component: Picker,
    group: EnumGroup.form,
  },
  {
    name: 'Stepper 步进器',
    href: '/stepper',
    component: Stepper,
    group: EnumGroup.form,
  },
  {
    name: 'Grid 宫格',
    href: '/grid',
    component: Grid,
    group: EnumGroup.navigation,
  },
  // {
  //   name: 'Calendar 日历',
  //   href: '/calendar',
  //   component: Calendar,
  //   group: EnumGroup.form,
  // },
  {
    name: 'Notify 消息提示',
    href: '/notify',
    component: Notify,
    group: EnumGroup.feedback,
  },
  {
    name: 'Typography 文本',
    href: '/typography',
    component: Typography,
    group: EnumGroup.base,
  },
  {
    name: 'Empty 空状态',
    href: '/empty',
    component: Empty,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Field 输入框',
    href: '/field',
    component: Field,
    group: EnumGroup.form,
  },
  {
    name: 'ActionBar 动作栏',
    href: '/action-bar',
    component: ActionBar,
    group: EnumGroup.navigation,
  },
  {
    name: 'Dialog 弹出框',
    href: '/dialog',
    component: Dialog,
    group: EnumGroup.feedback,
  },
  {
    name: 'Tabs 标签页',
    href: '/tabs',
    component: Tab,
    group: EnumGroup.navigation,
  },
  {
    name: 'Cell 单元格',
    href: '/cell',
    component: Cell,
    group: EnumGroup.base,
  },
  {
    name: 'Layout 布局',
    href: '/layout',
    component: Layout,
    group: EnumGroup.base,
  },
  {
    name: 'Icon 图标',
    href: '/icon',
    component: Icon,
    group: EnumGroup.base,
  },
  {
    name: 'Loading 加载',
    href: '/loading',
    component: Loading,
    group: EnumGroup.feedback,
  },
  {
    name: 'Button 按钮',
    href: '/button',
    component: Button,
    group: EnumGroup.base,
  },
  {
    name: 'Overlay 遮罩层',
    href: '/overlay',
    component: Overlay,
    group: EnumGroup.feedback,
  },
  {
    name: 'Popup 弹出层',
    href: '/popup',
    component: Popup,
    group: EnumGroup.base,
  },
  {
    name: 'Toast 轻提示',
    href: '/toast',
    component: Toast,
    group: EnumGroup.base,
  },
  {
    name: 'Checkbox 复选框',
    href: '/checkbox',
    component: Checkbox,
    group: EnumGroup.form,
  },
  {
    name: 'Image 图片',
    href: '/image',
    component: Image,
    group: EnumGroup.base,
  },
  {
    name: 'Radio 单选框',
    href: '/radio',
    component: Radio,
    group: EnumGroup.form,
  },
  {
    name: 'Switch 开关',
    href: '/switch',
    component: Switch,
    group: EnumGroup.form,
  },
  {
    name: 'Tag 标签',
    href: '/tag',
    component: Tag,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Divider 分割线',
    href: '/divider',
    component: Divider,
    group: EnumGroup.exhibit,
  },
  {
    name: 'NavBar 导航栏',
    href: '/nav-bar',
    component: NavBar,
    group: EnumGroup.navigation,
  },
  {
    name: 'NoticeBar 通知栏',
    href: '/notice-bar',
    component: NoticeBar,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Rate 评分',
    href: '/rate',
    component: Rate,
    group: EnumGroup.form,
  },
  {
    name: 'Progress 进度条',
    href: '/progress',
    component: Progress,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Badge 徽标',
    href: '/badge',
    component: Badge,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Circle 环形进度条',
    href: '/circle',
    component: Circle,
    group: EnumGroup.exhibit,
  },
  {
    name: 'Slider 滑块',
    href: '/slider',
    component: Slider,
    group: EnumGroup.form,
  },
  {
    name: 'Swiper 轮播',
    href: '/swiper',
    component: Swiper,
    group: EnumGroup.exhibit,
  },
  {
    name: 'ActionSheet 动作面板',
    href: '/action-sheet',
    component: ActionSheet,
    group: EnumGroup.feedback,
  },
];

type RouteGroup = { name: EnumGroup; list: RouteItem[] };

export const getRouteGroup = (): RouteGroup[] => {
  const sortGroup = [
    EnumGroup.base,
    EnumGroup.form,
    EnumGroup.feedback,
    EnumGroup.exhibit,
    EnumGroup.navigation,
  ];

  return routes
    .reduce((result: RouteGroup[], item: RouteItem) => {
      const target = result.find(it => it.name === item.group);
      if (target) {
        target.list.push(item);
      } else {
        result.push({
          name: item.group,
          list: [item],
        });
      }
      return result;
    }, [])
    .map(item => ({
      ...item,
      list: item.list.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => sortGroup.indexOf(a.name) - sortGroup.indexOf(b.name));
};
