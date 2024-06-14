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

let IconXmxxIconCalculatorBack: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M701.160727 410.693818a25.6 25.6 0 0 1 0 36.212364l-61.905454 61.893818 61.905454 61.905455a25.6 25.6 0 0 1-36.212363 36.18909l-61.893819-61.893818-61.905454 61.905455a25.6 25.6 0 1 1-36.189091-36.212364l61.893818-61.893818-61.905454-61.905455a25.6 25.6 0 0 1 36.212363-36.18909l61.893818 61.893818 61.905455-61.905455a25.6 25.6 0 0 1 36.189091 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M337.861818 768L85.748364 550.784a51.2 51.2 0 0 1 0-77.568L337.861818 256H901.818182v512H337.861818z m21.608727-453.818182L129.861818 512l229.608727 197.818182H843.636364V314.181818H359.470545z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculatorBack.defaultProps = {
  size: 18,
};

IconXmxxIconCalculatorBack = React.memo ? React.memo(IconXmxxIconCalculatorBack) : IconXmxxIconCalculatorBack;

export default IconXmxxIconCalculatorBack;
