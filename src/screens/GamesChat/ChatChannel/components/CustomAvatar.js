// @ts-check

import React from 'react';
import { Avatar } from 'react-native-gifted-chat';

const CustomAvatar = props => (
  <Avatar
    {...props}
    containerStyle={{ left: {}, right: {} }}
    imageStyle={{
      left: { width: 44, height: 44, borderRadius: 100 },
      right: {},
    }}
  />
);

export default CustomAvatar;
