// @ts-check

import React from 'react';
import { Dimensions, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import {
  MySafeAreaView,
  H1,
  H2,
  Vertical,
  Horizontal,
  BT,
  BottomContainer,
  MyButton,
} from '../../../../components';
import Carousel from 'react-native-snap-carousel';
import { MembershipProsIcon } from '../../../../components/SvgIcons';
import styles from './styles';
import membershipList from '../../../../data/mockMembership.json';
import colors from '../../../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

const Membership = ({ navigation }) => {
  const sliderWidth = Dimensions.get('window').width;

  return (
    <MySafeAreaView>
      <ScrollView>
        <Vertical style={styles.container}>
          <H1>Get more advanced features</H1>
          <H2 style={styles.description}>Select plan that’s right for you</H2>
        </Vertical>
        <Carousel
          removeClippedSubviews={false}
          data={membershipList}
          sliderWidth={sliderWidth}
          itemWidth={scale(305)}
          itemHeight={scale(450)}
          sliderHeight={scale(450)}
          renderItem={({ item }) => (
            <Vertical style={styles.membershipBoxContainer}>
              <Horizontal style={styles.membershipBoxHeader}>
                <BT color={colors.lightBlue}>{item.type}</BT>
              </Horizontal>
              <Vertical alignCenter>
                <H1 style={styles.membershipBoxPrice} color={colors.lightBlue}>
                  {item.price}
                </H1>
                {item.popular && (
                  <View style={styles.membershipBoxPopular}>
                    <BT color={colors.white}>Most popular</BT>
                  </View>
                )}
              </Vertical>
              <Vertical style={styles.membershipBoxPros}>
                {item.pros.map((pros, index) => (
                  <Horizontal
                    style={styles.membershipBoxProsItem}
                    key={uuid.v4()}>
                    <MembershipProsIcon />
                    <H2 style={styles.membershipBoxProsItemText}>{pros}</H2>
                  </Horizontal>
                ))}
              </Vertical>
              <Vertical alignCenter>
                <BT style={styles.membershipBoxDescription}>{item.text}</BT>
              </Vertical>
            </Vertical>
          )}
        />
      </ScrollView>
      <BottomContainer>
        <MyButton
          gradientColors={colors.blueGradient}
          size="lg"
          onPress={() => navigation.navigate('PaymentMethodForMembersip')}>
          Continue
        </MyButton>
      </BottomContainer>
    </MySafeAreaView>
  );
};

export default Membership;
