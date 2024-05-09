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

let BalanceList: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M739.555328 568.911872c94.265344 0 170.667008 76.34432 170.667008 170.665984 0 94.265344-76.401664 170.667008-170.667008 170.667008-94.26432 0-170.665984-76.401664-170.665984-170.667008 0-94.32064 76.40064-170.665984 170.665984-170.665984z m56.889344-455.134208c31.459328 0 56.88832 25.428992 56.88832 56.889344v372.905984C819.712 524.004352 781.19936 512 739.556352 512 613.888 512 512 613.888 512 739.555328c0 68.323328 30.777344 128.96768 78.507008 170.667008H227.555328c-31.459328 0-56.88832-25.428992-56.88832-56.889344V170.667008c0-31.460352 25.428992-56.889344 56.88832-56.889344z m8.476672 531.990528c-8.306688-8.30464-21.788672-8.30464-30.15168 0l-35.214336 35.158016-35.214336-35.158016c-8.361984-8.30464-21.844992-8.30464-30.150656 0-8.363008 8.363008-8.363008 21.846016 0 30.15168l27.136 27.136h-25.771008c-11.776 0-21.332992 9.556992-21.332992 21.332992 0 11.776 9.556992 21.332992 21.332992 21.332992h42.667008v28.444672h-42.667008c-11.776 0-21.332992 9.558016-21.332992 21.334016s9.556992 21.332992 21.332992 21.332992h42.667008V841.0112c0 11.776 9.556992 21.332992 21.332992 21.332992 11.776 0 21.334016-9.556992 21.334016-21.332992v-24.177664h42.665984c11.776 0 21.334016-9.556992 21.334016-21.332992 0-11.776-9.558016-21.334016-21.334016-21.334016h-42.665984v-28.444672h42.665984c11.776 0 21.334016-9.556992 21.334016-21.332992 0-11.776-9.558016-21.332992-21.334016-21.332992h-25.769984l27.136-27.136c8.361984-8.305664 8.361984-21.788672 0-30.15168zM426.665984 512h-113.77664c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.444672 28.444672 28.444672h113.77664c15.702016 0 28.444672-12.74368 28.444672-28.444672C455.110656 524.742656 442.368 512 426.667008 512z m113.778688-113.777664H312.889344c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h227.555328c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z m113.77664-113.777664H312.890368c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h341.332992c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

BalanceList.defaultProps = {
  size: 18,
};

BalanceList = React.memo ? React.memo(BalanceList) : BalanceList;

export default BalanceList;
