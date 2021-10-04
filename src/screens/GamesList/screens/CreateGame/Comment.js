import React from 'react';
import { StyleSheet } from 'react-native';
import { BT } from '../../../../components/Typography';
import { TextInput } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { Vertical } from '../../../../components';

const Comment = ({ comment, setComment }) => {
  return (
    <Vertical style={styles.container}>
      <BT style={styles.title} color="#838B97">
        Comments for players
      </BT>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          multiline={true}
          numberOfLines={10}
          underlineColorAndroid="transparent"
          placeholder="Your comment..."
          placeholderTextColor="rgb(72,85,94)"
          value={comment}
          onChangeText={text => setComment(text)}
        />
      </View>
    </Vertical>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  title: {
    marginTop: 25,
    marginBottom: 10,
  },
  textContainer: {
    borderWidth: 0.5,
    borderColor: '#b4b4b4',
    padding: 5,
  },
  textStyle: {
    fontSize: 15,
    height: 150,
    flex: 1,
    textAlignVertical: 'top',
  },
});

export default Comment;
