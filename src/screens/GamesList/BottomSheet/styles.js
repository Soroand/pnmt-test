import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../constants/colors';
import DeviceInfo from 'react-native-device-info';
const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  bottomSheet: {
    height: '100%',
    paddingHorizontal: '25@ms',
    paddingTop: '20@ms',
    backgroundColor: colors.white,
  },
  bottomSheetPlayerCountContainer: {
    marginTop: '20@ms',
    marginBottom: '30@ms',
    justifyContent: 'space-around',
  },
  bottomSheetPlayerCount: {
    width: width <= 375 ? 60 : 70,
    height: width <= 375 ? 60 : 70,
    borderRadius: 100,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetPlayerCount__active: {
    borderColor: colors.lightBlue,
  },
  bottomSheetPlayerCountText: {
    fontWeight: '500',
    fontSize: '30@ms',
    lineHeight: '36@ms',
  },
  bottomSheetPlayerCountText__active: {
    color: colors.lightBlue,
  },
  bottomSheetHeader: {
    marginBottom: '30@ms',
  },
  bottomSheetHeaderRight: {
    opacity: 0,
  },

  bottomSheetLocation: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: '10@ms',
    paddingLeft: '25@ms',
    paddingVertical: '12@ms',
    marginBottom: '20@ms',
  },
  bottomSheetGeoIcon: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 10,
  },
  bottomSheetRecent: {
    flexGrow: 1,
    marginTop: '20@ms',
  },
  bottomSheetRecentTitle: {
    marginBottom: '7@ms',
  },
  bottomSheetRecentItem: {
    marginTop: '10@ms',
    marginLeft: '5@ms',
    marginBottom: '5@ms',
  },
  bottomSheetDone: {
    bottom: 10,
    left: 0,
  },
  bottomButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default styles;
