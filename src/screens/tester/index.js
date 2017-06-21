import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default () => (
  <View style={{ paddingVertical: 20 }}>
    <Button
      backgroundColor="#03A9F4"
      title="Send"
      onPress={() => console.log('sends')}
    />
  </View>
);
