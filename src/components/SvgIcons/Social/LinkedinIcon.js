// @ts-check

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function LinkedinIcon(props) {
  return (
    <Svg width={props.width} height={props.height} fill="none" {...props}>
      <Path
        d="M6.79212 28V9.10845H0.378406V28H6.79212ZM3.58609 6.52758C5.82267 6.52758 7.21483 5.07693 7.21483 3.2641C7.17316 1.41039 5.82276 0 3.62854 0C1.43466 0 0 1.41041 0 3.2641C0 5.07701 1.39182 6.52758 3.54422 6.52758H3.58589H3.58609ZM10.3421 28H16.7558V17.45C16.7558 16.8854 16.7975 16.3214 16.9669 15.9178C17.4305 14.7897 18.4858 13.6213 20.2576 13.6213C22.5784 13.6213 23.5069 15.3537 23.5069 17.8933V27.9999H29.9202V17.1676C29.9202 11.3649 26.756 8.66493 22.5362 8.66493C19.0762 8.66493 17.5571 10.5583 16.7131 11.8479H16.756V9.10806H10.3422C10.4264 10.8807 10.3422 27.9996 10.3422 27.9996L10.3421 28Z"
        fill={props.color}
        opacity={props.opacity}
      />
    </Svg>
  );
}

export default LinkedinIcon;
