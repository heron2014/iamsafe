import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import DetailsSectionContainer from './components/DetailsSectionContainer';
import styles from './styles';

// eslint-disable-next-line
class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <DetailsSectionContainer {...contact} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}
export default Details;
