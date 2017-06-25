import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from '../common/ListItem';
import styles from './styles';
import colors from '../colors';

class MyList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My List',
    headerRight: (
      <Icon
        style={{ paddingRight: 8 }}
        name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle'}
        color="#5b5a5a"
        size={30}
        onPress={() => navigation.navigate('Contacts')}
      />),
    headerStyle: {
      backgroundColor: '#fff',
      shadowOpacity: 1,
      shadowColor: colors.green
    },
    headerTintColor: colors.darkGray
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
      <View style={styles.container}>
        {myList.length > 0
          ? myList.map(contact => (
            <ListItem key={contact.recordId} contact={contact} onPress={() => this.handleRowPress(contact)} />
          ))
          : <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Your list is empty. Create by clicking the plus icon at the top.</Text>
          </View>
        }
      </View>
    );
  }
}

export default MyList;
