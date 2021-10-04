import * as React from 'react';
import Svg, { Mask, Path, Circle, Rect } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%',
      }}>
      <Mask
        id="prefix__a"
        x={0}
        y={0}
        height={'100%'}
        width={'100%'}
        fill="#555555">
        {/* <Rect x={75} y={51} width={150} height={150} fill="#555555" /> */}
        {/* <Circle cx={150} cy={150} r={50} mask="#000" /> */}
      </Mask>
    </Svg>
  );
}

export default SvgComponent;
