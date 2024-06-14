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

let IconXmxxIconCalculatorPoint: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M570.181818 768a58.181818 58.181818 0 1 1-116.363636 0 58.181818 58.181818 0 0 1 116.363636 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculatorPoint.defaultProps = {
  size: 18,
};

IconXmxxIconCalculatorPoint = React.memo ? React.memo(IconXmxxIconCalculatorPoint) : IconXmxxIconCalculatorPoint;

export default IconXmxxIconCalculatorPoint;
