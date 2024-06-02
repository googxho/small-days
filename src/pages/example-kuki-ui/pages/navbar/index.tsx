import React, {FC} from 'react';
import Icon from '@/component/rn-kuki-icons';
import {NavBar, Toast} from '@/component/rn-kuki-ui';
import {ScrollView} from 'react-native';
import {DemoBlock} from '../../DemoBlock';

const NavBarDemo: FC = () => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          rightText="按钮"
          onPressLeft={() => Toast.info('返回')}
          onPressRight={() => Toast.info('按钮')}
        />
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          onPressLeft={() => Toast.info('返回')}
          rightText={<Icon name="search" size={20} />}
          onPressRight={() => Toast.info('按钮')}
        />
      </DemoBlock>
    </ScrollView>
  );
};

export default NavBarDemo;
