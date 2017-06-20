import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
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
    <Button
      backgroundColor="#03A9F4"
      title="SIGN OUT"
      onPress={() => handleOnPress(navigation)}
    />
  </View>
);
