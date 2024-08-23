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

let IconAAppround17: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M920.5972 843.25c51.412-235.288 70.516-470.18 57.308-704.68-2.336-39.832-41.176-78.388-84.928-84.5-253.98-34.14-507.964-41.164-761.948-21.08-43.74 3.6-82.896 42.32-85.552 84.848-15 249.736 4.308 499.072 57.928 748.02 272.4 27.628 544.8 20.092 817.192-22.608z"
        fill={getIconColor(color, 0, '#EDEDED')}
      />
      <Path
        d="M892.9772 54.07c-253.98-34.14-507.964-41.164-761.948-21.08-43.74 3.6-82.896 42.32-85.552 84.848-1.868 31.052-3.2 62.1-4.004 93.148a6284.228 6284.228 0 0 1 939.864 15.08 2559.7 2559.7 0 0 0-3.428-87.5c-2.34-39.828-41.176-78.384-84.932-84.496z"
        fill={getIconColor(color, 1, '#6B7F8F')}
      />
      <Path
        d="M192.2052 351.47c81.416-1.228 162.8-1.768 244.136-1.628 0.472 125.308 2.3 250.384 5.488 375.244-75.572 0.312-151.172-0.868-226.796-3.544a4223.748 4223.748 0 0 1-22.828-370.072z"
        fill={getIconColor(color, 2, '#F78383')}
      />
      <Path
        d="M554.2652 350.53c93.504 0.92 186.952 2.752 280.348 5.488a4100.768 4100.768 0 0 1-5.308 141.512c-91.868 0.78-183.784 1.304-275.752 1.568 0.324-49.492 0.564-99.012 0.712-148.568z"
        fill={getIconColor(color, 3, '#E0AC48')}
      />
      <Path
        d="M552.9612 575.322c90.62-0.868 181.192-2.58 271.712-5.14a4136.024 4136.024 0 0 1-12.72 141.432 5742.292 5742.292 0 0 1-260.552 11.98c0.612-49.392 1.132-98.816 1.56-148.272z"
        fill={getIconColor(color, 4, '#00CCC6')}
      />
    </Svg>
  );
};

IconAAppround17.defaultProps = {
  size: 18,
};

IconAAppround17 = React.memo ? React.memo(IconAAppround17) : IconAAppround17;

export default IconAAppround17;