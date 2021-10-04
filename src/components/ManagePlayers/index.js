import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  Horizontal,
  H2,
  H4,
  MyButton,
  BottomContainer,
  Loader,
  Vertical,
} from '..';
import Player from './player';
import styles from './styles';
import colors from '../../constants/colors';

import {
  deleteGameInProfile,
  deletePLayersInGameInProfile,
} from '../../store/user/user.action';
import { deletePlayerInGame } from '../../store/games/games.action';
import {
  deleteGame,
  leaveGame,
  deletePlayers,
} from '../../services/games/games';
import { convertToFormData } from '../../services/helper';
import { getGames } from '../../services/games/games';
import { getGamesList } from '../../store/games/games.action';
import uuid from 'react-native-uuid';

const ManagePlayers = ({
  data,
  cancel,
  setCancel,
  leave,
  setLeave,
  removedPlayers,
  setRemovedPlayers,
  closeBottomSheet,
  bottomSheetClose,
  navigation,
  deleteGameInProfile,
  deletePLayersInGameInProfile,
  deletePlayerInGame,
}) => {
  const myId = useSelector(state => state.user.myProfile.id);
  const imCreator = data?.players[0].id === myId;
  const userLocation = useSelector(state => state.location.location);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const disabledPlayer = id => {
    return (
      cancel ||
      leave ||
      (imCreator && removedPlayers.filter(i => i === id).length > 0)
    );
  };

  const fetchGames = () => {
    getGames(userLocation.city.toLowerCase())
      .then(response => {
        let data = response.data.data;
        dispatch(getGamesList(data));
      })
      .catch(error => {});
  };

  const removePlayer = id => {
    if (removedPlayers.filter(i => i === id).length === 0) {
      setRemovedPlayers(prev => [...prev, id]);
    } else {
      setRemovedPlayers(prev => prev.filter(i => i !== id));
    }
  };

  const handleCancel = () => {
    setCancel(!cancel);
  };

  const handleLeave = () => {
    setLeave(!leave);
  };

  const onLeaveGame = () => {
    setLoading(true);
    leaveGame(data.id)
      .then(response => {
        if (response.data.success) {
          deleteGameInProfile({ gameId: data.id });
          fetchGames();
          alert('You left the game');
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Something went wrong!');
      })
      .finally(() => {
        setLoading(false);
        closeBottomSheet();
        bottomSheetClose();
      });
  };

  const onDeleteGame = () => {
    setLoading(true);
    deleteGame(data.id)
      .then(response => {
        if (response.data.success) {
          deleteGameInProfile({ gameId: data.id });
          fetchGames();
          alert('Game deleted');
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Something went wrong!');
      })
      .finally(() => {
        setLoading(false);
        closeBottomSheet();
        bottomSheetClose();
      });
  };

  const onDeletePlayers = () => {
    setLoading(true);
    deletePlayers(data.id, convertToFormData({ users: removedPlayers.join() }))
      .then(response => {
        if (response.data.success) {
          deletePLayersInGameInProfile({
            game: data,
            players: removedPlayers,
          });
          deletePlayerInGame({ game: data, players: removedPlayers });

          alert('Players deleted');
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Something went wrong!');
      })
      .finally(() => {
        setLoading(false);
        closeBottomSheet();
        bottomSheetClose();
      });
  };

  const handleDone = () => {
    if (cancel) {
      onDeleteGame();
      return;
    }

    if (leave) {
      onLeaveGame();
      return;
    }

    onDeletePlayers();

    setLeave(false);
    setCancel(false);
    setRemovedPlayers([]);
  };
  return (
    <Vertical style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Loader />
        </View>
      ) : (
        <>
          <View>
            <Horizontal style={{ padding: 20 }} spaceBetween>
              <MyButton
                type="link"
                color={colors.grey}
                onPress={closeBottomSheet}>
                <H4 color={colors.grey}>Cancel</H4>
              </MyButton>
              <H2>Manage Player</H2>
              <View style={{ opacity: 0 }}>
                <Text>Cancel</Text>
              </View>
            </Horizontal>
            {data && (
              <TouchableWithoutFeedback onPress={() => {}}>
                <View pointerEvents={cancel || leave ? 'none' : 'auto'}>
                  {data.players.map(
                    item =>
                      item.id !== myId && (
                        <Player
                          data={item}
                          removedPlayers={removedPlayers}
                          removePlayer={() => removePlayer(item.id)}
                          visibleButton={imCreator}
                          disabled={disabledPlayer(item.id)}
                          navigation={navigation}
                          key={uuid.v4()}
                        />
                      ),
                  )}
                </View>
              </TouchableWithoutFeedback>
            )}
            <View style={styles.cancelButtonContainer}>
              {imCreator ? (
                <MyButton type="link" color={colors.red} onPress={handleCancel}>
                  <H2 color={cancel ? colors.disabledButton : colors.red}>
                    Cancel game
                  </H2>
                </MyButton>
              ) : (
                <MyButton type="link" color={colors.red} onPress={handleLeave}>
                  <H2 color={leave ? colors.disabledButton : colors.red}>
                    Leave the game
                  </H2>
                </MyButton>
              )}
            </View>
          </View>

          <BottomContainer>
            <MyButton
              size="lg"
              gradientColors={colors.blueGradient}
              disabled={!cancel && !leave && removedPlayers.length === 0}
              onPress={handleDone}>
              Done
            </MyButton>
          </BottomContainer>
        </>
      )}
    </Vertical>
  );
};
export default connect(
  null,
  { deleteGameInProfile, deletePLayersInGameInProfile, deletePlayerInGame },
)(ManagePlayers);
