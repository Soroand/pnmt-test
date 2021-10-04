import React from 'react';
import { View, Text } from 'react-native';
import { Horizontal, H2, H4, MyButton } from '../../../../components';

import TopTabs from '../../../InviteFriends';

const InviteSheet = ({
  closeBottomSheet,
  selectedFriends,
  setSelectedFriends,
  countPlayer,
}) => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa',
      }}>
      <Horizontal style={{ padding: 20 }} spaceBetween>
        <MyButton type="link" color={'#235689'} onPress={closeBottomSheet}>
          <H4>Cancel</H4>
        </MyButton>
        <H2>Personal invite</H2>
        <View style={{ opacity: 0 }}>
          <Text>Cancel</Text>
        </View>
      </Horizontal>
      <TopTabs
        selectedFriends={selectedFriends}
        setSelectedFriends={setSelectedFriends}
        closeBottomSheet={closeBottomSheet}
        countPlayer={countPlayer}
        isCreate
      />
    </View>
  );
};

export default InviteSheet;
