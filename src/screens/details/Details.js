import React, { Component } from 'react';
import { View } from 'react-native';
import DetailsSectionContainer from './components/DetailsSectionContainer';
import DetailsListItemContainer from './components/DetailsListItemContainer';
// eslint-disable-next-line
class Details extends Component {
  render() {
    let contact;
    if (this.props.navigation.state.params.phone_numbers) {
      contact = this.props.navigation.state.params;
    } else {
      contact = this.props.navigation.state.params;
    }
    return (
      <View style={{ paddingVertical: 20, flex: 1 }}>
        {contact.phone_numbers
          ? <DetailsSectionContainer {...contact} navigation={this.props.navigation} />
          : <DetailsListItemContainer {...contact} navigation={this.props.navigation} />
        }
      </View>
    );
  }
}
export default Details;
