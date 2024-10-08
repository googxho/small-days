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

let IconAAppround12: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M233.52 174.712c4.708-14.604-3.812-27.188-19.664-27.492-18.532-0.24-37.184 0.192-55.932 1.368-16.024 0.868-35.368 15.532-42.18 32.188-67.036 160.864-85.72 347.18-47.512 528.492 3.98 18.676 15.612 24.884 25.392 14.564 32.184-33.42 67.04-61.812 103.588-85.928 11.16-7.472 17.436-25.516 14.336-40.744-29.288-140.748-21.46-287.108 21.972-422.448zM530.076 226.28c5.276-8.82-2.132-19.948-16.864-24.744a1518.968 1518.968 0 0 0-52.044-15.604c-14.884-4.28-33.892 0.34-41.728 10.38-76.556 96.436-124.864 225.016-128.704 364.132-0.368 14.344 9.568 21.624 21.556 16.492 39.272-16.484 79.548-29.636 120.356-40.476 12.488-3.4 22.352-15.108 22.312-26.248-0.908-103.3 26.5-201.924 75.116-283.932z"
        fill={getIconColor(color, 0, '#9998D1')}
      />
      <Path
        d="M731.016 869.096c-7.172 7.676-7.08 18.708 0.388 25.556a428.332 428.332 0 0 1 25.692 24.92c6.948 7.46 21.164 8.564 31.652 1.164 100.768-70.32 181.412-201.456 188.504-367.324 0.84-17.072-11.204-33.264-25.368-34.4-45.956-4.044-89.884 0.344-131.012 10.636-12.652 3.284-18.972 17.604-15.636 30.952 30.732 124.772-7.688 238.12-74.22 308.496zM527.08 853.24c-6.256 8.52-4.932 19.484 3.452 25.024a877.92 877.92 0 0 1 29.392 19.732c8.152 5.852 22.94 4.024 32.536-5.084 91.86-86.592 152.836-228.504 131.224-394.304-2.236-17.112-15.432-28.688-27.696-24.816-40 12.184-77.632 29.192-113.592 48.88-11.012 6.184-15.74 21.104-11.756 32.864 36.88 109.852 14.472 219.156-43.56 297.704z"
        fill={getIconColor(color, 1, '#9998D1')}
      />
    </Svg>
  );
};

IconAAppround12.defaultProps = {
  size: 18,
};

IconAAppround12 = React.memo ? React.memo(IconAAppround12) : IconAAppround12;

export default IconAAppround12;
