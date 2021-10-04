import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SpinnerIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 44 44"
      fill="none"
      {...props}>
      <Circle
        cx={22.182}
        cy={22.182}
        r={18.182}
        stroke="#fff"
        strokeWidth={7}
      />
      <Path
        d="M22.182 4c3.234 0 6.27.844 8.902 2.325a18.26 18.26 0 017.504 8.01"
        stroke="#D8DAF9"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SpinnerIcon;
