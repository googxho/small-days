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

let IconXmxxIconCalculator2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M342.574545 802.909091v-78.347636L568.878545 441.367273c8.750545-11.403636 14.708364-22.016 17.896728-31.825455 2.117818-9.274182 3.176727-18.036364 3.176727-26.251636 0-21.736727-6.749091-40.692364-20.282182-56.866909-14.056727-16.174545-33.943273-24.529455-59.659636-25.064728-22.807273 0-41.762909 7.296-56.878546 21.876364-15.639273 14.592-24.925091 35.141818-27.834181 61.649455h-82.734546c2.129455-48.256 18.304-88.157091 48.523636-119.714909 30.487273-30.754909 68.014545-46.405818 112.558546-46.929455 49.850182 0.523636 90.286545 16.442182 121.309091 47.720727 31.557818 31.022545 47.592727 70.4 48.128 118.132364 0 38.178909-11.671273 72.122182-35.002182 101.818182l-186.530909 233.856h221.533091V802.909091H342.562909z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator2.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator2 = React.memo ? React.memo(IconXmxxIconCalculator2) : IconXmxxIconCalculator2;

export default IconXmxxIconCalculator2;
