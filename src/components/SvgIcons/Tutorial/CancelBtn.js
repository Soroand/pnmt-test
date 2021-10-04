import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={13.846}
        y={0.002}
        width={1.632}
        height={19.58}
        rx={0.816}
        transform="rotate(45 13.846 .002)"
        fill="#fff"
      />
      <Rect
        y={1.154}
        width={1.632}
        height={19.58}
        rx={0.816}
        transform="rotate(-45 0 1.154)"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
