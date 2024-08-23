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

let IconAAppround33: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M8.677966 234.114169C122.689085 446.611525 347.205424 745.00339 498.384271 1024 654.049627 747.710915 891.378983 444.906305 1015.322034 234.114169c-335.550915-57.6-671.097492-57.6-1006.644068 0z"
        fill={getIconColor(color, 0, '#7AB934')}
      />
      <Path
        d="M8.677966 234.305085C89.261559 167.224407 168.513085 95.570441 242.375593 23.72122c179.742373-31.626847 359.493424-31.631186 539.244475 0C855.486915 95.570441 934.74278 167.228746 1015.322034 234.305085 679.775458 176.275525 344.224542 176.275525 8.677966 234.305085z"
        fill={getIconColor(color, 1, '#7ED321')}
      />
      <Path
        d="M277.694915 199.59322c34.529627-63.869831 68.638373-128.694237 100.616678-193.692203a1526.705898 1526.705898 0 0 1 227.779254-3.024271c30.424949 64.646508 63.266712 129.401492 96.824407 193.457898A2901.794712 2901.794712 0 0 0 277.694915 199.59322z"
        fill={getIconColor(color, 2, '#97E345')}
      />
      <Path
        d="M277.694915 200.391593C328.257085 464.010847 429.602712 745.723661 498.939661 1024c60.281492-277.130847 154.020881-558.991186 203.975593-826.853966a2912.785356 2912.785356 0 0 0-425.220339 3.245559z"
        fill={getIconColor(color, 3, '#7ED321')}
      />
    </Svg>
  );
};

IconAAppround33.defaultProps = {
  size: 18,
};

IconAAppround33 = React.memo ? React.memo(IconAAppround33) : IconAAppround33;

export default IconAAppround33;
