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

let IconAAppround22: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M755.5172 877.61736c-170.304-55.452-325.948-116.72-466.68-182.352L366.5652 58.84136c89.136 63.936 193.132 125.2 311.832 182.332l77.12 636.444z"
        fill={getIconColor(color, 0, '#00ADA8')}
      />
      <Path
        d="M678.3972 241.16936c45.6-49.872 85.76-100.344 120.48-151.168l148.604 633.04c-58.532 52.32-122.528 103.932-191.96 154.576M366.5652 58.84136C314.8452 118.67336 256.3132 177.61736 190.9972 235.36936c-49.532 211.012-99.072 422.02-148.6 633.032 88.928-56.264 171.084-114.076 246.44-173.132"
        fill={getIconColor(color, 1, '#00CCC6')}
      />
    </Svg>
  );
};

IconAAppround22.defaultProps = {
  size: 18,
};

IconAAppround22 = React.memo ? React.memo(IconAAppround22) : IconAAppround22;

export default IconAAppround22;
