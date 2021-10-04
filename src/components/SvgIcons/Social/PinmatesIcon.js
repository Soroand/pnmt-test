import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PinmatesIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 21 28"
      fill="none"
      {...props}>
      <Path
        d="M.913 27h4.284V16.704h6.66c4.932 0 8.496-2.34 8.496-7.74S16.79 1.26 11.857 1.26H.913V27zM5.197 4.896h6.48c2.88 0 4.392 1.26 4.392 4.068 0 2.844-1.512 4.068-4.392 4.068h-6.48V4.896z"
        fill={props.color}
      />
      <Path
        d="M.913 27h-.5v.5h.5V27zm4.284 0v.5h.5V27h-.5zm0-10.296v-.5h-.5v.5h.5zM.913 1.26v-.5h-.5v.5h.5zm4.284 3.636v-.5h-.5v.5h.5zm0 8.136h-.5v.5h.5v-.5zM.913 27.5h4.284v-1H.913v1zm4.784-.5V16.704h-1V27h1zm-.5-9.796h6.66v-1h-6.66v1zm6.66 0c2.537 0 4.79-.6 6.418-1.961 1.643-1.373 2.578-3.461 2.578-6.279h-1c0 2.582-.847 4.364-2.219 5.511-1.387 1.16-3.382 1.729-5.777 1.729v1zm8.996-8.24c0-2.818-.935-4.898-2.58-6.262C16.647 1.352 14.394.76 11.858.76v1c2.397 0 4.391.56 5.778 1.712 1.372 1.138 2.218 2.91 2.218 5.492h1zM11.857.76H.913v1h10.944v-1zm-11.444.5V27h1V1.26h-1zm4.784 4.136h6.48v-1h-6.48v1zm6.48 0c1.379 0 2.333.303 2.941.852.599.54.951 1.4.951 2.716h1c0-1.491-.403-2.666-1.28-3.458-.868-.783-2.11-1.11-3.612-1.11v1zm3.892 3.568c0 1.337-.353 2.194-.95 2.728-.607.545-1.56.84-2.942.84v1c1.498 0 2.741-.317 3.61-1.095.88-.789 1.282-1.966 1.282-3.473h-1zm-3.892 3.568h-6.48v1h6.48v-1zm-5.98.5V4.896h-1v8.136h1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default PinmatesIcon;