import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function MastercardIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 17 11"
      fill="none"
      {...props}>
      <Rect width={17} height={11} rx={2} fill="#F2F0EC" />
      <Path fill="#F26122" d="M6.694 2.633h3.62v5.734h-3.62z" />
      <Path
        d="M7.083 5.5A3.611 3.611 0 018.5 2.633c-1.54-1.172-3.749-1-5.076.396a3.565 3.565 0 000 4.942C4.751 9.367 6.96 9.54 8.5 8.367A3.598 3.598 0 017.083 5.5z"
        fill="#EA1D25"
      />
      <Path
        d="M14.578 5.5c-.004 1.394-.826 2.665-2.118 3.274a3.855 3.855 0 01-3.96-.407A3.612 3.612 0 009.933 5.5 3.612 3.612 0 008.5 2.633a3.847 3.847 0 013.964-.415c1.295.61 2.115 1.885 2.114 3.282z"
        fill="#F69E1E"
      />
    </Svg>
  );
}

export default MastercardIcon;
