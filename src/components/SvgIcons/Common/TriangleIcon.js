import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TriangleIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 7 14"
      fill="none"
      {...props}>
      <Path d="M7 7L.25 13.062V.938L7 7z" fill={props.color} />
    </Svg>
  );
}

export default TriangleIcon;
