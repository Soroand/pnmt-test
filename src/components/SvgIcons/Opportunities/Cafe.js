import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Cafe(props) {
  return (
    <Svg
      width={13}
      height={11}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.464 8.99h11.758a.456.456 0 00.465-.464.456.456 0 00-.465-.464h-.139c-.17-2.352-1.98-4.286-4.363-4.843.201-.263.325-.603.325-.96a1.624 1.624 0 10-2.955.929C2.646 3.698.774 5.663.603 8.062H.464A.456.456 0 000 8.526c0 .263.201.464.464.464zm5.957-7.426c.386 0 .696.309.696.696 0 .387-.31.696-.696.696a.693.693 0 01-.697-.696c0-.387.31-.696.697-.696zM12.222 10.073H.464a.456.456 0 00-.464.464C0 10.8.201 11 .464 11h11.758a.456.456 0 00.465-.464.456.456 0 00-.465-.464z"
        fill="#515BF1"
      />
    </Svg>
  );
}

export default Cafe;