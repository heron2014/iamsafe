import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { SignedOut, SignedIn } from './router';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    this.setState({
       signedIn: true, checkedSignIn: true
    })
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    if (signedIn) {
      return <SignedIn />;
    } else {
      return <SignedOut />;
    }
  }
}
