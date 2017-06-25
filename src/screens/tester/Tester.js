import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import colors from '../colors';

export default (props) => {
  const myList = props.navigation.state.params.myList;
  return (
    <View style={styles.container}>
      {myList.length > 0
        ? myList.map(contact => (
          <View key={contact.recordId}><Text>{contact.firstname}</Text></View>
        ))
        : <View style={styles.textContainer}>
          <Text style={styles.textStyle}>You don&apos;t have yet any list to send messages to.</Text>
        </View>
      }
      { myList.length > 0
        && <Button
          buttonStyle={styles.button}
          backgroundColor="#c6c6c6"
          textStyle={{ fontWeight: 'bold' }}
          title="SEND"
          onPress={() => console.log('confirm and send')}
        />
      }
    </View>
  );
};
