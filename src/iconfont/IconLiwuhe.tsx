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

let IconLiwuhe: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M98.56 256.512m102.4 0l622.08 0q102.4 0 102.4 102.4l0 524.288q0 102.4-102.4 102.4l-622.08 0q-102.4 0-102.4-102.4l0-524.288q0-102.4 102.4-102.4Z"
        fill={getIconColor(color, 0, '#F6DAF7')}
      />
      <Path
        d="M98.56 280.832m102.4 0l622.08 0q102.4 0 102.4 102.4l0 427.264q0 102.4-102.4 102.4l-622.08 0q-102.4 0-102.4-102.4l0-427.264q0-102.4 102.4-102.4Z"
        fill={getIconColor(color, 1, '#F9E8F9')}
      />
      <Path
        d="M415.669592 175.023881m48.112263-17.511431l315.135317-114.699876q48.112262-17.511431 65.623694 30.600831l64.704738 177.774809q17.511431 48.112262-30.600831 65.623694l-315.135317 114.699875q-48.112262 17.511431-65.623693-30.600831l-64.704739-177.774809q-17.511431-48.112262 30.600831-65.623693Z"
        fill={getIconColor(color, 2, '#BE92F1')}
      />
      <Path
        d="M97.092709 298.04071m17.503034-48.115318l64.67371-177.786099q17.503034-48.115318 65.618352-30.612284l315.155331 114.644872q48.115318 17.503034 30.612284 65.618352l-64.67371 177.786099q-17.503034 48.115318-65.618352 30.612284l-315.155331-114.644872q-48.115318-17.503034-30.612284-65.618352Z"
        fill={getIconColor(color, 3, '#BE92F1')}
      />
      <Path
        d="M633.6 281.6h-243.2V163.072a76.8 76.8 0 0 1 76.8-76.8h89.6a76.8 76.8 0 0 1 76.8 76.8zM414.72 377.856h194.56v534.784h-194.56z"
        fill={getIconColor(color, 4, '#CBB0F7')}
      />
      <Path
        d="M414.72 912.64h194.56v72.96h-194.56z"
        fill={getIconColor(color, 5, '#BE92F1')}
      />
      <Path
        d="M98.56 450.816h826.88v48.64H98.56z"
        fill={getIconColor(color, 6, '#F6DAF7')}
      />
      <Path
        d="M414.72 450.816h194.56v48.64h-194.56z"
        fill={getIconColor(color, 7, '#BE92F1')}
      />
      <Path
        d="M25.6 232.192m51.2 0l870.4 0q51.2 0 51.2 51.2l0 116.224q0 51.2-51.2 51.2l-870.4 0q-51.2 0-51.2-51.2l0-116.224q0-51.2 51.2-51.2Z"
        fill={getIconColor(color, 8, '#F0A0F2')}
      />
      <Path
        d="M174.08 300.032c-34.816-2.048-42.24-25.6-21.248-29.44 37.888-7.168 217.6 0 238.848 8.192 4.608 2.048-11.008 7.936-41.472 10.496-68.608 6.4-154.624 12.288-176.128 10.752z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
      <Path
        d="M105.984 283.904m-16.384 0a16.384 16.384 0 1 0 32.768 0 16.384 16.384 0 1 0-32.768 0Z"
        fill={getIconColor(color, 10, '#FFFFFF')}
      />
    </Svg>
  );
};

IconLiwuhe.defaultProps = {
  size: 18,
};

IconLiwuhe = React.memo ? React.memo(IconLiwuhe) : IconLiwuhe;

export default IconLiwuhe;
