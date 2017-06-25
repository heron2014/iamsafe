import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default ({ navigation, myList }) => {
  return (
    <View style={styles.container}>
      {myList.length === 0 && <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Create your contacts list by clicking the contacts icon at the bottom!</Text>
        </View>
      }
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.button}
          title="Real"
          onPress={() => navigation.navigate('Real', { myList })}
        />
        <Button
          buttonStyle={styles.buttonTester}
          title="Test Me"
          onPress={() => navigation.navigate('Tester', { myList })}
        />
      </View>
    </View>
  );
};
