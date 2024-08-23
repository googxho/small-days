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

let IconAAppround46: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M193.408 371.9844c227.648-62.14 431.56-67.128 660.16-11.996 53.188 161.568 42.66 327.696-10.928 498.148-208.9 8.092-431.38 4-640.78-14.92-50.152-162.016-59.26-319.096-8.452-471.232z"
        fill={getIconColor(color, 0, '#F5D8BD')}
      />
      <Path
        d="M812.432 182.5924a4090.856 4090.856 0 0 0-578.076-0.876 5919.612 5919.612 0 0 0-55.56 183.732 3912.328 3912.328 0 0 1 688.64 1.04 5908.512 5908.512 0 0 0-55.004-183.892z"
        fill={getIconColor(color, 1, '#B3A196')}
      />
      <Path
        d="M178.8 365.4524a3912.328 3912.328 0 0 1 688.64 1.04l-1.612 17.94A3894.3 3894.3 0 0 0 180.36 383.3924l-1.56-17.94z"
        fill={getIconColor(color, 2, '#FFFFFF')}
        opacity=".4"
      />
      <Path
        d="M234.36 181.7164A3859.16 3859.16 0 0 0 91.204 133.4884 4498.64 4498.64 0 0 0 15.412 291.1844a3621.024 3621.024 0 0 1 163.392 74.264A5919.612 5919.612 0 0 1 234.36 181.7124zM954.308 130.7924a5067.536 5067.536 0 0 1 63.092 172.96 3627.236 3627.236 0 0 0-149.96 62.74 5920.044 5920.044 0 0 0-55.008-183.896A3828.576 3828.576 0 0 1 954.308 130.7924zM178.8 365.4524a8787.04 8787.04 0 0 0-19.416 142.656 3772.136 3772.136 0 0 1 734.052 1.8 7402.336 7402.336 0 0 0-25.988-143.412A3911.98 3911.98 0 0 0 178.8 365.4524z"
        fill={getIconColor(color, 3, '#F5D8BD')}
      />
      <Path
        d="M234.36 181.7164c8.208-22.852 16.572-45.68 25.104-68.48a4158.256 4158.256 0 0 1 517.44 0.12 4404.52 4404.52 0 0 1 40.956 69.632A4091.656 4091.656 0 0 0 234.36 181.7124z"
        fill={getIconColor(color, 4, '#F5D8BD')}
      />
      <Path
        d="M191.52 505.1844a3771.872 3771.872 0 0 1 663.36 1.06c-1.16 12.876-2.32 25.752-3.472 38.628a3733.6 3733.6 0 0 0-656.536-1.048l-3.352-38.64zM223.064 257.4204a4016.944 4016.944 0 0 1 600.436 0.912c-3.588-25.252-7.28-50.496-11.068-75.736a4090.856 4090.856 0 0 0-578.076-0.88 9873.948 9873.948 0 0 0-11.292 75.704z"
        fill={getIconColor(color, 5, '#6E6E96')}
        opacity=".15"
      />
      <Path
        d="M588.596 693.4844h186.308v103.504H588.6z"
        fill={getIconColor(color, 6, '#FFFFFF')}
        opacity=".8"
      />
    </Svg>
  );
};

IconAAppround46.defaultProps = {
  size: 18,
};

IconAAppround46 = React.memo ? React.memo(IconAAppround46) : IconAAppround46;

export default IconAAppround46;
