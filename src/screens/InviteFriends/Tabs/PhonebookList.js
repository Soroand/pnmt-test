// @ts-check

import React, { useState } from 'react';
import { MySafeAreaView } from '../../../components';
import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

import FriendList from '../components/FriendList';
import Connect from '../components/Connect';

const PhonebookList = ({ route }) => {
  const [phonebookConnected, setPhonebookConnected] = useState(false);
  const [list, setList] = useState([]);

  function getUserContacts() {
    Platform.OS === 'ios'
      ? console.log(
          'Not Working for IOS -> Invite friends -> Tabs -> PhoneBookList Line-19',
        )
      : PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Accept',
          },
        ).then(() =>
          Contacts.getAll().then(contacts => {
            setList(contacts);
            setPhonebookConnected(true);
          }),
        );
  }

  return (
    <MySafeAreaView>
      {phonebookConnected ? (
        <FriendList
          title="Phonebook"
          list={list.map((item, id) => ({ ...item, id }))}
          gameId={route.params.gameId}
        />
      ) : (
        <Connect
          title="Phonebook"
          onPress={() => {
            getUserContacts();
          }}
        />
      )}
    </MySafeAreaView>
  );
};

export default PhonebookList;
