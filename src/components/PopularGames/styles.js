import { ScaledSheet } from 'react-native-size-matters';
import colors from 'constants/colors';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    borderRadius: 5,
    marginBottom: '15@ms',
    marginTop: '5@ms',
    paddingVertical: '15@ms',
    paddingHorizontal: '20@ms',
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.customBlack,
    marginTop: '10@ms',
    marginBottom: '15@ms',
    opacity: 0.1,
  },
});

export default styles;
