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

let IconXiangji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 179.2m51.2 0l921.6 0q51.2 0 51.2 51.2l0 563.2q0 51.2-51.2 51.2l-921.6 0q-51.2 0-51.2-51.2l0-563.2q0-51.2 51.2-51.2Z"
        fill={getIconColor(color, 0, '#44DCDF')}
      />
      <Path
        d="M1024 230.4a51.2 51.2 0 0 0-51.2-51.2H51.2a51.2 51.2 0 0 0-51.2 51.2v563.2a51.2 51.2 0 0 0 51.2 51.2h702.208a948.992 948.992 0 0 0 76.8-85.76A875.264 875.264 0 0 0 1024 262.656z"
        fill={getIconColor(color, 1, '#7AEDE5')}
      />
      <Path
        d="M460.8 512m-371.2 0a371.2 371.2 0 1 0 742.4 0 371.2 371.2 0 1 0-742.4 0Z"
        fill={getIconColor(color, 2, '#44DCDF')}
      />
      <Path
        d="M460.8 512m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z"
        fill={getIconColor(color, 3, '#E3F5FF')}
      />
      <Path
        d="M529.152 412.16A80.896 80.896 0 0 0 460.8 450.816a80.896 80.896 0 0 0-68.352-38.656 66.048 66.048 0 0 0-68.096 68.608 115.456 115.456 0 0 0 47.616 89.344A300.544 300.544 0 0 0 460.8 616.96a300.544 300.544 0 0 0 88.832-46.848 115.456 115.456 0 0 0 47.616-89.344 66.048 66.048 0 0 0-68.096-68.608z"
        fill={getIconColor(color, 4, '#C1A0EF')}
      />
      <Path
        d="M870.4 742.4m25.6 0l51.2 0q25.6 0 25.6 25.6l0 0q0 25.6-25.6 25.6l-51.2 0q-25.6 0-25.6-25.6l0 0q0-25.6 25.6-25.6Z"
        fill={getIconColor(color, 5, '#7AEDE5')}
      />
      <Path
        d="M768 128h102.4a25.6 25.6 0 0 1 25.6 25.6v25.6h-153.6V153.6a25.6 25.6 0 0 1 25.6-25.6z"
        fill={getIconColor(color, 6, '#C1A0EF')}
      />
      <Path
        d="M206.08 321.024c-1.792-1.536 1.536-8.192 2.56-9.728a294.144 294.144 0 0 1 94.208-93.696c4.864-2.816 13.824-3.84 17.152 0a7.424 7.424 0 0 1-1.792 11.52A668.672 668.672 0 0 0 256 272.896c-34.048 30.208-48.128 49.664-49.92 48.128z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <Path
        d="M338.176 207.872m-10.752 0a10.752 10.752 0 1 0 21.504 0 10.752 10.752 0 1 0-21.504 0Z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
    </Svg>
  );
};

IconXiangji.defaultProps = {
  size: 18,
};

IconXiangji = React.memo ? React.memo(IconXiangji) : IconXiangji;

export default IconXiangji;
