import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import GamesChat from 'components/SvgIcons/Chat/GamesChat';
import GameArrow from 'components/SvgIcons/Chat/InGameArrow';
import { Horizontal } from 'components';
import uuid from 'react-native-uuid';

const ChatInfo = ({ game, navigation, id }) => {
  const canEnter = game.players.find(item => item.id === id);

  return (
    <View style={styles.container}>
      <Horizontal>
        <GamesChat width={26} height={26} style={{ marginRight: 5 }} />
        <Text style={styles.chat_title}>Chat</Text>
      </Horizontal>
      <TouchableOpacity
        onPress={() =>
          canEnter
            ? navigation.push('ChatList', { game })
            : alert('Chat is not available. You need to join the game first.')
        }
        style={{ marginTop: 15 }}>
        <Horizontal
          style={{
            position: 'relative',
            maxWidth: '100%',
          }}>
          <View style={styles.chat_message}>
            <Text style={styles.chat_message_name}>Adam Rich</Text>
            <Text style={styles.chat_message_text}>
              Hey, guys! I'm new to this...
            </Text>
            <Text style={styles.chat_message_time}>11:08 am</Text>
          </View>
          <View style={styles.chat_avatars}>
            <View style={styles.chat_avatars_container}>
              <View
                style={{
                  width: '100%',
                  //   borderWidth: 1,
                  //   borderColor: 'blue',
                }}>
                {game.players.map((item, index) => {
                  return (
                    <Image
                      key={uuid.v4()}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        position: 'absolute',
                        top: 0,
                        right:
                          index === 0
                            ? 0
                            : index === 1
                            ? 30
                            : index === 2
                            ? 60
                            : 90,
                      }}
                      source={{ uri: item.avatar }}
                    />
                  );
                })}
              </View>
            </View>
            <GameArrow width={15} height={15} style={{ marginLeft: 10 }} />
          </View>
        </Horizontal>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0, 0.1)',
    marginBottom: 15,
    paddingBottom: 25,
  },
  chat_avatars_container: {
    height: 50,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  chat_message: {
    maxWidth: '50%',
    width: '50%',
  },
  chat_message_name: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
    color: '#344154',
  },
  chat_message_text: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#344154',
    opacity: 0.6,
  },
  chat_message_time: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '400',
    color: '#344154',
    opacity: 0.6,
  },
  chat_title: {
    color: '#838B97',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
  },
  chat_avatars: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    width: '50%',
  },
});

export default ChatInfo;
