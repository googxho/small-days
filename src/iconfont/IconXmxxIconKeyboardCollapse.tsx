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

let IconXmxxIconKeyboardCollapse: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 3687 1024" width={size} height={size} {...rest}>
      <Path
        d="M1781.832477 993.416776c39.891162 15.956465 84.385151 15.956465 124.276313 0l1673.741115-669.455532a167.389454 167.389454 0 0 0-124.276313-310.844212L1843.970633 657.717302 232.418817 13.168175a167.389454 167.389454 0 1 0-124.276313 310.793069l1673.689973 669.455532z"
        fill={getIconColor(color, 0, '#A1A9B3')}
      />
    </Svg>
  );
};

IconXmxxIconKeyboardCollapse.defaultProps = {
  size: 18,
};

IconXmxxIconKeyboardCollapse = React.memo ? React.memo(IconXmxxIconKeyboardCollapse) : IconXmxxIconKeyboardCollapse;

export default IconXmxxIconKeyboardCollapse;
