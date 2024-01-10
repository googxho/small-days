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

let IconJia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.403072 1024H153.603072a51.2 51.2 0 0 1-51.2-51.2V345.6l409.6-307.2 409.6 307.2V972.8a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 0, '#7AEDE5')}
      />
      <Path
        d="M102.403072 473.6L512.003072 171.52l409.6 302.08v-85.248L509.955072 70.4 102.403072 358.4v115.2zM870.403072 1024H153.603072a51.2 51.2 0 0 1-51.2-51.2V691.2h819.2v281.6a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 1, '#44DCDF')}
      />
      <Path
        d="M972.803072 448a51.2 51.2 0 0 1-30.72-10.24L512.003072 115.2 81.923072 437.76a51.2 51.2 0 0 1-61.44-81.92L481.283072 10.24a51.2 51.2 0 0 1 61.44 0l460.8 345.6a51.2 51.2 0 0 1-30.72 92.16z"
        fill={getIconColor(color, 2, '#20CACE')}
      />
      <Path
        d="M588.803072 389.12a90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608A341.248 341.248 0 0 0 512.003072 619.52a341.248 341.248 0 0 0 99.84-52.48 132.096 132.096 0 0 0 53.76-100.608 74.24 74.24 0 0 0-76.8-77.312z"
        fill={getIconColor(color, 3, '#BE92F1')}
      />
      <Path
        d="M661.507072 440.064a72.704 72.704 0 0 0-72.448-51.2 90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608c5.888 4.608 12.032 9.216 18.176 13.312H435.203072c112.128 1.024 204.8-59.648 226.304-139.52z"
        fill={getIconColor(color, 4, '#C1A0EF')}
      />
      <Path
        d="M393.475072 440.064m-8.96 0a8.96 8.96 0 1 0 17.92 0 8.96 8.96 0 1 0-17.92 0Z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <Path
        d="M379.395072 468.48c1.792-10.752 9.472-13.056 13.056-8.704s-2.56 11.264 2.304 34.56 14.08 35.84 13.824 39.424-16.128-14.08-23.808-32.768a61.696 61.696 0 0 1-5.376-32.512z"
        fill={getIconColor(color, 6, '#FFFFFF')}
      />
    </Svg>
  );
};

IconJia.defaultProps = {
  size: 18,
};

IconJia = React.memo ? React.memo(IconJia) : IconJia;

export default IconJia;
