// @ts-check

import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  Vertical,
  Horizontal,
  ReviewStars,
  Weather,
  GamePlayer,
  MyButton,
  BottomContainer,
  H2,
  H3,
  BT,
  CT,
  H4,
} from '../../../../components';
import {
  PhoneIcon,
  DollarIcon,
  ClockIcon,
  PersonAddIcon,
  NavigationIcon,
  WebIcon,
  ForwardArrow,
} from '../../../../components/SvgIcons';

import { View, Text } from 'react-native';
import ReactNativeParallaxHeader from './CollapeScrollView';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

import colors from '../../../../constants/colors';
import { getGame } from '../../../../services/games/games';
import { getGameDetail } from '../../../../store/games/games.action';
import LinearGradient from 'react-native-linear-gradient';
import InviteButton from '../../../../components/MyButton/inviteButton';
import uuid from 'react-native-uuid';

// Больше не нужен!

const renderContent = (
  gameData,
  handleGoToInvite,
  handleOpenProfile,
  moreInfo,
  setMoreInfo,
  readMore,
  setReadMore,
  gameDate,
) => {
  return (
    <>
      <Vertical>
        <LinearGradient
          colors={['#3F9952', '#9FDD51']}
          style={styles.container}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.8, y: -0.8 }}>
          <Horizontal style={styles.gameHeader} spaceBetween>
            <H2 color={colors.white}>{gameData?.field?.title}</H2>
          </Horizontal>
          <Horizontal style={styles.gameInformation} spaceBetween>
            <Text style={{ color: 'white' }}>
              {gameData?.club.address}
              <Text>{gameData?.city?.title}</Text>
            </Text>
          </Horizontal>
          <Horizontal style={styles.gameInformation}>
            {/* <ReviewStars value={gameData?.field.rating} count={5} />
            <BT style={{ color: 'white' }}>{'   '}9 · $19 to $55</BT> */}
          </Horizontal>
          <Text
            numberOfLines={!readMore ? 3 : 0}
            ellipsizeMode="tail"
            style={{ color: 'white', fontSize: 12 }}>
            {gameData?.field.characteristics}
          </Text>
          <Horizontal style={{ marginBottom: 20, marginTop: 15 }} spaceBetween>
            <TouchableOpacity
              style={{ height: 25 }}
              onPress={() => setReadMore(!readMore)}>
              <Text style={{ color: 'white' }}>Read more...</Text>
            </TouchableOpacity>
            <MyButton
              style={styles.routeButton}
              color={colors.white}
              iconRight={
                <NavigationIcon width={11} height={11} color={colors.white} />
              }
              iconRightOffset={4}
              textWrapper={BT}
              type="link"
              onPress={() => {}}>
              Plot a route
            </MyButton>
          </Horizontal>
        </LinearGradient>
      </Vertical>

      <Vertical style={[styles.container, styles.bottomPaddingMd]}>
        <BT style={styles.invitePlayersTitle}>Players</BT>
        {gameData?.players.map((user, index) => (
          <View key={uuid.v4()}>
            <GamePlayer
              onPress={handleOpenProfile}
              nonPinmates={user.nonPinmates}
              fullname={user.fullName}
              avatar={user.avatar}
              age={user.age}
              position={user?.placeOfWork?.title}
              hcp={user?.statistics?.handicap}
              gir={user.gir}
              rounds={user?.statistics?.rounds}
              verified={user.isJobVerified}
              languages={user.languages}
              country={user.country}
              isDetail
            />
            <View style={styles.line} />
          </View>
        ))}

        <Vertical style={{ marginTop: 20 }}>
          <View>
            <BT style={styles.titles}>Date</BT>
            <Text style={styles.innerText}>{gameDate}</Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <BT style={styles.titles}>Comment</BT>
            <Text style={styles.innerText}>
              {gameData?.comment ? gameData.comment : 'No comment'}
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <BT style={styles.titles}>About a club</BT>
            <Option
              title="Phone"
              icon={() => (
                <PhoneIcon
                  width={14}
                  height={14}
                  viewBox="0 0 11 11"
                  color={colors.lightBlue}
                />
              )}>
              <TouchableOpacity>
                <Text style={styles.phoneText}>{gameData?.club.phone}</Text>
              </TouchableOpacity>
            </Option>
            <Option
              title="Price"
              icon={() => (
                <DollarIcon
                  width={14}
                  height={18}
                  viewBox="0 0 12 12"
                  color={colors.lightBlue}
                />
              )}>
              <Text style={styles.detailText}>
                {gameData?.club.priceRange.min && gameData?.club.priceRange.max
                  ? `$${gameData?.club.priceRange.min} to $${
                      gameData?.club.priceRange.max
                    }`
                  : 'no price info'}
              </Text>
            </Option>
            <Option
              title="Hours"
              icon={() => (
                <ClockIcon width={14} height={14} viewBox="0 0 11 11" />
              )}>
              <Text style={styles.detailText}>Mon-Fri 6:00 am — 11:00 pm</Text>
              <Text style={styles.detailText}>Sat-Sun 6:00 am — 12:00 pm</Text>
            </Option>
            <Option
              title="Wi-Fi"
              icon={() => (
                <WebIcon width={14} height={14} viewBox="0 0 14 14" />
              )}>
              <Text style={styles.detailText}>Website</Text>
            </Option>
            {moreInfo ? (
              <View>
                <Text>тут будет еще больше информации!</Text>
                <Horizontal style={{ marginTop: 15 }}>
                  <TouchableOpacity
                    style={{
                      height: 25,
                      justifyContent: 'center',
                    }}
                    onPress={() => setMoreInfo(false)}>
                    <Text
                      style={{
                        color: '#515BF1',
                        fontSize: 16,
                      }}>
                      Show less...
                    </Text>
                  </TouchableOpacity>
                </Horizontal>
              </View>
            ) : (
              <Horizontal style={{ marginTop: 15 }}>
                <TouchableOpacity
                  style={{
                    height: 25,
                    justifyContent: 'center',
                  }}
                  onPress={() => setMoreInfo(true)}>
                  <Text
                    style={{
                      color: '#515BF1',
                      fontSize: 16,
                    }}>
                    More info... <ForwardArrow />
                  </Text>
                </TouchableOpacity>
              </Horizontal>
            )}
            {/* {gameData?.field.amenities.map((item, index) => (
              <Option
                key={index}
                title={item?.title}
                icon={() => (
                  <PhoneIcon width={8} height={11} color={colors.lightBlue} />
                )}>
                <H4>{item.description}</H4>
              </Option>
            ))} */}
          </View>
        </Vertical>
      </Vertical>
    </>
  );
};

