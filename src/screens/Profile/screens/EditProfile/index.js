// @ts-check

import React, { useState, useContext, useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { Platform } from 'react-native';
import { Vertical, BottomContainer, Loader } from 'components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import { updateMyProfile } from 'services/user/user';
import { getMyProfileComplete } from 'store/user/user.action';
import MainButton from 'components/MyButton/MainGameButton';
import AboutMe from './screens/about/aboutMe.js';
import Interests from './screens/Interests/interest';
import Skills from './screens/skills/skill';
import Email from './Email';
import Phone from './Phone';
import EnterPassword from './Password/enterPassword';
import ConfirmPassword from './Password/confirmPassword';
import ChangeAvatar from './Avatar';
import BirthDate from './BirthDate';
import Gender from './Gender';
import Country from './Country';
import Company from './Company';
import Position from './Position';
import Language from './screens/Languages/languages';
import { FilterContext, FilterProvider } from 'context/FilterContext';

const EditMyProfile = ({ getMyProfileComplete, navigation, route }) => {
  const myProfile = useSelector(state => state.user.myProfile);
  const dispatch = useDispatch();
  const { aboutMe, skills, languages, myInterests } = useSelector(
    state => state.profileInfo,
  );
  const [loading, setLoading] = useState(false);

  //---- AVATAR ---- //
  const [newAvatar, setNewAvatar] = useState('');

  //---- GENDER ---- //
  const [gender, setGender] = useState(myProfile?.gender);

  //---- CALENDAR ---- //
  const [date, setDate] = useState(
    new Date(
      myProfile?.birthDate === '' || null ? Date.now() : myProfile?.birthDate,
    ),
  );
  useEffect(() => {
    dispatch({ type: 'SET_LANGUAGES', payload: myProfile.languages });
    dispatch({ type: 'SET_SKILLS', payload: myProfile.skills });
    dispatch({ type: 'SET_INTERESTS', payload: myProfile.interests });
    dispatch({ type: 'SET_BIO', payload: myProfile.bio });
  }, []);
  //LANGUAGES SENT TO BACK-END AS ID SO WE SAVING ID's ONLY
  const modifiedLanguages = languages?.map(item => item.id);

  //INTERESTS SENT TO BACK-END AS ID SO WE SAVING ID's ONLY
  const modifiedInterests = myInterests?.map(item => item.id);

  return loading ? (
    <Vertical alignCenter justifyCenter style={{ height: '90%' }}>
      <Loader />
    </Vertical>
  ) : (
    <Formik
      initialValues={{
        avatar: myProfile?.avatar,
        email: myProfile.email ? myProfile.email : '',
        company: 'Google',
        position: 'Toilet cleaner',
        phone: myProfile.phone,
        password: '',
        confirmPassword: '',
        birth: date,
        gender: myProfile?.gender,
        country:
          myProfile.country?.length === 0 ? '' : myProfile.country?.title,
        gir: `${myProfile.statistics?.gir}`,
        hcp: `${myProfile.statistics?.hcp}`,
        rounds: `${myProfile.statistics?.rounds}`,
        statistics: '',
        skills: myProfile.skills,
        bio: myProfile.bio,
        languages: myProfile.languages,
        interests: myProfile.interests,
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        setLoading(true);
        updateMyProfile({
          email: values.email,
          phone: values.phone,
          company: values.company,
          position: values.position,
          birth: values.birth.toISOString().slice(0, 10),
          gender: values.gender,
          country: values.country,
          statistics: values.statistics,
          skills: skills,
          bio: aboutMe?.length == 0 ? 'no information' : aboutMe,
          languages: modifiedLanguages,
          interests: modifiedInterests,
        })
          .then(response => {
            setLoading(false);
            getMyProfileComplete(response.data.data);
            alert('Successfully changed!');
            navigation.goBack();
          })
          .catch(error => {
            setLoading(false);
            setErrors(error.response.data.data);
            alert('Something went wrong!');
          })
          .finally(() => {
            setLoading(false);
            setSubmitting(false);
          });
      }}>
      {({ values, handleChange, handleSubmit, setFieldValue }) => {
        const setVal = () => setFieldValue('birth', date);

        return (
          <>
            <ScrollView style={{ marginBottom: 50 }}>
              <KeyboardAwareScrollView>
                {/* avatar */}
                <ChangeAvatar
                  profileAvatar={myProfile?.avatar}
                  fullName={myProfile?.fullName}
                  workingPosition={myProfile?.workingPosition}
                  placeOfWork={myProfile?.placeOfWork}
                  setNewAvatar={setNewAvatar}
                  newAvatar={newAvatar}
                  myProfile={myProfile}
                />
                <Vertical style={styles.container}>
                  {/* about me */}
                  <AboutMe route={route} navigation={navigation} />

                  {/* company name */}
                  <Company handleChange={handleChange} value={values.company} />

                  {/* company position */}
                  <Position
                    handleChange={handleChange}
                    value={values.position}
                  />

                  {/* email */}
                  <Email handleChange={handleChange} value={values.email} />

                  {/* phone */}
                  <Phone
                    phone={values.phone}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />

                  {/* password */}
                  <EnterPassword
                    password={values.password}
                    handleChange={handleChange}
                  />
                  <ConfirmPassword
                    confirmPassword={values.confirmPassword}
                    handleChange={handleChange}
                  />

                  {/* birthday */}
                  <BirthDate
                    birthDate={myProfile?.birthDate}
                    birth={values?.birth}
                    setFieldValue={setFieldValue}
                    date={date}
                    setDate={setDate}
                  />

                  {/* gender */}
                  <Gender
                    gender={gender}
                    handleChange={handleChange}
                    setGender={setGender}
                    setFieldValue={setFieldValue}
                  />

                  {/* country */}
                  <Country
                    handleChange={handleChange}
                    country={values?.country}
                  />

                  {/* interests */}
                  <Language route={route} navigation={navigation} />

                  {/* skills */}
                  <Skills route={route} navigation={navigation} />

                  {/* interests */}
                  <Interests route={route} navigation={navigation} />
                </Vertical>
              </KeyboardAwareScrollView>
            </ScrollView>

            <BottomContainer>
              <MainButton
                deActivation={true}
                title="Save"
                fontSize={20}
                color="white"
                press={() => {
                  handleSubmit(), setVal();
                }}
              />
            </BottomContainer>
          </>
        );
      }}
    </Formik>
  );
};

const EditProfile = ({ getMyProfileComplete, navigation, route }) => {
  return (
    <FilterProvider>
      <EditMyProfile
        getMyProfileComplete={getMyProfileComplete}
        navigation={navigation}
        route={route}
      />
    </FilterProvider>
  );
};

export default connect(
  null,
  { getMyProfileComplete },
)(EditProfile);
