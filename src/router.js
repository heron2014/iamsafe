import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from './screens/colors';
import SignUp from './screens/signup';
import SignIn from './screens/signin';
import Home from './screens/home';
import Contacts from './screens/contacts/ContactsContainer';
import Real from './screens/real';
import Tester from './screens/tester';
import Settings from './screens/settings';
import Details from './screens/details';
import MyList from './screens/my-list';

import { capitalizeFirstLetter } from './helpers/index';

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: false
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.grayBackground,
        shadowOpacity: 0 // border
      }
    }
  }
});

export const HomeStack = StackNavigator({
  Home: {
    screen: StackNavigator({
      Home: { screen: Home,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          headerLeft: (
            <Icon
              style={{ paddingLeft: 8 }}
              name="ios-settings"
              color="#5b5a5a"
              size={30}
              onPress={() => navigation.navigate('Settings')}
            />),
          headerStyle: {
            backgroundColor: '#fff'
          }
        })
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

export const ContactsStack = StackNavigator({
  MyList: {
    screen: MyList
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${capitalizeFirstLetter(navigation.state.params.firstname)} ${capitalizeFirstLetter(navigation.state.params.surname)}`
    })
  }
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
  MyList: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'My List',
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
