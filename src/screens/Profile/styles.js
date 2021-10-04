import { ScaledSheet } from 'react-native-size-matters';
import { width } from '../../constants/dimentions';
import colors from 'constants/colors';

const styles = ScaledSheet.create({
  background: {
    paddingBottom: '80@ms',
    backgroundColor: colors.mainBackground,
  },
  container: {
    backgroundColor: colors.mainBackground,
    paddingTop: 10,
    paddingHorizontal: 25,
    flexDirection: 'column',
  },
  appName: {
    fontSize: '10@ms',
    fontWeight: 'bold',
    opacity: 0.4,
  },
  marginTop25: {
    marginTop: '25@ms',
  },
  marginTop20: {
    marginTop: '20@ms',
  },
  marginBottom15: {
    marginBottom: '15@ms',
  },
  marginLeft10: {
    marginLeft: '10@ms',
  },
  setttingsIcon: {
    paddingLeft: '5@ms',
    paddingVertical: '5@ms',
  },
  pointsWrapper: {
    marginTop: '15@ms',
  },
  pointsContainer: {
    marginRight: 20,
  },
  pointText: {
    fontWeight: 'normal',
  },
  profileCompleted: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: '20@ms',
    paddingVertical: '15@ms',
    marginTop: '30@ms',
    marginBottom: '15@ms',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  profileCompletedLine: {
    position: 'absolute',
    top: '14@ms',
    left: '5@ms',
    width: '95%',
    opacity: 0.4,
    borderColor: colors.lightBlue,
    borderWidth: 0.5,
  },
  circleNumber: {
    width: '27@ms',
    height: '27@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50@ms',
    marginBottom: '5@ms',
    borderColor: colors.lightBlue,
    backgroundColor: colors.white,
    borderWidth: 1,
  },
  circleNumber__completed: {
    backgroundColor: colors.lightBlue,
  },
  circleNumberText: {
    textAlign: 'center',
  },
  profileTabs: {
    marginTop: '25@ms',
    marginHorizontal: '20@ms',
    marginBottom: '25@ms',
    paddingHorizontal: 25,
  },
  gameCard: {
    marginBottom: 110,
    borderRadius: 5,
    overflow: 'hidden',
  },
  gameCardBackground: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: '20@ms',
    paddingVertical: '10@ms',
  },
  gameCardBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  gameTitle: {
    marginBottom: '7@ms',
  },
  gameBodyText: {
    marginBottom: '9@ms',
  },
  friendsContainer: {
    paddingHorizontal: '25@ms',
    marginBottom: '30@ms',
  },
  friendsHeader: {
    marginBottom: '10@ms',
  },
  commingSoonText: {
    marginTop: '25@ms',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 38,
    color: '#C5C5C5',
  },

  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width <= 375 ? '3@ms' : '45@ms',
    marginTop: '40@ms',
    marginBottom: '30@ms',
  },
  emptyTitle: {
    marginTop: '25@ms',
  },
  emptyDescription: {
    textAlign: 'center',
    marginTop: '10@ms',
    marginBottom: '25@ms',
  },
});

export default styles;
