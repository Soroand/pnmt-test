import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Vertical,
  Horizontal,
  Avatar,
  H3,
  BT,
  ST,
  CT,
} from '../../../../components';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';
import uuid from 'react-native-uuid';

const SearchFriends = ({ selectedFriends, openBottomSheet }) => {
  const onlyAvatar = selectedFriends.length > 2;

  return (
    <Vertical style={styles.container}>
      <BT style={styles.inviteText}>Personal invite</BT>

      <TouchableOpacity onPress={openBottomSheet}>
        <Horizontal style={styles.searchButton}>
          <H3 numberOfLines={1}>Search a friend</H3>
        </Horizontal>
      </TouchableOpacity>

      {selectedFriends.length > 0 && (
        <View style={styles.friendsContainer}>
          {selectedFriends.map((item, idx) => (
            <Friend
              item={item}
              onlyAvatar={onlyAvatar}
              idx={idx}
              key={uuid.v4()}
            />
          ))}
        </View>
      )}
    </Vertical>
  );
};

const Friend = ({ item, onlyAvatar, idx }) => {
  const fullName =
    item.fullName.length > 15
      ? `${item.fullName.substring(0, 12)}...`
      : item.fullName;

  const placeOfWork =
    item.placeOfWork.length > 17
      ? `${item.placeOfWork.substring(0, 14)}...`
      : item.placeOfWork;

  const position = idx === 0 ? 0 : idx === 1 ? '38@ms' : '76@ms';

  const stylesOnlyAvatar = ScaledSheet.create({
    positionAvatar: {
      position: 'absolute',
      left: position,
      backgroundColor: colors.mainBackground,
    },
  });

  return (
    <View style={[styles.friend, !onlyAvatar && styles.friendWidth]}>
      <Avatar
        src={item.avatar}
        width={45}
        height={45}
        style={onlyAvatar && stylesOnlyAvatar.positionAvatar}
      />
      {!onlyAvatar && (
        <View style={styles.friendInfo}>
          <ST>{fullName}</ST>
          <CT>{placeOfWork}</CT>
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  searchButton: {
    borderWidth: 1,
    padding: 15,
    borderColor: '#D4D4D4',
    borderRadius: 2,
    paddingRight: 25,
    paddingLeft: 10,
  },
  inviteText: {
    color: '#838B97',
    marginBottom: 15,
  },
  container: {
    paddingTop: '20@ms',
    paddingHorizontal: '25@ms',
  },
  friendsContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    minHeight: '45@ms',
    marginTop: '10@ms',
  },
  friend: {
    flexDirection: 'row',
  },
  friendWidth: {
    width: '50%',
  },
  friendInfo: {
    marginLeft: '10@ms',
  },
});

export default SearchFriends;
