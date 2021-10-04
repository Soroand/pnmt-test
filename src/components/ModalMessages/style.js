import { ScaledSheet } from 'react-native-size-matters';
import colors from 'constants/colors';
import { width } from '../../constants/dimentions';

const styles = ScaledSheet.create({
  message: {
    position: 'absolute',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: 5,

    marginHorizontal: '20@ms',
    marginBottom: '20@ms',
    paddingLeft: '20@ms',
    paddingRight: '25@ms',
    paddingTop: '15@ms',
    paddingBottom: '20@ms',
    alignSelf: 'center',
  },
  closeBtn: {
    position: 'absolute',
    right: '0@ms',
    top: '0@ms',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10@ms',
  },
});

export default styles;
