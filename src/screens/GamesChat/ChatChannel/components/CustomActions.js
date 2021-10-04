import React from 'react';
import { AttachIcon } from '../../../../components/SvgIcons';
import { Actions } from 'react-native-gifted-chat';
import colors from '../../../../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';

const CustomActions = props => (
  <Actions
    {...props}
    containerStyle={styles.container}
    icon={() => <AttachIcon width={22} height={22} color={colors.lightGrey} />}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor="#222B45"
  />
);

const styles = ScaledSheet.create({
  container: {
    marginLeft: 0,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomActions;
