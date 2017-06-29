import React, { Component } from 'react';
import { View, Text, Platform, FlatList } from 'react-native';
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
        color="#fff"
        size={33}
        onPress={() => navigation.navigate('Contacts')}
      />),
    headerStyle: {
      backgroundColor: colors.green,
      shadowOpacity: 1,
      shadowColor: colors.green
    },
    headerTintColor: '#fff'
  });

  constructor(props) {
    super(props);
    this.handleRowPress = this.handleRowPress.bind(this);
    this.renderSeparator = this.renderSeparator.bind(this);
  }

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
  }

  handleRemoveFromList = (contact) => {
    this.props.removeContact(contact);
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: colors.lightGreen
        }}
      />
    );
  };

  render() {
    const { myList } = this.props;
    return (
      <View style={[styles.container]}>
        {myList.length > 0
          ? <FlatList
            style={styles.flatListContainer}
            data={myList}
            renderItem={({ item, index }) =>
              <ListItem key={item.recordId} contact={item} onPress={() => this.handleRemoveFromList(item)} isRemoving myList index={index} />
            }
            keyExtractor={item => item.recordId}
            ItemSeparatorComponent={this.renderSeparator}
          />
          : <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Your list is empty. Create one by clicking the &quot;plus&quot; icon at the top.</Text>
          </View>
        }
      </View>
    );
  }
}

export default MyList;
