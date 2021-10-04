import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';

const styles = ScaledSheet.create({
  container: {
    paddingTop: '35@ms',
    paddingHorizontal: '25@ms',
  },
  description: {
    marginTop: '15@ms',
    marginBottom: '40@ms',
  },
  membershipBoxContainer: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.lightBlue,
  },
  membershipBoxHeader: {
    paddingTop: '15@ms',
    paddingHorizontal: '20@ms',
    paddingBottom: '10@ms',
    backgroundColor: '#E9EAF9',
  },
  membershipBoxPrice: {
    marginTop: '20@ms',
    marginBottom: '8@ms',
  },
  membershipBoxPopular: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: '5@ms',
    paddingTop: '5@ms',
    paddingBottom: '7@ms',
    borderRadius: 2,
  },
  membershipBoxPros: {
    paddingHorizontal: '20@ms',
    marginTop: '30@ms',
  },
  membershipBoxProsItem: {
    marginBottom: '15@ms',
  },
  membershipBoxProsItemText: {
    marginLeft: '5@ms',
  },
  membershipBoxDescription: {
    marginTop: '25@ms',
    marginBottom: '40@ms',
    textAlign: 'center',
  },
});

export default styles;
