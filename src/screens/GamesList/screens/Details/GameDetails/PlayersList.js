import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Vertical,
  Horizontal,
  GamePlayer,
  BT,
  CT,
} from '../../../../../components';
import { PersonAddIcon } from '../../../../../components/SvgIcons';
import colors from '../../../../../constants/colors';
import styles from '../styles';
import CreatorLabel from '../../../../../components/Form/CreatorLabel';
import uuid from 'react-native-uuid';

const PlayersList = ({
  players,
  gameId,
  countPlayers,
  navigation,
  isInviteGame,
}) => {
  const myId = useSelector(state => state.user.myProfile.id);
  const imInGame = !!players?.filter(item => item.id === myId).length;

  const handleGoToInvite = () => {
    navigation.push('InviteFriends', { gameId });
  };

  return (
    <>
      <BT style={styles.invitePlayersTitle}>Players</BT>
      {players?.map((user, index) => (
        <View key={uuid.v4()}>
          <GamePlayer
            id={user.id}
            nonPinmates={user.nonPinmates}
            fullname={user.fullName}
            avatar={user.avatar}
            age={user.age}
            workingPosition={user?.workingPosition}
            placeOfWork={user?.placeOfWork}
            hcp={user.statistics.handicap}
            gir={user.statistics.gir}
            rounds={user.statistics.rounds}
            verified={user.isJobVerified}
            languages={user.languages}
            country={user.country}
            navigation={navigation}
            isDetail
          />
          {index === 0 && <CreatorLabel isGameDetails={true} />}
          <View style={styles.line} />
        </View>
      ))}
      {/* Если еще есть свободные места, то появляется кнопка Invite friend */}
      {imInGame && countPlayers > 0 && players.length < 4 && !isInviteGame && (
        <View>
          <TouchableOpacity onPress={handleGoToInvite}>
            <Horizontal style={styles.inviteContainer}>
              <PersonAddIcon
                width={63}
                height={53}
                color={colors.customBlack}
                opacity="0.2"
              />
              <Vertical style={styles.inviteTextContainer}>
                <BT color={colors.lightBlue} style={styles.inviteTitle}>
                  Invite friend
                </BT>
                <CT style={styles.inviteText}>
                  You can bring your friends to this game{'\n'}
                  There are {4 - players.length} places available
                </CT>
              </Vertical>
            </Horizontal>
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      )}
    </>
  );
};

export default PlayersList;
