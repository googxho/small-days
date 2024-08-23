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

let IconAAppround45: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M396.6532 413.632c0.572-54.624 1.568-109.252 2.984-163.872 1.908-61.72 52-86.336 112.364-86.336 60.372 0 110.46 24.612 112.368 86.336 1.42 54.628 2.408 109.248 2.984 163.88 34.528 0.552 69.056 1.36 103.588 2.408a5374.68 5374.68 0 0 0-5.668-160.328c-7.348-114.864-103.992-196.06-213.268-196.408-109.272 0.348-205.92 81.544-213.268 196.408a5359.792 5359.792 0 0 0-5.668 160.328c34.528-1.048 69.056-1.856 103.584-2.416z"
        fill={getIconColor(color, 0, '#AB9A73')}
      />
      <Path
        d="M841.8452 420.296a7170.44 7170.44 0 0 0-659.688 0c-24.328 1.208-44.972 20.564-45.48 42.816-3.34 149.008 5.328 298.02 25.988 447.028 3.168 22.252 24.308 44.924 46.576 49.644 201.84 41.896 403.676 41.896 605.516 0 22.268-4.72 43.4-27.4 46.572-49.64 20.664-149.012 29.328-298.024 25.988-447.032-0.496-22.252-21.148-41.608-45.472-42.816z"
        fill={getIconColor(color, 1, '#FFB917')}
      />
      <Path
        d="M562.6692 729.744c-6.356 0.084-12.708 0.152-19.064 0.204-0.14 26.764-0.308 53.528-0.504 80.296-20.728 0.24-41.46 0.24-62.188 0-0.196-26.76-0.364-53.528-0.504-80.296-6.36-0.052-12.712-0.12-19.068-0.2-0.328-38.772-0.56-77.544-0.7-116.312 34.244 0.192 68.492 0.192 102.736 0-0.144 38.768-0.376 77.54-0.708 116.308z"
        fill={getIconColor(color, 2, '#BF8B11')}
      />
    </Svg>
  );
};

IconAAppround45.defaultProps = {
  size: 18,
};

IconAAppround45 = React.memo ? React.memo(IconAAppround45) : IconAAppround45;

export default IconAAppround45;
