import { ScaledSheet } from 'react-native-size-matters';
import colors from 'constants/colors';
import { width } from '../../../../constants/dimentions';
import { Platform } from 'react-native';

const styles = ScaledSheet.create({
  cancel_game_container: {
    width: '100%',
    paddingTop: 40,
    marginTop: 15,
    borderTopWidth: 0.5,
    borderColor: 'rgba(52, 65, 84, 0.1)',
    alignItems: 'center',
  },
  cancel_game_text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
    color: '#EB5757',
  },
  container: {
    paddingHorizontal: '25@ms',
    flex: 1,
  },
  invitePlayersTitle: {
    color: '#838B97',
    marginBottom: 10,
    marginTop: 25,
    fontSize: 16,
  },
  background: {
    backgroundColor: colors.mainBackground,
  },
  bottomPadding: {
    paddingBottom: '110@ms',
  },
  bottomPaddingMd: {
    paddingBottom: '120@ms',
  },
  topContainer: {
    paddingBottom: '15@ms',
    marginBottom: '40@ms',
    backgroundColor: 'rgba(81, 91, 241, 0.05)',
  },
  gameHeader: {
    marginTop: '20@ms',
    marginBottom: '10@ms',
  },
  gameInformation: {
    alignItems: 'flex-start',
    marginBottom: '10@ms',
  },
  gameAddress: { opacity: 0.5 },
  routeButton: {
    alignSelf: 'flex-start',
    padding: 0,
    paddingHorizontal: 0,
  },
  routeBtnColor: {
    color: '#515BF1',
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.customBlack,
    marginTop: '15@ms',
    marginBottom: '15@ms',
    opacity: 0.1,
  },
  divider: {
    borderColor: colors.customBlack,
    marginVertical: '8@ms',
    opacity: 0.1,
  },
  inviteContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.1)',
    borderRadius: 10,
    paddingVertical: '8@ms',
    paddingHorizontal: '20@ms',
    marginVertical: '10@ms',
  },
  inviteTextContainer: {
    marginLeft: '23@ms',
  },
  inviteTitle: {
    fontWeight: '500',
    marginBottom: '7@ms',
  },
  inviteText: {
    opacity: 0.4,
  },

  optionHeader: {
    fontWeight: 'normal',
    marginTop: '25@ms',
    marginBottom: '20@ms',
  },
  option: {
    marginVertical: '6@ms',
  },
  optionIcon: {
    position: 'absolute',
  },
  titles: {
    color: '#838B97',
    fontSize: 16,
    marginBottom: 5,
  },
  innerText: {
    color: '#344154',
    fontSize: 16,
  },
  phoneText: {
    color: 'blue',
    fontSize: 16,
    lineHeight: 28,
  },
  detailText: {
    color: '#636B67',
    fontSize: 16,
  },
  optionTitle: {
    paddingLeft: '20@ms',
  },
  optionContent: {
    paddingLeft: '20@ms',
    color: '#838B97',
    opacity: 0.6,
  },
  moreGradient: {
    height: 50,
  },
  cardHeader: {
    marginHorizontal: '20@ms',
    marginTop: '15@ms',
    marginBottom: '10@ms',
  },
  teaTimeCardContainer: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginBottom: '10@ms',
    marginTop: '10@ms',
    paddingVertical: '15@ms',
    paddingHorizontal: '20@ms',
  },
  teaTimeCardHeader: {},
  // teaTimeCardBody: {
  //   paddingTop: '20@ms',
  //   paddingHorizontal: '10@ms',
  //   paddingBottom: '25@ms',
  // },
  teaTimeCard: {},

  priceMargin: {
    marginLeft: '10@ms',
  },
  marginForIcon: {
    marginLeft: '20@ms',
  },
  marginForIconLabel: {
    marginLeft: '7@ms',
  },
  containerCard: {
    paddingHorizontal: '20@ms',
    marginTop: '20@ms',
  },
  fieldsHeader: {
    marginHorizontal: '20@ms',
  },
  btnPadding: {
    paddingHorizontal: width <= 375 ? '15@ms' : '25@ms',
    marginVertical: '20@ms',
  },

  message: {
    position: 'absolute',
    bottom: '80@ms',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: 5,

    marginHorizontal: '20@ms',
    marginBottom: '20@ms',
    paddingLeft: '20@ms',
    paddingRight: '25@ms',
    paddingTop: '20@ms',
    paddingBottom: '20@ms',
  },
  closeBtn: {
    position: 'absolute',
    right: '5@ms',
    top: '5@ms',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10@ms',
  },
});

export default styles;
