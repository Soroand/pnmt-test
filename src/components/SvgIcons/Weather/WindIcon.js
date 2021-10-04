import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @type {SvgIcon} */
function WindIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 11 10"
      fill="none"
      {...props}>
      <Path
        d="M1.093 5.81v3.052M9.8 2.368c-2.902-1.374-5.805.6-8.707-1.136v4.866c2.891.876 5.783-1.936 8.68-1.444a.36.36 0 00.474-.367V3.06a.83.83 0 00-.447-.692v0zM3.785 2.816v3.012M5.94 3L6 5M8.093 3v1.622"
        stroke={props.color}
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default WindIcon;
