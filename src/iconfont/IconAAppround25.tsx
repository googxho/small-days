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

let IconAAppround25: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1017.564 817.84c-91.344-79.8-179.796-168.18-264.184-264.24a1797.228 1797.228 0 0 1-509.228-10.632c241.928 149.984 507 244.7 773.412 274.876z"
        fill={getIconColor(color, 0, '#00A0C6')}
      />
      <Path
        d="M887.432 849.82c-247.968-46.44-491.74-147.44-714.272-295.504a5905.956 5905.956 0 0 1-161.016 272.532c286.824 75.664 586.516 83.228 875.288 22.972z"
        fill={getIconColor(color, 1, '#00CCC6')}
      />
      <Path
        d="M484.28 47.312c-2.568-0.08-5.132-0.16-7.7-0.232 0.972-1.028-136.208 0.488-213.656 67.256-49.504 41.58-69.944 110.772-27.716 197.38 38.4 88.04 139.46 193.484 244.46 340.496 1.328-0.076 2.656-0.144 3.984-0.208 122.604-177.42 230.2-278.876 255.004-366.94 30.46-84.568-21.88-155.752-88.612-191.884-75.588-42.32-166.26-46.172-165.76-45.868z m-5.656 254.448c-50.836-0.328-95.32-25.9-99.428-61.752-4.128-35.716 40.152-68.012 98.864-66.828 58.704 1.112 103.048 34.52 99.292 69.32-3.744 34.936-47.892 59.4-98.728 59.26z"
        fill={getIconColor(color, 2, '#F06262')}
      />
    </Svg>
  );
};

IconAAppround25.defaultProps = {
  size: 18,
};

IconAAppround25 = React.memo ? React.memo(IconAAppround25) : IconAAppround25;

export default IconAAppround25;
