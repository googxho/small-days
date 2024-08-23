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

let IconAAppround37: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128.4396 688.092c-15.216 16.028-28.984 47.652-30.676 69.784a2492.232 2492.232 0 0 1-12.168 123.572c-2.792 22.16 12.7 37.656 34.864 34.864a2487.728 2487.728 0 0 1 123.568-12.168c22.132-1.692 53.752-15.46 69.788-30.68 152.28-144.664 275.76-268.444 422.076-422.976 15.424-16.336 17.164-42.14 3.492-56.524a3687.928 3687.928 0 0 0-131.432-131.444c-14.384-13.664-40.196-11.92-56.528 3.496C396.8876 412.324 273.1116 535.804 128.4396 688.096z"
        fill={getIconColor(color, 0, '#FFB145')}
      />
      <Path
        d="M785.0476 79.164c-15.636-14.612-41.768-15.84-56.18-2.132a1675.356 1675.356 0 0 0-56.156 56.16c-13.696 14.408-12.472 40.544 2.132 56.18 46.24 49.104 88.6 91.464 137.704 137.7 15.632 14.6 41.768 15.828 56.18 2.132a1675.476 1675.476 0 0 0 56.152-56.16c13.704-14.408 12.48-40.548-2.132-56.176-46.236-49.104-88.596-91.468-137.7-137.704z"
        fill={getIconColor(color, 1, '#D1AC78')}
      />
      <Path
        d="M502.2716 921.604c-22.088 0-27.376-12.776-11.768-28.392l150.4-150.396c15.624-15.624 46.464-28.388 68.548-28.388h106.024c22.084 0 40.156 18.068 40.156 40.156v126.884c0 22.084-18.072 40.156-40.156 40.156H502.2596l0.012-0.02z"
        fill={getIconColor(color, 2, '#B0B5B5')}
      />
    </Svg>
  );
};

IconAAppround37.defaultProps = {
  size: 18,
};

IconAAppround37 = React.memo ? React.memo(IconAAppround37) : IconAAppround37;

export default IconAAppround37;
