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

let IconAAppround13: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.548 91.94c-18.572 2.992-31.16 21.64-28.3 41.468 1.568 10.844 3.072 21.696 4.508 32.552 2.632 19.856 19.812 34.356 38.496 32.188l342.94-40.7c18.668-2.264 36.208 14.712 38.628 37.748a3132.124 3132.124 0 0 1 11.096 522.096c-1.396 23.024 9.104 53.3 23.564 67.576a3113.408 3113.408 0 0 1 67.128 68.028c14.132 14.848 27.816 7.6 30.168-16.4a3262.348 3262.348 0 0 0-18.46-780.908c-3.456-23.904-21.78-40.984-40.348-37.996-156.472 24.784-312.944 49.56-469.42 74.348z"
        fill={getIconColor(color, 0, '#00CCC6')}
        opacity=".4"
      />
      <Path
        d="M611.84 228.576L158.36 272.548c-17.088 1.7-29.54 18.432-27.976 37.204a2559.616 2559.616 0 0 1-19.396 592.124c-2.82 18.676 7.952 28.412 24.188 21.46a2912.66 2912.66 0 0 0 220.36-106.336c15.908-8.516 40.24-6.144 54.008 5.732a3017.228 3017.228 0 0 1 183.744 172.44c13 13.32 26.6 6.008 30.004-16.528a3077.752 3077.752 0 0 0 23.32-711.964c-1.88-22.668-17.692-39.804-34.776-38.104z"
        fill={getIconColor(color, 1, '#00CCC6')}
      />
    </Svg>
  );
};

IconAAppround13.defaultProps = {
  size: 18,
};

IconAAppround13 = React.memo ? React.memo(IconAAppround13) : IconAAppround13;

export default IconAAppround13;
