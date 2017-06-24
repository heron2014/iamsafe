import React, { Component } from 'react';
import { View } from 'react-native';
import DetailsSectionContainer from './components/DetailsSectionContainer';

// eslint-disable-next-line
class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;
    return (
      <View style={{ paddingVertical: 20, flex: 1 }}>
        <DetailsSectionContainer {...contact} navigation={this.props.navigation} />
      </View>
    );
  }
}
export default Details;
