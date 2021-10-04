// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function KeyboardArrowLeftIcon(props) {
  return (
    <Svg width={5} height={8} fill="none" {...props}>
      <Path
        d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM1.5 3.5H1v1h.5v-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default KeyboardArrowLeftIcon;
