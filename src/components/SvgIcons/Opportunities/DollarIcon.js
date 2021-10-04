// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import 'typedefs';

/** @param {SvgIcon} props */
function DollarIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      {...props}>
      <Path
        d="M2.672 0v1.664C1.115 2.004 0 3.273 0 4.725c0 1.557 1.117 2.61 3.318 3.132 2.025.479 2.025 1.191 2.025 1.425 0 .76-.844 1.403-1.843 1.403s-1.843-.642-1.843-1.403v-.17H0v.17c0 1.453 1.115 2.72 2.672 3.062V14h1.657v-1.656C5.885 12.003 7 10.734 7 9.282c0-1.556-1.116-2.61-3.318-3.13-2.025-.48-2.025-1.192-2.025-1.427 0-.76.844-1.403 1.843-1.403s1.843.643 1.843 1.403v.171H7v-.17c0-1.453-1.115-2.721-2.671-3.062V0H2.672z"
        fill={props.color}
      />
    </Svg>
  );
}

export default DollarIcon;
