import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import { BT } from '../../../../components/Typography';
import FieldCard from '../../../../components/FieldCard';
import colors from '../../../../constants/colors';
import uuid from 'react-native-uuid';

const CourseCityMap = ({ selectedClub, selectedField, setSelectedField }) => {
  const sliderWidth = Dimensions.get('window').width;
  return (
    selectedClub.fields.length > 1 && (
      <>
        <BT style={styles.title} color={colors.grey}>
          Select course
        </BT>
        <Carousel
          style={{ zIndex: 1, elevation: 10, borderWidth: 1 }}
          nestedScrollEnabled
          removeClippedSubviews={false}
          data={selectedClub.fields}
          sliderWidth={sliderWidth}
          itemWidth={scale(300)}
          sliderHeight={scale(450)}
          useScrollView
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedField(item.id)}
              activeOpacity={1}
              key={uuid.v4()}>
              <View>
                <FieldCard
                  fieldData={item}
                  fieldLength={selectedClub?.fields?.length}
                  selected={selectedField === item.id}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </>
    )
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 25,
    marginTop: 25,
  },
});

export default CourseCityMap;
