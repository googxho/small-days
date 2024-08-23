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

let IconAAppround2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M782.632 477.752a3599.68 3599.68 0 0 0 120.812-11.152c19.492-2.128 37.056 11.6 39.036 30.74 12.32 120.624 24.632 241.256 36.948 361.884 1.988 19.132-14.02 36.916-35.588 39.272a3970.604 3970.604 0 0 1-133.28 12.308"
        fill={getIconColor(color, 0, '#FF9684')}
      />
      <Path
        d="M155.74 90.428c-17.74-1.936-33.864 11.968-35.848 31.104L44.564 859.224c-1.984 19.132 14.028 36.916 35.596 39.272a3971.76 3971.76 0 0 0 667.6 16.544L706.5 104.08a3276.232 3276.232 0 0 1-550.76-13.652z"
        fill={getIconColor(color, 1, '#FF583B')}
      />
      <Path
        d="M407.828 449.268c-100.104-2.872-175.272-89.824-167.76-187.86 1-14.464 13.052-25.272 26.92-24.272 13.872 1.008 24.48 13.46 23.696 27.936-4.252 69.304 48.844 129.7 118.456 131.704 69.608 2.06 125.616-55.144 124.84-124.596-0.064-14.504 11.144-26.312 25.04-26.508 13.892-0.188 25.38 11.304 25.664 25.808 2.596 98.324-76.76 180.768-176.856 177.788z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconAAppround2.defaultProps = {
  size: 18,
};

IconAAppround2 = React.memo ? React.memo(IconAAppround2) : IconAAppround2;

export default IconAAppround2;
