import React, { useState } from 'react';
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
import { BottomContainer } from '../../../../../../components';
import { Formik } from 'formik';
import MainButton from '../../../../../../components/MyButton/MainGameButton';
import Delete from '../../../../../../components/SvgIcons/SkillsBtn/delete';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Interests = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { interests, interestsList } = useSelector(
    state => state.user.myProfile,
  );
  const { myInterests } = useSelector(state => state.profileInfo);
  const [myList, setMyList] = useState(myInterests);

  //FILTER OUT REMAINING INTERESTS THAT WE CAN CHOOSE FROM
  const [list, setList] = useState(
    interestsList.filter(function(e) {
      console.log(e.id);
      return this.indexOf(parseInt(e.id)) < 0;
    }, myInterests.map(item => item.id)),
  );

  console.log(list);

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>
            {/* DISPLAYING CURRENT INTERESTS */}
            <View style={styles.my_services_container}>
              {myList.length == 0 ? (
                <Text
                  style={{
                    color: '#344154',
                  }}>
                  No interests
                </Text>
              ) : (
                myList.map((item, idx) => (
                  <View style={styles.my_service} key={uuid.v4()}>
                    <Text style={styles.my_services_item}>{item.title}</Text>
                    <Image
                      style={{
                        marginLeft: 5,
                      }}
                      source={item.icon}
                    />
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
            <View style={styles.interests_info}>
              <Text style={styles.interests_info_text}>
                Select up to 10 interests
              </Text>
              <View style={styles.interests_info_count}>
                <Text style={styles.interests_info_count_text}>
                  {myList?.length}
                  /10
                </Text>
              </View>
            </View>
            {/* DISPLAYING AVAILABLE INTERESTS */}
            <View style={styles.services_container}>
              {list.map((item, idx) => (
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
              ))}
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
            dispatch({
              type: 'SET_INTERESTS',
              payload: myList,
            }),
              Alert.alert('Notification', 'Do not forget to save changes!'),
              navigation.goBack();
          }}
        />
      </BottomContainer>
    </>
  );
};

export default Interests;

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
