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

let IconBaowenbei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M76.8 204.8h409.6v768a51.2 51.2 0 0 1-51.2 51.2H128a51.2 51.2 0 0 1-51.2-51.2V204.8z"
        fill={getIconColor(color, 0, '#F6DAF7')}
      />
      <Path
        d="M435.2 972.8H128a51.2 51.2 0 0 1-51.2-51.2V153.6h409.6v768a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 1, '#F9E8F9')}
      />
      <Path
        d="M128 25.6h307.2a51.2 51.2 0 0 1 51.2 51.2v204.8H76.8V76.8a51.2 51.2 0 0 1 51.2-51.2z"
        fill={getIconColor(color, 2, '#F6DAF7')}
      />
      <Path
        d="M153.6 0h256a76.8 76.8 0 0 1 76.8 76.8v179.2H76.8V76.8a76.8 76.8 0 0 1 76.8-76.8z"
        fill={getIconColor(color, 3, '#BE92F1')}
      />
      <Path
        d="M486.4 769.792a467.712 467.712 0 0 1-134.912-70.912 176.64 176.64 0 0 1-72.192-135.68 100.352 100.352 0 0 1 102.4-104.192 122.368 122.368 0 0 1 104.704 58.88z"
        fill={getIconColor(color, 4, '#F0A0F2')}
      />
      <Path
        d="M135.936 114.688c-1.536-22.784-14.336-27.648-16.896-13.824a455.936 455.936 0 0 0 5.376 123.648c0 3.072 5.12-7.168 6.912-27.136a678.4 678.4 0 0 0 4.608-82.688z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <Path
        d="M127.744 64.768m-12.8 0a12.8 12.8 0 1 0 25.6 0 12.8 12.8 0 1 0-25.6 0Z"
        fill={getIconColor(color, 6, '#FFFFFF')}
      />
      <Path
        d="M588.8 1024h307.2a51.2 51.2 0 0 0 51.2-51.2V204.8H537.6v768a51.2 51.2 0 0 0 51.2 51.2z"
        fill={getIconColor(color, 7, '#98D7F9')}
      />
      <Path
        d="M896 972.8H588.8a51.2 51.2 0 0 1-51.2-51.2V153.6h409.6v768a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 8, '#B0DFFF')}
      />
      <Path
        d="M537.6 281.6h409.6V76.8a51.2 51.2 0 0 0-51.2-51.2H588.8a51.2 51.2 0 0 0-51.2 51.2z"
        fill={getIconColor(color, 9, '#98D7F9')}
      />
      <Path
        d="M947.2 256H537.6V76.8a76.8 76.8 0 0 1 76.8-76.8h256a76.8 76.8 0 0 1 76.8 76.8v179.2z"
        fill={getIconColor(color, 10, '#BE92F1')}
      />
      <Path
        d="M537.6 769.792a467.712 467.712 0 0 0 134.912-70.912 176.64 176.64 0 0 0 72.192-135.68 100.352 100.352 0 0 0-102.4-104.192 122.368 122.368 0 0 0-104.704 58.88z"
        fill={getIconColor(color, 11, '#C1A0EF')}
      />
      <Path
        d="M582.144 114.688c1.536-22.784 14.336-27.648 16.896-13.824a456.704 456.704 0 0 1-5.12 123.648c-1.536 3.072-5.376-7.168-7.168-27.136a678.4 678.4 0 0 1-4.608-82.688z"
        fill={getIconColor(color, 12, '#FFFFFF')}
      />
      <Path
        d="M590.336 64.768m-12.8 0a12.8 12.8 0 1 0 25.6 0 12.8 12.8 0 1 0-25.6 0Z"
        fill={getIconColor(color, 13, '#FFFFFF')}
      />
    </Svg>
  );
};

IconBaowenbei.defaultProps = {
  size: 18,
};

IconBaowenbei = React.memo ? React.memo(IconBaowenbei) : IconBaowenbei;

export default IconBaowenbei;
