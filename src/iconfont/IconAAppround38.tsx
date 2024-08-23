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

let IconAAppround38: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M183.5416 188.3916a4320.44 4320.44 0 0 1 400.844-11.896c-16.36-0.28-31.46-10.268-38.664-25.816 19.524 63.096 40.252 126.224 60.732 189.12 10.868 22.268 37.6 31.728 59.576 21.372 22-10.36 30.588-36.48 19.26-58.656-21.656-62.596-44.012-125.64-65.62-188.876-7.72-15.636-22.5-25.936-38.168-26.304a2990.132 2990.132 0 0 0-384.832 15.88c-22.424 2.44-44.56 23.48-48.744 46.608-4.18 23.144 12.08 40.296 35.616 38.572z"
        fill={getIconColor(color, 0, '#5E6870')}
      />
      <Path
        d="M804.1176 743.7316c-3.36 23.576-24.84 44.708-47.172 46.596-211.24 17.368-422.48 12.264-633.72-15.292-22.332-3-45.38-24.048-50.38-46.408-29.792-136.004-38.272-272.008-25.436-408.012 2.152-22.364 24.22-42.076 48.192-43.616a6814.72 6814.72 0 0 1 678.744-7.68c23.98 0.972 45.24 21.208 46.688 44.788 8.54 143.208 2.9 286.416-16.92 429.624z"
        fill={getIconColor(color, 1, '#5E6870')}
      />
      <Path
        d="M824.7456 418.0316c38.94-18.584 77.548-36.552 115.556-53.592 21.24-9.496 39.892 1.396 40.92 23.76 3.856 90.948-1.812 181.9-17.008 272.852-3.876 22.368-22.58 33.964-41.316 25.176-34.296-16.072-69.868-33.464-106.404-51.832"
        fill={getIconColor(color, 2, '#B0B5B5')}
      />
      <Path
        d="M661.6376 362.3916c24.852 0.268 45.516 20.5 45.772 45.088 0.248 24.588-20.104 44.58-45.096 44.636-24.992 0.048-45.212-20.12-45.348-45.028-0.108-24.904 19.812-44.96 44.672-44.692z"
        fill={getIconColor(color, 3, '#00CCC6')}
      />
    </Svg>
  );
};

IconAAppround38.defaultProps = {
  size: 18,
};

IconAAppround38 = React.memo ? React.memo(IconAAppround38) : IconAAppround38;

export default IconAAppround38;