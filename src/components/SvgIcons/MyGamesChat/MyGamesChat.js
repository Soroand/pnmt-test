import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MyGamesChat(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14 18l4 3v-3h1a2 2 0 002-2v-6a2 2 0 00-2-2h-8a2 2 0 00-2 2v6a2 2 0 002 2h3z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 15l-3 2v-3H5a2 2 0 01-2-2V6a2 2 0 012-2h9a2 2 0 012 2v2"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MyGamesChat;
