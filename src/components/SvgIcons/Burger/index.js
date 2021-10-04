import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import '../../../typedefs';

function Burger(props) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx="12.5" cy="12.5" r="12.5" fill="white" fillOpacity="0.2" />
      <Circle cx="5.83366" cy="12.5" r="1.66667" fill="white" />
      <Circle cx="12.4997" cy="12.5" r="1.66667" fill="white" />
      <Circle cx="19.1667" cy="12.5" r="1.66667" fill="white" />
    </Svg>
  );
}

export default Burger;
