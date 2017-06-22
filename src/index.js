import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import Contacts from 'react-native-contacts';
import store from './store';
import { createRootNavigator } from './router';
import { setContacts } from './redux/contacts/actions';

// TODO not sure if this is the right place to fetch contacts
Contacts.getAll((err, data) => {
  if (err && err.type === 'permissionDenied') {
    // handle it
  } else {
    const contacts = data.map((contact) => {
      const obj = {};
      obj.firstname = contact.givenName;
      obj.surname = contact.familyName;
      obj.mobile_number = contact.phoneNumbers.filter(number => number.label === 'mobile');
      obj.isSelected = false;
      return obj;
    }).filter((contact) => {
      return contact.phone_number.length > 0;
    }).map((contact) => {
      return Object.assign({}, contact, { phone_number: contact.phone_number[0].number });
    });
    store.dispatch(setContacts(contacts));
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('user-token')
    .then((token) => {
      if (token) {
        this.setState({
          signedIn: true, checkedSignIn: true
        });
      }
    })
    .catch(err => console.log('error on getItem from AsyncStorage', err));

  }

  render() {
    //eslint-disable-next-line
    const { checkedSignIn, signedIn } = this.state;
    // TODO in the next condition returning null creates empty screen - change logic!

    // if (!checkedSignIn) {
    //   return null;
    // }
    const Layout = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
