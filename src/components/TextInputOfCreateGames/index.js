// @ts-check

import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../constants/colors';
import DeviceInfo from 'react-native-device-info';
import uuid from 'react-native-uuid';

const TextInputOfCreateGames = ({
  placeholder,
  options,
  showOptions,
  setShowOptions,
  selectedFriends,
  setSelectedFriends,
}) => {
  const [filterOptions, setFilterOptions] = useState(options);
  const [valueTextInput, setValueTextInput] = useState('');

  const onChangeTextInput = text => {
    setValueTextInput(text);

    // фильтруем по названию клуба или города, просто ищем совпадения по имени
    setFilterOptions(
      options.filter(
        item => item.fullName.toLowerCase().includes(text.toLowerCase()),
        // || item.workingPosition.toLowerCase().includes(text.toLowerCase()) ||
        // item.placeOfWork.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const onPressItem = item => {
    setShowOptions(false);
    setValueTextInput(item.fullName);
    setSelectedFriends([...selectedFriends, item]);
    // setIdClub(item.id);
  };

  return (
    <View
      style={[
        styles.container,
        DeviceInfo.getBrand() === 'Apple' ? { zIndex: 1 } : null,
      ]}>
      {/* <View style={styles.icon}>{icon}</View> */}

      <TextInput
        style={styles.search}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        onFocus={() => setShowOptions(true)}
        value={valueTextInput}
        onChangeText={onChangeTextInput}
      />

      {showOptions && (
        <View style={styles.options}>
          <FlatList
            data={filterOptions}
            keyExtractor={() => uuid.v4()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressItem(item)}
                  key={uuid.v4()}>
                  <Text style={styles.itemOptions}>{item.fullName}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    marginTop: DeviceInfo.getBrand() === 'Apple' ? 13 : 17,
    left: 14,
    zIndex: 1,
  },
  search: {
    // backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    color: colors.customBlack,
    borderRadius: 2,
    fontSize: 16,
    lineHeight: 18,
    paddingHorizontal: '15@ms',
    paddingVertical: '10@ms',
  },
  options: {
    position: 'absolute',
    top: 50,
    zIndex: 10,
    backgroundColor: colors.mainBackground,
    width: '100%',
    maxHeight: 310,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  itemOptions: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.disabledButton,
    fontSize: 14,
  },
});

export default TextInputOfCreateGames;
