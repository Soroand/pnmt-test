import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { BottomContainer } from 'components';
import MainButton from 'components/MyButton/MainGameButton';
import Delete from 'components/SvgIcons/SkillsBtn/delete';
import uuid from 'react-native-uuid';

const Languages = () => {
  const myProfile = useSelector(state => state.user.myProfile);
  const languages = useSelector(state => state.profileInfo.languages);

  const [myList, setMyList] = useState(languages);

  //FILTER OUT REMAINING LANGUAGES THAT WE CAN CHOOSE FROM
  const [list, setList] = useState(
    myProfile.languagesList.filter(function(e) {
      return this.indexOf(parseInt(e.id)) < 0;
    }, myList.map(item => item.id)),
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log('myprofile from outside', myProfile?.languages);
  console.log('from inside', languages);
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>
            {/* CURRENT LANGUAGES */}
            <View style={styles.my_services_container}>
              {myList.length == 0 ? (
                <Text style={{ color: '#344154' }}>No languages</Text>
              ) : (
                myList.map((item, idx) => (
                  <View style={styles.my_service} key={uuid.v4()}>
                    <Text style={styles.my_services_item}>{item.title}</Text>
                    <TouchableOpacity
                      style={styles.services_close}
                      onPress={() => {
                        myList.splice(idx, 1);
                        setMyList([...myList]);
                        list.push(item);
                        setList([...list]);
                      }}>
                      <Delete width="10" height="10" />
                    </TouchableOpacity>
                  </View>
                ))
              )}
            </View>

            {/* LANGUAGES TO CHOOSE FROM */}
            <View style={styles.services_container}>
              {list.map((item, idx) => {
                return (
                  <TouchableOpacity
                    style={styles.service}
                    key={uuid.v4()}
                    onPress={() => {
                      myList.length < 10
                        ? (setMyList([...myList, item]),
                          list.splice(idx, 1),
                          setList([...list]))
                        : alert('Cannot add more than 10 items');
                    }}>
                    <Text style={styles.services_item}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* MAIN APPLY BUTTON */}
      <BottomContainer>
        <MainButton
          deActivation={true}
          title="Apply"
          fontSize={20}
          color="white"
          press={() => {
            dispatch({ type: 'SET_LANGUAGES', payload: myList }),
              Alert.alert('Notification', 'Do not forget to save changes!'),
              navigation.goBack();
          }}
        />
      </BottomContainer>
    </>
  );
};

export default Languages;

const styles = StyleSheet.create({
  services_container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderRadius: 17.5,
    marginRight: 5,
    marginBottom: 15,
  },
  services_item: {
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
    opacity: 0.4,
  },
  my_services_container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(52, 65, 84, 0.1)',
    paddingBottom: 10,
  },
  my_service: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(81, 91, 241, 0.1)',
    borderRadius: 17.5,
    marginRight: 5,
    marginBottom: 15,
  },
  my_services_item: {
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
  },
  services_close: {
    marginLeft: 4,
    marginTop: 1,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interests_info: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interests_info_text: {
    color: '#838B97',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
  interests_info_count: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#0CBA52',
    borderRadius: 50,
  },
  interests_info_count_text: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#0CBA52',
  },
  defaultBtn: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 15,
    marginBottom: 25,
    fontWeight: '400',
  },
  activeBtn: {
    color: '#515BF1',
  },
  disabledBtn: {
    color: '#C4C4C4',
  },
  addskill: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(52, 65, 84, 0.1)',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 2,
    paddingLeft: 20,
    color: '#344154',
  },
  container: {
    paddingHorizontal: 25,
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
  },
});
