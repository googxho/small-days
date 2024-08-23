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

let IconAAppround3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M86.464529 183.050579c-25.17686 325.162314 101.003636 544.277157 224.378711 671.219305 124.809521 128.765884 246.817851 165.363306 246.593586 167.504397 385.015537-300.730182 375.473719-748.87405 382.464-756.058975C666.666314 252.424463 554.546777 4.15524 556.99676 2.179174 382.235504 239.696397 87.717025 186.418777 86.464529 183.050579z"
        fill={getIconColor(color, 0, '#7ED321')}
      />
      <Path
        d="M939.900826 265.715306C666.666314 252.424463 554.546777 4.15524 556.99676 2.179174a4067.408397 4067.408397 0 0 0 0.440066 1019.595107c385.024-300.72595 375.473719-748.87405 382.464-756.058975z"
        fill={getIconColor(color, 1, '#6BAA26')}
        opacity=".513"
      />
    </Svg>
  );
};

IconAAppround3.defaultProps = {
  size: 18,
};

IconAAppround3 = React.memo ? React.memo(IconAAppround3) : IconAAppround3;

export default IconAAppround3;
