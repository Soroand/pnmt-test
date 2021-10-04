import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import GameType from './GameType';
import CourseCityMap from './Course.city';
import Courses from './Courses';
import DateTime from './DateTime';
import CountPlayer from './CountPlayer';
import SearchFriends from './SearchFriends';
import Comment from './Comment';
import InviteSheet from './inviteSheet';

import { getClub } from 'services/clubs/clubs';
import { createGame } from 'services/games/games';
import { convertToFormData } from 'services/helper';
import { getClubDetail } from 'store/clubs/clubs.action';
import { addGameMyProfile } from 'store/user/user.action';

import { Loader } from 'components';
import MainButton from 'components/MyButton/MainGameButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Message from 'components/ModalMessages/Message';

import styles from './styles';

const CreateGame = ({ route, addGameMyProfile, getClubDetail }) => {
  const idClub = route.params?.idClub ? route.params.idClub : null;
  const selectedClub = useSelector(state => state.clubs.club[idClub]);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // true - open, false - closed
  const [selectedField, setSelectedField] = useState(
    selectedClub?.fields[0].id,
  );
  const [dateTime, setDateTime] = useState(null);
  const [countPlayer, setCountPlayer] = useState(1);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const searchFriendsRef = useRef(null);
  const fall = useRef(new Animated.Value(1)).current;
  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const [untouchable, setUntouchable] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (!selectedClub) {
      getClub(idClub)
        .then(response => {
          getClubDetail({ id: idClub, ...response.data.data });
        })
        .catch(error => console.log(error));
    }
  }, [getClubDetail, idClub, selectedClub]);

  const openBottomSheet = () => {
    searchFriendsRef.current.snapTo(0);
  };

  const closeBottomSheet = () => {
    searchFriendsRef.current.snapTo(1);
  };

  const bottomSheetOpen = () => {
    setUntouchable(true);
  };

  const bottomSheetClose = () => {
    setUntouchable(false);
  };

  const onSubmitForm = (values, { setSubmitting, setErrors }) => {
    setLoading(true);
    createGame(convertToFormData(values))
      .then(response => {
        if (response.data.success) {
          setLoading(false);
          addGameMyProfile({ game: response.data.data, isCreatetedGame: true });
          alert('The game was successfully created!');
          navigation.navigate('GamesMain');
        }
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
  };

  return typeof selectedClub === 'undefined' || loading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Loader />
    </View>
  ) : (
    <Formik
      initialValues={{
        isOpen: isOpen,
        idClub: idClub,
        fieldId: selectedField,
        date: dateTime,
        countPlayers: countPlayer,
        selectedFriends: selectedFriends.map(i => i.id).join(),
        comment: comment,
      }}
      onSubmit={onSubmitForm}>
      {({ handleSubmit, setFieldValue }) => (
        <>
          <KeyboardAwareScrollView
            extraHeight={Platform.OS === 'ios' ? 350 : 240}
            enableOnAndroid={true}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 47 : 50}
            scrollEnabled={!untouchable}>
            <View
              pointerEvents={untouchable ? 'none' : 'auto'}
              style={styles.container}>
              <GameType
                isOpen={isOpen}
                setIsOpen={value => {
                  setIsOpen(value);
                  setFieldValue('isOpen', value);
                }}
              />
              <CourseCityMap selectedClub={selectedClub} />
              <Courses
                selectedClub={selectedClub}
                selectedField={selectedField}
                setSelectedField={value => {
                  setSelectedField(value);
                  setFieldValue('date', value);
                }}
              />
              <DateTime
                setDateTime={value => {
                  setDateTime(value);
                  setFieldValue('date', value);
                }}
              />
              <CountPlayer
                countPlayer={countPlayer}
                setCountPlayer={value => {
                  setCountPlayer(value);
                  setFieldValue('countPlayers', value);
                }}
              />
              <SearchFriends
                openBottomSheet={openBottomSheet}
                selectedFriends={selectedFriends}
              />
              <Comment
                comment={comment}
                setComment={value => {
                  setComment(value);
                  setFieldValue('comment', value);
                }}
              />
              <View style={styles.createGameContainer}>
                <MainButton
                  deActivation={true}
                  size={40}
                  fontSize={20}
                  color="white"
                  press={() => {
                    if (isOpen === false && selectedFriends?.length === 0) {
                      setIsVisible(true);
                    } else {
                      handleSubmit();
                    }
                  }}
                  title="Create a game"
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
          <Message
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            fullScreen={true}
            bgOpacity={0.2}
            customeStyles={{ bottom: '50%' }}>
            For closed type games You should invite your friends. At least one.
          </Message>
          <BottomSheet
            ref={searchFriendsRef}
            initialSnap={1}
            onOpenStart={bottomSheetOpen}
            onCloseEnd={bottomSheetClose}
            callbackNode={fall}
            borderRadius={20}
            snapPoints={['85%', 0]}
            renderContent={() => (
              <InviteSheet
                closeBottomSheet={closeBottomSheet}
                countPlayer={countPlayer}
                selectedFriends={selectedFriends}
                setSelectedFriends={value => {
                  setSelectedFriends(value);
                  setFieldValue('selectedFriends', value.map(i => i.id).join());
                }}
              />
            )}
          />
          <Animated.View
            pointerEvents="none"
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#000',
                opacity: animatedShadowOpacity,
              },
            ]}
          />
        </>
      )}
    </Formik>
  );
};

export default connect(
  null,
  { addGameMyProfile, getClubDetail },
)(CreateGame);
