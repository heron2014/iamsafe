import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  })

  render() {
    const { myList } = this.props;
    return (
      <View>
        {myList.length > 0
          ? myList.map(obj => (
            <Text key={Math.random()}>{obj.firstname}</Text>
          ))
          : <Text>Create your list by clicking the plus icon the top</Text>
        }
      </View>
    );
  }
}

export default MyList;
