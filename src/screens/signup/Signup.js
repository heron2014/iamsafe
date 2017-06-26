import React from 'react';
import { View, Platform, Text } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { saveToken } from '../../helpers/auth';
import styles from './styles';
import colors from '../colors';

const iconName = Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add';

const handleOnPress = (navigation) => {
  saveToken('user-token', 'auth-demo-token');
  navigation.navigate('SignedIn');
};

export default ({ navigation }) => (
  <View style={styles.container}>
    <Icon
      style={{ paddingLeft: 10 }}
      name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
      color={colors.green}
      size={33}
      onPress={() => navigation.goBack(null)}
    />
    <Text style={styles.textStyle}>Create Account</Text>
    <View style={styles.iconContainer}>
      <Icon
        name={iconName}
        color={colors.green}
        size={80}
      />
    </View>
    <Card containerStyle={styles.cardContainer}>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={styles.button}
        backgroundColor={colors.green}
        textStyle={{ fontWeight: 'bold' }}
        title="JOIN"
        onPress={() => handleOnPress(navigation)}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: '#bcbec1' }}
        title="LOGIN"
        onPress={() => navigation.navigate('SignIn')}
      />
    </Card>
  </View>
);
