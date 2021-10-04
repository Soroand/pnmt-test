import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Vertical, MyButton } from '../../../../components';
import { CloseIcon } from '../../../../components/SvgIcons';

const AttachedFiles = ({ item, filterItems }) => {
  return (
    <Vertical style={styles.files}>
      <MyButton
        iconRight={<CloseIcon width={12} height={12} color="#EF9A9A" />}
        iconRightOffset={5}
        type="link"
        size="sm"
        onPress={() => filterItems(item.name)}>
        {item.name}
      </MyButton>
    </Vertical>
  );
};

const styles = StyleSheet.create({
  files: {
    marginTop: 15,
  },
});

export default AttachedFiles;
