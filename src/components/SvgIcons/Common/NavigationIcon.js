import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function NavigationIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 11 11"
      fill="none"
      {...props}>
      <Path
        d="M7.48 3.52L2.8 5.633h2.567V8.2L7.48 3.52z"
        stroke={props.color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        stroke={props.color}
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default NavigationIcon;
