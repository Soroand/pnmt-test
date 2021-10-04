import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function HotIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 10 12"
      fill="none"
      {...props}>
      <Path
        d="M3.651 11.867c-.7-.387-1.2-1.067-1.23-1.867-.042-1.493 1.073-2.227 1.73-3.227.944-1.44.687-2.333.687-2.333s.787.413 1.244 1.947c.143.453.172.906.129 1.333-.072 1.08-.572 2.053-.572 2.053S6.51 9.6 6.754 8.12c.4.387.772.947.815 1.533.072 1.014-.572 1.947-1.544 2.347 1.687-.36 2.888-1.693 3.303-2.667.529-1.226.386-2.32.3-3.266C9.514 4.773 10 3.813 10 3.813s-.93.254-1.616 1.307c-.314.48-.443 1.187-.443 1.187s.071-.627-.372-1.774c-.443-1.12-.843-1.52-1.087-2.346C6.168 1.08 6.87 0 6.87 0S4.095.48 2.836 2.733c-1.115 2-.658 3.2-.658 3.2s-.471-.413-.714-.986c-.244-.574-.186-1.094-.186-1.094S-.696 5.88.262 8.427c.644 1.786 1.888 2.96 3.39 3.44z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5}
          y1={0}
          x2={5}
          y2={12}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#515BF1" />
          <Stop offset={1} stopColor="#242AC8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HotIcon;
