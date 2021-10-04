// @ts-check
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function PlusIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        d="M8 15A7 7 0 118.002.998 7 7 0 018 15z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5.2v5.6M10.8 8H5.2"
        stroke="#fff"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlusIcon;
