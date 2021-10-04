import React from 'react';
import { View, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Vertical, Horizontal, H3, BT } from '../../../../../components';
import {
  PhoneIcon,
  DollarIcon,
  ClockIcon,
  WebIcon,
  ForwardArrow,
} from '../../../../../components/SvgIcons';
import colors from '../../../../../constants/colors';
import styles from '../styles';

const GameInfo = ({ game, navigation }) => {
  let gameDate = '';
  const { date, comment, club } = game;

  if (date) {
    const dates = date.slice(0, 10);
    const hours = date.slice(11, 16);
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

  return club ? (
    <Vertical style={{ marginTop: 20 }}>
      {/* Дата игры */}
      <View>
        <BT style={styles.titles}>Date</BT>
        <Text style={styles.innerText}>{gameDate}</Text>
      </View>

      {/* Коммент который оставил создатель игры */}
      <View style={{ marginTop: 30 }}>
        <BT style={styles.titles}>Comment</BT>
        <Text style={styles.innerText}>{comment ? comment : 'No comment'}</Text>
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
          <TouchableOpacity
            onPress={() => club.phone && Linking.openURL(`tel:${club.phone}`)}>
            <Text style={club.phone ? styles.phoneText : styles.detailText}>
              {club.phone ? club.phone : 'no phone'}
            </Text>
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
            {club.priceRange.min && club.priceRange.max
              ? `$${club.priceRange.min} to $${club.priceRange.max}`
              : 'no price info'}
          </Text>
        </Option>
        {/* <Option
          title="Hours"
          icon={() => <ClockIcon width={14} height={14} viewBox="0 0 11 11" />}>
          <Text style={styles.detailText}>Mon-Fri 6:00 am — 11:00 pm</Text>
          <Text style={styles.detailText}>Sat-Sun 6:00 am — 12:00 pm</Text>
        </Option> */}
        <Option
          title="Website"
          icon={() => <WebIcon width={14} height={14} viewBox="0 0 14 14" />}>
          <TouchableOpacity
            onPress={() => club.website && Linking.openURL(club.website)}>
            <Text
              style={[
                styles.detailText,
                club.website && { color: colors.darkBlue },
              ]}>
              {club.website ? club.website : 'No Website info'}
            </Text>
          </TouchableOpacity>
        </Option>

        <Horizontal style={{ marginTop: 15 }}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 25,
            }}
            onPress={() => navigation.push('ClubDetails', { id: club.id })}>
            <Horizontal>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: '#515BF1',
                  fontSize: 16,
                  marginRight: 3,
                  marginBottom: 3,
                }}>
                More info
              </Text>
              <ForwardArrow />
            </Horizontal>
          </TouchableOpacity>
        </Horizontal>
      </View>
    </Vertical>
  ) : (
    <Text />
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

export default GameInfo;
