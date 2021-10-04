import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  svg: {
    alignSelf: 'center',
    marginTop: '35@ms',
    marginBottom: '60@ms',
  },
  formWrapper: {
    marginTop: '25@ms',
    paddingHorizontal: '25@ms',
  },
  formWrap: {
    paddingVertical: '50@ms',
    paddingHorizontal: '25@ms',
  },
  container: {
    paddingHorizontal: '25@ms',
    flex: 1,
  },
  formView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: '3@ms',
  },
  description: {
    marginBottom: '20@ms',
    fontWeight: 'normal',
  },
  input: {
    borderColor: '#D4D4D4',
    borderWidth: 1,

    backgroundColor: '#F6F7FE',
    borderRadius: 5,
    marginBottom: 20,
    padding: 0,
  },
  codeInput: {
    backgroundColor: '#F6F7FE',
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    width: '68@ms',
    height: '52@ms',
    textAlign: 'center',
  },
  inputView: {
    padding: 1,
  },
  button: {
    marginTop: '10@ms',
    marginBottom: '30@ms',
  },
  rememberPasswordContainer: {
    alignSelf: 'center',
  },
  rememberPassword: {
    padding: 0,
    paddingHorizontal: 0,
  },
  image: {
    marginTop: width <= 375 ? '10@ms' : '60@ms',
    marginBottom: width <= 375 ? '30@ms' : '110@ms',
    alignSelf: 'center',
  },
});

export default styles;
