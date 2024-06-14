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

let IconXmxxIconCalculator3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M459.496727 540.811636v-73.588363h28.637091c28.369455 0 50.385455-7.819636 66.024727-23.458909 15.639273-15.127273 23.470545-34.734545 23.470546-58.868364-0.535273-24.389818-8.610909-44.416-24.261818-60.055273-15.650909-15.115636-35.805091-22.935273-60.462546-23.470545-17.757091 0-33.931636 5.701818-48.523636 17.105454-15.371636 11.403636-25.716364 29.032727-31.022546 52.898909H330.24c4.235636-42.949818 21.608727-79.150545 52.096-108.578909 29.963636-29.160727 65.757091-44.020364 107.392-44.544 52.759273 0.523636 94.661818 17.361455 125.672727 50.501819 29.707636 32.349091 44.823273 70.539636 45.346909 114.548363 0 22.283636-3.979636 43.752727-11.927272 64.442182-9.285818 20.677818-25.856 39.098182-49.722182 55.272727 24.401455 15.918545 42.030545 35.002182 52.898909 57.274182a164.317091 164.317091 0 0 1 15.511273 70.004364c-0.523636 54.353455-17.361455 97.175273-50.501819 128.465454-32.616727 32.081455-74.519273 48.395636-125.684363 48.919273-39.505455 0-74.507636-12.730182-105.006546-38.178909-30.487273-25.460364-50.245818-62.312727-59.264-110.568727h83.130182c7.424 19.351273 17.896727 35.002182 31.418182 46.929454 13.789091 12.462545 32.081455 18.699636 54.888727 18.699637 24.389818 0 44.939636-8.354909 61.649455-25.064728 16.965818-15.639273 25.716364-37.911273 26.251636-66.816-0.535273-29.44-9.285818-52.235636-26.251636-68.410182-16.709818-15.639273-37.922909-23.458909-63.639273-23.458909h-35.002182z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator3.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator3 = React.memo ? React.memo(IconXmxxIconCalculator3) : IconXmxxIconCalculator3;

export default IconXmxxIconCalculator3;