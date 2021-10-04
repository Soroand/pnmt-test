import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../constants/colors';

const styles = ScaledSheet.create({
  font: {
    fontFamily: 'NeueMontreal-Regular',
    color: colors.customBlack,
  },
  h1: {
    fontWeight: '700',
    fontSize: '26@ms',
    lineHeight: '31@ms',
  },
  h2: {
    fontWeight: '500',
    fontSize: '20@ms',
    lineHeight: '24@ms',
  },
  h3: {
    fontWeight: '500',
    fontSize: '16@ms',
    lineHeight: '19@ms',
  },
  h4: {
    fontSize: '16@ms',
    lineHeight: '19@ms',
  },
  bt: {
    fontSize: '14@ms',
    lineHeight: '18@ms',
  },
  st: {
    fontSize: '12@ms',
    lineHeight: '16@ms',
  },
  ct: {
    fontSize: '10@ms',
    lineHeight: '13@ms',
  },
});

export default styles;
