import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginBottom: '45@ms',
  },
  title: {
    marginBottom: '10@ms',
  },
  description: {
    marginBottom: '20@ms',
    textAlign: 'center',
  },
});

export default styles;
