// @ts-nocheck

import React, { useEffect, useState, useContext } from 'react';
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
  isInviteGame,
  moreInfo,
  setMoreInfo,
  readMore,
  setReadMore,
  gameDate,
) => {
  return (
    <>
      {/* Инфа о клубе */}
      <Vertical>
        <LinearGradient
          colors={
            isInviteGame ? ['#3F9952', '#9FDD51'] : ['#E9EAF9', '#E9EAF9']
          }
          style={styles.container}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.8, y: -0.8 }}>
          <View style={styles.gameHeader}>
            <H2 color={isInviteGame ? colors.white : colors.gray}>
              {gameData?.club.title}
            </H2>
          </View>
          <View style={styles.gameInformation}>
            <Text style={{ color: isInviteGame ? colors.white : colors.gray }}>
              {gameData?.club.address}, {gameData?.club.city.title}
            </Text>
          </View>
          <Horizontal style={styles.gameInformation}>
            {/* <ReviewStars value={gameData?.club.rating} count={5} /> */}
            {/* Пока PriceRange не реализован, выводим статическую цену */}
            <BT
              style={{
                color: isInviteGame ? colors.white : colors.customBlack,
              }}>
              {'   '}9 · $19 to $55
            </BT>
          </Horizontal>
          <Text
            numberOfLines={!readMore ? 3 : 0}
            ellipsizeMode="tail"
            style={[
              {
                color: isInviteGame ? colors.white : colors.customBlack,
                fontSize: 12,
              },
              !readMore && !isInviteGame && { color: colors.grey },
            ]}>
            {/* Тут должна быть информация о клубе */}
            At Painted Mountain's 18-hole Championship Golf Course you will
            enjoy great conditions, comfortable temperatures and excellent
            value. Offering a complete golf resort experience complete with the
            challenging 18-hole golf course, fine dining and entertainment at
            the GrandView Steak House Restaurant & Lounge, browsing in our
            well-stocked Golf Shop and shopping for golf apparel and fine
            fashions along with unique gifts and accessories in the Trends
            Sports Boutique. Experienced and beginner golfers can fine-tune
            their game. Painted Mountain is home to the John Jacobs' Golf
            Schools, The World Leader in Golf Instruction.
          </Text>
          <Horizontal style={{ marginBottom: 20, marginTop: 15 }} spaceBetween>
            <TouchableOpacity
              style={{ height: 25 }}
              onPress={() => setReadMore(!readMore)}>
              <Text
                style={{
                  color: isInviteGame ? colors.white : colors.lightBlue,
                }}>
                {readMore ? 'Read less...' : 'Read more...'}
              </Text>
            </TouchableOpacity>
            <MyButton
              style={[styles.routeButton, styles.routeBtnColor]}
              color={isInviteGame ? colors.white : colors.lightBlue}
              iconRight={
                <NavigationIcon
                  width={11}
                  height={11}
                  color={isInviteGame ? colors.white : colors.lightBlue}
                />
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
        {/* Список игроков в игре */}
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
              languages={['язык1', 'язык2']}
              country={user.country}
              isDetail
            />
            <View style={styles.line} />
          </View>
        ))}

        {/* Если еще есть свободные места, то появляется кнопка Invite friend */}
        {gameData?.players.length < gameData?.countPlayers && !isInviteGame && (
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
                    There are {4 - gameData?.players.length} places available
                  </CT>
                </Vertical>
              </Horizontal>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        )}

        <Vertical style={{ marginTop: 20 }}>
          {/* Дата игры */}
          <View>
            <BT style={styles.titles}>Date</BT>
            <Text style={styles.innerText}>{gameDate}</Text>
          </View>

          {/* Коммент который оставил создатель игры */}
          <View style={{ marginTop: 30 }}>
            <BT style={styles.titles}>Comment</BT>
            <Text style={styles.innerText}>
              {gameData?.comment ? gameData.comment : 'No comment'}
            </Text>
          </View>

          {/* Дополнительная инфа о клубе */}
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
              title="Website"
              icon={() => (
                <WebIcon width={14} height={14} viewBox="0 0 14 14" />
              )}>
              <Text style={[styles.detailText, { color: colors.darkBlue }]}>
                website.domen
              </Text>
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

            {/* Это что? */}
            {/* {gameData?.field.amenities.map((item, index) => (
              <Option
                key={index}
                title={item.title}
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
  const { id, isInviteGame } = route.params;
  const game = useSelector(state => state.games.game[id]);
  const [moreInfo, setMoreInfo] = useState(false);
  const [readMore, setReadMore] = useState(false);

  // преобразуем дату в нужный формат
  let gameDate = '';
  if (game) {
    const dates = game.date.slice(0, 10);
    const hours = game.date.slice(11, 16);
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

  const backimages =
    game?.club.images.length !== 0
      ? game?.club.images
      : [
          'https://www.jamesedition.com/stories/wp-content/uploads/2020/06/Spain-Mallorca3-2-950x628.jpg',
          'https://img1.10bestmedia.com/Images/Photos/253409/p-Sandia1_54_990x660_201404251613.jpg',
          'https://www.top100golfcourses.com/img/courses/mission-hills-lava-fields_146bd047-9a01-49d9-8f95-2a83ae2a034f.jpg',
        ];

  const buttonGame = () => (
    <BottomContainer>
      <MyButton
        size="lg"
        gradientColors={colors.blueGradient}
        onPress={() => navigation.navigate('joinedGame')}>
        {/* Book for ${game?.price} */}
        Join the game
      </MyButton>
    </BottomContainer>
  );

  const buttonInviteGame = () => (
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
  );

  return (
    <ReactNativeParallaxHeader
      headerMaxHeight={230}
      onBackPressed={handleBackNavigation}
      backgroundImageScale={1}
      // images={game?.field.images} BEFORE
      images={backimages}
      bottomContainer={isInviteGame ? buttonInviteGame() : buttonGame()}
      renderContent={() =>
        renderContent(
          game,
          handleGoToInvite,
          handleOpenProfile,
          isInviteGame,
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
      <H3 style={styles.optionTitle}>{title}</H3>
    </Horizontal>
    <View style={styles.optionContent}>{children}</View>
  </Vertical>
);

export default connect(
  null,
  { getGameDetail },
)(GameDetails);
