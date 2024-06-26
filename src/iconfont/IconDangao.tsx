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

let IconDangao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.745283 972.80288H51.19712V447.264441A63.484429 63.484429 0 0 1 114.425564 384.035998h795.091276A63.484429 63.484429 0 0 1 972.745283 447.264441z"
        fill={getIconColor(color, 0, '#F5AEF4')}
      />
      <Path
        d="M51.19712 614.423039h921.548163v204.78848H51.19712z"
        fill={getIconColor(color, 1, '#F0A0F2')}
      />
      <Path
        d="M51.19712 691.218719h921.548163v51.19712H51.19712zM972.745283 435.233118H51.19712a153.59136 153.59136 0 0 1 153.591361-153.59136h614.365442a153.59136 153.59136 0 0 1 153.59136 153.59136z"
        fill={getIconColor(color, 2, '#F9E8F9')}
      />
      <Path
        d="M127.9928 435.233118m-76.79568 0a76.79568 76.79568 0 1 0 153.591361 0 76.79568 76.79568 0 1 0-153.591361 0Z"
        fill={getIconColor(color, 3, '#F9E8F9')}
      />
      <Path
        d="M281.584161 435.233118m-76.79568 0a76.79568 76.79568 0 1 0 153.59136 0 76.79568 76.79568 0 1 0-153.59136 0Z"
        fill={getIconColor(color, 4, '#F9E8F9')}
      />
      <Path
        d="M435.175521 435.233118m-76.79568 0a76.79568 76.79568 0 1 0 153.591361 0 76.79568 76.79568 0 1 0-153.591361 0Z"
        fill={getIconColor(color, 5, '#F9E8F9')}
      />
      <Path
        d="M588.766882 435.233118m-76.79568 0a76.79568 76.79568 0 1 0 153.59136 0 76.79568 76.79568 0 1 0-153.59136 0Z"
        fill={getIconColor(color, 6, '#F9E8F9')}
      />
      <Path
        d="M742.358242 435.233118m-76.79568 0a76.79568 76.79568 0 1 0 153.591361 0 76.79568 76.79568 0 1 0-153.591361 0Z"
        fill={getIconColor(color, 7, '#F9E8F9')}
      />
      <Path
        d="M895.949603 435.233118m-76.79568 0a76.79568 76.79568 0 1 0 153.59136 0 76.79568 76.79568 0 1 0-153.59136 0Z"
        fill={getIconColor(color, 8, '#F9E8F9')}
      />
      <Path
        d="M0 921.60576m51.19712 0l921.548163 0q51.19712 0 51.19712 51.19712l0 0q0 51.19712-51.19712 51.19712l-921.548163 0q-51.19712 0-51.19712-51.19712l0 0q0-51.19712 51.19712-51.19712Z"
        fill={getIconColor(color, 9, '#AAD6F9')}
      />
      <Path
        d="M580.319357 0.057597A80.89145 80.89145 0 0 0 511.971202 38.711422 80.89145 80.89145 0 0 0 443.623046 0.057597a66.044285 66.044285 0 0 0-68.09217 68.604141 115.449506 115.449506 0 0 0 47.613322 89.338974A300.527095 300.527095 0 0 0 511.971202 204.846077a300.527095 300.527095 0 0 0 88.827003-46.845365 115.449506 115.449506 0 0 0 47.613322-89.338974A66.044285 66.044285 0 0 0 580.319357 0.057597z"
        fill={getIconColor(color, 10, '#F0A0F2')}
      />
      <Path
        d="M644.827728 45.367048A64.764357 64.764357 0 0 0 580.319357 0.057597 80.89145 80.89145 0 0 0 511.971202 38.711422 80.89145 80.89145 0 0 0 443.623046 0.057597a66.044285 66.044285 0 0 0-68.09217 68.604141 115.449506 115.449506 0 0 0 47.613322 89.338974 149.495591 149.495591 0 0 0 16.383079 12.031324h4.095769c99.834384 0.255986 182.773719-53.500991 201.204682-124.664988z"
        fill={getIconColor(color, 11, '#F5AEF4')}
      />
      <Path
        d="M406.505134 45.367048m-7.935554 0a7.935554 7.935554 0 1 0 15.871108 0 7.935554 7.935554 0 1 0-15.871108 0Z"
        fill={getIconColor(color, 12, '#FFFFFF')}
      />
      <Path
        d="M394.217825 70.453637c1.535914-9.471467 8.191539-11.519352 11.519352-7.679568s-2.30387 9.983438 2.047885 30.974258A311.278491 311.278491 0 0 0 420.072371 128.050397c0 3.839784-14.335194-12.543294-21.246805-28.926373a55.036904 55.036904 0 0 1-4.607741-28.670387z"
        fill={getIconColor(color, 13, '#FFFFFF')}
      />
    </Svg>
  );
};

IconDangao.defaultProps = {
  size: 18,
};

IconDangao = React.memo ? React.memo(IconDangao) : IconDangao;

export default IconDangao;
