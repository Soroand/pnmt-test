import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function MembershipProsIcon(props) {
  return (
    <Svg width={19} height={16} fill="none" {...props}>
      <Rect
        opacity={0.1}
        width={16}
        height={16}
        rx={8}
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M18.182.188a.903.903 0 00-.605-.187.881.881 0 00-.576.248L7.826 9.43 3.594 6.133a.736.736 0 00-.464-.15.73.73 0 00-.456.168.584.584 0 00-.21.398.564.564 0 00.145.42l4.38 4.925c.115.13.262.234.43.306a1.357 1.357 0 001.072-.003c.167-.073.313-.178.427-.308l.046-.052 9.321-10.634a.69.69 0 00.173-.526.721.721 0 00-.276-.489z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={8}
          y1={0}
          x2={8}
          y2={16}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242AC8" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={10.461}
          y1={0}
          x2={10.461}
          y2={12.308}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242AC8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default MembershipProsIcon;
