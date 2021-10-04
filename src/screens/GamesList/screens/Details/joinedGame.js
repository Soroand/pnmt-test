// @ts-check

import React from 'react';
import {
  MyButton,
  Vertical,
  H1,
  H2,
  H4,
  BottomContainer,
} from '../../../../components';
import { SafeAreaView, View } from 'react-native';
import colors from '../../../../constants/colors';
import GolfPin from '../../../../assets/icons/golfPin';
import CreditPlus from '../../../../components/SvgIcons/Opportunities/creditPlus';

const joinedGame = ({ navigation }) => {
  return (
    <>
      <Vertical
        style={{ height: '100%', flex: 1, justifyContent: 'space-between' }}>
        <SafeAreaView>
          <Vertical
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 25,
              paddingTop: '25%',
            }}>
            <GolfPin style={{ marginBottom: 50 }} />
            <View>
              <H1 color={colors.customBlack}>You joined the game!</H1>

              <H2 color={colors.customBlack}>
                Congratulations, you are in the game. We will send you a
                notification one hour before
              </H2>
            </View>
            {/* <MyButton
              style={{ marginTop: 30 }}
              color={colors.lightBlue}
              type="link"
              onPress={() => {}}
              textWrapper={H4}>
              <CreditPlus /> Add to calendar
            </MyButton> */}
          </Vertical>
        </SafeAreaView>

        <BottomContainer>
          <MyButton
            size="lg"
            gradientColors={colors.blueGradient}
            onPress={() => {
              navigation.navigate('MyGames');
            }}>
            Go to my games
          </MyButton>
        </BottomContainer>
      </Vertical>
    </>
  );
};

export default joinedGame;
