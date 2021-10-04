import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  temperature: {
    alignSelf: 'center',
    fontWeight: '300',
    fontSize: 22,
    lineHeight: 28,
  },
  weatherIcon: {
    marginHorizontal: '7@ms',
  },
  windContainer: {
    alignItems: 'center',
    marginLeft: '1@ms',
  },
  wind: {
    fontSize: 14,
    lineHeight: 14,
    // top: 2,
  },
});

export default styles;
