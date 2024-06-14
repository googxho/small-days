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

let IconXmxxIconCalculator7: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M357.678545 390.074182V223.022545h330.123637v83.130182L491.310545 802.909091h-92.672l196.072728-496.756364H440.808727v83.921455h-83.130182z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator7.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator7 = React.memo ? React.memo(IconXmxxIconCalculator7) : IconXmxxIconCalculator7;

export default IconXmxxIconCalculator7;
