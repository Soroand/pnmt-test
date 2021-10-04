import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PenIcon(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1.22268 8.83044L9.07044 0.982676C9.36684 0.686276 9.84792 0.686276 10.1443 0.982676L11.4181 2.25644C11.7145 2.55284 11.7145 3.03392 11.4181 3.33032L3.56956 11.1773C3.42744 11.3202 3.2344 11.4 3.033 11.4H1V9.367C1 9.1656 1.0798 8.97256 1.22268 8.83044V8.83044Z" stroke="#515BF1" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.65039 2.40161L9.99879 4.75001" stroke="#515BF1" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

export default PenIcon;
