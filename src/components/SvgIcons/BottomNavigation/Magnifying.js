import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Magnifying(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.557 19.091a9.487 9.487 0 01-5.297-1.587A9.538 9.538 0 01.736 13.23a9.578 9.578 0 012.037-10.42A9.48 9.48 0 0113.147.725a9.52 9.52 0 014.274 3.52 9.57 9.57 0 011.602 5.31 9.552 9.552 0 01-2.77 6.731 9.483 9.483 0 01-6.696 2.805zm0-17.243A7.657 7.657 0 005.28 3.124a7.698 7.698 0 00-2.847 3.448 7.73 7.73 0 001.633 8.411 7.65 7.65 0 008.37 1.692 7.683 7.683 0 003.454-2.836 7.724 7.724 0 001.298-4.284 7.705 7.705 0 00-2.227-5.437 7.65 7.65 0 00-5.404-2.27z"
        fill={props.color}
        fill-opacity={props.opacity}
      />
      <Path
        d="M21.703 23l-6.334-6.323 1.297-1.3L23 21.696 21.703 23z"
        fill={props.color}
        fill-opacity={props.opacity}
      />
    </Svg>
  );
}

export default Magnifying;
