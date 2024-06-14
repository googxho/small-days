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

let IconXmxxIconCalculator0: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M347.345455 640.64V384.896c0.523636-53.562182 17.629091-94.789818 51.304727-123.694545 31.546182-28.625455 69.201455-42.949818 112.954182-42.949819 45.067636 0 83.386182 14.312727 114.944 42.949819 32.081455 28.904727 48.651636 70.132364 49.710545 123.694545v255.744c-1.047273 53.294545-17.629091 94.394182-49.710545 123.287273-31.557818 28.637091-69.876364 43.229091-114.944 43.752727-43.752727-0.523636-81.408-15.115636-112.954182-43.752727-33.675636-28.893091-50.781091-69.992727-51.316364-123.287273z m245.794909-4.770909V390.074182c-1.594182-58.065455-28.776727-87.633455-81.536-88.704-53.038545 1.070545-80.081455 30.626909-81.140364 88.704v245.794909c1.058909 58.589091 28.101818 88.157091 81.140364 88.692364 52.759273-0.535273 79.941818-30.103273 81.536-88.704z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator0.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator0 = React.memo ? React.memo(IconXmxxIconCalculator0) : IconXmxxIconCalculator0;

export default IconXmxxIconCalculator0;
