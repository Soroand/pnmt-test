import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function PersonAddIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 47 40"
      fill="none"
      {...props}>
      <Path
        d="M15.987 17.78c4.531 0 8.205-4.245 8.205-9.482C24.192 3.06 20.518 0 15.987 0c-4.53 0-8.204 3.06-8.204 8.298 0 5.237 3.673 9.482 8.204 9.482zm.231 5.18c-.077 0-.154.004-.231.006-.079-.002-.155-.006-.233-.006-8.177 0-14.898 3.002-15.698 9.884-.02.177-.04 1.684-.056 2.496 17.433 10.485 31.972 0 31.972 0-.015-.812-.035-2.319-.056-2.496-.799-6.881-7.52-9.884-15.698-9.884zM39.424 9.964V2.85h-2.865v7.115h-7.576v2.69h7.577v7.115h2.864v-7.115H47v-2.69h-7.576z"
        fill={props.color}
        opacity={props.opacity}
      />
    </Svg>
  );
}

export default PersonAddIcon;
