import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MyGamesCalendar(props) {
  return (
    <Svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.473 0c.175 0 .316.14.316.311v.933h4.422V.31c0-.172.141-.311.315-.311.175 0 .316.14.316.311v.933h1.58c.88 0 1.578.72 1.578 1.591v8.573C12 12.28 11.302 13 10.421 13H1.58C.699 13 0 12.279 0 11.408V2.835c0-.87.698-1.591 1.579-1.591h1.579V.31c0-.172.141-.311.315-.311zM.632 9.268v2.14c0 .545.432.97.947.97h2.21v-3.11H.632zm3.157-.622H.632v-3.11h3.157v3.11zm.632.622v3.11H7.58v-3.11H4.421zm3.159-.622H4.421v-3.11H7.58v3.11zm.632.622v3.11h2.21a.958.958 0 00.946-.97v-2.14H8.212zm3.156-.622H8.212v-3.11h3.156v3.11zm0-3.732H.632V2.835c0-.544.432-.97.947-.97h1.579v.986c0 .172.141.31.315.31.175 0 .316-.138.316-.31v-.985h4.422v.985c0 .172.141.31.315.31.175 0 .316-.138.316-.31v-.985h1.58c.514 0 .946.425.946.97v2.078z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MyGamesCalendar;