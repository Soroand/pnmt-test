import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Arrow(props) {
  return (
    <Svg
      width={16}
      height={8}
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.505.672a1.998 1.998 0 012.99 0L16 8H0L6.505.672z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Arrow;
