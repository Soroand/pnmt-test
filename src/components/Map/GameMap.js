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
      { enableHighAccuracy: false, timeout: 3600000, maximumAge: 1000 },
    );
  };

  useEffect(() => {
    initialPosition();
  }, []);

  return (
    <>
      {location && (
        <View>
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.013,
                longitudeDelta: 0.01,
              }}>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}>
                <Callout>
                  <Text>Birch Ridge Golf Course</Text>
                </Callout>
              </Marker>
            </MapView>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 325,
  },
});

export default GameMap;
