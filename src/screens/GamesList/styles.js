import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../constants/colors';
import { width } from '../../constants/dimentions';

const styles = ScaledSheet.create({
  content: {
    paddingHorizontal: width <= 375 ? '15@ms' : '25@ms',
    paddingBottom: 100,
    backgroundColor: 'transparent',
  },
  createBtn: {
    marginTop: 20,
    marginBottom: 10,
  },
  safeArea: {
    backgroundColor: colors.white,
  },
  container: {
    paddingTop: 10,
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
  appName: {
    marginLeft: width <= 375 ? '15@ms' : '25@ms',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 12,
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    top: 20,
    backgroundColor: colors.white,
    borderRadius: 3,
    width: 200,

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 30,
    elevation: 5,
    shadowOpacity: 1,
  },

  dropdownDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  dropdownCircle: {
    width: 18,
    height: 18,
    borderRadius: 20,
    borderColor: '#DADADA',
    borderWidth: 2,
    marginRight: 10,
  },
  dropdownCircleActive: {
    width: 18,
    height: 18,
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 4,
    marginRight: 10,
  },
  dropdownItem: {
    paddingVertical: '20@ms',
    paddingHorizontal: '16@ms',
  },
  topContainer: {
    marginTop: '15@ms',
    marginBottom: 20,
    zIndex: 2,
    alignSelf: 'flex-start',
  },
  topRoundedItem: {
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.inactive,
    borderWidth: 0.3,
    borderRadius: 50,
    marginRight: 10,
  },
  topRoundedItemText: {
    fontSize: 12,
    lineHeight: 14,
    textTransform: 'capitalize',
  },
  marginRight5: {
    marginRight: '5@ms',
  },
  marginLeft5: {
    marginLeft: '5@ms',
  },
  servicesTitle: {
    marginTop: '10@ms',
    marginBottom: '20@ms',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '8@ms',
    paddingHorizontal: '14@ms',
    backgroundColor: 'rgba(81, 91, 241, 0.1)',
    borderRadius: '17.5@ms',
    marginRight: '15@ms',
    marginBottom: '15@ms',
  },
  serviceIcon: {
    marginLeft: '4@ms',
  },
  disabledText: {
    color: 'rgba(52, 65, 84, 0.2)',
  },
});

export default styles;
