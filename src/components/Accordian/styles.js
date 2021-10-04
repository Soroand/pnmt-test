import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '25@ms',
    paddingTop: '20@ms',
  },
  header: {
    paddingBottom: '10@ms',
  },
  active: {
    backgroundColor: '#E7E8F7',
  },
  content: {
    marginVertical: '10@ms',
  },
});

export default styles;
