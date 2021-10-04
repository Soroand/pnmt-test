// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function CheckIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 6 4"
      fill="none"
      {...props}>
      <Path
        d="M0.86159 1.54826C0.6243 1.49081 0.219125 1.51589 0.0593691 1.71009C-0.159475 1.97577 0.284154 2.20152 0.461105 2.35338C0.86284 2.69862 1.17454 3.08513 1.48248 3.49403C1.69195 3.77157 1.8639 4.03833 2.29783 3.99544C3.05722 3.92073 3.40487 3.10374 3.7791 2.63227C4.28119 1.99896 4.85831 1.31657 5.54236 0.819473C5.71993 0.690546 5.96066 0.562698 5.99787 0.346112C6.03882 0.110376 5.48108 -0.063864 5.11498 0.0224468C4.05046 0.271939 2.29283 2.74339 2.29283 2.74339C2.02397 2.3496 1.46716 1.69526 0.86159 1.54826Z"
        fill={props.color}
      />
    </Svg>
  );
}

export default CheckIcon;
