import React from 'react';
import { Text, Image } from 'react-native';
import { Vertical } from '../../../components';
import styles from '../styles';

const GoPro = () => (
  <Vertical alignCenter style={{ marginBottom: 50 }}>
    <Image
      source={require('../../../assets/images/comingSoon.png')}
      style={{
        width: 270,
        height: 400,
        resizeMode: 'contain',
        marginTop: 10,
      }}
    />
  </Vertical>
);

export default GoPro;
