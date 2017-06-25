import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default (props) => {
  const myList = props.navigation.state.params.myList;
  return (
    <View style={{ paddingVertical: 20 }}>
      {myList.length > 0
        ? myList.map(contact => (
          <View key={contact.recordId}><Text>{contact.firstname}</Text></View>
        ))
        : <Text>You dont have yet any list to send messages to!</Text>
      }
      <Button
        backgroundColor="#03A9F4"
        title="Confirm"
        onPress={() => console.log('confirm and send')}
      />
    </View>
  );
};
