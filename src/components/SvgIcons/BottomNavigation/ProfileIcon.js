// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function ProfileIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 38 24"
      fill="none"
      {...props}>
      <Path
        d="M9.2 10.714s4.377-9.21 13.373-9.696c4.711-.243 9.24 1.945 11.853 5.836 1.854 2.796 3.04 6.899.943 12.461-.821 2.127-3.252 3.13-5.32 2.188-2.978-1.367-7.415-3.708-11.67-7.172a19.788 19.788 0 00-4.802-2.888c-1.55-.638-3.252-1.124-4.377-.73z"
        stroke={props.color}
        strokeOpacity={props.opacity}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M9.2 10.714l-8.145 2.705c-.091.03-.06.182.03.182 1.55-.122 4.894.213 8.298 4.194.425.487.79 1.034 1.124 1.58 1.125 1.794 5.775 7.386 15.653.213M13.82 11.595S20.598.107 28.713 2.143M26.16 19.588S33.484 9.59 29.837 2.69"
        stroke={props.color}
        strokeOpacity={props.opacity}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default ProfileIcon;
