/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconYuangongjiangliwodejianglijiangpinwodelipin from './IconYuangongjiangliwodejianglijiangpinwodelipin';
import IconShouye from './IconShouye';
import IconWode from './IconWode';
import IconZiyuan35 from './IconZiyuan35';
import IconLiwuhe from './IconLiwuhe';
import IconJiu from './IconJiu';
import IconHuashu from './IconHuashu';
import IconRiji from './IconRiji';
import IconNvxing from './IconNvxing';
import IconNanxing from './IconNanxing';
import IconLvhang from './IconLvhang';
import IconShouji from './IconShouji';
import IconXiangji from './IconXiangji';
import IconYoujian from './IconYoujian';
import IconHezhao from './IconHezhao';
import IconQiubite from './IconQiubite';
import IconDangao from './IconDangao';
import IconBaowenbei from './IconBaowenbei';
import IconJia from './IconJia';
import IconShijian from './IconShijian';
import IconShuxie from './IconShuxie';
import IconKapian from './IconKapian';
import IconGuangjie from './IconGuangjie';
import IconRiqi from './IconRiqi';
import IconLianxi from './IconLianxi';
export { default as IconYuangongjiangliwodejianglijiangpinwodelipin } from './IconYuangongjiangliwodejianglijiangpinwodelipin';
export { default as IconShouye } from './IconShouye';
export { default as IconWode } from './IconWode';
export { default as IconZiyuan35 } from './IconZiyuan35';
export { default as IconLiwuhe } from './IconLiwuhe';
export { default as IconJiu } from './IconJiu';
export { default as IconHuashu } from './IconHuashu';
export { default as IconRiji } from './IconRiji';
export { default as IconNvxing } from './IconNvxing';
export { default as IconNanxing } from './IconNanxing';
export { default as IconLvhang } from './IconLvhang';
export { default as IconShouji } from './IconShouji';
export { default as IconXiangji } from './IconXiangji';
export { default as IconYoujian } from './IconYoujian';
export { default as IconHezhao } from './IconHezhao';
export { default as IconQiubite } from './IconQiubite';
export { default as IconDangao } from './IconDangao';
export { default as IconBaowenbei } from './IconBaowenbei';
export { default as IconJia } from './IconJia';
export { default as IconShijian } from './IconShijian';
export { default as IconShuxie } from './IconShuxie';
export { default as IconKapian } from './IconKapian';
export { default as IconGuangjie } from './IconGuangjie';
export { default as IconRiqi } from './IconRiqi';
export { default as IconLianxi } from './IconLianxi';

export type IconNames = 'yuangongjiangliwodejianglijiangpinwodelipin' | 'shouye' | 'wode' | 'ziyuan35' | 'liwuhe' | 'jiu' | 'huashu' | 'riji' | 'nvxing' | 'nanxing' | 'lvhang' | 'shouji' | 'xiangji' | 'youjian' | 'hezhao' | 'qiubite' | 'dangao' | 'baowenbei' | 'jia' | 'shijian' | 'shuxie' | 'kapian' | 'guangjie' | 'riqi' | 'lianxi';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'yuangongjiangliwodejianglijiangpinwodelipin':
      return <IconYuangongjiangliwodejianglijiangpinwodelipin key="1" {...rest} />;
    case 'shouye':
      return <IconShouye key="2" {...rest} />;
    case 'wode':
      return <IconWode key="3" {...rest} />;
    case 'ziyuan35':
      return <IconZiyuan35 key="4" {...rest} />;
    case 'liwuhe':
      return <IconLiwuhe key="5" {...rest} />;
    case 'jiu':
      return <IconJiu key="6" {...rest} />;
    case 'huashu':
      return <IconHuashu key="7" {...rest} />;
    case 'riji':
      return <IconRiji key="8" {...rest} />;
    case 'nvxing':
      return <IconNvxing key="9" {...rest} />;
    case 'nanxing':
      return <IconNanxing key="10" {...rest} />;
    case 'lvhang':
      return <IconLvhang key="11" {...rest} />;
    case 'shouji':
      return <IconShouji key="12" {...rest} />;
    case 'xiangji':
      return <IconXiangji key="13" {...rest} />;
    case 'youjian':
      return <IconYoujian key="14" {...rest} />;
    case 'hezhao':
      return <IconHezhao key="15" {...rest} />;
    case 'qiubite':
      return <IconQiubite key="16" {...rest} />;
    case 'dangao':
      return <IconDangao key="17" {...rest} />;
    case 'baowenbei':
      return <IconBaowenbei key="18" {...rest} />;
    case 'jia':
      return <IconJia key="19" {...rest} />;
    case 'shijian':
      return <IconShijian key="20" {...rest} />;
    case 'shuxie':
      return <IconShuxie key="21" {...rest} />;
    case 'kapian':
      return <IconKapian key="22" {...rest} />;
    case 'guangjie':
      return <IconGuangjie key="23" {...rest} />;
    case 'riqi':
      return <IconRiqi key="24" {...rest} />;
    case 'lianxi':
      return <IconLianxi key="25" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
