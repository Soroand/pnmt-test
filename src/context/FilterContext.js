import React, { createContext, useState, useRef } from 'react';

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [players, setPlayers] = useState(1);
  const [location, setLocation] = useState('');
  const [gamesFilter, setGamesFilter] = useState('');
  const [clubsFilter, setClubsFilter] = useState('');
  const [starCount, setStarCount] = useState(3);
  const [starClubId, setStarClubId] = useState();
  const [updateClubDetails, setUpdateClubDetails] = useState(false);
  const [toggler, setToggler] = useState(false);
  const bottomSheetDate = useRef(null);
  const bottomSheetLocation = useRef(null);
  const bottomSheetReview = useRef(null);
  const sheetRef = useRef(null);

  const openDateBottomSheet = () => {
    bottomSheetDate.current.snapTo(0);
  };
  const openLocationBottomSheet = () => {
    bottomSheetLocation.current.snapTo(0);
  };
  const openReviewSheet = () => {
    bottomSheetReview.current.snapTo(0);
  };
  const openMyGamesSheet = () => {
    sheetRef.current.snapTo(0);
  };

  return (
    <FilterContext.Provider
      value={{
        date,
        setDate,
        players,
        setPlayers,
        location,
        setLocation,
        gamesFilter,
        clubsFilter,
        setClubsFilter,
        setGamesFilter,
        bottomSheetDate,
        bottomSheetLocation,
        openDateBottomSheet,
        openLocationBottomSheet,
        openReviewSheet,
        bottomSheetReview,
        setStarCount,
        starCount,
        setStarClubId,
        starClubId,
        toggler,
        setToggler,
        sheetRef,
        openMyGamesSheet,
        updateClubDetails,
        setUpdateClubDetails,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
