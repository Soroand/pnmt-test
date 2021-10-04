// @ts-check

import React, { useState } from 'react';
import { MySafeAreaView } from '../../../components';

import FriendList from '../components/FriendList';
import Connect from '../components/Connect';

import friendlist from '../../../data/mockFriends.json';

const LinkedinList = ({}) => {
  const [linkedinConnected, setLinkedinConnected] = useState(false);

  return (
    <MySafeAreaView>
      {linkedinConnected ? (
        <FriendList title="Linkedin" list={friendlist} />
      ) : (
        <Connect
          title="Linkedin"
          onPress={() => {
            setLinkedinConnected(true);
          }}
        />
      )}
    </MySafeAreaView>
  );
};

export default LinkedinList;
