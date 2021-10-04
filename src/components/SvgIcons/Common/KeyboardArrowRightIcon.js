import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function KeyboardArrowRightIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 5 8"
      fill="none"
      {...props}>
      <Path
        d="M4.854 4.354a.5.5 0 000-.708L1.672.464a.5.5 0 10-.708.708L3.793 4 .964 6.828a.5.5 0 10.708.708l3.182-3.182zM4 4.5h.5v-1H4v1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default KeyboardArrowRightIcon;
