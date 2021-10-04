import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function MoreIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 26 6"
      fill="none"
      {...props}>
      <G opacity={0.6}>
        <Path
          d="M3.3 5.903c1.537 0 2.727-1.01 2.727-2.643C6.027 1.674 4.837.617 3.3.617 1.764.617.574 1.674.574 3.26c0 1.634 1.19 2.643 2.727 2.643z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M13.127 5.903c1.537 0 2.727-1.01 2.727-2.643 0-1.586-1.19-2.643-2.727-2.643-1.536 0-2.726 1.057-2.726 2.643 0 1.634 1.19 2.643 2.726 2.643z"
          fill="url(#prefix__paint1_linear)"
        />
        <Path
          d="M22.954 5.903c1.537 0 2.727-1.01 2.727-2.643 0-1.586-1.19-2.643-2.727-2.643-1.536 0-2.726 1.057-2.726 2.643 0 1.634 1.19 2.643 2.726 2.643z"
          fill="url(#prefix__paint2_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={13.127}
          y1={0.617}
          x2={13.127}
          y2={5.903}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242EC8" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={13.127}
          y1={0.617}
          x2={13.127}
          y2={5.903}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242EC8" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={13.127}
          y1={0.617}
          x2={13.127}
          y2={5.903}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242EC8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default MoreIcon;
