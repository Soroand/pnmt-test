const { ScaledSheet } = require('react-native-size-matters');
import colors from 'constants/colors';

const styles = ScaledSheet.create({
  container: {
    paddingTop: '25@ms',
    paddingHorizontal: '25@ms',
  },
  input: {
    marginBottom: '10@ms',
  },
  inlineInputs: {
    flex: 1,
  },
  dateInput: {
    marginRight: '10@ms',
  },
});

export default styles;
