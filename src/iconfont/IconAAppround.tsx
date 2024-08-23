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

let IconAAppround: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M918.6224 341.242c-15.212-16.384-26.376-46.76-24.52-67.636l10.088-112.04c1.92-20.856-16.952-39.808-41.96-41.776-259.6-20.44-520.68-15.784-779.616 13.964-24.948 2.864-43.144 22.48-40.476 43.256L114.2424 747.79c2.668 20.784 21.892 35.616 42.74 33.224a3395.108 3395.108 0 0 1 654.104-11.712c20.9 1.64 39.56-13.872 41.484-34.74L862.6664 622.538c1.852-20.868 17.232-48.888 34.448-62.084a3381.892 3381.892 0 0 1 98.388-72.824c17.872-12.708 21.08-36.744 6.58-53.48a3543.876 3543.876 0 0 0-83.456-92.904z"
        fill={getIconColor(color, 0, '#71BF84')}
      />
      <Path
        d="M344.8344 546.638a42 42 0 0 1-10.808-0.804c-20.992-4.332-34.428-23.688-29.748-43.488a6512.808 6512.808 0 0 1 40.968-162.72c5.2-19.744 27.7-32.144 49.988-27.44 22.292 4.7 35.58 24.612 29.932 44.224a6532.376 6532.376 0 0 0-44.052 161.816c-4.232 16.28-19.336 27.472-36.28 28.412zM554.9264 541.13a41.98 41.98 0 0 1-10.74-1.436c-20.696-5.536-32.976-25.648-27.156-45.144a6517.792 6517.792 0 0 1 50.332-160.06c6.336-19.404 29.516-30.472 51.48-24.492 21.984 5.988 34.092 26.64 27.32 45.888a6508.804 6508.804 0 0 0-53.384 158.988c-5.16 16.012-20.884 26.3-37.852 26.256z"
        fill={getIconColor(color, 1, '#E1E8E8')}
      />
    </Svg>
  );
};

IconAAppround.defaultProps = {
  size: 18,
};

IconAAppround = React.memo ? React.memo(IconAAppround) : IconAAppround;

export default IconAAppround;
