import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import colors from '../colors';

export default ({ navigation, myList }) => {
  return (
    <View style={styles.container}>
      {myList.length === 0 && <Text style={styles.welcomeText}>Hi Anita</Text>}
      {myList.length === 0 && <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Your Friends and Family List is empty. </Text>
        <Text style={styles.textStyle}>Go to &quot;My List&quot; to create one.</Text>
        </View>
      }
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.button}
          backgroundColor={colors.green}
          title="I am Safe!"
          textStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Real', { myList })}
        />
        <Button
          buttonStyle={[styles.button, { marginTop: 40 }]}
          backgroundColor={colors.lightGray}
          title="Invite"
          textStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Tester', { myList })}
        />
      </View>
    </View>
  );
};
