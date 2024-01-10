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

let IconQiubite: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M33.8944 79.104L79.104 33.8944l271.5392 271.5136-45.2608 45.2608z"
        fill={getIconColor(color, 0, '#AAD6F9')}
      />
      <Path
        d="M0 0l48.128 179.2L179.2 48.128 0 0z"
        fill={getIconColor(color, 1, '#70BBEF')}
      />
      <Path
        d="M734.464 179.2A262.656 262.656 0 0 0 512 305.152 262.656 262.656 0 0 0 289.536 179.2a215.04 215.04 0 0 0-221.184 223.232c1.28 94.464 42.496 198.656 154.88 290.304A986.368 986.368 0 0 0 512 844.8a986.368 986.368 0 0 0 288.768-152.064c112.384-91.648 153.6-195.84 153.6-290.304A215.04 215.04 0 0 0 734.464 179.2z"
        fill={getIconColor(color, 2, '#F0A0F2')}
      />
      <Path
        d="M943.616 326.144A209.92 209.92 0 0 0 734.464 179.2 262.656 262.656 0 0 0 512 305.152 262.656 262.656 0 0 0 289.536 179.2a215.04 215.04 0 0 0-221.184 223.232c1.28 94.464 42.496 198.656 154.88 290.304 17.152 14.08 35.072 26.88 52.992 38.912h14.08c324.096 0.512 593.664-174.08 653.312-405.504z"
        fill={getIconColor(color, 3, '#F5AEF4')}
      />
      <Path
        d="M169.472 326.144m-25.856 0a25.856 25.856 0 1 0 51.712 0 25.856 25.856 0 1 0-51.712 0Z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <Path
        d="M128 408.064c5.376-30.976 27.392-37.376 37.888-25.6s-7.68 32.512 6.656 99.84a1159.168 1159.168 0 0 0 39.424 113.664c0 12.032-46.336-40.448-68.608-94.464a182.016 182.016 0 0 1-15.36-93.44z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <Path
        d="M575.3344 575.4112a32 32 0 0 1 44.6976 0.512l248.9088 248.9344-45.2608 45.2352-248.9088-248.8832a32 32 0 0 1 0.5632-45.824z"
        fill={getIconColor(color, 6, '#AAD6F9')}
      />
      <Path
        d="M919.552 919.552V1024L793.6 898.048V793.6l125.952 125.952z"
        fill={getIconColor(color, 7, '#94CFF7')}
      />
      <Path
        d="M919.552 919.552H1024L898.048 793.6H793.6l125.952 125.952z"
        fill={getIconColor(color, 8, '#70BBEF')}
      />
    </Svg>
  );
};

IconQiubite.defaultProps = {
  size: 18,
};

IconQiubite = React.memo ? React.memo(IconQiubite) : IconQiubite;

export default IconQiubite;
