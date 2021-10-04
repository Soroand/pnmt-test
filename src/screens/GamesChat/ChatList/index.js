// @ts-check

import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MySafeAreaView,
  Vertical,
  ChatListItem,
  Loader,
} from '../../../components';
// import styles from './styles';
import chatList from '../../../data/mockChatWithFriend.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CommingSoon } from '../../../components/SvgImages';
import ChatChannel from '../ChatChannel';
import { GiftedChat } from 'react-native-gifted-chat';
import { db } from '../../../../firebase';

const ChatList = ({ navigation }) => {
  const user = useSelector(state => state.user.myProfile);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection('Chats')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot =>
          setMessages(
            snapshot.docs.map(doc => ({
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user,
            })),
          ),
        setLoading(false),
      );
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const { _id, text, createdAt, user } = messages[0];
    db.collection('Chats')
      // .collection('ChatList')
      .add({ _id, text, createdAt, user });
  }, []);

  return user && !loading ? (
    <Vertical style={styles.container}>
      <GiftedChat
        showAvatarForEveryMessage={true}
        messages={messages}
        bottomOffset={30}
        onSend={messages => onSend(messages)}
        user={{
          _id: user.id,
          name: user.fullName,
          avatar: user.avatar,
        }}
      />
    </Vertical>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  comingSoon: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 38,
    color: '#C5C5C5',
  },
});

export default ChatList;
