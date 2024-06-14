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

let IconXmxxIconCalculator5: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M356.887273 536.436364V223.022545h309.026909v83.130182H435.234909v131.246546c27.054545-21.213091 57.949091-31.813818 92.672-31.813818 22.272 0.523636 42.693818 4.503273 61.253818 11.927272 17.501091 8.215273 31.685818 18.292364 42.554182 30.219637a140.322909 140.322909 0 0 1 35.002182 55.296c3.712 11.403636 6.365091 25.320727 7.959273 41.751272 1.582545 16.709818 2.385455 37.259636 2.385454 61.649455 0 37.655273-2.653091 66.56-7.959273 86.702545a139.019636 139.019636 0 0 1-27.845818 52.898909c-11.403636 15.127273-27.973818 28.904727-49.710545 41.367273-21.213091 12.997818-46.405818 19.758545-75.566546 20.282182-39.249455 0-75.170909-11.659636-107.787636-35.002182-33.140364-23.854545-53.690182-62.440727-61.649455-115.735273h83.130182c9.018182 44.544 36.724364 67.083636 83.118546 67.607273 19.898182 0 35.805091-3.968 47.732363-11.927273 11.403636-7.68 19.351273-17.757091 23.854546-30.219636 4.770909-12.462545 7.703273-25.984 8.762182-40.576a1130.705455 1130.705455 0 0 0 0.791272-41.762909c0.535273-33.140364-4.642909-60.043636-15.511272-80.733091-5.829818-9.809455-14.452364-17.629091-25.856-23.470545-11.403636-4.770909-25.588364-7.156364-42.554182-7.156364-15.115636 0-28.904727 3.444364-41.367273 10.344727-12.450909 7.156364-23.598545 19.618909-33.396364 37.387637H356.887273z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator5.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator5 = React.memo ? React.memo(IconXmxxIconCalculator5) : IconXmxxIconCalculator5;

export default IconXmxxIconCalculator5;
