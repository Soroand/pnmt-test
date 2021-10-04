import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox ? props.viewBox : "0 0 15 15"}
      fill="none"
      {...props}>
      <G fill={props.color}>
        <Path d="M6.233 12.451a6.188 6.188 0 01-3.455-1.035A6.22 6.22 0 01.48 8.627a6.246 6.246 0 011.328-6.795A6.183 6.183 0 018.574.472a6.209 6.209 0 012.788 2.296 6.242 6.242 0 011.044 3.463 6.23 6.23 0 01-1.806 4.39 6.185 6.185 0 01-4.367 1.83zm0-11.246a4.994 4.994 0 00-2.79.833 5.02 5.02 0 00-1.856 2.248 5.041 5.041 0 001.065 5.486 5 5 0 005.46 1.103 5.01 5.01 0 002.251-1.85c.552-.826.846-1.799.847-2.794a5.025 5.025 0 00-1.453-3.545 4.989 4.989 0 00-3.524-1.48z" />
        <Path d="M14.154 15l-4.13-4.123.845-.849L15 14.15l-.846.85z" />
      </G>
    </Svg>
  );
}

export default SearchIcon;
