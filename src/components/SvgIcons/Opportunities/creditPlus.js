import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CreditPlus(props) {
  return (
    <Svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.5 13A6.5 6.5 0 116.501-.001 6.5 6.5 0 016.5 13z"
        fill="#515BF1"
      />
      <Path d="M6.5 3.9v5.2-5.2z" fill="#fff" />
      <Path
        d="M6.5 3.9v5.2"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M9.1 6.5H3.9h5.2z" fill="#fff" />
      <Path
        d="M9.1 6.5H3.9"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CreditPlus;
