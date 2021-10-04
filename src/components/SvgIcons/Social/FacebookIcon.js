// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function FacebookIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 10 22"
      fill="none"
      {...props}>
      <Path
        d="M2.55277 22V11.677H0V7.96017H2.55277V4.78555C2.55277 2.2909 4.0607 0 7.53529 0C8.9421 0 9.98237 0.14421 9.98237 0.14421L9.9004 3.61506C9.9004 3.61506 8.83949 3.60402 7.68178 3.60402C6.42879 3.60402 6.22804 4.22145 6.22804 5.24623V7.96017H10L9.83588 11.677H6.22804V22H2.55277Z"
        fill={props.color}
      />
    </Svg>
  );
}

export default FacebookIcon;
