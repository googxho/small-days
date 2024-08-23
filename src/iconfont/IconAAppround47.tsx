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

let IconAAppround47: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M822.736 464.932c36.876 88.668 68.5 178.156 94.86 267.984a2068.228 2068.228 0 0 0-468.616-35.04L429.064 190.52a2575.792 2575.792 0 0 1 583.68 43.644c-68.388 74.452-131.768 151.54-190.008 230.768z"
        fill={getIconColor(color, 0, '#9FC95F')}
      />
      <Path
        d="M91.776 125.528a2674.608 2674.608 0 0 1 522.012-34.844l-15.28 488.088a2187.348 2187.348 0 0 0-426.716 28.484L91.776 125.528z"
        fill={getIconColor(color, 1, '#ABD966')}
      />
      <Path
        d="M448.972 697.884a1956.74 1956.74 0 0 1 149.536-119.108 2184.892 2184.892 0 0 0-154.184 0.616l4.648 118.492z"
        opacity=".2"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M27.364 128.96a2691.84 2691.84 0 0 1 117.024-19.652l72.996 502.472a2171.324 2171.324 0 0 0-94.876 15.928L27.364 128.96z"
        fill={getIconColor(color, 3, '#FFFFFF')}
        opacity=".79"
      />
      <Path
        d="M235.096 988.384c-21.58 3.58-43.224-14.872-48.42-41.764L27.612 104.68c-5.192-26.88 17.516-53.856 50.836-59.38 33.324-5.544 63.476 12.648 67.252 39.764l121.68 848.144c3.784 27.14-10.704 51.58-32.284 55.176z"
        fill={getIconColor(color, 4, '#3F3F3F')}
      />
      <Path
        d="M147.868 116.82a2673.98 2673.98 0 0 1 70.292-9.2l56.944 485a2145.28 2145.28 0 0 0-57.46 7.524L147.868 116.82z"
        opacity=".05"
        fill={getIconColor(color, 5, '#333333')}
      />
    </Svg>
  );
};

IconAAppround47.defaultProps = {
  size: 18,
};

IconAAppround47 = React.memo ? React.memo(IconAAppround47) : IconAAppround47;

export default IconAAppround47;
