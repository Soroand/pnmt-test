import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  formView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: '3@ms',
  },
  description: {
    marginBottom: '20@ms',
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
  resendCode: {
    alignSelf: 'center',
  },
});

export default styles;
