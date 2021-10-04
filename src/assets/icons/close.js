import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function CloseBtn(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={11.077}
        y={0.001}
        width={1.305}
        height={15.664}
        rx={0.653}
        transform="rotate(45 11.077 .001)"
        fill={props.color || '#F4FAFA'}
      />
      <Rect
        y={0.923}
        width={1.305}
        height={15.664}
        rx={0.653}
        transform="rotate(-45 0 .923)"
        fill={props.color || '#F4FAFA'}
      />
    </Svg>
  );
}

export default CloseBtn;
