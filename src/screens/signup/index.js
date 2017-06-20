import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { saveToken } from '../../helpers/auth';

const handleOnPress = (navigation) => {
  saveToken('user-token', 'auth-demo-token');
  navigation.navigate('SignedIn');
};

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => handleOnPress(navigation)}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: '#bcbec1' }}
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </Card>
  </View>
);
