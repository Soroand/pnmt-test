// @ts-check

import React from 'react';
import ReactActionSheet from 'react-native-actionsheet';

/**
 * @param {Object} props - Props passed to Action sheet
 * @param {Object} props.handleRemoveFromFriends - User id for actions
 * @param {'firend' | 'notFriend' | 'pending'} props.friendshipStatus - Status of friendship
 * @param {Object} ref - React ref
 */

const ActionSheet = React.forwardRef((props, ref) => {
  const { friendshipStatus, handleRemoveFromFriends } = props;

  const optionsTable = {
    firend: [
      'Share Profile',
      'Remove From Friends',
      'Report Fake Profile',
      'Block',
      'Cancel',
    ],
    notFriend: ['Share Profile', 'Report Fake Profile', 'Block', 'Cancel'],
  };
  const cancelButtonIndexTable = {
    firend: 4,
    notFriend: 3,
  };
  const destructiveButtonIndexTable = {
    firend: 3,
    notFriend: 2,
  };
  const onPressTable = {
    firend: index => {
      switch (index) {
        case 1:
          handleRemoveFromFriends();
          break;
      }
    },
    notFriend: index => {
      console.log(index);
    },
  };

  const option = friendshipStatus === 'friend' ? 'firend' : 'notFriend';

  return (
    <ReactActionSheet
      ref={ref}
      title={'Choose options'}
      options={optionsTable[option]}
      cancelButtonIndex={cancelButtonIndexTable[option]}
      destructiveButtonIndex={destructiveButtonIndexTable[option]}
      onPress={onPressTable[option]}
    />
  );
});

export default ActionSheet;
