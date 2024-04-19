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

let Graphic: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M169.984 144.354304C169.984 112.70144 195.91168 87.04 227.013632 87.04h568.60672c31.49824 0 57.030656 25.53856 57.030656 57.314304v738.704384c0 31.653888-25.92768 57.314304-57.029632 57.314304H227.013632c-31.496192 0-57.029632-25.53856-57.029632-57.314304v-738.70336z m142.222336 56.46336c-15.709184 0-28.444672 12.735488-28.444672 28.444672v284.444672c0 15.70816 12.735488 28.443648 28.444672 28.443648h398.222336c15.709184 0 28.444672-12.734464 28.444672-28.443648V229.262336c0-15.709184-12.735488-28.444672-28.444672-28.444672h-398.22336z m0 455.11168c-15.709184 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672h398.222336c15.709184 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648h-398.22336z m0 113.77664c-15.709184 0-28.444672 12.735488-28.444672 28.444672 0 15.710208 12.735488 28.444672 28.444672 28.444672H539.76064c15.709184 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648H312.20736z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Graphic.defaultProps = {
  size: 18,
};

Graphic = React.memo ? React.memo(Graphic) : Graphic;

export default Graphic;
