import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../common/ListItem';
import colors from '../colors';
import styles from './styles';

class Contacts extends Component {

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: colors.purple
        }}
      />
    );
  };

  render() {
    const { contacts } = this.props.contacts;
    return (
      <FlatList
        style={styles.flatListContainer}
        data={contacts}
        renderItem={({ item }) =>
          <ListItem key={item.recordId} contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={item => item.mobile_number}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

export default Contacts;
