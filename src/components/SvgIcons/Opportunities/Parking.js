import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import 'typedefs';

/** @param {SvgIcon} props */

function Parking(props) {
  return (
    <Svg
      width={12}
      height={11}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.764 0H1.612C.725 0 0 .725 0 1.612v7.776C0 10.275.725 11 1.612 11h8.166c.886 0 1.611-.725 1.611-1.612V1.612A1.637 1.637 0 009.764 0zM7.696 5.789c-.578.55-1.437.792-2.444.792-.229 0-.43-.013-.578-.04v2.686H2.982V1.813c.523-.094 1.262-.161 2.296-.161 1.048 0 1.8.201 2.297.604.484.376.806 1.008.806 1.746.013.74-.228 1.37-.685 1.787z"
        fill="#515BF1"
      />
      <Path
        d="M5.372 2.941c-.349 0-.577.027-.698.068v2.23c.148.04.322.04.564.04.9 0 1.464-.457 1.464-1.223 0-.698-.47-1.115-1.33-1.115z"
        fill="#515BF1"
      />
    </Svg>
  );
}

export default Parking;
