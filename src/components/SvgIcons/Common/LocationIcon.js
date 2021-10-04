import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path d="M12 0L0 4l5.595 2.405L7.5 11.5 12 0z" fill="#515BF1" />
    </Svg>
  );
}

export default LocationIcon;
