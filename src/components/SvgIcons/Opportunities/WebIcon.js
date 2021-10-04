// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import 'typedefs';

/** @param {SvgIcon} props */
function WebIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 1C11.8749 1 15 4.12511 15 8C15 11.8749 11.8749 15 8 15" fill="#515BF1"/>
      <Path d="M8 1C11.8749 1 15 4.12511 15 8C15 11.8749 11.8749 15 8 15" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M8 15C4.12511 15 1 11.8749 1 8C1 4.12511 4.12511 1 8 1" fill="#515BF1"/>
      <Path d="M8 15C4.12511 15 1 11.8749 1 8C1 4.12511 4.12511 1 8 1" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M6.57499 1.82449C4.32722 5.57727 4.32722 10.4236 6.57499 14.1764C7.23299 15.2754 8.76755 15.2754 9.42555 14.1764C11.6733 10.4236 11.6733 5.57727 9.42555 1.82449C8.76677 0.725494 7.23299 0.725494 6.57499 1.82449Z" fill="#515BF1" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M1.78516 4.77844C5.59005 5.95367 10.4092 5.95367 14.2133 4.77844H1.78516Z" fill="#515BF1"/>
      <Path d="M1.78516 4.77844C5.59005 5.95367 10.4092 5.95367 14.2133 4.77844" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M14.2147 11.2215C10.4098 10.0463 5.59073 10.0463 1.78662 11.2215H14.2147Z" fill="#515BF1"/>
      <Path d="M14.2147 11.2215C10.4098 10.0463 5.59073 10.0463 1.78662 11.2215" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

  );
}

export default WebIcon;
