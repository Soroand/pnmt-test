import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../constants/colors';

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fafafa',
    justifyContent: 'space-between',
  },

  playerContainer: {
    // backgroundColor: 'tan',
    width: '100%',
    flexDirection: 'row',
    marginVertical: '7@ms',
    paddingHorizontal: '25@ms',
  },
  playerAvatar: {
    width: '74@ms',
    height: '74@ms',
  },
  playerInfo: {
    // backgroundColor: 'pink',
    flex: 1,
    marginLeft: '10@ms',
  },

  statisticsAndButton: {
    // backgroundColor: 'tomato',
    flex: 1,
    alignItems: 'flex-end',
  },

  gamerPointContainer: {
    marginRight: '6@ms',
    alignItems: 'flex-end',
  },
  gamerPointText: {
    marginLeft: '3@ms',
    marginRight: '6@ms',
    marginBottom: '1.3@ms',
  },

  playerButton: {
    position: 'absolute',
    right: 0,
    width: '67@ms',
  },

  cancelButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  divider: {
    marginBottom: '5@ms',
    marginHorizontal: '25@ms',
  },
});

export default styles;
