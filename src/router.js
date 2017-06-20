import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import SignUp from './screens/signup';
import SignIn from './screens/signin';
import Home from './screens/home';
import Contacts from './screens/contacts';
import Real from './screens/real';
import Tester from './screens/tester';
import Settings from './screens/settings';

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  }
});

export const HomeStack = StackNavigator({
  Home: {
    screen: StackNavigator({
      Home: { screen: Home,
        navigationOptions: ({ navigation }) => {
          return {
            title: 'Home',
            headerRight: (
              <Icon
                name="ios-settings"
                color="#404041"
                size={40}
                onPress={() => navigation.navigate('Settings')}
              />)
          };
        }
      },
      Real: { screen: Real,
        navigationOptions: {
          tabBarVisible: false
        }
      },
      Tester: { screen: Tester,
        navigationOptions: {
          tabBarVisible: false
        }
      }
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarVisible: false
    }
  }
}, {
  headerMode: 'none',
  mode: 'modal'
});

export const SignedIn = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-home"
          size={30}
          color={tintColor}
        />
      )
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-contacts"
          size={30}
          color={tintColor}
        />
      )
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
