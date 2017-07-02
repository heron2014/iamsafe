import React from 'react';
import { Platform } from 'react-native';
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
import Landing from './screens/landing';

// import { capitalizeFirstLetter } from './helpers/index';

export const SignedOut = StackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      header: false
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: false
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: false
    }
  }
});

export const HomeStack = StackNavigator({
  Home: {
    screen: StackNavigator({
      Home: { screen: Home,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <Icon
              style={{ paddingLeft: 8 }}
              name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
              color="#fff"
              size={30}
              onPress={() => navigation.navigate('Settings')}
            />),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colors.purple,
            shadowOpacity: 0,
            shadowColor: colors.green
          }
        })
      },
      Real: { screen: Real,
        navigationOptions: {
          tabBarVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#8fc491',
            shadowOpacity: 0
          }
        }
      },
      Tester: { screen: Tester,
        navigationOptions: {
          tabBarVisible: false,
          headerTintColor: colors.purple,
          headerStyle: {
            backgroundColor: colors.lightGray,
            shadowOpacity: 0
          }
        }
      }
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      header: true,
      headerLeft: (
        <Icon
          style={{ paddingLeft: 8 }}
          name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
          color="#fff"
          size={30}
          onPress={() => navigation.goBack(null)}
        />)
    })
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
      title: 'Contacts',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.purple,
        shadowOpacity: 1,
        shadowColor: colors.purple
      }
    }
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      // title: `${capitalizeFirstLetter(navigation.state.params.firstname)} ${capitalizeFirstLetter(navigation.state.params.surname)}`,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.purple,
        shadowOpacity: 0,
        shadowColor: colors.purple
      }
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
          name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
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
          name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
          size={30}
          color={tintColor}
        />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    style: {
      backgroundColor: colors.green,
      borderTopColor: colors.green
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
