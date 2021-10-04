/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Stars from 'react-native-stars';
import { FilterContext } from '../../context/FilterContext';
import MainButton from '../../components/MyButton/MainGameButton';
import { clubRating } from '../../services/clubRating/clubRating';
import { useSelector, useDispatch } from 'react-redux';
import { convertToFormData } from '../../services/helper';
import { getClubs } from '../../services/clubs/clubs';
import { getClub } from '../../services/clubs/clubs';
import { getClubsList } from '../../store/clubs/clubs.action';
import { getClubDetail } from '../../store/clubs/clubs.action';

const starImage = require('assets/icons/star.png');
const starEmptyImage = require('assets/icons/star_empty.png');

const RenderModal = () => {
  const {
    starCount,
    starClubId,
    bottomSheetReview,
    setStarCount,
    setToggler,
    setUpdateClubDetails,
    updateClubDetails,
  } = useContext(FilterContext);
  const initialStarCount = useSelector(state => state?.clubs?.clubs?.list);
  const userLocation = useSelector(state => state.location.location);
  const club = initialStarCount?.filter(item => item.id === starClubId);
  const dispatch = useDispatch();

  const fetchClubsList = () => {
    getClubs(userLocation.city.toLowerCase())
      .then(response => {
        let data = response.data.data;
        dispatch(getClubsList(data));
      })
      .catch(error => {});
  };

  const sendData = () => {
    const values = {
      club_id: starClubId,
      rating: starCount,
    };
    getClub(starClubId)
      .then(response => {
        getClubDetail({ starClubId, ...response.data.data });
      })
      .catch(error => {});
    clubRating(values)
      .then(response => {
        if (response.data.success) {
          alert('Thank you for your rating. We have updated it.');
          bottomSheetReview.current.snapTo(1);
          fetchClubsList();
          setUpdateClubDetails(!updateClubDetails);
        }
      })
      .catch(error => {
        alert('Something went wrong!', error);
      });
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            width: '60%',
          }}>
          <Text
            style={{
              fontSize: 28,
              textAlign: 'center',
              color: '#344154',
              marginBottom: 15,
            }}>
            You want to rate this Club
          </Text>
          <Stars
            default={starCount}
            spacing={15}
            count={5}
            starSize={34}
            update={val => {
              setStarCount(val);
            }}
            backingColor={'transparent'}
            fullStar={starImage}
            emptyStar={starEmptyImage}
          />
        </View>
        <View style={{ display: 'flex', marginTop: 15 }}>
          <MainButton
            deActivation={false}
            title="Confirm"
            fontSize={20}
            color="white"
            width={250}
            height={50}
            press={sendData}
          />
          <TouchableOpacity
            style={{
              width: 250,
              height: 45,
              alignItems: 'center',
              marginTop: 25,
            }}
            onPress={() => {
              bottomSheetReview.current.snapTo(1);
              setToggler(false);
              setStarCount(starCount);
            }}>
            <Text style={{ color: '#515BF1', fontWeight: '500' }}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
//parseInt(
// club[0].rating === null || undefined ? 0 : club[0].rating,
// ),

export default RenderModal;
