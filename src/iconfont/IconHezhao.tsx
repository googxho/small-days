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

let IconHezhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M51.2 38.4h921.6v947.2H51.2z"
        fill={getIconColor(color, 0, '#E3F5FF')}
      />
      <Path
        d="M128 115.2h768v665.6H128z"
        fill={getIconColor(color, 1, '#AAD6F9')}
      />
      <Path
        d="M384 358.4m-89.6 0a89.6 89.6 0 1 0 179.2 0 89.6 89.6 0 1 0-179.2 0Z"
        fill={getIconColor(color, 2, '#F0A0F2')}
      />
      <Path
        d="M460.8 780.8h-153.6v-204.8a76.8 76.8 0 0 1 76.8-76.8 76.8 76.8 0 0 1 76.8 76.8z"
        fill={getIconColor(color, 3, '#F0A0F2')}
      />
      <Path
        d="M640 358.4m-89.6 0a89.6 89.6 0 1 0 179.2 0 89.6 89.6 0 1 0-179.2 0Z"
        fill={getIconColor(color, 4, '#70BBEF')}
      />
      <Path
        d="M716.8 780.8h-153.6v-204.8a76.8 76.8 0 0 1 76.8-76.8 76.8 76.8 0 0 1 76.8 76.8z"
        fill={getIconColor(color, 5, '#70BBEF')}
      />
      <Path
        d="M546.304 166.4a40.704 40.704 0 0 0-34.304 19.456 40.704 40.704 0 0 0-34.304-19.456 33.024 33.024 0 0 0-34.048 34.304 58.88 58.88 0 0 0 23.808 44.8 153.6 153.6 0 0 0 44.544 23.296 153.6 153.6 0 0 0 44.544-23.296 58.88 58.88 0 0 0 23.808-44.8 33.024 33.024 0 0 0-34.048-34.304z"
        fill={getIconColor(color, 6, '#F0A0F2')}
      />
      <Path
        d="M578.304 188.928a32.256 32.256 0 0 0-32-22.528 40.704 40.704 0 0 0-34.304 19.456 40.704 40.704 0 0 0-34.304-19.456 33.024 33.024 0 0 0-34.048 34.304 58.88 58.88 0 0 0 23.808 44.8l8.192 5.888h2.304c49.664 0 91.392-26.88 100.352-62.464z"
        fill={getIconColor(color, 7, '#F5AEF4')}
      />
      <Path
        d="M459.264 188.928m-4.096 0a4.096 4.096 0 1 0 8.192 0 4.096 4.096 0 1 0-8.192 0Z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <Path
        d="M453.12 201.728c0-4.864 4.096-5.888 5.888-3.84s-1.28 4.864 0 15.36 6.144 15.872 5.888 17.408-6.912-6.144-10.496-14.592a28.16 28.16 0 0 1-1.28-14.336z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
    </Svg>
  );
};

IconHezhao.defaultProps = {
  size: 18,
};

IconHezhao = React.memo ? React.memo(IconHezhao) : IconHezhao;

export default IconHezhao;
