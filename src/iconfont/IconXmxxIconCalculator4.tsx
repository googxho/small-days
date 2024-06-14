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

let IconXmxxIconCalculator4: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M326.260364 716.602182V638.254545l193.698909-415.232h92.672L416.546909 638.254545h151.528727V471.598545h83.130182V638.254545h46.138182v78.347637h-46.138182V802.909091h-83.130182v-86.306909H326.283636z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator4.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator4 = React.memo ? React.memo(IconXmxxIconCalculator4) : IconXmxxIconCalculator4;

export default IconXmxxIconCalculator4;
