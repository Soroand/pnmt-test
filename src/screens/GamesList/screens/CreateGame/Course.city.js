import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BT, H2, CT, H3 } from '../../../../components/Typography';
import { Horizontal, Vertical } from '../../../../components/FlexDirections';
import { MyButton } from '../../../../components';
import { GeoIcon } from '../../../../components/SvgIcons';
import colors from '../../../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ReviewStars from '../../../../components/ReviewStars';
import GameMap from '../../../../components/Map/GameMap';

import ServicesList from '../../services';

const CourseCityMap = ({ selectedClub }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <View style={styles.containerPadding}>
      <BT style={styles.title} color={colors.grey}>
        Course, city
      </BT>
      <View>
        {selectedClub && (
          <Horizontal style={styles.titleClub}>
            <View style={styles.icon}>
              <GeoIcon color={colors.customBlack} width={14} height={14} />
            </View>
            <H3 numberOfLines={1}>
              {selectedClub.title}, {selectedClub.city.title}
            </H3>
          </Horizontal>
        )}
      </View>

      <Vertical style={styles.mainContentWrap}>
        <Image
          style={styles.golfImage}
          source={
            !selectedClub?.images[0]
              ? require('../../../../assets/images/noImgClub.png')
              : { uri: selectedClub.images[0] }
          }
          resizeMode="cover"
        />
        <Vertical style={styles.infoContainer}>
          <H2 style={styles.name}>{selectedClub?.title}</H2>
          <BT style={styles.adress}>{selectedClub?.address}</BT>
          <Horizontal>
            {/* <ReviewStars value={selectedClub?.rating} /> */}
            <CT style={styles.holesAndPrice}>
              {`${selectedClub?.fields[0].holes} holes · $19 to $55`}
            </CT>
          </Horizontal>
          {/* <Text
            style={[
              styles.descriptionStyle,
              !moreInfo
                ? { color: colors.grey }
                : { color: colors.customBlack },
            ]}
            numberOfLines={!moreInfo ? 3 : 0}>
            At Painted Mountain's 18-hole Championship Golf Course you will
            enjoy great conditions, comfortable temperatures and excellent
            value. Offering a complete golf resort
          </Text> */}

          <View style={{ paddingTop: 10, paddingBottom: 20 }}>
            <MyButton
              textWrapper={BT}
              type="link"
              color={colors.lightBlue}
              onPress={() => setMoreInfo(!moreInfo)}>
              {moreInfo ? 'Hide' : 'More info'}
            </MyButton>
          </View>
          {moreInfo && <ServicesList services={selectedClub.services} />}
        </Vertical>
        {/* <GameMap /> */}
      </Vertical>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 25,
  },
  titleClub: {
    borderWidth: 1,
    padding: 15,
    borderColor: '#D4D4D4',
    borderRadius: 2,
    paddingRight: 25,
    paddingLeft: 10,
  },
  icon: {
    paddingRight: 2,
  },
  moreInfo: {
    fontSize: 16,
    color: '#344154',
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.customBlack,
    marginTop: 20,
    marginBottom: 10,
    opacity: 0.1,
  },
  optionHeader: {
    fontWeight: 'normal',
    marginTop: 15,
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    marginTop: 25,
  },
  mainContentWrap: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: colors.disabledButton,
    borderRadius: 2,
  },
  infoContainer: {
    paddingHorizontal: 10,
    // backgroundColor: '#F1F2F9',
  },
  name: {
    marginTop: 15,
    marginBottom: 10,
    color: colors.customBlack,
  },
  adress: {
    marginBottom: 10,
  },
  holesAndPrice: {
    fontSize: 13,
    // marginLeft: 7,
  },

  golfImage: {
    width: '100%',
    height: 100,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
  descriptionStyle: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 15,
  },
});

export default CourseCityMap;
