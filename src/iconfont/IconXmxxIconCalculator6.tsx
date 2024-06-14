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

let IconXmxxIconCalculator6: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M618.589091 217.053091c0.267636 0-1.058909 2.920727-3.979636 8.750545a3263.906909 3263.906909 0 0 1-27.834182 56.878546 5994.647273 5994.647273 0 0 1-20.282182 40.168727 2135.389091 2135.389091 0 0 1-21.480727 42.554182c-7.156364 14.312727-14.196364 27.973818-21.085091 40.96a3428.538182 3428.538182 0 0 1-18.292364 35.409454c-5.562182 10.600727-10.205091 19.083636-13.917091 25.448728a60.322909 60.322909 0 0 1 25.844364-7.947637c9.821091-1.058909 21.085091-1.326545 33.815273-0.802909 18.292364 0.535273 34.210909 3.723636 47.720727 9.541818 13.789091 5.841455 25.6 13.137455 35.397818 21.876364a121.681455 121.681455 0 0 1 24.261818 29.44 164.072727 164.072727 0 0 1 15.511273 31.418182c3.723636 10.077091 6.237091 19.618909 7.563636 28.637091 1.582545 8.750545 2.385455 15.639273 2.385455 20.677818v23.063273c0 5.050182-0.139636 10.216727-0.395637 15.522909 0 5.306182-0.139636 9.809455-0.407272 13.521454-0.256 1.861818-1.186909 6.760727-2.781091 14.708364-1.326545 7.691636-3.979636 16.977455-7.947637 27.845818-3.723636 10.612364-9.146182 22.144-16.314181 34.606546-7.156364 12.194909-16.570182 23.854545-28.229819 35.002181-11.671273 10.868364-25.856 20.282182-42.565818 28.229819-16.698182 7.959273-36.584727 12.858182-59.659636 14.72-24.122182 2.117818-45.474909 0.523636-64.034909-4.770909-18.56-5.306182-34.594909-12.858182-48.116364-22.667637a146.082909 146.082909 0 0 1-33.815273-33.815273 194.210909 194.210909 0 0 1-21.46909-39.77309 193.664 193.664 0 0 1-10.344728-38.981819c-1.594182-12.450909-1.861818-23.063273-0.791272-31.813818 1.582545-12.986182 3.304727-24.517818 5.166545-34.594909 1.861818-10.344727 3.979636-20.154182 6.365091-29.44 2.653091-9.274182 5.562182-18.420364 8.750545-27.438545 3.176727-9.018182 6.888727-18.827636 11.136-29.44 1.058909-2.641455 3.979636-8.878545 8.750546-18.688l17.501091-36.980364a7399.272727 7399.272727 0 0 1 23.854545-48.128 5006.312727 5006.312727 0 0 0 26.251637-53.294545c20.689455-41.890909 43.880727-88.692364 69.608727-140.404364h93.858909z m-16.698182 424.378182c0-10.077091-0.407273-21.213091-1.198545-33.408a91.799273 91.799273 0 0 0-9.146182-34.606546c-5.038545-11.136-13.381818-20.677818-25.053091-28.625454-11.671273-7.959273-28.241455-12.730182-49.722182-14.324364-10.077091-0.791273-19.223273 0.267636-27.438545 3.176727a75.717818 75.717818 0 0 0-21.876364 11.938909 87.202909 87.202909 0 0 0-16.709818 17.501091 146.455273 146.455273 0 0 0-11.52 19.083637 97.629091 97.629091 0 0 0-6.376727 17.896727c-1.326545 5.306182-1.978182 9.425455-1.978182 12.334545 0 6.632727 0.116364 14.056727 0.395636 22.272a188.509091 188.509091 0 0 0 2.385455 24.261819c1.582545 7.947636 4.107636 15.778909 7.552 23.470545a62.592 62.592 0 0 0 14.72 19.886546c6.365091 5.818182 14.452364 10.600727 24.261818 14.312727 10.077091 3.712 22.539636 5.573818 37.376 5.573818 11.938909 0.256 22.283636-1.198545 31.022545-4.386909 9.018182-3.444364 16.581818-7.68 22.679273-12.718546a73.658182 73.658182 0 0 0 15.511273-17.50109 93.277091 93.277091 0 0 0 9.146182-18.699637c2.385455-6.097455 3.979636-11.52 4.770909-16.290909a79.709091 79.709091 0 0 0 1.198545-11.147636z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXmxxIconCalculator6.defaultProps = {
  size: 18,
};

IconXmxxIconCalculator6 = React.memo ? React.memo(IconXmxxIconCalculator6) : IconXmxxIconCalculator6;

export default IconXmxxIconCalculator6;
