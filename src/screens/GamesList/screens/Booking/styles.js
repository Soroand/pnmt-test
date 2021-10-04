const { ScaledSheet } = require('react-native-size-matters');
import colors from 'constants/colors';

const styles = ScaledSheet.create({
  headerRight: {
    marginRight: '25@ms'
  },
  container: {
    paddingTop: '25@ms',
    paddingHorizontal: '25@ms',
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.customBlack,
    marginTop: '20@ms',
    marginBottom: '10@ms',
    opacity: 0.1,
  },
  phoneBottomBorder: {
    marginTop: 0,
  },
  phoneLabel: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.customBlack,
    opacity: 0.2,
  },
  phoneFieldContainer: {
    marginTop: '20@ms',
  },
  phoneContainer: {
    paddingTop: '5@ms',
    paddingBottom: '15@ms',
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  phoneInput: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },
  flag: {
    fontSize: 20,
  },
  paymentContainer: {
    marginTop: '40@ms',
  },
  paymentLabel: {
    paddingBottom: '10@ms',
  },
  paymentMethod: {
    paddingHorizontal: '10@ms',
    paddingVertical: '15@ms',
  },
  paymentMethodSelected: {
    backgroundColor: '#E9EAF9',
    borderRadius: 2,
  },
  paymentIcon: {
    marginRight: '5@ms',
  },
  addPayment: {
    marginTop: '15@ms',
    borderRadius: 2,
  },

  successContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '25@ms',
  },
  successImage: {
    alignItems: 'center',
    marginBottom: '65@ms',
  },
  successTitle: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 38,
    marginBottom: '10@ms',
  },
  successDescription: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: '20@ms',
  },
  iconMargin: {
    marginRight: '10@ms',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: 270,
    height: 280,
    justifyContent: "space-between",
    borderRadius: 10,
    padding: '20@ms',
  },
  modalButtonMargin: {
    marginBottom: '10@ms',
  },
});

export default styles;
