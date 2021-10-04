import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  View,
  Platform,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { getGame } from 'services/games/games';
import {
  confirmGameInvite,
  joinToGame,
  getMyProfile,
} from 'services/user/user';
import {
  getGameDetail,
  declineGame,
  confirmGame,
  addJoinedPlayer,
  addToJoinRequests,
} from 'store/games/games.action';
import { addGameMyProfile } from 'store/user/user.action';
import { convertToFormData } from 'services/helper';
import ActionSheet from 'react-native-actionsheet';
import ReactNativeParallaxHeader from '../CollapeScrollView';
import InviteButton from 'components/MyButton/inviteButton';
import ClubInfo from './ClubInfo';
import PlayersList from './PlayersList';
import Course from './Course';
import GameInfo from './GameInfo';
import Message from './Message';
import {
  MyButton,
  BottomContainer,
  Vertical,
  Loader,
  JoiningCard,
} from 'components';
import colors from 'constants/colors';
import styles from '../styles';
import { deleteGame, leaveGame } from 'services/games/games';
import {
  deleteGameInProfile,
  deletePLayersInGameInProfile,
} from 'store/user/user.action';
import { getGames } from 'services/games/games';
import { getGamesList } from 'store/games/games.action';
import { getMyProfileComplete } from 'store/user/user.action';
import GamesChat from './ChatInfo';
import axios from 'axios';
import { getMyInviteGames } from 'services/user/user';
import { getInviteGames } from 'store/games/games.action';

