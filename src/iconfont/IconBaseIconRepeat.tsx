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

let IconBaseIconRepeat: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M755.529143 12.507429a42.678857 42.678857 0 0 0-60.342857 60.342857l97.828571 97.828571H298.678857A213.321143 213.321143 0 0 0 85.357714 384v85.321143a42.678857 42.678857 0 1 0 85.321143 0V384a128 128 0 0 1 128-128h494.336l-97.828571 97.828571a42.678857 42.678857 0 0 0 60.342857 60.342858l170.642286-170.678858a42.678857 42.678857 0 0 0 0-60.342857L755.565714 12.507429zM97.828571 840.850286l170.678858 170.642285a42.678857 42.678857 0 0 0 60.342857-60.342857l-97.828572-97.828571h494.336a213.321143 213.321143 0 0 0 213.321143-213.321143v-85.321143a42.678857 42.678857 0 1 0-85.357714 0V640a128 128 0 0 1-128 128H231.058286l97.828571-97.828571a42.678857 42.678857 0 0 0-60.342857-60.342858l-170.678857 170.678858a42.678857 42.678857 0 0 0 0 60.342857z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconBaseIconRepeat.defaultProps = {
  size: 18,
};

IconBaseIconRepeat = React.memo ? React.memo(IconBaseIconRepeat) : IconBaseIconRepeat;

export default IconBaseIconRepeat;
