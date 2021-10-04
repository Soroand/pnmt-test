// @ts-check
import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  default: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: '100@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    borderRadius: 0,
  },
  size__sm: {
    paddingVertical: '9@ms',
    paddingHorizontal: '9@ms',
    minWidth: width <= 375 ? '90@ms' : '100@ms',
  },
  size__md: {
    paddingTop: '13@ms',
    paddingHorizontal: '50@ms',
    paddingBottom: '18@ms',
  },
  size__lg: {
    width: '100%',
    paddingTop: '15@ms',
    padding: '18@ms',
  },

  outline: {
    borderWidth: '1@ms',
  },

  fullWidth: {
    width: '100%',
    justifyContent: 'center',
  },
  leftIcon: {
    justifyContent: 'center',
    marginRight: '12@ms',
  },
  rightIcon: {
    marginTop: '2@ms',
    marginLeft: '12@ms',
  },
});

export default styles;
