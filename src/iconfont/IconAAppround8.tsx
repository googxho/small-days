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

let IconAAppround8: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M214.036 692.1c210.132-107.376 466.568-112.088 679.716-9.484-187.928 44.148-295.364 163.916-341.604 279.044-45.368-117.552-153.732-235.708-338.112-269.56z"
        fill={getIconColor(color, 0, '#F5C900')}
      />
      <Path
        d="M261.76 503.708c-2.164-2.568-134.096 88.916-106.412 139.248 24.22 49.404 59.728 114.296 59.764 114.284a1029.504 1029.504 0 0 1 115.74-32.332c-24.6-73.288-48.18-146.848-69.092-221.2zM844.996 503.7c2.172-2.576 134.112 88.916 106.428 139.252-24.216 49.404-59.728 114.296-59.768 114.28a1029.708 1029.708 0 0 0-115.744-32.332c24.592-73.288 48.172-146.844 69.084-221.2z"
        fill={getIconColor(color, 1, '#DB9065')}
      />
      <Path
        d="M629.956 61.448c112.636 48.572 284.052 199.808 263.768 273.924-28.476 132.936-69.296 262.22-113.316 390.516-150.932-33.14-302.22-33.204-453.156-0.2-43.86-128.4-84.536-257.776-112.924-390.776-20.988-76.572 163.816-228.892 277.224-274.456-0.368 0.136 62.812-38.104 138.404 0.992z"
        fill={getIconColor(color, 2, '#F5A171')}
      />
    </Svg>
  );
};

IconAAppround8.defaultProps = {
  size: 18,
};

IconAAppround8 = React.memo ? React.memo(IconAAppround8) : IconAAppround8;

export default IconAAppround8;