const GameDetails = ({ route, navigation, getGameDetail }) => {
  const { id } = route.params;
  console.log(
    'Invite game ROUTE = ',
    useSelector(state => state.games.game[id]),
  );
  const game = useSelector(state => state.games.game[id]);
  const [moreInfo, setMoreInfo] = useState(false);
  const [readMore, setReadMore] = useState(false);
  // преобразуем дату в нужный формат
  let gameDate = '';
  if (game) {
    const dates = game.date.slice(0, 10);
    const hours = game.date.slice(14);
    const res = dates.split('-');
    const months = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    gameDate = `${res[2]} ${months[res[1] - 1]}, at ${hours}`;
  }

  useEffect(() => {
    if (!game) {
      getGame(id)
        .then(response => {
          getGameDetail({ id, ...response.data.data });
        })
        .catch(error => {});
    }
  }, [game, id, getGameDetail]);

  const handleGoToInvite = () => {
    navigation.push('InviteFriends');
  };
  const handleGoToBooking = () => {
    navigation.push('Booking');
  };

  const handleOpenProfile = () => {
    // navigation.push('UserProfile', { id: gameData.id });
  };
  const handleBackNavigation = () => navigation.goBack();
  const backimages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnUgHdXLyLbZF7UwbTu8VET14d7RkIlSwYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnUgHdXLyLbZF7UwbTu8VET14d7RkIlSwYg&usqp=CAU',
  ];
  return (
    <ReactNativeParallaxHeader
      headerMaxHeight={230}
      onBackPressed={handleBackNavigation}
      backgroundImageScale={1}
      images={backimages} //game?.field.images
      bottomContainer={
        <BottomContainer>
          <InviteButton
            linearGradient={true}
            fontSize={18}
            width="100%"
            height={55}
            title="Accept"
            color="white"
            onPress={() => navigation.navigate('joinedGame')}
            navigation={navigation}
          />
        </BottomContainer>
      }
      renderContent={() =>
        renderContent(
          game,
          handleGoToInvite,
          handleOpenProfile,
          moreInfo,
          setMoreInfo,
          readMore,
          setReadMore,
          gameDate,
        )
      }
    />
  );
};

/**
 * Renders game accomodation options
 * @component
 * @param {Object} props - Pass props to Option
 * @param {string} props.title - Title of the Option
 * @param {() => React.ReactNode} props.icon - Icon of the Option
 * @param {React.ReactNode} props.children - Content of the Option
 */
const Option = ({ title, icon, children }) => (
  <Vertical style={styles.option}>
    <Horizontal>
      <View style={styles.optionIcon}>{icon()}</View>
      <Text style={{ color: '#344154', paddingLeft: 20, fontSize: 16 }}>
        {title}
      </Text>
    </Horizontal>
    <View style={styles.optionContent}>{children}</View>
  </Vertical>
);

export default connect(
  null,
  { getGameDetail },
)(GameDetails);
