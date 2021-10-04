import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { date } from 'yup';
import Carousel from '../../../../components/Carousel/index';

const BookedGame = ({ navigation, route }) => {
  const { name, time, price } = route.params.clubInfo;
  console.log(
    '🚀 ~ file: BookedGame.js ~ line 8 ~ BookedGame ~ route.params.clubInfo',
    route.params.clubInfo,
  );
  const images = [
    {
      uri:
        'https://golf.com/wp-content/uploads/2020/03/GettyImages-1195470295-2-1024x576.jpg',
    },
    {
      uri:
        'https://golf.com/wp-content/uploads/2020/03/GettyImages-1195470295-2-1024x576.jpg',
    },
  ];

  return (
    <View>
      <Carousel images={images} />
      <View style={styles.clubCard}>
        <View style={styles.wrapper}>
          <Text style={styles.h1}>{name}</Text>
          <Text style={styles.h2}>
            24 Aug, {time}, {price}
          </Text>
          <Text>Los Angeles, California, 250 Capri Dr, Pacific Palisades</Text>
          <Text style={{ color: 'blue', marginTop: 10 }}>Plot a route</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    width: '80%',
  },
  clubCard: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgba(192,192,192,0.3)',
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  back: {
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default BookedGame;
