import { ScaledSheet } from 'react-native-size-matters';
import { Platform } from 'react-native';

const styles = ScaledSheet.create({
  chatBody: {
    flex: 1,
    marginBottom: -10,
  },
  notActive: {
    opacity: 0.6,
  },
  naTitle: {
    color: '#aaa',
  },
  naSubTitle: {
    color: '#aaa',
  },
  title: {
    // width: '100%',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 13,
  },
  headerStyle: {
    height: Platform.OS === 'ios' ? '100@ms' : '65@ms',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  headerLeft: {
    marginLeft: '25@ms',
  },
  headerRight: {
    borderWidth: 1,
    marginRight: '25@ms',
  },
});

export default styles;
