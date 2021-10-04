import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AttachIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 9 8"
      fill="none"
      {...props}>
      <Path
        d="M8.32.666a2.36 2.36 0 00-3.289 0L.511 5.091a1.681 1.681 0 000 2.414c.561.55 1.408.638 2.07.282a.291.291 0 00.19-.08l4.52-4.425a1.12 1.12 0 000-1.61 1.18 1.18 0 00-1.643 0L1.949 5.294a.28.28 0 000 .402c.114.111.298.111.411 0l3.699-3.62a.59.59 0 01.822 0 .56.56 0 010 .804L2.565 7.104a1.18 1.18 0 01-1.643 0 1.12 1.12 0 010-1.61l4.52-4.425a1.77 1.77 0 012.466 0 1.681 1.681 0 010 2.413l-4.11 4.023a.28.28 0 000 .402c.114.111.298.111.412 0l4.11-4.022a2.242 2.242 0 000-3.219z"
        fill={props.color}
      />
    </Svg>
  );
}

export default AttachIcon;
