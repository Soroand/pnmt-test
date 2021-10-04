import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function CloseIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 6 6"
      fill="none"
      {...props}>
      <Path
        d="M4.887 1.113L1.113 4.887zM4.887 4.887L1.113 1.113z"
        fill={props.color}
      />
      <Path
        d="M4.887 1.113L1.113 4.887m3.774 0L1.113 1.113"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;
