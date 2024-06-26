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

let IconXmxxIconCalculator8: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M335.010909 633.483636c0.535273-55.947636 23.330909-99.432727 68.410182-130.466909-17.233455-15.104-30.754909-32.465455-40.564364-52.096-11.403636-18.292364-17.105455-40.029091-17.105454-65.221818 0.535273-48.267636 16.837818-88.168727 48.919272-119.726545 30.231273-31.278545 69.201455-47.197091 116.933819-47.720728 48.523636 0.523636 88.157091 16.442182 118.923636 47.720728 31.022545 31.557818 46.789818 71.458909 47.325091 119.714909 0 25.192727-5.166545 46.941091-15.511273 65.233454a193.838545 193.838545 0 0 1-42.158545 52.096c45.079273 31.022545 67.874909 74.519273 68.410182 130.466909-0.535273 52.224-17.640727 93.986909-51.316364 125.277091-34.199273 32.081455-76.101818 48.395636-125.672727 48.919273-49.326545-0.523636-90.554182-16.837818-123.694546-48.919273-34.734545-31.290182-52.363636-73.053091-52.898909-125.288727z m93.858909-249.378909c0.535273 26.775273 9.157818 47.197091 25.856 61.253818 16.442182 14.580364 35.397818 21.876364 56.878546 21.876364 22.272 0 41.623273-7.296 58.065454-21.876364 16.174545-14.056727 24.529455-34.478545 25.053091-61.253818-0.523636-27.578182-8.878545-48.395636-25.053091-62.440727-16.442182-13.533091-35.793455-20.293818-58.065454-20.293818-21.480727 0-40.436364 6.760727-56.878546 20.293818-16.698182 14.045091-25.320727 34.862545-25.856 62.440727z m-10.728727 248.576c0.523636 26.519273 10.077091 48.256 28.625454 65.233455 17.768727 17.757091 39.377455 26.647273 64.837819 26.647273 26.251636 0 48.256-8.890182 66.024727-26.647273 18.036364-16.977455 27.310545-38.714182 27.834182-65.233455-0.523636-27.042909-9.809455-49.047273-27.834182-66.024727-17.768727-16.698182-39.773091-25.320727-66.024727-25.844364-25.460364 0.523636-47.069091 9.146182-64.837819 25.844364-18.548364 16.977455-28.101818 38.981818-28.625454 66.024727z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator8.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator8 = React.memo ? React.memo(IconXmxxIconCalculator8) : IconXmxxIconCalculator8;

export default IconXmxxIconCalculator8;
