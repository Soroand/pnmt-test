// @ts-check

import React from 'react';
import { Message } from 'react-native-gifted-chat';
import { View } from 'react-native';

const CustomMessage = props => {
  return (
    <Message
      {...props}
      containerStyle={{
        left: {
          marginLeft: 25,
          marginBottom: 10,
        },
        right: {
          marginRight: 25,
          marginBottom: 10,
        },
      }}
    />
  );
};

export default CustomMessage;
