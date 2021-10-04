import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';

const styles = ScaledSheet.create({
  header: {
    paddingTop: '30@ms',
  },
  avatarContainer: {
    marginBottom: '20@ms',
  },

  photoIcon: {
    position: 'absolute',
    bottom: -10,
    right: 0,
  },
  username: {
    marginBottom: '12@ms',
  },
  container: {
    marginTop: '20@ms',
    paddingHorizontal: '25@ms',
    paddingBottom: '100@ms',
  },
  textFieldContainer: {
    marginTop: '10@ms',
  },
  phoneContainer: {
    borderBottomColor: 'rgba(52, 65, 84, .1)',
    borderBottomWidth: 0.5,
  },

  input: {
    paddingTop: '10@ms',
    paddingBottom: '15@ms',
    borderBottomColor: 'rgba(52, 65, 84, .1)',
    borderBottomWidth: 0.5,
  },
  label: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    marginBottom: '5@ms',
    color: '#344154',
  },
  birthDate: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    marginBottom: '5@ms',
    color: '#515BF1',
  },
  textProperties: {
    fontSize: 16,
    color: '#344154',
  },
  labelFocused: {
    fontWeight: '500',
    color: '#D4D4D4',
    top: 0,
    fontSize: 14,
    lineHeight: 17,
  },
  labelFocusedBirthDate: {
    fontWeight: '500',
    color: '#515BF1',
    top: 0,
    fontSize: 14,
    lineHeight: 17,
  },
  bottomSheet: {
    paddingVertical: '20@ms',
    backgroundColor: colors.white,
  },
});

export default styles;
