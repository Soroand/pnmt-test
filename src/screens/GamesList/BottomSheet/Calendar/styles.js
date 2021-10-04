import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';

const styles = ScaledSheet.create({
  headerContainer: {
    borderWidth: 1,
    borderColor: '#E9EAF9',
    borderRadius: 2,
    height: 40,
  },
  headerPrev: {
    justifyContent: 'center',
    paddingHorizontal: '30@ms',
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#E9EAF9',
  },
  headerNext: {
    justifyContent: 'center',
    paddingHorizontal: '30@ms',
    height: '100%',
    borderLeftWidth: 1,
    borderLeftColor: '#E9EAF9',
  },
  headerPrevIcon: {
    transform: [{ rotate: '180deg' }],
  },
  headerIcon: {},
  weekLabelContainer: {
    marginVertical: '15@ms',
  },
  weekLabel: {
    flex: 1,
  },
  day: {
    paddingTop: '7@ms',
    paddingBottom: '13@ms',
    flex: 1,
  },
  dayText: {
    fontSize: 20,
    lineHeight: 24,
  },
  dayTextDisabled: {
    color: colors.disabledButton,
  },
  dayPast: {
    backgroundColor: '#F5F5F5',
  },
  dayToday: {
    backgroundColor: '#E9EAF9',
  },
  todaySign: {
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    top: -10,
    right: 2,
  },
  footer: {
    marginTop: '10@ms',
    marginBottom: '15@ms',
  },
  todayDescription: {
    alignItems: 'flex-start',
  },
  todaySignDescription: {
    transform: [{ rotate: '-45deg' }],
    marginRight: '3@ms',
  },

  cardsList: {
    marginTop: '20@ms',
    flexWrap: 'wrap',
  },
  card: {
    width: 115,
    marginBottom: '10@ms',
    borderRadius: 5,
    shadowColor: colors.lightBlue,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
  },
  hotIcon: {
    marginRight: 3,
  },
  cardHeader: {
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    paddingVertical: '10@ms',
    paddingHorizontal: '15@ms',
    backgroundColor: '#E9EAF9',
  },
  cardBody: {
    paddingBottom: '20@ms',
  },
  cardTime: {
    marginTop: '12@ms',
    marginBottom: '10@ms',
  },
});

export default styles;
