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

let IconYoujian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.8 883.2H51.2a51.2 51.2 0 0 1-51.2-51.2v-51.2h1024v51.2a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 0, '#70BBEF')}
      />
      <Path
        d="M0 345.6h1024v435.2H0z"
        fill={getIconColor(color, 1, '#94CFF7')}
      />
      <Path
        d="M1024 381.44l-512 256-512-256v-35.84h1024v35.84z"
        fill={getIconColor(color, 2, '#70BBEF')}
      />
      <Path
        d="M1024 345.6l-512 256-512-256v-153.6a51.2 51.2 0 0 1 51.2-51.2h921.6a51.2 51.2 0 0 1 51.2 51.2z"
        fill={getIconColor(color, 3, '#AAD6F9')}
      />
      <Path
        d="M588.8 448a90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608A341.248 341.248 0 0 0 512 678.4a341.248 341.248 0 0 0 99.84-52.48 132.096 132.096 0 0 0 53.76-100.608 74.24 74.24 0 0 0-76.8-77.312z"
        fill={getIconColor(color, 4, '#F0A0F2')}
      />
      <Path
        d="M661.504 498.944a72.704 72.704 0 0 0-72.448-51.2 90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608c5.888 4.608 12.032 9.216 18.176 13.312H435.2c112.128 1.536 204.8-59.648 226.304-139.52z"
        fill={getIconColor(color, 5, '#F5AEF4')}
      />
      <Path
        d="M393.472 498.944m-8.96 0a8.96 8.96 0 1 0 17.92 0 8.96 8.96 0 1 0-17.92 0Z"
        fill={getIconColor(color, 6, '#FFFFFF')}
      />
      <Path
        d="M379.392 527.36c1.792-10.752 9.472-13.056 13.056-8.704s-2.56 11.264 2.304 34.56S409.6 588.8 409.6 592.64s-16.128-14.08-23.808-32.768a61.696 61.696 0 0 1-6.4-32.512z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
    </Svg>
  );
};

IconYoujian.defaultProps = {
  size: 18,
};

IconYoujian = React.memo ? React.memo(IconYoujian) : IconYoujian;

export default IconYoujian;
