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

let IconXmxxIconKeyboardExpand: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 3686 1024" width={size} height={size} {...rest}>
      <Path
        d="M1780.907407 11.977671a167.518443 167.518443 0 0 1 124.41009 0l1675.542812 670.176167a167.56964 167.56964 0 0 1-124.41009 311.178819L1843.112452 348.038508 229.825883 993.281459a167.56964 167.56964 0 0 1-124.41009-311.127621L1780.856209 12.028869z"
        fill={getIconColor(color, 0, '#A1A9B3')}
      />
    </Svg>
  );
};

IconXmxxIconKeyboardExpand.defaultProps = {
  size: 18,
};

IconXmxxIconKeyboardExpand = React.memo ? React.memo(IconXmxxIconKeyboardExpand) : IconXmxxIconKeyboardExpand;

export default IconXmxxIconKeyboardExpand;
