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

let IconBaseIconMinus: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.666667 512a42.666667 42.666667 0 0 1 42.666666-42.666667h597.333334a42.666667 42.666667 0 1 1 0 85.333334H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconBaseIconMinus.defaultProps = {
  size: 18,
};

IconBaseIconMinus = React.memo ? React.memo(IconBaseIconMinus) : IconBaseIconMinus;

export default IconBaseIconMinus;
