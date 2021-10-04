import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MyGamesArrowRight(props) {
  return (
    <Svg
      width={4}
      height={7}
      viewBox="0 0 4 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.816.14L3.86 3.163a.473.473 0 010 .672L.816 6.861a.48.48 0 01-.676 0 .473.473 0 010-.672L2.845 3.5.14.811a.473.473 0 010-.672.48.48 0 01.676 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MyGamesArrowRight;
