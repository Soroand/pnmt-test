import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import uuid from 'react-native-uuid';

const InfoCard = () => {
  const myProfile = useSelector(state => state.user.myProfile);

  return (
    myProfile && (
      <View style={styles.card_container}>
        <Text style={styles.card_aboutMe_title}>ABOUT ME</Text>
        <Text style={styles.card_aboutMe_text}>{myProfile?.bio}</Text>
        <View style={styles.card_country_container}>
          <Text style={styles.card_title}>COUNTRY</Text>
          <View style={styles.country_object}>
            <Text style={styles.country_text}>
              {myProfile.country?.title || 'Unknown'}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.main_title}>
            <Text style={styles.card_title}>LANGUAGES</Text>
            <View style={styles.card_circle}>
              <Text style={styles.card_circle_text}>
                {myProfile.languages?.length || 0}
              </Text>
            </View>
          </View>
          {myProfile?.languages?.length !== 0 && (
            <Text style={styles.languages_item}>
              {myProfile?.languages?.map((item, index) => {
                return index !== myProfile?.languages?.length - 1
                  ? item.title + ' · '
                  : item.title;
              })}
            </Text>
          )}
        </View>
        <View>
          <View style={styles.main_title}>
            <Text style={styles.card_title}>PROFESSIONAL SKILLS</Text>
            <View style={styles.card_circle}>
              <Text style={styles.card_circle_text}>
                {myProfile?.skills?.length || 0}
              </Text>
            </View>
          </View>
          <View style={styles.servicesContainer}>
            {myProfile?.skills?.map((item, idx) => (
              <View style={styles.service} key={uuid.v4()}>
                <Text style={styles.services_item}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <View style={styles.main_title}>
            <Text style={styles.card_title}>INTERESTS</Text>
            <View style={styles.card_circle}>
              <Text style={styles.card_circle_text}>
                {myProfile?.interests?.length || 0}
              </Text>
            </View>
          </View>
          <View style={styles.interests_container}>
            {myProfile?.interests?.map((item, idx) => (
              <View key={uuid.v4()} style={styles.interests_item_wrap}>
                <Text style={styles.interests_item}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  card_container: {
    width: '100%',
    marginTop: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    // shadowRadius: 10,
    elevation: 5,
  },
  card_aboutMe_title: {
    color: '#344154',
    opacity: 0.5,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  card_title: {
    color: '#344154',
    opacity: 0.5,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  card_aboutMe_text: {
    marginTop: 10,
    color: '#344154',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
  card_country_container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  country_object: {
    marginLeft: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#515BF1',
  },
  country_text: {
    color: '#515BF1',
  },
  main_title: {
    marginTop: 20,
    flexDirection: 'row',
  },
  card_circle: {
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: '#0CBA52',
    width: 16,
    height: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  card_circle_text: {
    fontSize: 10,
    lineHeight: 13,
    color: '#0CBA52',
  },
  languages_item: {
    marginTop: 10,
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(81, 91, 241, 0.1)',
    borderRadius: 17.5,
    marginRight: 5,
    marginTop: 10,
  },
  services_item: {
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  servicesContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interests_container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  interests_item: {
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  interests_item_wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(81, 91, 241, 0.1)',
    borderRadius: 17.5,
    marginRight: 5,
    marginBottom: 10,
  },
});

export default InfoCard;
