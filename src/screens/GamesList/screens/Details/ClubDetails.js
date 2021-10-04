// @ts-check

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { connect, useSelector } from 'react-redux';
import { getClub } from '../../../../services/clubs/clubs';
import { getClubDetail } from '../../../../store/clubs/clubs.action';
import {
  Vertical,
  Horizontal,
  ReviewStars,
  MyButton,
  H2,
  H3,
  H4,
  GamePlayer,
  BT,
  ST,
  PopularGames,
  BottomContainer,
  Loader,
} from '../../../../components';
import Weather from '../../../../components/Weather';
import {
  NavigationIcon,
  SpinnerIcon,
  ClockIcon,
  DollarIcon,
  PhoneIcon,
  WebIcon,
} from '../../../../components/SvgIcons';
import { scale } from 'react-native-size-matters';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
  Keyboard,
  Platform,
} from 'react-native';
import styles from './styles';
import ReactNativeParallaxHeader from './CollapeScrollView';
import Carousel from 'react-native-snap-carousel';
import InviteCard from '../../../../components/GameCard/inviteCard';
import FieldCard from '../../../../components/FieldCard';
import MainButton from '../../../../components/MyButton/MainGameButton';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  FilterContext,
  FilterProvider,
} from '../../../../context/FilterContext';
import RenderModal from '../../../../components/ReviewStars/RenderModal';
import ServicesList from '../../services';
import colors from '../../../../constants/colors';
import { clubRating } from '../../../../services/clubRating/clubRating';
import uuid from 'react-native-uuid';

