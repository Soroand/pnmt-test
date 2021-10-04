import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BackArrow(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={1}
        d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM1.5 3.5H1v1h.5v-1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BackArrow;
