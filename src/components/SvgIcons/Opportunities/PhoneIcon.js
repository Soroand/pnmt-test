// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import 'typedefs';

/** @param {SvgIcon} props */
function PhoneIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.029 10.967c.946.296 1.965-1.492 1.971-1.791.01-.51-1.588-2.092-1.822-1.968-.368.194-1.449.552-1.637.5-.694-.192-2.495-3.263-2.317-3.95.049-.187.904-.93 1.259-1.146.226-.138-.366-2.29-.82-2.537C2.395-.07.312-.095.1.86c-.734 3.289 2.667 9.088 5.928 10.107z"
        fill={props.color}
        opacity={props.opacity}
      />
    </Svg>
  );
}

export default PhoneIcon;
