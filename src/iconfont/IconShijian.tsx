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

let IconShijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-486.4 0a486.4 486.4 0 1 0 972.8 0 486.4 486.4 0 1 0-972.8 0Z"
        fill={getIconColor(color, 0, '#94CFF7')}
      />
      <Path
        d="M512 512m-396.8 0a396.8 396.8 0 1 0 793.6 0 396.8 396.8 0 1 0-793.6 0Z"
        fill={getIconColor(color, 1, '#E3F5FF')}
      />
      <Path
        d="M686.848 765.952a37.888 37.888 0 0 1-29.696-14.336l-183.552-226.048V196.352a38.4 38.4 0 0 1 76.8 0v302.08l166.4 204.8a38.4 38.4 0 0 1-5.632 54.016 37.888 37.888 0 0 1-24.32 8.704z"
        fill={getIconColor(color, 2, '#94CFF7')}
      />
      <Path
        d="M588.8 396.8a90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608A341.248 341.248 0 0 0 512 627.2a341.248 341.248 0 0 0 99.84-52.48 132.096 132.096 0 0 0 53.76-100.608 74.24 74.24 0 0 0-76.8-77.312z"
        fill={getIconColor(color, 3, '#F0A0F2')}
      />
      <Path
        d="M661.504 447.744a72.704 72.704 0 0 0-72.448-51.2 90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608c5.888 4.608 12.032 9.216 18.176 13.312H435.2c112.128 1.536 204.8-59.648 226.304-139.52z"
        fill={getIconColor(color, 4, '#F5AEF4')}
      />
      <Path
        d="M393.472 447.744m-8.96 0a8.96 8.96 0 1 0 17.92 0 8.96 8.96 0 1 0-17.92 0Z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <Path
        d="M379.392 476.16c1.792-10.752 9.472-13.056 13.056-8.704s-2.56 11.264 2.304 34.56S409.6 537.6 409.6 541.44s-16.128-14.08-23.808-32.768a61.696 61.696 0 0 1-6.4-32.512z"
        fill={getIconColor(color, 6, '#FFFFFF')}
      />
    </Svg>
  );
};

IconShijian.defaultProps = {
  size: 18,
};

IconShijian = React.memo ? React.memo(IconShijian) : IconShijian;

export default IconShijian;
