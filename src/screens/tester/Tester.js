import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { formatName } from '../../helpers';
import styles from './styles';
import colors from '../colors';

export default (props) => {
  const myList = props.navigation.state.params.myList;
  return (
    <ScrollView style={styles.container}>
      {myList.length > 0
        ? myList.map(contact => (
          <View style={styles.contactContainer} key={contact.recordId}>
            <Text style={styles.contactText}>{formatName(contact)}</Text>
          </View>
        ))
        : <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Invite your Family and Friends</Text>
          <Text style={styles.textStyle}>Create a list to send messages to.</Text>
        </View>
      }
      { myList.length > 0
        && <Button
          buttonStyle={styles.button}
          backgroundColor={colors.purple}
          textStyle={{ fontWeight: 'bold' }}
          title="SEND"
          onPress={() => console.log('confirm and send')}
        />
      }
    </ScrollView>
  );
};
