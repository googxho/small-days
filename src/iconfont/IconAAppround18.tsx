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

let IconAAppround18: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M982.924 402.08a132.904 132.904 0 0 0-0.98-8.788l-0.256-1.968c-0.18-2.904-0.4-5.816-0.728-8.7-6.492-59.364-32.488-125.94-91.344-185.948-57.48-57.716-137.836-79.312-194.28-92.596-0.148-0.032-0.292-0.068-0.444-0.096a141.56 141.56 0 0 0-4.968-0.964c-64.904-12.58-137.452 7.084-182.296 83.42-41.532-76.204-102.332-93.712-157.304-87.22-57 5.816-143.096 27.148-203.352 82.924-59.064 55.568-84.924 116.388-98.68 174.6a179.68 179.68 0 0 0-1.84 8.824c-0.156 0.584-0.324 1.172-0.492 1.764-0.816 2.9-1.828 6.504-2.34 10.548-15.872 137.888 92.52 211.136 185.756 294.068 21.088 18.04 42.812 37.016 63.092 56.728 0.516 0.508 1.044 0.984 1.584 1.46 145.724 126.764 189.18 219.492 190.064 220.14 4.76 9.552 13.096 15.584 21.976 15.64 0.552 0 1.108-0.024 1.648-0.08 9.516-0.736 17.872-8.08 21.672-18.868 1.252-1.048 31.456-94.124 201.02-217.332 156.388-93.44 260.856-201.248 252.492-327.556z"
        fill={getIconColor(color, 0, '#FF583B')}
      />
    </Svg>
  );
};

IconAAppround18.defaultProps = {
  size: 18,
};

IconAAppround18 = React.memo ? React.memo(IconAAppround18) : IconAAppround18;

export default IconAAppround18;
