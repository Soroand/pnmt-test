import { ScaledSheet } from 'react-native-size-matters';
import { width } from '../../../constants/dimentions';

const styles = ScaledSheet.create({
  btnPadding: {
    paddingHorizontal: width <= 375 ? '15@ms' : '25@ms',
  },
  createBtnMain: {
    marginTop: 20,
    marginBottom: 10,
  },

  createBtn: {
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: width <= 375 ? '15@ms' : '25@ms',
    // paddingBottom: 100,
    position: 'relative',
  },
  emptyContainer: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    marginTop: '25@ms',
  },
  emptyDescription: {
    textAlign: 'center',
    marginTop: '10@ms',
  },
  placeName: {
    marginRight: 15,
  },
  marginRight5: {
    marginRight: '5@ms',
  },
  marginLeft5: {
    marginLeft: '5@ms',
  },
});

export default styles;
