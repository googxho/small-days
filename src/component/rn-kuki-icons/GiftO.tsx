/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let GiftO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M227.555328 910.222336c-31.418368 0-56.88832-25.469952-56.88832-56.889344V512c-31.419392 0-56.889344-25.469952-56.889344-56.889344V284.444672c0-31.419392 25.469952-56.889344 56.889344-56.889344h88.178688c13.177856-64.917504 70.571008-113.77664 139.37664-113.77664 46.52544 0 87.832576 22.339584 113.780736 56.87808 25.942016-34.53952 67.249152-56.879104 113.774592-56.879104 68.805632 0 126.198784 48.86016 139.37664 113.77664l88.178688 0.001024c31.105024 0 56.379392 24.963072 56.881152 55.948288l0.008192 0.941056v170.665984c0 31.105024-24.963072 56.379392-55.948288 56.882176l-0.941056 0.007168v341.332992c0 31.105024-24.963072 56.379392-55.948288 56.881152l-0.940032 0.008192H227.555328z m341.332992-625.778688h-113.77664v568.889344h113.77664V284.443648zM398.22336 512H227.555328v341.332992H398.22336V512z m398.222336 0H625.77664v341.332992h170.667008V512z m-398.22336-227.555328H170.668032v170.665984h227.555328V284.444672z m455.11168 0H625.777664v170.665984h227.555328V284.444672zM625.777664 170.667008c-37.154816 0-68.762624 23.745536-80.477184 56.88832h160.955392c-11.71456-33.142784-43.323392-56.88832-80.478208-56.88832z m-227.555328 0c-37.154816 0-68.763648 23.745536-80.478208 56.88832H478.69952c-11.71456-33.142784-43.322368-56.88832-80.477184-56.88832z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

GiftO.defaultProps = {
  size: 18,
};

GiftO = React.memo ? React.memo(GiftO) : GiftO;

export default GiftO;