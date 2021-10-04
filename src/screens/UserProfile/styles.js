import { ScaledSheet } from 'react-native-size-matters';
import { Platform } from 'react-native';

const styles = ScaledSheet.create({
  friendsWith: {
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color:
      Platform.OS === 'ios' ? 'rgba(52, 65, 84, 1)' : 'rgba(52, 65, 84, 0.85)',
  },
  headerMore: {
    marginRight: '25@ms',
    paddingVertical: '15@ms',
  },
  container: {
    paddingHorizontal: '25@ms',
    paddingTop: '20@ms',
  },
  stats: {
    marginTop: '20@ms',
    marginBottom: '7@ms',
  },
  statsPoint: {
    fontSize: 28,
    lineHeight: 38,
    color: '#344154',
  },
  friendsInfo: {
    marginTop: '10@ms',
    marginBottom: '8@ms',
  },
  carouselTitle: {
    marginTop: '25@ms',
    marginBottom: '10@ms',
    fontSize: 18,
    color:
      Platform.OS === 'ios' ? 'rgba(52, 65, 84, 1)' : 'rgba(52, 65, 84, 0.8)',
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
  },
});

export default styles;
