// @ts-check

import React, { useState, useContext, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Vertical, ClubCard, H1, H4, Loader } from '../../../components';
import Filter from '../Filter';
import styles from './styles';
import { SpinnerIcon } from '../../../components/SvgIcons';
import { FlatList } from 'react-native-gesture-handler';
import {
  View,
  RefreshControl,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import MainButton from '../../../components/MyButton/MainGameButton';
import { FilterContext } from '../../../context/FilterContext';
import colors from '../../../constants/colors';
import uuid from 'react-native-uuid';
import { height } from '../../../constants/dimentions';

const Clubs = ({ navigation, fetchList }) => {
  const btnHeight = Dimensions.get('window').height;
  const clubsList = useSelector(state => state.clubs.clubs);
  const [refreshing, setRefreshing] = useState(false);
  const { openLocationBottomSheet } = useContext(FilterContext);
  const update = () => {
    fetchList();
    setRefreshing(false);
  };

  const RenderClubs = (item, index) => {
    return (
      <View
        style={{
          paddingBottom: clubsList?.list?.length - 1 === index ? '75%' : 0,
        }}>
        <ClubCard navigation={navigation} item={item} index={index} />
      </View>
    );
  };

  return (
    <>
      <View
        style={
          !clubsList ||
          (clubsList.list?.length === 0 && {
            backgroundColor: '#F0F3F4',
            height: 1000,
          })
        }>
        <Vertical style={styles.content}>
          {clubsList?.list && clubsList?.list?.length > 0 && (
            <FlatList
              style={{ height: '110%' }}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Filter navigation={navigation} />}
              data={clubsList.list}
              keyExtractor={() => uuid.v4()}
              renderItem={({ item, index }) => RenderClubs(item, index)}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={update} />
              }
            />
          )}
          {clubsList.list === null && (
            <Vertical alignCenter justifyCenter style={{ height: 200 }}>
              <Loader />
            </Vertical>
          )}
          {clubsList?.list?.length === 0 && (
            <>
              <ScrollView
                contentContainerStyle={{
                  height:
                    Platform.OS === 'ios'
                      ? height > 700
                        ? '100%'
                        : '107%'
                      : '115%',
                }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={update} />
                }>
                <Filter navigation={navigation} />
                <Vertical
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 60,
                  }}>
                  <Image
                    source={require('../../../assets/images/noClubs.png')}
                    style={{ borderRadius: 150 }}
                  />

                  <H1 style={styles.emptyTitle} color={'rgb(52,65,84)'}>
                    No Clubs There
                  </H1>
                  <H4 style={styles.emptyDescription} color={colors.grey}>
                    We can't find clubs in this location, please choose another
                    one
                  </H4>
                </Vertical>
              </ScrollView>
            </>
          )}
        </Vertical>
      </View>
      {clubsList?.list?.length === 0 && (
        <MainButton
          style={[
            styles.btnPadding,
            {
              position: 'absolute',
              zIndex: 50,
              elevation: 50,
              width: '100%',
              bottom:
                Platform.OS === 'ios' ? 100 : (btnHeight / 100) * 12.5 + 20,
              left: 0,
            },
          ]}
          width={'100%'}
          title="Change Location"
          fontSize={20}
          color="white"
          press={openLocationBottomSheet}
        />
      )}
    </>
  );
};

export default Clubs;
