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

let IconAAppround44: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M729.8564 75.8276c39.5-4.156 76.488 21.352 82.348 58.352l98.644 652.892c5.86 36.952-35.464 74.028-92.04 79.992a2874.572 2874.572 0 0 1-605.64 0c-56.576-5.964-97.892-43.04-92.032-79.992l98.64-652.892c5.86-37 42.852-62.508 82.348-58.352a2030 2030 0 0 0 427.732 0z"
        fill={getIconColor(color, 0, '#D6DFE8')}
      />
      <Path
        d="M254.1404 871.1076L331.0604 78.6836a2029.64 2029.64 0 0 0 126.856 7.608L433.7604 881.8836a2874.336 2874.336 0 0 1-179.62-10.776z"
        fill={getIconColor(color, 1, '#666666')}
      />
      <Path
        d="M600.2844 786.5396L589.8644 463.5636a2431.676 2431.676 0 0 0 69.48-3.112l20.22 322.54c-26.412 1.56-52.844 2.74-79.284 3.548z"
        fill={getIconColor(color, 2, '#FFFFFF')}
        opacity=".71"
      />
      <Path
        d="M585.4284 325.8676l-4.772-147.888c39.296-1.192 78.568-3.48 117.768-6.852l13.46 147.38a2281.232 2281.232 0 0 1-126.456 7.36z"
        fill={getIconColor(color, 3, '#DBA97D')}
      />
    </Svg>
  );
};

IconAAppround44.defaultProps = {
  size: 18,
};

IconAAppround44 = React.memo ? React.memo(IconAAppround44) : IconAAppround44;

export default IconAAppround44;
