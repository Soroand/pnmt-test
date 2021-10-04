import * as React from 'react';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

function ButtonBlue(props) {
  return (
    <Svg
      width={325}
      height={56}
      viewBox="0 0 325 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        width={325}
        height={56}
        rx={28}
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={162.5}
          y1={0}
          x2={162.5}
          y2={56}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242AC8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ButtonBlue;
