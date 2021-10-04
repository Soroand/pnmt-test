import * as React from 'react';
import Svg, { G, Circle, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PhotoIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 43 43"
      fill="none"
      {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={20.5} cy={18.5} r={11.5} fill={props.color} />
      </G>
      <Path
        d="M18.688 13.192l-.756 1.431h-2.567c-.586 0-1.057.447-1.057 1.002v6.296c0 .555.471 1.002 1.057 1.002h10.27c.586 0 1.057-.447 1.057-1.002v-6.296c0-.555-.471-1.002-1.057-1.002h-2.568l-.755-1.43h-3.625zm1.812 3.005c1.501 0 2.718 1.154 2.718 2.576 0 1.423-1.217 2.576-2.718 2.576-1.502 0-2.719-1.153-2.719-2.576 0-1.422 1.218-2.576 2.719-2.576z"
        fill="#fff"
      />
      <Defs />
    </Svg>
  );
}

export default PhotoIcon;
