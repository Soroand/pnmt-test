// @ts-check

import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Weather from '../Weather';
import { H4, BT, ST, Horizontal, Vertical, GamePlayer, MyButton } from '../';
import styles from './styles';
import colors from '../../constants/colors';
import { useSelector } from 'react-redux';
import uuid from 'react-native-uuid';

const PopularGames = ({ item, title, holesRange, navigation }) => {
  const titleClub = title.length > 27 ? `${title.substring(0, 27)}...` : title;
  const popularGame = useSelector(state => state.games.game[item.id]);

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.push('GameDetails', { id: item.id, data: popularGame })
      }>
      <View>
        <Vertical style={styles.container}>
          <H4>
            {popularGame?.date.slice(0, 2) === '13'
              ? 'Morning'
              : popularGame?.date.slice(0, 2) === '21'
              ? 'Afternoon'
              : 'Any time'}
            , {popularGame?.club.title}
          </H4>
          <Vertical>
            {item.players.map((user, index) => (
              <View
                key={uuid.v4()}
                style={{ paddingBottom: 0, borderWidth: 0 }}>
                <GamePlayer
                  id={user.id}
                  navigation={navigation}
                  avatar={user.avatar}
                  workingPosition={user.workingPosition}
                  placeOfWork={user.placeOfWork}
                  verified={user.isJobVerified}
                  nonPinmates={user.nonPinmates}
                  fullname={user.fullName}
                  age={user.age}
                  hcp={user.statistics?.hcp}
                  rounds={user.statistics?.rounds}
                  gir={user.statistics?.gir}
                />
              </View>
            ))}

            <View style={styles.line} />

            <Vertical spaceBetween>
              <Horizontal spaceBetween>
                <View>
                  <BT>{titleClub}</BT>
                  <ST style={{ opacity: 0.6 }}>Parkland</ST>
                </View>
                <MyButton
                  size="sm"
                  gradientColors={colors.blueGradient}
                  onPress={() =>
                    navigation.push('GameDetails', { id: item.id })
                  }>
                  Join the game
                </MyButton>
              </Horizontal>
              <Horizontal style={{ alignItems: 'flex-end' }} spaceBetween>
                <ST style={{ opacity: 0.6 }}>{holesRange}</ST>
                {/* <Weather temperature={40} wind={3} small /> */}
              </Horizontal>
            </Vertical>
          </Vertical>
        </Vertical>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PopularGames;
