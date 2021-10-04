import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ForwardArrow(props) {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.03 6.53a.75.75 0 000-1.06L2.257.697a.75.75 0 10-1.06 1.06L5.439 6l-4.242 4.243a.75.75 0 001.06 1.06L7.03 6.53zM6 6.75h.5v-1.5H6v1.5z"
        fill="#515BF1"
      />
    </Svg>
  );
}

export default ForwardArrow;
