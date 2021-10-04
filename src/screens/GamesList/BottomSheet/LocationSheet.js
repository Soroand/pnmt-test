/* eslint-disable react-native/no-inline-styles */
// @ts-check

import React, { useContext, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Vertical,
  Horizontal,
  MyButton,
  H3,
  H4,
  Divider,
} from '../../../components';
import { GeoIcon, LocationIcon } from '../../../components/SvgIcons';
import styles from './styles';
import colors from '../../../constants/colors';
import { FilterContext } from '../../../context/FilterContext';
import { getGamesList } from '../../../store/games/games.action';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { filterCity } from '../../../store/searchCity/search.action';
import { clearCity } from '../../../store/searchCity/search.action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { onChange, Value } from 'react-native-reanimated';
import uuid from 'react-native-uuid';

// import { getLocation } from '../../../store/location/location.action';

const LocationSheet = ({
  getLocation,
  initialPosition,
  getClubsList,
  getGamesList,
  openTabBar,
}) => {
  const { bottomSheetLocation } = useContext(FilterContext);
  const location = useSelector(state => state.location.location.city);
  const filteredCity = useSelector(state => state.filter.filter.city);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState('');
  const closeBottomSheetLocation = () => bottomSheetLocation.current.snapTo(1);
  navigator.geolocation = require('@react-native-community/geolocation');

  const ref = useRef();
  useEffect(() => {
    ref.current?.setAddressText(currentLocation);
  });

  return (
    <Vertical style={styles.bottomSheet}>
      <Horizontal style={styles.bottomSheetHeader} spaceBetween>
        <MyButton
          type="link"
          color={colors.customBlack}
          onPress={() => {
            closeBottomSheetLocation();
            Keyboard.dismiss();
          }}>
          Cancel
        </MyButton>
        <H3>Select location</H3>
        <View style={{ opacity: 0 }}>
          <Text>cancel</Text>
        </View>
      </Horizontal>
      <Horizontal style={{ position: 'relative', paddingBottom: 15 }}>
        <GooglePlacesAutocomplete
          ref={ref}
          placeholder={
            currentLocation === '' ? location?.trim() : currentLocation
          }
          query={{
            key: 'AIzaSyBDioz0BMOVIBbt8J8UwLo4kojcC7LqTL4',
            language: 'en',
          }}
          onPress={value => setCurrentLocation(value?.description?.split(',').[0])}
          nearbyPlacesAPI="GooglePlacesSearch"
          minLength={2}
          styles={{
            textInput: {
              flex: 1,
              borderRadius: 2,
              backgroundColor: '#F5F5F5',
            },
          }}

          enablePoweredByContainer={false}
          textInputProps={{
            clearButtonMode: 'never',
          }}
          renderRightButton={() => (
            <TouchableOpacity
              onPress={() => ref.current?.clear()}
              style={{ position: 'absolute', top: 12, right: 12 }}>
              <Text style={{ color: '#344154' }}>Clear</Text>
            </TouchableOpacity>
          )}
        />
      </Horizontal>

      <MyButton
        iconLeft={
          <LocationIcon width={14} height={12} color={colors.lightBlue} />
        }
        iconLeftOffset={4}
        onPress={() => {
          initialPosition();
          closeBottomSheetLocation();
          getClubsList(null);
          getGamesList(null);
          openTabBar();
          Keyboard.dismiss();
        }}
        type="link"
        textWrapper={H3}
        color={colors.lightBlue}>
        Current location
      </MyButton>
      <Divider />
      <ScrollView>
        <Vertical style={styles.bottomSheetRecent}>
          <H4 color={colors.lightGrey} style={styles.bottomSheetRecentTitle}>
            Recent searches
          </H4>
          {filteredCity && (
            <>
              <SafeAreaView>
                <FlatList
                  data={filteredCity}
                  keyExtractor={() => uuid.v4()}
                  renderItem={item => (
                    <Vertical>
                      <TouchableOpacity
                        style={{
                          alignSelf: 'flex-start',
                          maxWidth: '100%',
                        }}
                        onPress={() => setCurrentLocation(item?.item)}>
                        <H3 style={styles.bottomSheetRecentItem}>
                          <Text>{item?.item}</Text>
                        </H3>
                      </TouchableOpacity>
                      <Divider />
                    </Vertical>
                  )}
                />
              </SafeAreaView>
              {filteredCity.length !== 0 ? (
                <View
                  style={{
                    alignItems: 'center',
                    paddingVertical: 25,
                  }}>
                  <MyButton
                    type="link"
                    color={colors.customBlack}
                    onPress={() => dispatch(clearCity())}>
                    Clear list
                  </MyButton>
                </View>
              ) : null}
            </>
          )}
        </Vertical>
      </ScrollView>
      <MyButton
        style={styles.bottomSheetDone}
        gradientColors={colors.blueGradient}
        size="lg"
        onPress={() => {
          currentLocation.trim() == ''
            ? (alert('Location cannot be empty'), setCurrentLocation(''))
            : (getLocation(currentLocation),
              dispatch(filterCity(currentLocation)),
              closeBottomSheetLocation(),
              setCurrentLocation(''),
              Keyboard.dismiss(),
              getClubsList(null),
              getGamesList(null));
          openTabBar();
        }}>
        Done
      </MyButton>
    </Vertical>
  );
};

export default LocationSheet;
