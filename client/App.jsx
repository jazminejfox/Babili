import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import LoginScreen from './src/screens/LoginScreen';
import MatchingGameScreen from './src/screens/MatchingGameScreen';
import CameraScreen from './src/screens/CameraScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlashCardScreen from './src/screens/FlashCardScreen';
import FlashCardOrMatchingScreen from './src/screens/FlashCardOrMatchingScreen';

const AppStack = createBottomTabNavigator({
  Messages: MessagesScreen,
  Friends: FriendsScreen,
  Camera: CameraScreen,
  Games: FlashCardOrMatchingScreen,
  Profile: ProfileScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Messages') {
        iconName = focused ? 'chat-outline' : 'chat-outline';
      } else if (routeName === 'Friends') {
        iconName = focused ? 'account-multiple' : 'account-multiple';
      } else if (routeName === 'Camera') {
        iconName = focused ? 'camera-plus-outline' : 'camera-plus-outline';
      } else if (routeName === 'Games') {
        iconName = focused ? 'cards-outline' : 'cards-outline';
      } else if (routeName === 'Profile') {
        iconName = focused ? 'account' : 'account';
      }

      return (<Icon name={iconName} size={25} color={tintColor} />);
    },
  }),
  tabBarOptions: {
    inactiveTintColor: '#bedfed',
    activeTintColor: '#fec857',
    style: {
      backgroundColor: '#2e86ab',
    },
  },
});

const navigator = createStackNavigator({
  Login: LoginScreen,
  FlashCard: FlashCardScreen,
  Matching: MatchingGameScreen,
  Home: AppStack,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'babili',
  },
});

export default createAppContainer(navigator);
