// @ts-check

import React from 'react';
import { Horizontal } from '../FlexDirections';
import Avatar from '.';
import { ScaledSheet } from 'react-native-size-matters';
import uuid from 'react-native-uuid';

const AvatarGroup = ({ list }) => {
  return (
    <Horizontal style={styles.container}>
      {list.map((item, index) => (
        <Avatar
          key={uuid.v4()}
          style={styles.avatar}
          src={item}
          width={40}
          height={40}
        />
      ))}
    </Horizontal>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'relative',
    right: 0,
  },
  avatar: {
    marginLeft: -20,
  },
});
export default AvatarGroup;
