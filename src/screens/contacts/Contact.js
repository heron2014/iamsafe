import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../common/ListItem';

class Contacts extends Component {

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
  }

  render() {
    const { contacts } = this.props.contacts;
    return (
      <FlatList
        style={{ backgroundColor: '#fff' }}
        data={contacts}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={item => item.mobile_number}
      />
    );
  }
}

export default Contacts;
