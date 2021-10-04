import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Delete(props) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M1 1l8 8M9 1L1 9" stroke="#344154" strokeLinecap="round" />
    </Svg>
  );
}

export default Delete;
