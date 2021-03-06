import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function RadioButton(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={10} cy={10} r={9} stroke="#344154" strokeWidth={2} />
    </Svg>
  );
}

export default RadioButton;
