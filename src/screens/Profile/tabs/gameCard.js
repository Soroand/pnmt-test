// @ts-check

import React from 'react';
import { useSelector } from 'react-redux';
import { Dimensions, Platform, View } from 'react-native';
import { H1, H4, GameCardWithBackground } from '../../../components';
import Carousel from 'react-native-snap-carousel';
import { scale } from 'react-native-size-matters';
import { EmptyList } from '../../../components/SvgImages';
import styles from '../styles';
import colors from '../../../constants/colors';
import MainButton from '../../../components/MyButton/MainGameButton';

const GameCard = ({ openBottomSheet, navigation }) => {
  const gameList = useSelector(state => state.user.myProfile.games);
  const sliderWidth = Dimensions.get('window').width;

  return (
    <>
      {gameList?.length === 0 ? (
        <View style={styles.emptyContainer}>
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
          <H4 color={colors.grey}>or create a game right no by yourself.</H4>

          <MainButton
            width={'100%'}
            title="Create a game"
            fontSize={20}
            color="white"
            press={() => navigation.navigate('Clubs')}
          />
        </View>
      ) : (
        <>
          <Carousel
            data={gameList}
            removeClippedSubviews={false}
            renderItem={({ item }) => (
              <GameCardWithBackground
                navigation={navigation}
                openBottomSheet={openBottomSheet}
                item={item}
              />
            )}
            sliderWidth={sliderWidth}
            itemWidth={scale(305)}
          />
        </>
      )}
    </>
  );
};

export default GameCard;
