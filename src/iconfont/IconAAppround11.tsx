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

let IconAAppround11: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M911.252 727.78a4425.272 4425.272 0 0 0-21.468-701.44C625.896 55.48 361.992 84.616 98.096 113.752a3629.352 3629.352 0 0 1 0 796.504l571.52 63.096a4014.128 4014.128 0 0 0 241.64-245.568z"
        fill={getIconColor(color, 0, '#FFBF00')}
      />
      <Path
        d="M911.252 727.78l-221.252-10.8a4204.64 4204.64 0 0 1-20.392 256.368"
        fill={getIconColor(color, 1, '#D9A200')}
      />
    </Svg>
  );
};

IconAAppround11.defaultProps = {
  size: 18,
};

IconAAppround11 = React.memo ? React.memo(IconAAppround11) : IconAAppround11;

export default IconAAppround11;
