import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {
  Vertical,
  Horizontal,
  ReviewStars,
  MyButton,
  H2,
  BT,
  H4,
} from '../../../../../components';
import { NavigationIcon } from '../../../../../components/SvgIcons';
import colors from '../../../../../constants/colors';
import styles from '../styles';
import ServicesList from '../../../services';

const ClubInfo = ({ club, isInviteGame }) => {
  const [readMore, setReadMore] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <Vertical>
      <LinearGradient
        colors={isInviteGame ? ['#3F9952', '#9FDD51'] : ['#E9EAF9', '#E9EAF9']}
        style={styles.container}
        start={{ x: 1, y: 1 }}
        end={{ x: 0.8, y: -0.8 }}>
        <View style={styles.gameHeader}>
          <H2 color={isInviteGame ? colors.white : '#344154'}>
            {club?.title === '' ? 'No club title' : club.title}
          </H2>
        </View>
        <View style={styles.gameInformation}>
          <Text style={{ color: isInviteGame ? colors.white : '#344154' }}>
            {club &&
              `${club?.address === '' ? 'No address' : club.address}, ${
                club?.city?.title === '' ? 'No city' : club.city?.title
              } ${
                club.state === null || club.state.title === ''
                  ? ''
                  : `, ${club.state?.title}`
              }`}
          </Text>
        </View>
        <Horizontal style={styles.gameInformation}>
          {/* <ReviewStars value={club?.rating} count={5} /> */}
          {/* Пока PriceRange не реализован, выводим статическую цену */}
          <BT style={{ color: isInviteGame ? colors.white : '#344154' }}>
            {club?.priceRange.min && club?.priceRange.max
              ? `$${club.priceRange.min} to $${club.priceRange.max}`
              : 'No price info'}
          </BT>
        </Horizontal>
        <Horizontal spaceBetween style={{ marginBottom: 25, marginTop: 5 }}>
          <MyButton
            textWrapper={BT}
            type="link"
            color={isInviteGame ? colors.white : colors.lightBlue}
            onPress={() => setMoreInfo(!moreInfo)}>
            {moreInfo
              ? isInviteGame
                ? 'Hide...'
                : 'Hide'
              : isInviteGame
              ? 'Read more...'
              : 'Read more...'}
          </MyButton>
          <MyButton
            style={styles.routeButton}
            color={isInviteGame ? colors.white : colors.lightBlue}
            type="link"
            iconRight={
              <NavigationIcon
                width={14}
                height={14}
                color={isInviteGame ? colors.white : colors.lightBlue}
              />
            }
            textWrapper={BT}
            iconRightOffset={4}
            onPress={() => {}}>
            Plot a route
          </MyButton>
        </Horizontal>

        {moreInfo && (
          <View style={{ paddingBottom: 20 }}>
            <ServicesList
              services={club.services}
              isInviteGame={isInviteGame}
            />
          </View>
        )}

        {/* <Text
          numberOfLines={!readMore ? 3 : 0}
          ellipsizeMode="tail"
          style={[
            {
              color: isInviteGame ? colors.white : colors.customBlack,
              fontSize: 12,
            },
            !readMore && !isInviteGame && { color: colors.grey },
          ]}>
          At Painted Mountain's 18-hole Championship Golf Course you will enjoy
          great conditions, comfortable temperatures and excellent value.
          Offering a complete golf resort experience complete with the
          challenging 18-hole golf course, fine dining and entertainment at the
          GrandView Steak House Restaurant & Lounge, browsing in our
          well-stocked Golf Shop and shopping for golf apparel and fine fashions
          along with unique gifts and accessories in the Trends Sports Boutique.
          Experienced and beginner golfers can fine-tune their game. Painted
          Mountain is home to the John Jacobs' Golf Schools, The World Leader in
          Golf Instruction.
        </Text>
        <Horizontal style={{ marginBottom: 20, marginTop: 15 }} spaceBetween>
          <TouchableOpacity
            style={{ height: 25 }}
            onPress={() => setReadMore(!readMore)}>
            <Text
              style={{ color: isInviteGame ? colors.white : colors.lightBlue }}>
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
        </Horizontal> */}
      </LinearGradient>
    </Vertical>
  );
};

export default ClubInfo;
