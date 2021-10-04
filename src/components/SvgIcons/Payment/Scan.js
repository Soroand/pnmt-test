import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import 'typedefs';

/** @param {SvgIcon} props */

function Scan(props) {
  return (
    <Svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M24 6V3C24 1.895 23.105 1 22 1H19" stroke="#344154" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M6 1H3C1.895 1 1 1.895 1 3V6" stroke="#344154" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M1 14V17C1 18.105 1.895 19 3 19H6" stroke="#344154" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M19 19H22C23.105 19 24 18.105 24 17V14" stroke="#344154" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M1 10L24 10" stroke="#344154" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

export default Scan;
