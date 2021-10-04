import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function KeyboardArrowUpIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 8 5"
      fill="none"
      {...props}>
      <Path
        d="M4.354.457a.5.5 0 00-.707 0L.465 3.639a.5.5 0 00.707.707L4 1.518 6.83 4.346a.5.5 0 00.707-.707L4.354.457zm.146.853v-.5h-1v.5h1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default KeyboardArrowUpIcon;
