// @ts-check

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Horizontal, H3, Avatar, MyButton, Divider } from '../../../components';
import { CheckIcon } from '../../../components/SvgIcons';
import colors from '../../../constants/colors';

import { ScaledSheet } from 'react-native-size-matters';

import { inviteToGame } from '../../../services/games/games';
import { convertToFormData } from '../../../services/helper';

import { inviteGame } from '../../../store/games/games.action';

const Friend = ({
  fullname,
  location,
  src,
  player,
  game,
  inviteGame,
  isCreate,
  selectedFriends,
  setSelectedFriends,
  countPlayer,
  isPinmate,
}) => {
  const invited =
    !!game?.players.filter(item => item.id === player.id).length ||
    !!game?.invitedPlayers?.filter(item => item.id === player.id).length;

  const [clicked, setClicked] = useState(!!isPinmate ? invited : false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedFriends?.length > countPlayer) {
      setSelectedFriends([]);
      setSelected(false);
    }
  }, [countPlayer]);

  const handleInvite = () => {
    // если это друзья из приложения, то отправляем пригдашение,
    // если из телефонной книжки, пока непонятно что делать
    if (!!isPinmate) {
      inviteToGame(game.id, convertToFormData({ user_id: player.id }))
        .then(response => {
          console.log('response', response);
          if (response.data.success) {
            inviteGame({ player, gameId: game.id });
          }
        })
        .catch(error => console.log(error));
      setClicked(true);
    }
  };

  const selectFriend = () => {
    if (
      !selectedFriends.some(i => i.id === player.id) &&
      selectedFriends.length < countPlayer
    ) {
      setSelectedFriends([...selectedFriends, player]);
      setSelected(!selected);
    }
    if (selectedFriends.some(i => i.id === player.id)) {
      setSelectedFriends([...selectedFriends.filter(i => i.id !== player.id)]);
      setSelected(!selected);
    }
  };

  const Content = () => {
    return (
      <View
        style={
          typeof isCreate !== 'undefined' && selected && styles.friendSelected
        }>
        <Horizontal style={styles.friendContainer}>
          <Horizontal style={{ width: isCreate ? '88%' : '68%' }}>
            <Avatar src={src} width={45} height={45} style={styles.avatar} />
            <View
              style={{
                flexDirection: 'column',
                width: '80%',
              }}>
              <H3>{fullname}</H3>
              <Text style={{ margin: 0 }}>
                {location ? location : 'No city'}
              </Text>
            </View>
          </Horizontal>

          {typeof isCreate === 'undefined' ? (
            <MyButton
              style={[styles.inviteButton]}
              type="outline"
              disabled={typeof isCreate === 'undefined' ? !!invited : clicked}
              color={!invited && colors.lightBlue}
              textStyle={styles.buttonText}
              onPress={handleInvite}>
              Invite
            </MyButton>
          ) : (
            selected && (
              <CheckIcon width={20} height={16} color={colors.lightBlue} />
            )
          )}
        </Horizontal>
        {!selected && <Divider />}
      </View>
    );
  };

  return isCreate ? (
    <TouchableOpacity onPress={selectFriend}>
      <Content />
    </TouchableOpacity>
  ) : (
    <>
      <Content />
    </>
  );
};

const styles = ScaledSheet.create({
  inviteButton: {
    paddingVertical: 7,
    width: '30%',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
  },
  friendContainer: {
    width: '100%',
    marginTop: '10@ms',
    paddingLeft: '6@ms',
  },
  avatar: {
    marginRight: '10@ms',
  },
  friendSelected: {
    backgroundColor: '#E9EAF9',
    borderRadius: 5,
    // paddingTop: '10@ms',
    paddingBottom: '8@ms',
    marginTop: '3@ms',
  },
});

export default connect(
  null,
  { inviteGame },
)(Friend);
