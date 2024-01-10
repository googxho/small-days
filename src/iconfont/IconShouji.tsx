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

let IconShouji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M166.4 0m51.2 0l588.8 0q51.2 0 51.2 51.2l0 921.6q0 51.2-51.2 51.2l-588.8 0q-51.2 0-51.2-51.2l0-921.6q0-51.2 51.2-51.2Z"
        fill={getIconColor(color, 0, '#CBB0F7')}
      />
      <Path
        d="M241.664 72.96m25.6 0l486.4 0q25.6 0 25.6 25.6l0 819.2q0 25.6-25.6 25.6l-486.4 0q-25.6 0-25.6-25.6l0-819.2q0-25.6 25.6-25.6Z"
        fill={getIconColor(color, 1, '#E4D9F9')}
      />
      <Path
        d="M587.264 124.16h-153.6a25.6 25.6 0 0 1-25.6-25.6V57.856h204.8v40.704a25.6 25.6 0 0 1-25.6 25.6z"
        fill={getIconColor(color, 2, '#CBB0F7')}
      />
      <Path
        d="M382.464 892.16m12.8 0l230.4 0q12.8 0 12.8 12.8l0 0q0 12.8-12.8 12.8l-230.4 0q-12.8 0-12.8-12.8l0 0q0-12.8 12.8-12.8Z"
        fill={getIconColor(color, 3, '#CBB0F7')}
      />
      <Path
        d="M241.664 768l537.6-404.736V246.016a36.608 36.608 0 0 0 0-5.632l-537.6 403.968zM241.664 905.984l537.6-404.736v-59.392l-537.6 404.992v59.136z"
        fill={getIconColor(color, 4, '#FFFFFF')}
        opacity=".2"
      />
      <Path
        d="M588.8 371.2a90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608A341.248 341.248 0 0 0 512 601.6a341.248 341.248 0 0 0 99.84-52.48 132.096 132.096 0 0 0 53.76-100.608 74.24 74.24 0 0 0-76.8-77.312z"
        fill={getIconColor(color, 5, '#F0A0F2')}
      />
      <Path
        d="M661.504 422.144a72.704 72.704 0 0 0-72.448-51.2 90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608c5.888 4.608 12.032 9.216 18.176 13.312H435.2c112.128 1.536 204.8-59.648 226.304-139.52z"
        fill={getIconColor(color, 6, '#F5AEF4')}
      />
      <Path
        d="M393.472 422.144m-8.96 0a8.96 8.96 0 1 0 17.92 0 8.96 8.96 0 1 0-17.92 0Z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <Path
        d="M379.392 450.56c1.792-10.752 9.472-13.056 13.056-8.704s-2.56 11.264 2.304 34.56S409.6 512 409.6 515.84s-16.128-14.08-23.808-32.768a61.696 61.696 0 0 1-6.4-32.512z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
    </Svg>
  );
};

IconShouji.defaultProps = {
  size: 18,
};

IconShouji = React.memo ? React.memo(IconShouji) : IconShouji;

export default IconShouji;
