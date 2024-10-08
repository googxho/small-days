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

let IconPeople: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M837 629l-42.5 0c15.1-19.1 28.8-45.2 13.3-65.5-18.9-24.8-95-20.1-150.7 65.5l-4.6 0C596 544.2 520 540.8 499 564c-16.8 18.6-2 45.3 13.9 65L473 629c-14.4 0-26 11.7-26 26l0 65c0 14.4 11.7 26 26 26l0 143c0 21.6 17.5 39 39 39l286 0c21.5 0 39-17.5 39-39L837 746c14.4 0 26-11.6 26-26l0-65C863 640.6 851.3 629 837 629zM525 577c14.8-6.2 91 52 91 52l-65 0C551 629 508.9 583.7 525 577zM642 889 512 889 512 746l130 0L642 889zM642 707 486 707l0-39 156 0L642 707zM782.3 576.6c15.7 6.7-25.5 52.2-25.5 52.2L693 628.8C693 628.8 767.7 570.3 782.3 576.6zM798 889 668 889 668 746l130 0L798 889zM824 707 668 707l0-39 156 0L824 707z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M200 772c-4-142.9 118.9-252.9 259.9-259.4 0-0.2 0.1-0.6 0.1-0.6 72.9 0.4 111.8-22.8 116.2-25.5-0.7-0.2-1.4-0.5-2.2-0.8 63.8-35.5 107-103.5 107-181.7 0-114.9-93.1-208-208-208-114.9 0-208 93.1-208 208 0 78.2 43.2 146.2 107 181.7C249.3 524.7 161 633.3 161 771c0 51 16.1 85.4 46.5 109.6 55 43.9 125.1 47.4 125.1 47.4L434 928c0 0-20.7-42.1-19.5-39.9C295.1 884.1 202.5 863.2 200 772zM304 304c0-93.3 75.7-169 169-169 93.3 0 169 75.7 169 169 0 85.3-63.2 155.7-145.3 167.2-7.9-0.5-39.4-0.5-47.3 0C367.2 459.6 304 389.3 304 304z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPeople.defaultProps = {
  size: 18,
};

IconPeople = React.memo ? React.memo(IconPeople) : IconPeople;

export default IconPeople;
