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

let IconAAppround10: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M675.704 353.556c-45.744-43.72-76.108-105.192-83.868-172.908-141.412-7.104-282.816-2.844-424.228 12.768-16.772 1.856-33.456 8.292-49.156 17.852 91.056 107.652 219.724 238.988 343.888 368.868 72.504-76.816 146.496-154.028 213.364-226.58z"
        fill={getIconColor(color, 0, '#B8B0C0')}
      />
      <Path
        d="M835.36 422.252a237.5 237.5 0 0 1-92.828-22.576c-79.78 84.132-169.048 175.668-253.8 266.356-14.608 15.628-37.7 15.736-52.368 0.2-131.864-139.428-274.872-281.288-377.368-394.76-8.788 14.772-15.048 30.648-17.58 46.988-20.716 133.784-20.716 267.568 0 401.352 10.048 60.688 69.748 118.224 126.2 125.04a2648.664 2648.664 0 0 0 583.18 0c56.448-6.812 116.16-64.34 126.208-125.04 15.572-100.556 19.44-201.112 11.6-301.664a236.26 236.26 0 0 1-53.24 4.104z"
        fill={getIconColor(color, 1, '#B8B0C0')}
      />
      <Path
        d="M954.048 67.664c61.164 61.16 61.164 160.328 0 221.488-61.16 61.164-160.324 61.164-221.488 0-61.16-61.16-61.16-160.324 0-221.488 61.16-61.16 160.328-61.16 221.488 0"
        fill={getIconColor(color, 2, '#FF6677')}
      />
    </Svg>
  );
};

IconAAppround10.defaultProps = {
  size: 18,
};

IconAAppround10 = React.memo ? React.memo(IconAAppround10) : IconAAppround10;

export default IconAAppround10;
