import * as React from 'react';
import Svg, {
  Circle,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function ConfirmCodeSuccess(props) {
  return (
    <Svg width={265} height={265} fill="none" {...props}>
      <Circle
        opacity={0.2}
        cx={132.5}
        cy={132.5}
        r={132.5}
        fill="url(#prefix__paint0_linear)"
      />
      <Rect
        x={51.291}
        y={70.829}
        width={162.419}
        height={90.369}
        rx={20}
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M164.251 210.046c-19.218 0-34.804-15.585-34.804-34.804s15.586-34.804 34.804-34.804c19.226 0 34.805 15.585 34.805 34.804s-15.579 34.804-34.805 34.804z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        d="M179.517 167.304l-19.085 19.539-11.445-11.725"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M97.132 111.704a6.11 6.11 0 010 8.632c-2.38 2.378-6.26 2.378-8.641 0a6.11 6.11 0 010-8.632c2.38-2.395 6.244-2.395 8.641 0zM136.607 111.704a6.11 6.11 0 010 8.632c-2.381 2.378-6.261 2.378-8.641 0a6.109 6.109 0 010-8.632 6.094 6.094 0 018.641 0zM176.092 111.704a6.109 6.109 0 010 8.632c-2.38 2.378-6.26 2.378-8.641 0a6.11 6.11 0 010-8.632c2.381-2.395 6.245-2.395 8.641 0z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={132.5}
          y1={0}
          x2={132.5}
          y2={265}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#A7ACF7" />
          <Stop offset={1} stopColor="#565FEF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={132.5}
          y1={70.829}
          x2={132.5}
          y2={161.198}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#242AC8" />
          <Stop offset={1} stopColor="#6E77F9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={164.251}
          y1={140.438}
          x2={164.251}
          y2={210.046}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242AC8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ConfirmCodeSuccess;
