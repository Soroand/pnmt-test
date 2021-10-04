import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowUp(props) {
  return (
    <Svg
      width={7}
      height={4}
      viewBox="0 0 7 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.14 3.184L3.163.14a.473.473 0 01.672 0l3.025 3.044a.48.48 0 010 .676.473.473 0 01-.672 0L3.5 1.155.811 3.86a.473.473 0 01-.672 0 .48.48 0 010-.676z"
        fill="#515BF1"
      />
    </Svg>
  );
}

export default ArrowUp;
