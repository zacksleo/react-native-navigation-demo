import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './pages/site/HomeScreen';
import DetailsScreen from './pages/site/DetailsScreen';
import SettingsScreen from './pages/site/SettingsScreen';
import ProfileScreen from './pages/site/ProfileScreen';
import ModalScreen from './pages/site/ModalScreen';
import NotificationScreen from './pages/site/NotificationScreen';
import OtherScreen from './pages/site/OtherScreen';
import SignInScreen from './pages/site/SignInScreen';
import AuthLoadingScreen from './pages/site/AuthLoadingScreen';


const AppStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const SwitchStack = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Notification: NotificationScreen
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const RootStack = createStackNavigator({
  Main: {
    screen: HomeStack,
  }, MyModal: {
    screen: ModalScreen
  }
}, {
    mode: 'modal',
    headerMode: 'none'
  });

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen
});

const TabNavigator = createBottomTabNavigator({
  Home: RootStack,
  Settings: SettingsStack
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  });

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SwitchStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
