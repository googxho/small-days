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

let IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M955.924 922.936c1.23 4.084 2.091 8.33 2.091 12.817 0 24.64-19.951 44.603-44.57 44.603-24.616 0-44.567-19.963-44.567-44.603 0-0.049 0.013-0.094 0.013-0.143h-1.166c-11.607-186.693-166.217-334.626-355.781-334.626-189.569 0-344.18 147.933-355.785 334.626h-1.055c0.002 0.049 0.015 0.094 0.015 0.143 0 24.64-19.953 44.603-44.57 44.603-24.616 0-44.567-19.963-44.567-44.603 0-4.226 0.775-8.234 1.873-12.11C80.8 754.24 187.807 611.204 337.195 547.482c-69.482-50.686-114.818-132.508-114.818-225.117 0-153.926 124.739-278.723 278.622-278.723 153.875 0 278.621 124.796 278.621 278.723 0 89.329-42.174 168.639-107.507 219.646 156.62 60.408 270.177 206.486 283.81 380.924z m-265.618-600.57c0-104.573-84.904-189.338-189.633-189.338-104.737 0-189.637 84.765-189.637 189.338 0 104.563 84.9 189.336 189.637 189.336 104.73 0 189.633-84.773 189.633-189.336z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;
