import React from 'react';
import { View, Platform, Text } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../colors';

const iconName = Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Login</Text>
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

      <Button
        buttonStyle={styles.button}
        backgroundColor={colors.green}
        textStyle={{ fontWeight: 'bold' }}
        title="LOGIN"
        onPress={() => navigation.navigate('SignedIn')}
      />
    </Card>
  </View>
);
