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

let IconNvxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M947.245824 365.056v-9.216a230.4 230.4 0 0 0-460.8 0v9.216a53.76 53.76 0 0 0 2.56 107.52 57.088 57.088 0 0 0 6.912 0 230.4 230.4 0 0 0 169.728 158.72V716.8h102.4v-85.504a230.4 230.4 0 0 0 169.728-159.488 57.088 57.088 0 0 0 6.912 0 53.76 53.76 0 0 0 2.56-107.52z"
        fill={getIconColor(color, 0, '#F6DAF7')}
      />
      <Path
        d="M1024.045824 1024H409.645824l31.232-202.496A153.6 153.6 0 0 1 592.685824 691.2h248.32a153.6 153.6 0 0 1 151.808 130.304z"
        fill={getIconColor(color, 1, '#F9E8F9')}
      />
      <Path
        d="M893.485824 1024H540.205824l-15.36-204.8h384l-15.36 204.8z"
        fill={getIconColor(color, 2, '#AAD6F9')}
      />
      <Path
        d="M906.285824 1024H527.405824l-2.56-38.4h384l-2.56 38.4z"
        fill={getIconColor(color, 3, '#70BBEF')}
      />
      <Path
        d="M716.845824 125.44a230.4 230.4 0 0 0-230.4 230.4v51.2a228.864 228.864 0 0 0 55.552 149.248A228.352 228.352 0 0 0 691.245824 611.84a230.4 230.4 0 0 0 230.4-230.4v-51.2a230.4 230.4 0 0 0-55.552-149.504A230.4 230.4 0 0 0 716.845824 125.44z"
        fill={getIconColor(color, 4, '#F9E8F9')}
      />
      <Path
        d="M614.445824 76.8a102.4 76.8 0 1 0 204.8 0 102.4 76.8 0 1 0-204.8 0Z"
        fill={getIconColor(color, 5, '#E88BEF')}
      />
      <Path
        d="M537.645824 307.2h236.288l22.272-61.952 20.48 61.952h93.696L947.245824 422.4s38.912-164.864-25.6-264.96C839.981824 35.328 606.509824 15.872 513.325824 156.16 449.581824 252.16 486.445824 422.4 486.445824 422.4z"
        fill={getIconColor(color, 6, '#F0A0F2')}
      />
      <Path
        d="M613.165824 388.352m19.2 0l0 0q19.2 0 19.2 19.2l0 38.4q0 19.2-19.2 19.2l0 0q-19.2 0-19.2-19.2l0-38.4q0-19.2 19.2-19.2Z"
        fill={getIconColor(color, 7, '#F0A0F2')}
      />
      <Path
        d="M782.125824 388.352m19.2 0l0 0q19.2 0 19.2 19.2l0 38.4q0 19.2-19.2 19.2l0 0q-19.2 0-19.2-19.2l0-38.4q0-19.2 19.2-19.2Z"
        fill={getIconColor(color, 8, '#F0A0F2')}
      />
      <Path
        d="M230.445824 499.2a90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608A341.248 341.248 0 0 0 153.645824 729.6a341.248 341.248 0 0 0 99.84-52.48 132.096 132.096 0 0 0 53.76-100.608 74.24 74.24 0 0 0-76.8-77.312z"
        fill={getIconColor(color, 9, '#BE92F1')}
      />
      <Path
        d="M303.149824 550.144A72.704 72.704 0 0 0 230.445824 499.2a90.88 90.88 0 0 0-76.8 43.52 90.88 90.88 0 0 0-76.8-43.52 74.24 74.24 0 0 0-76.8 76.8 132.096 132.096 0 0 0 53.76 100.608c5.888 4.608 12.032 9.216 18.176 13.312H76.845824c112.128 1.28 204.8-59.904 226.304-139.776z"
        fill={getIconColor(color, 10, '#C1A0EF')}
      />
      <Path
        d="M35.117824 550.144m-8.96 0a8.96 8.96 0 1 0 17.92 0 8.96 8.96 0 1 0-17.92 0Z"
        fill={getIconColor(color, 11, '#FFFFFF')}
      />
      <Path
        d="M21.037824 578.56c1.792-10.752 9.472-13.056 13.056-8.704s-2.56 11.264 2.304 34.56S51.245824 640 51.245824 643.84s-17.152-14.08-25.6-32.768a61.696 61.696 0 0 1-4.608-32.512z"
        fill={getIconColor(color, 12, '#FFFFFF')}
      />
    </Svg>
  );
};

IconNvxing.defaultProps = {
  size: 18,
};

IconNvxing = React.memo ? React.memo(IconNvxing) : IconNvxing;

export default IconNvxing;
