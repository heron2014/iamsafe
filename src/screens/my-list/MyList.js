import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from '../common/ListItem';

class MyList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My List',
    headerRight: (
      <Icon
        name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle'}
        color="#404041"
        size={40}
        onPress={() => navigation.navigate('Contacts')}
      />)
  });

  constructor(props) {
    super(props);
    this.handleRowPress = this.handleRowPress.bind(this);
  }

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
  }

  render() {
    const { myList } = this.props;
    return (
      <View>
        {myList.length > 0
          ? myList.map(contact => (
            <ListItem key={contact.recordId} contact={contact} onPress={() => this.handleRowPress(contact)} />
          ))
          : <Text>Create your list by clicking the plus icon the top</Text>
        }
      </View>
    );
  }
}

export default MyList;
