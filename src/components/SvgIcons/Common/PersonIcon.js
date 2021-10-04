import * as React from 'react';

import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function PersonIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      preserveAspectRatio="none"
      viewBox="0 0 8 9"
      fill="none"
      {...props}>
      <Path
        d="M3.994 5.417h.013a7.784 7.784 0 00.051 0c1 0 1.889.165 2.542.502.645.334 1.05.827 1.138 1.502v.007a3.42 3.42 0 01.006.194l.003.189a6.138 6.138 0 01-.487.244 7.96 7.96 0 01-1.674.536c-1.38.28-3.266.287-5.333-.788a282.795 282.795 0 00.009-.381c.087-.676.493-1.17 1.139-1.503.653-.337 1.54-.503 2.541-.503h.032l.02.001zm1.81-3.55c0 1.05-.817 1.884-1.804 1.884-.986 0-1.803-.835-1.803-1.884 0-.519.2-.915.515-1.186C3.03.407 3.482.25 4 .25s.97.157 1.289.431c.314.27.514.667.514 1.186z"
        stroke={props.color}
        strokeWidth={0.5}
        fill={props.filled && props.color}
        opacity={props.opacity}
      />
    </Svg>
  );
}

export default PersonIcon;
