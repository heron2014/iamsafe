import React, { Component } from 'react';
import { FlatList } from 'react-native';
import contacts from '../../redux/data';
import ListItem from './components/ListItem';

class Contacts extends Component {
  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
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
