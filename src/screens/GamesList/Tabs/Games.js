/* eslint-disable react-native/no-inline-styles */
// @ts-check

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  Vertical,
  Horizontal,
  ST,
  H1,
  H4,
  BT,
  GameCard,
  Loader,
} from 'components';
import {
  Dimensions,
  View,
  RefreshControl,
  Platform,
  ScrollView,
} from 'react-native';

import { CarIcon } from 'components/SvgIcons';
import { EmptyList } from 'components/SvgImages';
import styles from './styles';
import colors from 'constants/colors';
import Filter from '../Filter';
import { FlatList } from 'react-native-gesture-handler';
import MainButton from 'components/MyButton/MainGameButton';
import InviteCard from 'components/GameCard/inviteCard';

import { getMyInviteGames, getJoinRequests } from 'services/user/user';
import { getInviteGames, getMyJoinRequests } from 'store/games/games.action';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import uuid from 'react-native-uuid';
import { height } from '../../../constants/dimentions';

const Games = ({
  navigation,
  fetchList,
  getInviteGames,
  getMyJoinRequests,
}) => {
  const btnHeight = Dimensions.get('window').height;
  const myId = useSelector(state => state.user.myProfile.id);
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const gamesList = useSelector(state => state.games.games); //Обычные игры, не инвайты

  const loadingGames = useSelector(state => state.games.game); //Игры в которых есть мы или у нас инвайт
  const inviteGames = Object.values(loadingGames).filter(
    i => i.inviteStatus === 'invite',
  ); // фильтруем игры и получаем только те что с инвайтом

  const filteredGames =
    gamesList?.list &&
    gamesList?.list?.length !== 0 &&
    gamesList?.list[0]?.games?.filter(
      item =>
        item.players.filter(p => p.id === myId).length <= 0 &&
        item.countPlayers > 0 &&
        !inviteGames.filter(i => i.id === item.id).length,
    );

  const joinRequestsList =
    gamesList?.list &&
    gamesList?.list?.length !== 0 &&
    gamesList?.list[0]?.games?.filter(
      item => item.joinRequests?.filter(p => p.id === myId).length > 0,
    );

  const gameList = useSelector(state => state.games.game);
  const inviteGamesList = Object.values(gameList).filter(
    item => item.inviteStatus === 'invite',
  );

  // хоть токен и лежит в сторе, но сразу он не успевает прогрузиться в axios
  // поэтому стоит проверять, есть ли токен в заголовке, чтобы не словить 401
  const token = axios.defaults.headers.common.Authorization;

  const fetchInviteGames = useCallback(() => {
    if (token) {
      console.log('INVITE GAMES FETCH');
      getMyInviteGames()
        .then(response => {
          getInviteGames(response.data.data);
        })
        .catch(error => console.log('error', error));
    }
  }, [getInviteGames, token]);

  // useEffect(() => {
  //   console.log('TAB FETCH');
  //   fetchInviteGames();
  //   fetchList();
  // }, [token]);

  const update = () => {
    fetchList();
    fetchInviteGames();
    setRefreshing(false);
  };

  const handleGoToGameDetails = (id, game) => {
    navigation.push('GameDetails', { id, game });
  };
  const cityToRender = gamesList?.list?.map(item => item?.city.title);

  // IF WE WANT TO SORT GAMES BY THE DATE //
  const dateNow = new Date().toISOString().slice(0, 10);
  const renderGamesArray =
    filteredGames?.length > 0 &&
    filteredGames.filter(item => item.date >= dateNow);

  const RenderGames = ({ item, index }) => {
    const isRequested = !!joinRequestsList.filter(i => i.id === item.id).length;
    return (
      <Vertical
        style={{
          zIndex: 5,
          elevation: 5,
          marginTop: inviteGamesList?.length == 0 ? 0 : 10,
          paddingBottom:
            renderGamesArray?.length - 1 === index && height < 700
              ? '110%'
              : renderGamesArray?.length - 1 === index && height > 700
              ? '53%'
              : 0,
        }}>
        <Horizontal>
          <BT style={styles.placeName}>{cityToRender}</BT>

          {/* ------ TEMPORARILY OFF ------ */}
          {/* <CarIcon
              width={14}
              height={10}
              color={colors.customBlack}
              style={styles.marginRight5}
            />
            <ST>72 km · 2 hours 35 min</ST> */}
        </Horizontal>

        <GameCard
          data={item}
          requested={isRequested}
          onDetailPress={data => {
            handleGoToGameDetails(item.id, data);
          }}
        />
      </Vertical>
    );
  };

  return (
    <>
      <View
        style={
          !renderGamesArray && {
            backgroundColor: '#F0F3F4',
            flex: 1,
            flexGrow: 1,
          }
        }>
        <Vertical style={styles.content}>
          <Vertical>
            {gamesList.list === null || loader ? (
              <Vertical alignCenter justifyCenter style={{ height: 200 }}>
                <Loader />
              </Vertical>
            ) : (
              <>
                {renderGamesArray?.length > 0 || inviteGames?.length > 0 ? (
                  <FlatList
                    contentContainerStyle={{
                      // paddingBottom: 350,
                      height:
                        renderGamesArray?.length == 1 &&
                        inviteGames?.length == 0
                          ? '100%'
                          : inviteGames?.length == 1 &&
                            renderGamesArray?.length == 0
                          ? '100%'
                          : height > 700
                          ? '150%'
                          : '200%',
                      // DeviceInfo.getModel() === 'iPhone 11 Pro Max' ||
                      // DeviceInfo.getModel() === 'iPhone 11 Pro' ||
                      // DeviceInfo.getModel() === 'iPhone 11'
                      //   ? '155%'
                      //   : '155%',
                    }}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                      inviteGames?.length > 0 &&
                      !renderGamesArray && (
                        <View style={{ marginBottom: 380 }} />
                      )
                    }
                    ListHeaderComponent={
                      <View
                        style={
                          {
                            // marginBottom:
                            //   renderGamesArray?.length > 0 ? '0%' : '135%',
                          }
                        }>
                        <Filter navigation={navigation} />
                        <InviteCard
                          setLoader={setLoader}
                          data={inviteGamesList}
                          navigation={navigation}
                        />
                      </View>
                    }
                    data={renderGamesArray}
                    renderItem={(item, index) => RenderGames(item, index)}
                    keyExtractor={() => uuid.v4()}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={update}
                      />
                    }
                  />
                ) : (
                  <ScrollView
                    automaticallyAdjustContentInsets={true}
                    key={uuid.v4().toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                      // height: height > 850 ? '105%' : '115%',
                      paddingBottom: 200,
                    }}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={update}
                      />
                    }>
                    <Filter navigation={navigation} />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                      }}>
                      <EmptyList />
                      <H1 style={styles.emptyTitle} color={'rgb(52,65,84)'}>
                        No games now
                      </H1>
                      <H4 style={styles.emptyDescription} color={colors.grey}>
                        There are no games here yet,
                      </H4>
                      <H4 color={colors.grey}>
                        we need a little time to invite more users.
                      </H4>
                      <H4 style={{ marginBottom: 25 }} color={colors.grey}>
                        Please stay with us!
                      </H4>
                      <H4 style={styles.emptyDescription} color={colors.grey}>
                        Also you can explore clubs
                      </H4>
                      <H4 color={colors.grey}>
                        or create a game right no by yourself.
                      </H4>
                    </View>
                  </ScrollView>
                )}
              </>
            )}
          </Vertical>
        </Vertical>
      </View>

      <MainButton
        style={[
          styles.btnPadding,
          {
            position: 'absolute',
            zIndex: 50,
            elevation: 50,
            width: '100%',
            bottom:
              DeviceInfo.getModel() === 'iPhone 12 Pro Max' ||
              DeviceInfo.getModel() === 'iPhone 12 Pro' ||
              DeviceInfo.getModel() === 'iPhone 12'
                ? '14%'
                : DeviceInfo.hasNotch()
                ? '13.5%'
                : (btnHeight / 100) * 12.5 + 20,
            // Platform.OS === 'ios' ? (DeviceInfo.hasNotch() ? 80 : 100) : 100,
            left: 0,
          },
        ]}
        width={'100%'}
        title="Create a game"
        fontSize={20}
        color="white"
        press={() => navigation.jumpTo('Clubs')}
      />
    </>
  );
};

export default connect(
  null,
  { getInviteGames, getMyJoinRequests },
)(Games);
