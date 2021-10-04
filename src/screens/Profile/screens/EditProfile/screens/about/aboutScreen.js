import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { BottomContainer } from '../../../../../../components';
import { Formik } from 'formik';
import MainButton from '../../../../../../components/MyButton/MainGameButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { createStringLiteral } from 'typescript';

const InterestsScreen = () => {
  const aboutMe = useSelector(state => state.profileInfo.aboutMe);
  const maBio = useSelector(state => state.user.myProfile).bio;
  const [bioText, setBioText] = useState(maBio);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>
            <Text style={styles.wordCount}>{bioText?.length}/500</Text>
            <TextInput
              multiline={true}
              variant="default"
              style={styles.input}
              value={bioText}
              onChangeText={item => {
                item.length <= 500 && setBioText(item);
              }}
              placeholder="Enter skill name"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <BottomContainer>
        <MainButton
          deActivation={true}
          title="Apply"
          fontSize={20}
          color="white"
          press={() => {
            dispatch({ type: 'SET_BIO', payload: bioText }),
              Alert.alert('Notification', 'Do not forget to save changes!'),
              navigation.goBack();
          }}
        />
      </BottomContainer>
    </>
  );
};

export default InterestsScreen;

const styles = StyleSheet.create({
  servicesContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
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
    marginBottom: 15,
  },
  services_item: {
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
  },
  wordCount: {
    color: '#838B97',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 5,
    width: '100%',
    textAlign: 'right',
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
    backgroundColor: '#F5F5F5',
    borderRadius: 2,
    paddingLeft: 20,
    color: '#344154',
    paddingTop: 20,
    paddingBottom: 20,
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
