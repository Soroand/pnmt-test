import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  formView: {
    flex: 1,
    justifyContent: 'center',
  },
  privacyPolicy: {
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
  forgetPassword: {
    alignSelf: 'center',
  },
});

export default styles;
