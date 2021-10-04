import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  button: {
    marginBottom: 14,
  },
  introTitle: {
    marginBottom: 30,
    textAlign: 'center',
  },
  dividerText: {
    textAlign: 'center',
  },
  divider: {
    width: '40%',
    height: 1,
    opacity: 0.4,
    borderColor: '#fff',
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
});

export default styles;
