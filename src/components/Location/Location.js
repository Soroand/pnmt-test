import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';

const GameMap = () => {
  const [location, setLocation] = useState(null);

  const initialPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => alert(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  };

  useEffect(() => {
    initialPosition();
  }, []);

  return;
};

export default GameMap;
