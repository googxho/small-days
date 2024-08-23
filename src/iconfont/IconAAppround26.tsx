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

let IconAAppround26: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M733.704 293.492c-56.364 71.944-109.024 143.328-155.344 213.988 21.024 0.28 42.04 1.256 63.004 2.92 30.044-71.024 61.832-143.172 92.34-216.908z"
        opacity=".14"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M352.104 48.016c-6.9 4.608-9.16 11.544-5.86 17.432 78.8 141.152 112.58 294.02 127.4 447.44 0.856 8.584 8.056 14.952 16.172 14.38 9.036-0.652 18.08-1.18 27.12-1.568 3.908-0.164 7.592-1.992 10.284-5.08 62.492-72.332 135.748-144.196 217.84-213.896 7.088-6.008 7.672-16.668 0.968-24.116-92.652-103.308-219.128-187.464-368.576-237.64-8.308-2.808-18.448-1.552-25.348 3.048z"
        fill={getIconColor(color, 1, '#F78383')}
      />
      <Path
        d="M719.916 279.564c-92.008 71.02-173.296 145.54-242.264 221.1-4.336 4.748-5.272 11.748-2.536 17.616 2.744 5.868 8.56 9.436 14.7 9a934.08 934.08 0 0 1 150.132 1.236c6.156 0.552 12.096-3.304 14.892-9.736 30.824-71.416 63.404-143.92 94.648-218.048 3.068-7.26 0.38-15.976-6.692-20.996-7.056-5.052-16.568-5.06-22.88-0.172z"
        fill={getIconColor(color, 2, '#F78383')}
      />
      <Path
        d="M274.724 276.828c-83.076 79.92-161.156 157.636-233.576 232.64-4.032 4.18-4.736 9.828-1.864 14.256 2.88 4.448 8.736 6.808 14.804 5.96a1489.856 1489.856 0 0 1 436.124 3.72c8.048 1.272 15.748-4.616 17.156-13.264 1.544-9.592 3.004-19.196 4.388-28.816a15.992 15.992 0 0 0-2.872-11.728c-57.192-77.98-128.392-147.244-210.688-204.34-7.104-4.952-17.504-4.18-23.472 1.572z"
        fill={getIconColor(color, 3, '#5FD4FF')}
      />
      <Path
        d="M272.508 279.54c-3.62 5.776-2.136 12.86 3.52 17.312 82.26 64.768 151.212 142.68 203.972 229.572 3.308 5.444 9.444 8.148 15.5 6.792 6.06-1.376 10.828-6.56 11.872-13.084 8.508-53.112 14.804-106.58 18.164-160.364 0.416-6.668-3.584-13.008-10.032-15.776-71.36-30.892-146.504-54.952-223.932-71.56-7.588-1.64-15.448 1.34-19.064 7.108z"
        fill={getIconColor(color, 4, '#5FD4FF')}
      />
      <Path
        d="M968.036 502.484a1801.424 1801.424 0 0 0-519.356 1.492c-9.632 1.436-16.284 9.584-14.988 18.096 1.428 9.484 2.772 18.972 4.04 28.476 0.548 4.104 2.848 7.8 6.392 10.296 82.676 58.28 153.876 129.016 211.696 208.956 4.992 6.908 13.892 7.98 20.384 2.388 90.32-78.032 190.236-156.92 298.832-235.364 6.032-4.364 9.112-12.28 7.584-19.928-1.536-7.644-7.372-13.388-14.584-14.412z"
        fill={getIconColor(color, 5, '#FFBF00')}
      />
      <Path
        d="M442.724 505.876c-6.44 3.304-10 9.772-9.028 16.208 7.908 52.476 13.264 105.336 16.748 158.376a15.492 15.492 0 0 0 11.272 13.884c70.36 19.972 137.14 46.916 199.108 79.884 6.064 3.232 13.408 1.304 17.948-4.812 4.516-6.1 5.036-14.832 1.096-21.12a922.996 922.996 0 0 0-217.288-240.876c-5.464-4.252-13.42-4.844-19.856-1.544z"
        fill={getIconColor(color, 6, '#FFBF00')}
      />
      <Path
        d="M516.04 501.652c-6.22-0.652-12.304 0.412-16.956 2.9-108.3 57.988-207.148 122.788-295.172 192.324-7.596 6.016-7.764 14.616-0.668 19.648 98.892 70.228 172.28 162.716 218.16 265.88 2.572 5.744 8.264 9.124 14.5 8.528 6.22-0.612 11.768-5.076 13.952-11.348 51.692-149.512 105.384-299.1 130.032-453.68 1.404-8.652-8.012-17.316-20.896-19.072-14.292-1.96-28.616-3.692-42.952-5.18z"
        fill={getIconColor(color, 7, '#00CCC6')}
      />
      <Path
        d="M320.332 495.752c-9.868 0.428-18.444 4.764-21.48 10.704-33.868 65.868-67.796 131.16-99.588 195.98-3.108 6.352 0.008 12.864 7.424 15.968 7.416 3.104 17.316 2.084 24.248-2.588 100.604-68.032 214.1-128.964 339.24-179.38 7.844-3.16 11.556-9.608 9.1-16.268-2.42-6.632-10.548-12-20.268-13.328a1326.708 1326.708 0 0 0-238.676-11.088z"
        fill={getIconColor(color, 8, '#00CCC6')}
      />
    </Svg>
  );
};

IconAAppround26.defaultProps = {
  size: 18,
};

IconAAppround26 = React.memo ? React.memo(IconAAppround26) : IconAAppround26;

export default IconAAppround26;
