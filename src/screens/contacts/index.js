import React, { Component } from 'react';
import { FlatList } from 'react-native';
import contacts from '../../redux/data';
import ListItem from './components/ListItem';

class Contacts extends Component {
  handleRowPress = (item) => {
    console.log('item', item);
    return null;
  }
  render() {
    return (
      <FlatList
        style={{ backgroundColor: '#fff' }}
        data={contacts}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={item => item.phone}
      />
    );
  }
}

export default Contacts;
