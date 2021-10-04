import React, { useState } from 'react';
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
import { BottomContainer } from 'components';
import MainButton from 'components/MyButton/MainGameButton';
import Delete from 'components/SvgIcons/SkillsBtn/delete';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const Skills = () => {
  const skills = useSelector(state => state.profileInfo.skills);
  const [field, setField] = useState('');
  const [skillsList, setSkillsList] = useState(skills);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>
            {/* INPUT FIELD */}
            <TextInput
              variant="default"
              style={styles.input}
              value={field}
              onChangeText={item => setField(item)}
              placeholder="Enter skill name"
            />

            {/* ADD SKILL BUTTON */}
            <View style={styles.addskill}>
              {field !== '' ? (
                <TouchableOpacity
                  onPress={() => {
                    setSkillsList([...skillsList, field]);
                    setField('');
                  }}>
                  <Text style={[styles.defaultBtn, styles.activeBtn]}>
                    Add skill
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text style={[styles.defaultBtn, styles.disabledBtn]}>
                  Add skill
                </Text>
              )}
            </View>

            {/* SKILLS LIST TO DISPLAY */}
            <View style={styles.servicesContainer}>
              {skillsList?.map((item, idx) => (
                <View style={styles.service} key={uuid.v4()}>
                  <Text style={styles.services_item}>{item}</Text>
                  <TouchableOpacity
                    style={{
                      marginLeft: 4,
                      marginTop: 1,
                      width: 15,
                      height: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      skillsList.splice(idx, 1);
                      setSkillsList([...skillsList]);
                    }}>
                    <Delete width="10" height="10" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* MAIN BUTTON TO APPLY CHANGES */}
      <BottomContainer>
        <MainButton
          deActivation={true}
          title="Apply"
          fontSize={20}
          color="white"
          press={() => {
            dispatch({ type: 'SET_SKILLS', payload: skillsList }),
              Alert.alert('Notification', 'Do not forget to save changes!'),
              navigation.goBack();
          }}
        />
      </BottomContainer>
    </>
  );
};

export default Skills;

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
