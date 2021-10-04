// @ts-check

import React, { useState } from 'react';
import { MySafeAreaView } from '../../../components';

import FriendList from '../components/FriendList';
import Connect from '../components/Connect';

import friendlist from '../../../data/mockFriends.json';

const FacebookList = ({}) => {
  const [facebookConnected, setFacebookConnected] = useState(false);

  return (
    <MySafeAreaView>
      {facebookConnected ? (
        <FriendList title="Facebook" list={friendlist} />
      ) : (
        <Connect
          title="Facebook"
          onPress={() => {
            setFacebookConnected(true);
          }}
        />
      )}
    </MySafeAreaView>
  );
};

export default FacebookList;
