import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import store from './store';
import { createRootNavigator } from './router';

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
