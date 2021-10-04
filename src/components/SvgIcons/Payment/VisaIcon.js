import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import '../../../typedefs';

/** @param {SvgIcon} props */
function VisaIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 11"
      fill="none"
      {...props}>
      <Rect width={16} height={11} rx={2} fill="#2A2A6C" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.113 5.873c0-.487-.402-.7-.723-.868-.214-.113-.393-.207-.39-.352 0-.113.107-.233.333-.26.27-.025.541.02.787.134l.14-.667a2.16 2.16 0 00-.74-.133c-.793 0-1.333.42-1.333 1.02 0 .435.392.662.69.835l.01.005c.3.173.413.246.413.38 0 .133-.247.3-.473.3A1.653 1.653 0 018 6.087l-.147.666c.285.104.584.158.887.16.84 0 1.387-.413 1.387-1.053l-.014.013zm-2.16-2.08L7.287 6.88h-.794l.667-3.087h.793zm3.334 2l.42-1.16L12 5.787l-.713.006zm1.626 1.094h-.733l-.113-.46h-1.02l-.167.46h-.84l1.2-2.86a.367.367 0 01.34-.227h.667l.666 3.087zM5.52 6.88l1.293-3.087H6l-.893 2.1-.34-1.78a.373.373 0 00-.367-.32H3.067v.094c.258.058.508.145.746.26A.353.353 0 014 4.42l.667 2.46h.853z"
        fill="#fff"
      />
    </Svg>
  );
}

export default VisaIcon;
