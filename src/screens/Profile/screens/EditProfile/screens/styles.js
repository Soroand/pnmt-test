import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
  indicators_circle: {
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: '#0CBA52',
    width: 16,
    height: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicators_text: {
    fontSize: 10,
    lineHeight: 13,
    color: '#0CBA52',
  },
  settingsOptionContainer: {
    paddingTop: '15@ms',
    paddingBottom: '5@ms',
  },
  settingsOption_label: {
    color: '#344154',
    fontSize: 16,
    lineHeight: 19,
    marginRight: 10,
  },
  settingsOption_name: {
    color: '#d4d4d4',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 5,
  },
});

export default styles;
