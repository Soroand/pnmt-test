// @ts-check

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import GameDetails from '../screens/GamesList/screens/Details/GameDetails/';
import inviteGameDetails from '../screens/GamesList/screens/Details/inviteGameDetails';
import joinedGame from '../screens/GamesList/screens/Details/joinedGame';
import CreateGame from '../screens/GamesList/screens/CreateGame';
import { BackButton, Horizontal } from '../components';
import ClubDetails from '../screens/GamesList/screens/Details/ClubDetails';
import Booking from '../screens/GamesList/screens/Booking';
import BookedGame from '../screens/GamesList/screens/Booked/BookedGame';
import BookingSuccess from '../screens/GamesList/screens/Booking/Success';
import PaymentMethod from '../screens/PaymentMethod';
import TopTabs from '../screens/InviteFriends';

import Settings from '../screens/Profile/screens/Settings';
import EditProfile from '../screens/Profile/screens/EditProfile';
import PaymentHistory from '../screens/Profile/screens/PaymentHistory';
import Language from '../screens/Profile/screens/Language';
import Membership from '../screens/Profile/screens/Membership';
import PaymentMethodForMembersip from '../screens/Profile/screens/Membership/PaymentMethods';
import JobVerify from '../screens/Profile/screens/JobVerify';
import Faq from '../screens/Profile/screens/Faq';
import Support from '../screens/Profile/screens/Support';
import Feedback from '../screens/Profile/screens/Feedback';
import UserProfile from '../screens/UserProfile';
import { ChatChannel } from '../screens/GamesChat';
import ConnectionLost from '../screens/ConnectionLost';
import axios from 'axios';
import { TouchableOpacity, Animated } from 'react-native';
import BackArrowBlack from '../components/SvgIcons/BackArrowBlack/BackArrowBlack';
import AboutScreen from '../screens/Profile/screens/EditProfile/screens/about/aboutScreen';
import SkillsScreen from '../screens/Profile/screens/EditProfile/screens/skills/skillScreens';
import InterestsScreen from '../screens/Profile/screens/EditProfile/screens/Interests/interestScreen';
import Languages from '../screens/Profile/screens/EditProfile/screens/Languages/languageScreen';
import ChatStack from './ChatStack';
import ChatList from '../screens/GamesChat/ChatChannel/index';

const Stack = createStackNavigator();

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log('error', error.message);
    if (error.message === 'Network Error') {
    }

    return Promise.reject(error);
  },
);

export default function MainStack({ navigation }) {
  const headerWithTitle = title => ({ navigation, route }) => ({
    headerTitle: title,
    headerTitleAlign: 'center',
    headerTintColor: '#344154',
    headerLeft: () => <BackButton dark navigation={navigation} />,
  });

  return (
    <Stack.Navigator initialRouteName="GameList">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="GameList"
        component={BottomTabs}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="GameDetails"
        component={GameDetails}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
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
        }}
        name="ChatList"
        component={ChatList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="inviteGameDetails"
        component={inviteGameDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="joinedGame"
        component={joinedGame}
      />
      <Stack.Screen
        options={headerWithTitle('Create a game')}
        name="CreateGame"
        component={CreateGame}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ClubDetails"
        component={ClubDetails}
      />
      <Stack.Screen
        options={headerWithTitle('Checkout')}
        name="Booking"
        component={Booking}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BookingSuccess"
        component={BookingSuccess}
      />
      <Stack.Screen
        options={headerWithTitle('Add payment method')}
        name="PaymentMethod"
        component={PaymentMethod}
      />
      <Stack.Screen
        options={{
          title: 'Invite Friends',
        }}
        name="InviteFriends"
        component={TopTabs}
      />

      <Stack.Screen name="ChatChannel" component={ChatChannel} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={BottomTabs}
      />

      <Stack.Screen
        options={{
          title: 'Settings',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '400',
            marginBottom: 3,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Profile
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
          headerRight: () => <TouchableOpacity style={{ opacity: 0 }} />,
        }}
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        options={{
          title: 'Edit personal info',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '400',
            marginBottom: 3,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Settings
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
          headerRight: () => <TouchableOpacity style={{ opacity: 0 }} />,
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={headerWithTitle('Payment history')}
        name="PaymentHistory"
        component={PaymentHistory}
      />
      <Stack.Screen
        options={headerWithTitle('Change language')}
        name="Language"
        component={Language}
      />
      <Stack.Screen
        options={headerWithTitle('Membership')}
        name="Membership"
        component={Membership}
      />
      <Stack.Screen
        options={headerWithTitle('Payment Methods')}
        name="PaymentMethodForMembersip"
        component={PaymentMethodForMembersip}
      />

      <Stack.Screen
        options={headerWithTitle('Job verify')}
        name="JobVerify"
        component={JobVerify}
      />
      <Stack.Screen
        options={headerWithTitle('FAQ')}
        name="Faq"
        component={Faq}
      />
      <Stack.Screen
        options={{
          title: 'About me',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 3,
            color: '#344154',
          },
          headerStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: {
              width: 0,
              height: -30,
            },
            shadowRadius: 30,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Personal info
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
          headerRight: () => <TouchableOpacity style={{ opacity: 0 }} />,
        }}
        name="About"
        component={AboutScreen}
      />
      <Stack.Screen
        options={{
          title: 'Languages',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 3,
            color: '#344154',
          },
          headerStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: {
              width: 0,
              height: -30,
            },
            shadowRadius: 30,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Personal info
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
          headerRight: () => <TouchableOpacity style={{ opacity: 0 }} />,
        }}
        name="Languages"
        component={Languages}
      />
      <Stack.Screen
        options={{
          title: 'Skills',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 3,
            color: '#344154',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Personal info
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
          headerRight: () => <TouchableOpacity style={{ opacity: 0 }} />,
        }}
        name="Skills"
        component={SkillsScreen}
      />
      <Stack.Screen
        options={{
          title: 'Interests',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 3,
            color: '#344154',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Personal info
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
          headerRight: () => <TouchableOpacity style={{ opacity: 0 }} />,
        }}
        name="Interests"
        component={InterestsScreen}
      />

      <Stack.Screen
        options={headerWithTitle('Support')}
        name="Support"
        component={Support}
      />
      <Stack.Screen
        options={headerWithTitle('Give us feedback')}
        name="Feedback"
        component={Feedback}
      />
      <Stack.Screen
        options={headerWithTitle('Friends')}
        name="UserProfile"
        component={UserProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ConnectionLost"
        component={ConnectionLost}
      />
    </Stack.Navigator>
  );
}
