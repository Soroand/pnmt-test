import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={8}
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.495 7.328a1.998 1.998 0 01-2.99 0L0 0h16L9.495 7.328z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
