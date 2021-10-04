import DeviceInfo from 'react-native-device-info';
import { phonesLib } from './devices';
import { Dimensions, Platform } from 'react-native';

export function getThePhone(model) {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const filterPhone = phonesLib.filter(
    item => item.phoneName.toLowerCase() === model,
  );
  const defaultPhone = [
    {
      phoneName: 'default',
      sizesTwo: 35,
      sizesThree: 88,
      sizesFour: screenHeight - 70,
      left: screenWidth / 2 - 32.5,
    },
  ];
  const androidPhone700 = [
    {
      phoneName: 'android700',
      left: screenWidth / 2 - 32.5,
      sizesTwo: 40,
      sizesThree: 93,
      sizesFour: screenHeight - 70,
    },
  ];
  const androidPhone600 = [
    {
      phoneName: 'android600',
      left: screenWidth / 2 - 32.5,
      sizesTwo: 35,
      sizesThree: 88,
      sizesFour: screenHeight - 70,
    },
  ];
  const androidPhone500 = [
    {
      phoneName: 'android500',
      left: screenWidth / 2 - 32.5,
      sizesTwo: 40,
      sizesThree: 95,
      sizesFour: screenHeight - 70,
    },
  ];
  const thePhone =
    Platform.OS === 'ios'
      ? filterPhone.length !== 0
        ? filterPhone
        : defaultPhone
      : screenHeight > 700
      ? androidPhone700
      : screenHeight > 600
      ? androidPhone600
      : androidPhone500;
  return thePhone;
}
