import React, { useContext, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Stars from 'react-native-stars';
import styles from './styles';
import { getClub } from '../../services/clubs/clubs';
import { FilterContext } from '../../context/FilterContext';

const starImage = require('assets/icons/star.png');
const starEmptyImage = require('assets/icons/star_empty.png');
const starImageGray = require('assets/icons/star_gray.png');
const starEmptyImageGray = require('assets/icons/star_empty_gray.png');

const ReviewStars = ({ count = 5, value, gray, clubId }) => {
  const {
    openReviewSheet,
    setStarCount,
    setStarClubId,
    setToggler,
  } = useContext(FilterContext);

  const clubs = useSelector(state => state.clubs.clubs.list);
  const clubStars = clubs.filter(item => item.id === clubId);

  const RenderStars = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setStarClubId(clubId);
          openReviewSheet();
          setToggler(true);
        }}
        style={styles.rateContainer}>
        <Stars
          spacing={2}
          display={
            value === null || undefined
              ? 0.1
              : clubStars.length > 0
              ? parseFloat(clubStars[0].rating)
              : value
          }
          count={count}
          starSize={18}
          backingColor={'transparent'}
          fullStar={gray ? starImageGray : starImage}
          emptyStar={gray ? starEmptyImageGray : starEmptyImage}
        />
      </TouchableOpacity>
    );
  };
  //clubStars[0].rating
  return <RenderStars />;
};

export default ReviewStars;
