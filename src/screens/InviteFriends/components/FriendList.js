// @ts-check

import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import {
  Vertical,
  Horizontal,
  H3,
  MyButton,
  Divider,
} from '../../../components';
import Friend from './friend';
import { SearchIcon } from '../../../components/SvgIcons';
import colors from '../../../constants/colors';

import { ScaledSheet } from 'react-native-size-matters';
import { FlatList } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

const FriendList = ({
  title,
  list,
  game,
  isCreate,
  selectedFriends,
  setSelectedFriends,
  countPlayer,
}) => {
  const [filteredList, setFilteredList] = useState(list);

  const filterList = text => {
    const data = list.filter(item => {
      const name = title === 'Pinmate' ? item.fullName : item.displayName;
      return name?.toLowerCase()?.includes(text?.toLowerCase());
    });
    setFilteredList(data);
  };

  return (
    <Vertical style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon
          width={15}
          height={15}
          color={colors.lightGrey}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.search}
          placeholder={`Search in ${title}`}
          placeholderTextColor={colors.lightGrey}
          onChangeText={text => filterList(text)}
        />
      </View>
      <Horizontal spaceBetween>
        <H3>
          {list.length} {title} friends
        </H3>
        <MyButton
          color={colors.lightBlue}
          textWrapper={H3}
          type="link"
          onPress={() => {}}>
          Invite all
        </MyButton>
      </Horizontal>
      <Divider />
      <View style={{ height: isCreate ? '72%' : '85%' }}>
        <FlatList
          data={filteredList}
          keyExtractor={() => uuid.v4()}
          renderItem={({ item, index }) => (
            <>
              {title === 'Pinmate' ? (
                <Friend
                  src={item.avatar}
                  fullname={item.fullName}
                  location={item.city?.title}
                  player={item}
                  game={game}
                  isCreate={isCreate}
                  selectedFriends={selectedFriends}
                  setSelectedFriends={setSelectedFriends}
                  countPlayer={countPlayer}
                  isPinmate
                />
              ) : (
                <Friend
                  src={item.avatar}
                  fullname={item.displayName}
                  location={' '}
                  player={item}
                  game={game}
                  isCreate={isCreate}
                />
              )}
            </>
          )}
        />
      </View>
    </Vertical>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '25@ms',
    paddingTop: '20@ms',
  },
  inviteButton: {
    paddingVertical: 7,
    width: '30%',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
  },
  searchContainer: {
    position: 'relative',
  },
  search: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    color: colors.customBlack,
    borderRadius: 2,
    paddingHorizontal: '30@ms',
    paddingTop: '12@ms',
    paddingBottom: '10@ms',
    marginBottom: '20@ms',
    fontSize: 14,
    lineHeight: 18,
  },
  searchIcon: {
    zIndex: 1,
    position: 'absolute',
    top: '14@ms',
    left: '10@ms',
  },
});

export default FriendList;
