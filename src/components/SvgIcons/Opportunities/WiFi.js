import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import 'typedefs';

/** @param {SvgIcon} props */
function WiFi(props) {
  return (
    <Svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 3.511l1.352 1.352A7.23 7.23 0 016.5 2.735a7.23 7.23 0 015.148 2.128L13 3.511A9.164 9.164 0 006.5.823 9.164 9.164 0 000 3.511z"
        fill="#515BF1"
      />
      <Path
        d="M10.296 6.215A5.331 5.331 0 006.5 4.647a5.332 5.332 0 00-3.796 1.568l1.352 1.352A3.432 3.432 0 016.5 6.558c.926 0 1.794.359 2.445 1.009l1.351-1.352zM6.5 11.529a1.53 1.53 0 100-3.059 1.53 1.53 0 000 3.059z"
        fill="#515BF1"
      />
    </Svg>
  );
}

export default WiFi;
