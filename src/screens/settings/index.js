import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { removeToken } from '../../helpers/auth';

const handleOnPress = (navigation) => {
  removeToken('user-token')
  .then(() => {
    navigation.navigate('SignedOut');
  })
  .catch(err => console.log('error on removing token', err));
};

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="John Doe">
      <View
        style={{
          backgroundColor: '#bcbec1',
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: 'center',
          marginBottom: 20
        }}
      >
        <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
      </View>
    </Card>
    <Button
      backgroundColor="#03A9F4"
      title="SIGN OUT"
      onPress={() => handleOnPress(navigation)}
    />
  </View>
);
