import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default ({ navigation, myList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hi Anita!</Text>
      {myList.length === 0 && <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Your Friends and Family List is empty. </Text>
        <Text style={styles.textStyle}>Go to My List to create one.</Text>
        </View>
      }
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.button}
          title="I am Safe!"
          textStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Real', { myList })}
        />
        <Button
          buttonStyle={styles.buttonTester}
          title="Test Me"
          textStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Tester', { myList })}
        />
      </View>
    </View>
  );
};
