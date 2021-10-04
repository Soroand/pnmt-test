import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';

const styles = ScaledSheet.create({
  createGameContainer: {
    marginTop: Platform.OS === 'ios' ? (DeviceInfo.hasNotch() ? 10 : 10) : 10,
    marginBottom: Platform.OS === 'ios' ? (DeviceInfo.hasNotch() ? 5 : 10) : 0,
    paddingHorizontal: '25@ms',
  },
  container: {
    backgroundColor: colors.mainBackground,
    paddingTop: '20@ms',
    paddingBottom: '30@ms',
  },
  containerPadding: {
    paddingHorizontal: '25@ms',
  },
});

export default styles;
