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

let IconAAppround20: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M861.2324 380.386A7750.208 7750.208 0 0 0 592.5204 372.358c17.436-76.204 33.152-151.784 45.144-226.256 3.68-23.108-11.288-50.996-32.3-61.728-11.764-5.96-23.436-11.828-35-17.58-20.672-10.384-45.444-1.1-56.172 20.296C467.1804 181.426 412.0004 278.358 357.4204 372.982a5186.2 5186.2 0 0 0 14.596 493.34c133.28 11.368 266.56 4.34 399.84-21.088 21.768-4.24 46.412-27.06 54.356-49.812 37.376-127.52 63.78-252.316 74.284-373.864 3.18-21.4-14.828-39.896-39.264-41.172z"
        fill={getIconColor(color, 0, '#D6B18B')}
      />
      <Path
        d="M90.0444 422.07c-3.756 121.572 7.92 243.148 35.024 364.72 4.98 21.76 27.452 44.212 49.212 49.168a1521.972 1521.972 0 0 0 121.564 21.868c-20.532-160.956-28.4-321.904-23.6-482.856a7733.52 7733.52 0 0 0-135.928 5.116c-24.432 1.24-45.584 20.212-46.272 41.984z"
        fill={getIconColor(color, 1, '#91A287')}
      />
    </Svg>
  );
};

IconAAppround20.defaultProps = {
  size: 18,
};

IconAAppround20 = React.memo ? React.memo(IconAAppround20) : IconAAppround20;

export default IconAAppround20;
