// @ts-check

import React from 'react';
import { Text, View } from 'react-native';
import Avatar from '../Avatar';
import AvatarGroup from '../Avatar/AvatarGroup';
import Divider from '../Divider';
import { Horizontal, Vertical } from '../FlexDirections';
import { H3, BT } from '../Typography';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../constants/colors';

const ChatListItem = ({
  title,
  lastMessageFrom = null,
  lastMessage,
  avatar = null,
  avatars = null,
  date,
}) => (
  <View>
    <Horizontal style={styles.chatItemContainer} spaceBetween>
      <Vertical>
        <H3 style={styles.chatItemTitle}>{title}</H3>
        {lastMessageFrom && <BT>{lastMessageFrom}</BT>}
        <BT>{lastMessage}</BT>
      </Vertical>
      <Vertical style={styles.chatItemInfo}>
        {avatar && <Avatar src={avatar} width={40} height={40} />}
        {avatars && <AvatarGroup list={avatars} />}
        <Text style={styles.chatItemDate}>{date}</Text>
      </Vertical>
    </Horizontal>
    <Divider />
  </View>
);

const styles = ScaledSheet.create({
  active: {
    opacity: 0.4,
  },
  chatItemContainer: {
    height: '80@ms',
  },
  chatItemTitle: {
    marginBottom: '5@ms',
  },
  chatItemDate: {
    fontSize: '8@ms',
    lineHeight: '10@ms',
    color: colors.customBlack,
    opacity: 0.4,
    marginTop: '5@ms',
  },
  chatItemInfo: {
    alignItems: 'flex-end',
  },
});

export default ChatListItem;
