import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function MoreOptionsIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 4"
      fill="none"
      {...props}>
      <Circle cx={2} cy={2} r={2} fill={props.color} />
      <Circle cx={10} cy={2} r={2} fill={props.color} />
      <Circle cx={18} cy={2} r={2} fill={props.color} />
    </Svg>
  );
}

export default MoreOptionsIcon;
