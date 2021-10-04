import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SendIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 30 30"
      fill="none"
      {...props}>
      <Circle cx={15} cy={15} r={15} fill="#515BF1" />
      <Path
        d="M15.53 8.47a.75.75 0 00-1.06 0l-4.773 4.773a.75.75 0 001.06 1.06L15 10.061l4.243 4.242a.75.75 0 001.06-1.06L15.53 8.47zM15.75 22V9h-1.5v13h1.5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SendIcon;
