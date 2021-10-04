// @ts-check

import React, {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import {
  MyButton,
  Avatar,
  MySafeAreaView,
  H4,
  Horizontal,
} from '../../../components';
import { KeyboardArrowLeftIcon } from '../../../components/SvgIcons';
import { GiftedChat } from 'react-native-gifted-chat';
import styles from './styles';
import colors from '../../../constants/colors';
import initialMessages from '../../../data/mockChat';
// Custom components
import CutomSend from './components/CustomSend';
import CustomInputToolbar from './components/CustomInputToolbar';
import CustomComposer from './components/CustomComposer';
import CustomActions from './components/CustomActions';
import CustomBubble from './components/CustomBubble';
import CustomMessage from './components/CustomMessage';
import CustomAvatar from './components/CustomAvatar';
import { db } from '../../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import BackArrowBlack from '../../../components/SvgIcons/BackArrowBlack/BackArrowBlack';
import {specificUserProfileUpdate} from '../../../services/helper'
import Device from 'react-native-device-info'

const ChatChannel = ({ navigation, isActive = true, route }) => {
  
  const gameChat = route.params.game;
  const [text, setText] = useState('');
  const user = useSelector(state => state.user.myProfile);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const dispatch = useDispatch();
  const canUserSeeChat = gameChat.players.find(item => item.id === user.id);

  useLayoutEffect(() => {
   
    const unsubscribe = db
      .collection('Chats').doc(`${gameChat.id}`).collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot =>
        canUserSeeChat ? setMessages(
          snapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          })),
        ) : setMessages([])
      );
    return unsubscribe;
  }, []);

  const goToProfile = (e) => {
    const id = e._id
    specificUserProfileUpdate(parseInt(id), dispatch, () => {
      navigation.push('UserProfile',{id});
    });
  }
 
  function ModifiedTitle() {
    return (
      <View>
        <Text style={[styles.title, !isActive ? styles.naTitle : null]}>
          {gameChat.club.title.slice(0, 15)}..
        </Text>
        <Text style={[styles.subTitle, !isActive ? styles.naSubTitle : null]}>
          {!isActive
            ? 'Game is over'
            : gameChat.players.map((item,index)=> (item.fullName.split(' ').[0])).join(', ')}
        </Text>
      </View>
    );
  }
  useEffect(() => {
    navigation.setOptions({
      headerTitle: props => <ModifiedTitle {...props} />,
      headerTitleStyle: styles.title,
      headerStyle: styles.headerStyle,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginLeft: 15,
          }}>
          <Horizontal>
            <BackArrowBlack width={12} height={12} />
            <Animated.Text
              style={{
                color: '#344154',
                fontSize: 16,
                fontWeight: '400',
              }}>
              My Games
            </Animated.Text>
          </Horizontal>
        </TouchableOpacity>
      ),
      headerRight: () => (
        
        <Avatar
          style={[styles.headerRight, !isActive ? styles.notActive : null]}
          src={user.avatar}
          width={40}
          height={40}
        />
      
        
      ),
    });
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const { _id, text, createdAt, user } = messages[0];
    db.collection('Chats').doc(`${gameChat.id}`).collection('messages').add({ _id, text, createdAt, user });
  }, []);

  return (
    <MySafeAreaView style={{ backgroundColor: colors.white }}>
      <ImageBackground
        source={
          !isActive
            ? require('../../../assets/images/inactive_chat_bg.png')
            : require('../../../assets/images/chat_background.png')
        }
        resizeMode="cover"
        style={[styles.chatBody, !isActive ? styles.notActive : null]}>
        <GiftedChat
          messagesContainerStyle={{paddingBottom: 20}}
          messages={messages}
          text={text}
          onInputTextChanged={!isActive ? null : setText}
          onSend={!isActive ? null : onSend}
          user={{
            _id: user.id,
            name: user.fullName,
            avatar: user.avatar,
          }}
          showAvatarForEveryMessage={true}
          renderAvatar={CustomAvatar}
          renderBubble={CustomBubble}
          renderMessage={CustomMessage}
          renderSend={!isActive ? null : CutomSend}
          renderInputToolbar={!isActive ? null : CustomInputToolbar}
          renderComposer={!isActive ? null : CustomComposer}
          // renderActions={!isActive ? null : CustomActions}
          bottomOffset={Platform.OS === 'ios' ? (Device.hasNotch() ? 3 : -25) : 10}
          renderUsernameOnMessage={true}
          renderAvatarOnTop={true}
          onPressAvatar={e => goToProfile(e)}
          alwaysShowSend={!isActive ? false : true}
          placeholder={!isActive ? 'Game ended two hours ago...' : 'Message..'}
          isTyping={true}
        />
        {
      Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-205} />
   }
      </ImageBackground>
    </MySafeAreaView>
  );
};

export default ChatChannel;
