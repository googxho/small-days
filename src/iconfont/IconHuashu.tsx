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

let IconHuashu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M162.816 343.296s-102.4-186.624-92.928-209.408S252.672 0 515.072 0c276.48 0 439.296 111.872 444.416 133.888s-104.448 242.176-104.448 242.176a1632.768 1632.768 0 0 1-348.672 45.056 960.512 960.512 0 0 1-343.552-77.824z"
        fill={getIconColor(color, 0, '#20CACE')}
      />
      <Path
        d="M591.104 868.864l52.992 116.736a323.072 323.072 0 0 1-132.096 23.552 323.072 323.072 0 0 1-132.096-23.552l52.992-116.736L142.336 264.96S188.672 344.064 512 344.064s369.664-79.104 369.664-79.104z"
        fill={getIconColor(color, 1, '#44DCDF')}
      />
      <Path
        d="M567.04 864.512L870.4 226.048s10.496-24.064 15.616-25.6c15.104-6.656 15.616 22.016 45.056 23.808 41.984 2.816 61.184-37.376 68.352-38.4s-11.264 38.144-11.264 38.144L608.768 870.4l66.048 118.784a76.8 76.8 0 0 1 8.192 23.552c0 13.568-20.224-7.68-33.024-11.008-17.664-4.352-13.568 22.272-20.736 21.504s-18.176-28.672-18.176-28.672zM456.96 864.512L153.6 226.048s-10.496-24.064-15.616-25.6c-15.104-6.656-15.616 22.016-45.056 23.808C51.2 226.304 31.232 186.112 24.064 185.088s11.264 38.144 11.264 38.144L415.232 870.4l-66.048 118.784a76.8 76.8 0 0 0-8.192 23.552c0 13.568 20.224-7.68 33.024-11.008 17.664-4.352 13.568 22.272 20.736 21.504s18.176-28.672 18.176-28.672z"
        fill={getIconColor(color, 2, '#7AEDE5')}
      />
      <Path
        d="M706.304 844.8c0-28.928 18.176-58.624 8.192-81.664-11.776-27.648-39.168-35.072-72.448-22.528a409.6 409.6 0 0 0-102.4 70.656l-14.08 83.2a593.408 593.408 0 0 0 134.4 65.536 43.52 43.52 0 0 0 58.88-38.4c1.28-28.928-11.008-34.56-12.544-76.8zM381.952 739.84c-33.28-12.544-60.672-5.12-72.448 22.528-9.984 23.04 9.216 52.736 8.192 81.664-1.536 43.008-13.824 48.64-12.544 76.8a43.52 43.52 0 0 0 58.88 37.376 593.408 593.408 0 0 0 134.4-65.536l-14.08-83.2a409.6 409.6 0 0 0-102.4-69.632z"
        fill={getIconColor(color, 3, '#F0A0F2')}
      />
      <Path
        d="M477.184 811.008c5.376-15.104 42.752-17.92 57.6-8.96s8.192 34.816 9.984 51.2 8.704 28.672 0 43.008a52.992 52.992 0 0 1-62.464 8.192c-13.568-8.192-6.912-34.304-5.12-56.576 1.28-12.8-5.12-23.552 0-36.864z"
        fill={getIconColor(color, 4, '#F6DAF7')}
      />
      <Path
        d="M793.6 201.984h-59.648l41.216-41.472A46.592 46.592 0 1 0 709.12 94.72l-41.216 41.216V76.8a46.592 46.592 0 0 0-93.184 0v59.136L533.248 94.72a46.592 46.592 0 0 0-65.792 65.792l41.216 41.472h-58.368a46.592 46.592 0 0 0 0 93.184h58.368l-41.216 41.216a46.848 46.848 0 0 0 0 66.048 46.592 46.592 0 0 0 65.792 0l41.472-41.216v58.368a46.592 46.592 0 0 0 93.184 0V360.96l41.216 41.472a46.592 46.592 0 1 0 66.048-66.048l-41.216-41.216H793.6a46.592 46.592 0 1 0 0-93.184z"
        fill={getIconColor(color, 5, '#F0A0F2')}
      />
      <Path
        d="M621.312 248.576m-93.184 0a93.184 93.184 0 1 0 186.368 0 93.184 93.184 0 1 0-186.368 0Z"
        fill={getIconColor(color, 6, '#F6DAF7')}
      />
      <Path
        d="M248.576 75.264a206.848 206.848 0 0 1 105.984 74.24 170.24 170.24 0 0 1 25.6 148.48A206.848 206.848 0 0 1 262.4 204.8a166.656 166.656 0 0 1-13.824-129.536zM165.376 289.024a150.272 150.272 0 0 1 92.928-16.384 123.904 123.904 0 0 1 89.856 63.232 151.04 151.04 0 0 1-108.288 13.312 121.6 121.6 0 0 1-74.496-60.16z"
        fill={getIconColor(color, 7, '#F5AEF4')}
      />
      <Path
        d="M328.704 453.12m-17.664 0a17.664 17.664 0 1 0 35.328 0 17.664 17.664 0 1 0-35.328 0Z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <Path
        d="M335.36 496.128c3.072-8.96 11.776-15.104 21.76 0a868.352 868.352 0 0 1 39.936 129.28c3.328 20.736-23.552-25.6-34.56-49.408s-32.512-64-27.136-79.872z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
    </Svg>
  );
};

IconHuashu.defaultProps = {
  size: 18,
};

IconHuashu = React.memo ? React.memo(IconHuashu) : IconHuashu;

export default IconHuashu;
