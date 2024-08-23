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

let IconAAppround4: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M948.7984 849.876c-15.888-91.24-116.86-115.252-290.032-131.784-27.212-7.968-99.3-30.532-4.808-97.276 89.828-62.72 121.036-183.672 116.612-304.188-7.12-167.928-89.536-283.972-268.472-285.508-176.696 2.812-262.2 118.968-269.84 286.172-5.14 128.296 31.228 257.396 131.08 315.26 61.192 43.536 19.216 78.604-5.516 85.896-170.804 16.896-265.052 41.108-281.104 131.384-0.24-0.06-15.184 42.068 58.5 52.544 251.8 33.86 503.596 33.784 755.4-0.244 66.944-9.54 58.392-52.332 58.18-52.256z"
        fill={getIconColor(color, 0, '#93AED1')}
      />
    </Svg>
  );
};

IconAAppround4.defaultProps = {
  size: 18,
};

IconAAppround4 = React.memo ? React.memo(IconAAppround4) : IconAAppround4;

export default IconAAppround4;
