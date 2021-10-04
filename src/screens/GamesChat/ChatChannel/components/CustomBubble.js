import React from 'react';
import { Bubble } from 'react-native-gifted-chat';

const CustomBubble = props => (
  <Bubble
    {...props}
    textStyle={{
      left: {
        color: '#262f3d',
      },
      right: {
        color: '#f1f1f1',
      },
    }}
    wrapperStyle={{
      left: {
        backgroundColor: '#eee',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 5,
      },
      right: {
        backgroundColor: '#3540D8',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 5,
      },
    }}
  />
);

export default CustomBubble;
