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

let IconXmxxIconCalculator1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M474.216727 310.923636l-82.327272 60.450909v-88.296727l82.327272-60.055273h83.130182V802.909091h-83.130182V310.923636z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator1.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator1 = React.memo ? React.memo(IconXmxxIconCalculator1) : IconXmxxIconCalculator1;

export default IconXmxxIconCalculator1;
