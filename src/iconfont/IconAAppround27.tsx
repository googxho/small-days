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

let IconAAppround27: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M986.968 466.62c-74.516-134.68-174.804-263.332-299.504-376.992-28.492-25.868-55.296-20.936-57.788 9.812l-14.76 167.852c-357.96-15.704-488.12 188.948-519.26 346.724-32.972 166.112 33.072 285.36 25.18 291.28-19.72-172.04 82.816-286.62 197.304-340.788 114.708-58.036 241.364-30.316 274.996-24.176l-18.012 204.82c-2.496 30.772 11.944 39.528 33.684 20.456 96.38-83.88 214.488-178.824 350.4-225.212 30.772-10.384 44.696-42.976 27.76-73.776z"
        fill={getIconColor(color, 0, '#9ACC58')}
      />
    </Svg>
  );
};

IconAAppround27.defaultProps = {
  size: 18,
};

IconAAppround27 = React.memo ? React.memo(IconAAppround27) : IconAAppround27;

export default IconAAppround27;
