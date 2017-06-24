import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default ({ navigation, myList }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Real"
        onPress={() => navigation.navigate('Real', { myList })}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Test Me"
        onPress={() => navigation.navigate('Tester', { myList })}
      />
    </View>
  );
};
