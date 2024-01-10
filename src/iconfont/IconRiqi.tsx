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

let IconRiqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M947.2 1003.52H76.8a51.2 51.2 0 0 1-51.2-51.2v-716.8h972.8v716.8a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 0, '#94CFF7')}
      />
      <Path
        d="M998.4 235.52H25.6v716.8a51.2 51.2 0 0 0 51.2 51.2h332.8l11.52-3.072C705.024 919.808 919.552 730.112 998.4 517.632z"
        fill={getIconColor(color, 1, '#AAD6F9')}
      />
      <Path
        d="M998.4 389.12H25.6v-153.6a51.2 51.2 0 0 1 51.2-51.2h870.4a51.2 51.2 0 0 1 51.2 51.2z"
        fill={getIconColor(color, 2, '#94CFF7')}
      />
      <Path
        d="M998.4 337.92H25.6v-153.6a51.2 51.2 0 0 1 51.2-51.2h870.4a51.2 51.2 0 0 1 51.2 51.2z"
        fill={getIconColor(color, 3, '#70BBEF')}
      />
      <Path
        d="M230.4 20.48m51.2 0l0 0q51.2 0 51.2 51.2l0 128q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-128q0-51.2 51.2-51.2Z"
        fill={getIconColor(color, 4, '#F5AEF4')}
      />
      <Path
        d="M691.2 20.48m51.2 0l0 0q51.2 0 51.2 51.2l0 128q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-128q0-51.2 51.2-51.2Z"
        fill={getIconColor(color, 5, '#F5AEF4')}
      />
      <Path
        d="M614.4 491.52a121.6 121.6 0 0 0-102.4 58.112 121.6 121.6 0 0 0-102.4-58.112 99.328 99.328 0 0 0-102.4 102.4 174.336 174.336 0 0 0 71.424 134.144A453.888 453.888 0 0 0 512 798.72a453.888 453.888 0 0 0 133.376-70.144A174.336 174.336 0 0 0 716.8 594.432a99.328 99.328 0 0 0-102.4-102.912z"
        fill={getIconColor(color, 6, '#BE92F1')}
      />
      <Path
        d="M711.168 559.36A96.768 96.768 0 0 0 614.4 491.52a121.6 121.6 0 0 0-102.4 58.112 121.6 121.6 0 0 0-102.4-58.112 99.328 99.328 0 0 0-102.4 102.4 174.336 174.336 0 0 0 71.424 134.144c7.936 6.4 16.128 12.288 25.6 17.92H409.6c149.504 0.768 274.176-80.384 301.568-186.624z"
        fill={getIconColor(color, 7, '#C1A0EF')}
      />
      <Path
        d="M353.792 559.36m-12.032 0a12.032 12.032 0 1 0 24.064 0 12.032 12.032 0 1 0-24.064 0Z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <Path
        d="M335.104 597.248c2.56-14.336 12.8-17.408 17.664-11.52s-3.584 15.104 3.072 46.08a512 512 0 0 0 18.176 52.48c0 5.632-21.248-18.688-31.744-43.52a87.04 87.04 0 0 1-7.168-43.52z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
    </Svg>
  );
};

IconRiqi.defaultProps = {
  size: 18,
};

IconRiqi = React.memo ? React.memo(IconRiqi) : IconRiqi;

export default IconRiqi;
