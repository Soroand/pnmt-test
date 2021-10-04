import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function MygamesCheckmark(props) {
  return (
    <Svg
      width={16}
      height={13}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.72.188a.903.903 0 00-.604-.187.88.88 0 00-.577.248L5.364 9.43 1.133 6.133a.736.736 0 00-.465-.15.73.73 0 00-.456.168.584.584 0 00-.21.398.564.564 0 00.145.42l4.38 4.925c.116.13.263.234.43.306a1.357 1.357 0 001.072-.003c.167-.073.313-.178.428-.308l.046-.052 9.32-10.634a.69.69 0 00.174-.526.721.721 0 00-.277-.489z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={8}
          y1={0}
          x2={8}
          y2={12.308}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242AC8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default MygamesCheckmark;
