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

let IconAAppround39: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M857.960626 265.670122C731.643548 142.594226 543.410087-54.939826 280.144139 15.351096c-19.705322 5.7344-53.648696 82.307339 39.018852 64.485287 4.87513 40.532591-27.225043 25.065739-65.064069 54.378852-47.152974 22.234157-94.47513 56.796383-138.364661 106.709704-16.579896 18.578922-23.538643 62.348243-14.340452 95.855304 9.167026 33.560487 29.281948 43.319652 43.853913 23.685566a450.29287 450.29287 0 0 1 27.826087-33.302261c37.981496-41.209322 52.281878-8.993391 57.5488 11.927374 5.885774 23.004383 9.082435 35.693078-27.728139 90.392487-42.767583 54.138435-78.701078 128.774678-96.954992 224.954991-5.948104 30.421704 6.259757 75.847235 26.7264 99.328 20.466643 23.534191 39.441809 16.677843 43.016905-13.258574 28.489461-204.479443 134.446748-298.883339 234.807652-328.374539 103.317148-29.638122 201.029009 5.627548 281.417461 57.014539 44.60633-83.228939 102.177391-151.747896 166.05273-203.477704z"
        fill={getIconColor(color, 0, '#F8C51C')}
      />
      <Path
        d="M889.20153 165.562991c-38.653774-39.196939-86.016-40.025043-115.391443 11.473252a2529.13753 2529.13753 0 0 1-127.171896 198.869705 2565.765565 2565.765565 0 0 1 125.578018 143.026087 2647.200278 2647.200278 0 0 0 137.27833-199.390609c32.3584-51.729809 18.262817-115.013009-20.293009-153.978435z"
        fill={getIconColor(color, 1, '#CAC6D2')}
      />
      <Path
        d="M772.131617 519.056696c-147.041948 193.807583-314.029635 357.024278-491.609043 487.548661-43.208348 31.548104-87.289322 13.957565-113.245496-24.740731-25.987339-38.97433-25.546574-85.13447 15.337739-116.967513 170.593948-132.683687 329.581078-298.050783 467.358053-493.701565"
        fill={getIconColor(color, 2, '#7A718F')}
      />
    </Svg>
  );
};

IconAAppround39.defaultProps = {
  size: 18,
};

IconAAppround39 = React.memo ? React.memo(IconAAppround39) : IconAAppround39;

export default IconAAppround39;