const ClubDetails = ({ route, navigation, getClubDetail }) => {
  const btnHeight = Dimensions.get('window').height;
  const { id } = route.params;
  const club = useSelector(state => state.clubs.club[id]);
  const [moreInfo, setMoreInfo] = useState(false);
  const { bottomSheetReview, toggler, updateClubDetails } = useContext(
    FilterContext,
  );
  const gameList = useSelector(state => state.games.game);
  const inviteGamesList = Object.values(gameList).filter(
    item => item.inviteStatus === 'invite' && item.club.id === id,
  );

  const [loader, setLoader] = useState(true);

  let priceRange = '';
  let holesRange = '';
  if (club) {
    priceRange =
      club?.priceRange?.min && club?.priceRange?.max
        ? `$${club?.priceRange?.min} to $${club.priceRange.max}`
        : 'no price info';

    holesRange =
      club?.holesRange?.min === club?.holesRange?.max
        ? `${club?.holesRange?.min} holes`
        : `${club?.holesRange?.min}-${club?.holesRange?.max} holes`;
  }
  const closeTabBar = () => {
    navigation.setOptions({
      tabBarVisible: false,
    });
    // tabBarVisible(false);
  };
  const openTabBar = () => {
    navigation.setOptions({
      tabBarVisible: true,
    });
    // tabBarVisible(true);
  };

  // useEffect(() => {
  //   if (!club) {
  //     getClub(id)
  //       .then(response => {
  //         getClubDetail({ id, ...response.data.data });
  //         setLoader(false);
  //       })
  //       .catch(error => {});
  //   }
  // }, [club, id, getClubDetail]);
  const getClubUpdate = useCallback(() => {
    console.log('club details request');
    getClub(id)
      .then(response => {
        getClubDetail({ id, ...response.data.data });
        setLoader(false);
      })
      .catch(error => {});
  }, [getClubDetail, id]);
  // To update club page when accessing it
  useEffect(() => {
    getClubUpdate();
  }, [getClubUpdate, getClubDetail, updateClubDetails]);

  const backimages =
    club && club.images?.length !== 0 ? club.images : ['empty'];
  const handleBackNavigation = () => navigation.goBack();

  const renderContent = gameData => {
    const sliderWidth = Dimensions.get('window').width;

    return (
      <>
        <Vertical
          style={[
            styles.background,
            { marginBottom: Platform.OS === 'ios' ? 125 : 100 },
          ]}>
          <Vertical style={[styles.topContainer, styles.container]}>
            <Horizontal style={styles.gameHeader} spaceBetween>
              <H2 color={colors.customBlack}>{gameData.title}</H2>
            </Horizontal>

            <Horizontal style={styles.gameInformation} spaceBetween>
              <Vertical style={{ maxWidth: '75%' }}>
                <BT>{gameData.address}</BT>
              </Vertical>
            </Horizontal>

            <Horizontal style={styles.gameInformation}>
              <ReviewStars
                gray={false}
                navigation={navigation}
                count={5}
                value={club.rating}
                clubId={id}
                gameData={club}
              />
              <BT style={styles.priceMargin} color={colors.customBlack}>
                {holesRange} · {priceRange}
              </BT>
            </Horizontal>

            <View style={styles.divider} />
            <MyButton
              textWrapper={BT}
              type="link"
              color={colors.lightBlue}
              onPress={() => setMoreInfo(!moreInfo)}>
              {moreInfo ? 'Hide' : 'More info'}
            </MyButton>
            {moreInfo && (
              <>
                <H2 color={colors.grey} style={styles.optionHeader}>
                  About a course
                </H2>
                <Vertical>
                  <Horizontal>
                    <PhoneIcon
                      width={14}
                      height={14}
                      viewBox="0 0 11 11"
                      color={colors.lightBlue}
                    />
                    <H3 style={styles.marginForIconLabel}>Phone</H3>
                  </Horizontal>
                  <TouchableOpacity
                    onPress={() =>
                      gameData.phone && Linking.openURL(`tel:${gameData.phone}`)
                    }>
                    <H3 style={styles.marginForIcon} color={colors.lightBlue}>
                      {gameData.phone ? gameData.phone : 'no phone'}
                    </H3>
                  </TouchableOpacity>
                </Vertical>
                <View style={styles.divider} />
                <Vertical>
                  <Horizontal>
                    <DollarIcon
                      width={14}
                      height={18}
                      viewBox="0 0 12 12"
                      color={colors.lightBlue}
                    />
                    <H3 style={styles.marginForIconLabel}>Price</H3>
                  </Horizontal>
                  <H3 style={styles.marginForIcon} color={colors.grey}>
                    {gameData.priceRange.min && gameData.priceRange.max
                      ? `$${gameData.priceRange.min} to $${
                          gameData.priceRange.max
                        }`
                      : 'no price info'}
                  </H3>
                </Vertical>
                <View style={styles.divider} />
                {/* <Vertical>
                    <Horizontal>
                      <ClockIcon width={14} height={14} viewBox="0 0 11 11" />
                      <H3 style={styles.marginForIconLabel}>Hours</H3>
                    </Horizontal>
                    <BT style={styles.marginForIcon} color={colors.grey}>
                      Mon-Fri 6:00 am — 11:00 pm {'\n'}
                      Sat-Sun 6:00 am — 12:00 pm
                    </BT>
                  </Vertical> 
                  <View style={styles.divider} />*/}
                <Vertical>
                  <Horizontal>
                    <WebIcon width={14} height={14} viewBox="0 0 14 14" />
                    <H3 style={styles.marginForIconLabel}>Website</H3>
                  </Horizontal>
                  <TouchableOpacity
                    onPress={() =>
                      gameData.website && Linking.openURL(gameData.website)
                    }>
                    <H3 style={styles.marginForIcon} color={colors.lightBlue}>
                      {gameData.website ? gameData.website : 'No Website info'}
                    </H3>
                  </TouchableOpacity>
                </Vertical>
                <View style={styles.divider} />

                <ServicesList services={gameData.services} />
              </>
            )}
            <Horizontal spaceBetween>
              {/* <Horizontal>
                  <MyButton
                    style={styles.routeButton}
                    color={colors.lightBlue}
                    type="link"
                    iconRight={
                      <NavigationIcon
                        width={14}
                        height={14}
                        color={colors.lightBlue}
                      />
                    }
                    textWrapper={BT}
                    iconRightOffset={4}
                    onPress={() => {}}>
                    Plot a route
                  </MyButton>
                </Horizontal> */}
            </Horizontal>
          </Vertical>
          <H3 style={styles.fieldsHeader}>Courses</H3>
          <Carousel
            style={{ zIndex: 1, elevation: 10, borderWidth: 1 }}
            nestedScrollEnabled
            removeClippedSubviews={false}
            data={club.fields}
            sliderWidth={sliderWidth}
            itemWidth={club?.fields?.length > 1 ? scale(310) : scale(310)}
            itemHeight={scale(450)}
            sliderHeight={scale(450)}
            useScrollView
            renderItem={({ item }) => (
              <FieldCard
                fieldData={item}
                fieldLength={club?.fields?.length}
                onPress={() => {}}
                key={uuid.v4()}
              />
            )}
          />
          <View style={[styles.containerCard]}>
            <InviteCard isClub data={inviteGamesList} navigation={navigation} />
          </View>
          {club?.popularGames?.games && (
            <>
              <H3 style={styles.cardHeader}>Popular Games</H3>
              <Carousel
                removeClippedSubviews={false}
                data={club?.popularGames?.games}
                sliderWidth={sliderWidth}
                itemWidth={scale(310)}
                itemHeight={scale(450)}
                sliderHeight={scale(450)}
                renderItem={({ item }) => (
                  <PopularGames
                    item={item}
                    title={club.title}
                    holesRange={holesRange}
                    navigation={navigation}
                  />
                )}
              />
            </>
          )}
        </Vertical>
      </>
    );
  };

  const bottomButton = () => {
    return (
      <>
        {!toggler && (
          <BottomContainer>
            <MainButton
              height={52.5}
              title="Create a game"
              fontSize={20}
              color="white"
              press={() => navigation.navigate('CreateGame', { idClub: id })}
            />
          </BottomContainer>
        )}
        <BottomSheet
          ref={bottomSheetReview}
          initialSnap={1}
          onOpenEnd={closeTabBar}
          onCloseEnd={() => {
            openTabBar();
            Keyboard.dismiss();
          }}
          borderRadius={20}
          snapPoints={
            Platform.OS === 'ios'
              ? [btnHeight < 670 ? '45' : '35%', 0]
              : ['45%', 0]
          }
          renderContent={() => toggler && <RenderModal />}
        />
      </>
    );
  };

  return !loader ? (
    <>
      <ReactNativeParallaxHeader
        headerMaxHeight={230}
        onBackPressed={handleBackNavigation}
        backgroundImageScale={1}
        renderContent={() => renderContent(club)}
        bottomContainer={bottomButton()}
        images={backimages}
      />
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
const withProvider = props => {
  return (
    <FilterProvider>
      <ClubDetails {...props} />
    </FilterProvider>
  );
};

export default connect(
  null,
  { getClubDetail },
)(withProvider);
