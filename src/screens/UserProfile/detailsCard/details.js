import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import ArrowUp from '../../../components/SvgIcons/UserProfile/Arrow_up';
import ArrowDown from '../../../components/SvgIcons/UserProfile/Arrow_down';
import { TouchableOpacity } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

const DetailsCard = ({ user }) => {
  const myProfile = useSelector(state => state.user.myProfile);
  const [show, setShow] = useState(true);

  const SkillsInCommon = user?.skills
    .map(item => myProfile?.skills?.filter(el => el === item))
    .flat(1).length;
  const InterestsInCommon = user?.interests
    .map(item => myProfile?.interests?.filter(el => el.id === item.id))
    .flat(1).length;

  return (
    myProfile && (
      <View style={styles.card_container}>
        <View style={styles.card_short_block}>
          <Text style={styles.card_personal_title}>Personal info</Text>
          {show ? (
            <TouchableOpacity
              onPress={() => setShow(!show)}
              style={styles.show_touchable}>
              <Text style={{ color: '#515BF1' }}>hide</Text>
              <ArrowUp style={{ marginLeft: 5 }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setShow(!show)}
              style={styles.show_touchable}>
              <Text style={{ color: '#515BF1' }}>show more</Text>
              <ArrowDown style={{ marginLeft: 5 }} />
            </TouchableOpacity>
          )}
        </View>
        {/*  BIO SECTION  */}
        <Text style={styles.card_aboutMe_title}>ABOUT ME</Text>
        {user?.bio && <Text style={styles.card_aboutMe_text}>{user?.bio}</Text>}
        {show && (
          <>
            <View style={styles.card_country_container}>
              <Text style={styles.card_title}>COUNTRY</Text>
              <View style={styles.country_object}>
                <Text style={styles.country_text}>
                  {myProfile?.country?.title || 'Unknown'}
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.main_title}>
                <Text style={styles.card_title}>LANGUAGES</Text>
                <View style={styles.card_circle}>
                  <Text style={styles.card_circle_text}>
                    {user?.languages?.length || 0}
                  </Text>
                </View>
              </View>
              {user?.languages?.length !== 0 && (
                <Text style={styles.languages_item}>
                  {user?.languages?.map((item, index) => {
                    return index !== user?.languages?.length - 1
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
                    {user?.skills?.length}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      color: '#838B97',
                      fontSize: 10,
                      lineHeight: 13,
                      fontWeight: '400',
                    }}>
                    {SkillsInCommon || 0} in common
                  </Text>
                </View>
              </View>
              <View style={styles.servicesContainer}>
                {/* LOGIC FOR SKILLS IN COMMON MISSING */}
                {user?.skills?.map((item, idx) => {
                  return (
                    <View
                      style={
                        myProfile?.skills?.filter(el => el === item).length > 0
                          ? styles.service_incommon
                          : styles.service
                      }
                      key={uuid.v4()}>
                      <Text
                        style={
                          // idx <= 2
                          //   ? styles.service_item_incommon
                          //   : styles.services_item
                          {}
                        }>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <View>
              <View style={styles.main_title}>
                <Text style={styles.card_title}>INTERESTS</Text>
                <View style={styles.card_circle}>
                  <Text style={styles.card_circle_text}>
                    {user?.interests?.length || 0}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      color: '#838B97',
                      fontSize: 10,
                      lineHeight: 13,
                      fontWeight: '400',
                    }}>
                    · {InterestsInCommon || 0} in common
                  </Text>
                </View>
              </View>
              <View style={styles.interests_container}>
                {/* LOGIC FOR INTERESTS IN COMMON MISSING */}
                {user?.interests?.map((item, idx) => {
                  return (
                    <View
                      key={uuid.v4()}
                      style={
                        myProfile?.interests?.filter(el => el.id === item.id)
                          .length > 0
                          ? styles.service_incommon
                          : styles.service
                      }>
                      <Text
                        style={
                          // idx < 2
                          //   ? styles.service_item_incommon
                          //   : styles.services_item
                          {}
                        }>
                        {item.title}
                      </Text>
                      <Image style={{ marginLeft: 5 }} source={item.icon} />
                    </View>
                  );
                })}
              </View>
            </View>
          </>
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  card_container: {
    width: '100%',
    marginVertical: 25,
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
  card_short_block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card_country_container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  show_touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  country_object: {
    marginLeft: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#515BF1',
  },
  card_personal_title: {
    color: '#838B97',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
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
  service_incommon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'transparent',
    borderRadius: 17.5,
    borderColor: '#344154',
    borderWidth: 1,
    marginRight: 5,
    marginTop: 10,
  },
  services_item_incommon: {
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
    marginTop: 10,
  },
});

export default DetailsCard;
