import React, { Component } from 'react';
import { View } from 'react-native';
import DetailsSection from './components/DetailsSection';

// eslint-disable-next-line
class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;
    return (
      <View style={{ paddingVertical: 20, flex: 1 }}>
        <DetailsSection {...contact} />
      </View>
    );
  }
}
export default Details;