const GameDetails = ({
  route,
  navigation,
  getGameDetail,
  declineGame,
  confirmGame,
  addJoinedPlayer,
  addGameMyProfile,
  addToJoinRequests,
}) => {
  const inviteGame = route.params.inviteGame;
  const { id } = route.params;
  const dispatch = useDispatch();
  const token = axios.defaults.headers.common.Authorization;
  // const game = route.params.data;

  // ------- KOSTYL ------- //
  // const getTheRightGame = useSelector(state => state.games.games.list[0].games);
  // const game = { ...getTheRightGame }[0];
  // ---------------------- //
  console.log(
    'MA GAMe',
    route.params,
    // useSelector(state => state.user.myProfile.pastGames).filter(
    //   item => item.id == id,
    // ),
  );

  const actionSheet = useRef(null);
  const game = route.params.game
    ? route.params.game
    : useSelector(state => state.user.myProfile.pastGames).filter(
        item => item.id == id,
      )[0]; // INVITE GAME DOESN"T EVEN EXIST
  const myProfile = useSelector(state => state.user.myProfile);
  // const inviteStatus = game?.inviteStatus ? game.inviteStatus : false;
  // const isInviteGame = inviteStatus === 'invite';
  const [loader, setLoader] = useState(true);
  const imInGame = !!game?.players?.filter(item => item.id === myProfile.id)
    .length;
  const imCreator = game?.players[0]?.id === myProfile.id;
  const imInJoinRequests = !!game?.joinRequests?.filter(
    item => item.id === myProfile.id,
  ).length;
  const userLocation = useSelector(state => state.location.location);
  const [clickedButton, setClickedButton] = useState(imInJoinRequests);
  const backimages =
    game?.club.images.length !== 0 ? game?.club.images : ['empty'];
  const fetchInviteGames = useCallback(() => {
    if (token) {
      getMyInviteGames()
        .then(response => {
          getInviteGames(response.data.data);
        })
        .catch(error => console.log('error', error));
    }
  }, [token]);
  useLayoutEffect(() => {
    inviteGame
      ? setTimeout(() => {
          fetchInviteGames(), setLoader(false);
        }, 300)
      : getGame(id)
          .then(response => {
            getGameDetail({ id, ...response.data.data });
            setLoader(false);
          })
          .catch(error => console.log(error));
  }, []);

  const onDeleteGame = () => {
    setLoader(true);
    deleteGame(game.id)
      .then(response => {
        if (response.data.success) {
          deleteGameInProfile({ gameId: game.id });
          fetchGames();
          updateMyProfile();
          alert('Game deleted');
          navigation.goBack();
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Something went wrong!');
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const onLeaveGame = () => {
    setLoader(true);
    leaveGame(game.id)
      .then(response => {
        if (response.data.success) {
          deleteGameInProfile({ gameId: game.id });
          fetchGames();
          updateMyProfile();
          alert('You left the game');
          navigation.goBack();
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Something went wrong!');
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const updateMyProfile = () => {
    getMyProfile()
      .then(response => {
        dispatch(getMyProfileComplete(response.data.data));
        setLoader(false);
      })
      .catch(error => console.log('error: profile wasnt downloaded'));
  };

  const fetchGames = () => {
    getGames(userLocation.city.toLowerCase())
      .then(response => {
        let data = response.data.data;
        dispatch(getGamesList(data));
      })
      .catch(error => {});
  };
  const renderContent = () => (
    <View
      style={[
        styles.background,
        {
          marginBottom:
            (!imInGame && game && (Platform.OS === 'ios' ? 100 : 100)) || 25,
        },
      ]}>
      <ClubInfo club={game?.club} isInviteGame={inviteGame} />
      <View
        style={[
          styles.container,
          {
            paddingBottom: inviteGame
              ? Platform.OS === 'ios'
                ? 145
                : 130
              : Platform.OS === 'ios'
              ? 55
              : 35,
          },
        ]}>
        {/* ============== CHAT SECTION ================ */}
        <GamesChat game={game} navigation={navigation} id={myProfile.id} />
        {/* =============================================== */}

        {/* ============== JOINING REQUEST ================ */}
        <JoiningCard navigation={navigation} game={game} />
        {/* =============================================== */}

        <PlayersList
          players={game?.players}
          gameId={game?.id}
          countPlayers={game?.countPlayers}
          navigation={navigation}
          isInviteGame={inviteGame}
        />
        <Course field={game.field} />
        <GameInfo game={game || {}} navigation={navigation} />
        {/* ============== LEAVE OR CANCEL ================ */}
        {(imInGame || imCreator) && (
          <TouchableOpacity
            onPress={() => actionSheet.current.show()}
            style={styles.cancel_game_container}>
            <Text style={styles.cancel_game_text}>
              {imCreator ? 'Cancel game' : 'Leave the game'}
            </Text>
          </TouchableOpacity>
        )}
        {/* =============================================== */}
      </View>
      {imCreator ? (
        <ActionSheet
          ref={actionSheet}
          title={'Confirm cancelling the game?'}
          options={['Confirm', 'Exit']}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          onPress={index => {
            index === 0 && onDeleteGame();
          }}
        />
      ) : (
        <ActionSheet
          ref={actionSheet}
          title={'Confirm you want to leave?'}
          options={['Confirm', 'Exit']}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          onPress={index => {
            index === 0 && onLeaveGame();
          }}
        />
      )}
    </View>
  );

  const buttonGame = () => {
    const handleButtonGame = () => {
      setClickedButton(true);
      joinToGame(convertToFormData({ gameId: id }))
        .then(response => {
          if (response.data.success) {
            addToJoinRequests({
              player: myProfile,
              game,
            });
          }
        })
        .catch(error => console.log('error', error));
    };

    return (
      !imInGame &&
      game && (
        <BottomContainer>
          <MyButton
            size="lg"
            gradientColors={
              imInJoinRequests ? colors.grayGradient : colors.blueGradient
            }
            disabled={clickedButton}
            color={imInJoinRequests && colors.customBlack}
            onPress={handleButtonGame}
            requested={imInJoinRequests}>
            {imInJoinRequests ? 'Request was sent' : 'Join the game'}
          </MyButton>
        </BottomContainer>
      )
    );
  };

  const buttonInviteGame = () => {
    const handleAccept = () => {
      setLoader(true);
      confirmGameInvite(convertToFormData({ gameId: game.id }))
        .then(response => {
          if (response.data.success) {
            confirmGame({ game, myProfile });
            addGameMyProfile({ game });
            setLoader(false);
            navigation.navigate('joinedGame');
          }
        })
        .catch(error => console.log(error))
        .finally(() => setClickedButton(false));
    };

    return (
      game && (
        <BottomContainer>
          <InviteButton
            linearGradient={true}
            fontSize={18}
            width="100%"
            height={55}
            title="Accept"
            color="white"
            press={handleAccept}
            navigation={navigation}
          />
        </BottomContainer>
      )
    );
  };

  return !loader ? (
    <>
      <ReactNativeParallaxHeader
        headerMaxHeight={230}
        onBackPressed={navigation.goBack}
        backgroundImageScale={1}
        images={backimages}
        bottomContainer={inviteGame ? buttonInviteGame() : buttonGame()}
        renderContent={renderContent}
      />
      {game && imInJoinRequests && <Message />}
    </>
  ) : (
    <Vertical
      alignCenter
      justifyCenter
      style={{
        height:
          Dimensions.get('window').height -
          (Dimensions.get('window').height / 100) * 33,
        backgroundColor: 'rgb(240,240,240)',
      }}>
      <Loader />
    </Vertical>
  );
};

export default connect(
  null,
  {
    getGameDetail,
    declineGame,
    confirmGame,
    addJoinedPlayer,
    addGameMyProfile,
    addToJoinRequests,
  },
)(GameDetails);
