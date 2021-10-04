import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TrashIcon(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M10.9166 5.22223H1.72341C1.3237 5.22223 1 4.89852 1 4.49952V3.83382C1 3.43482 1.3237 3.11111 1.72341 3.11111H10.9173C11.3163 3.11111 11.64 3.43482 11.64 3.83382V4.49882C11.64 4.89852 11.3163 5.22223 10.9166 5.22223V5.22223Z" stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M10.5421 5.2222L9.94606 12.3761C9.88484 13.1058 9.27543 13.6666 8.54358 13.6666H4.09617C3.36432 13.6666 2.75421 13.1058 2.69369 12.3761L2.09766 5.2222" stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M3.50488 3.11111L4.36622 1.38915C4.48514 1.15059 4.72862 1 4.99533 1H7.64407C7.91077 1 8.15425 1.15059 8.27318 1.38915L9.13451 3.11111" stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M6.32031 7.33334V11.5556" stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M8.4311 7.33334L8.14258 11.5556" stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M4.20801 7.33334L4.49653 11.5556" stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

export default TrashIcon;
