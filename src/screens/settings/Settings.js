import React from 'react';
import { View, Platform, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsItem from '../common/SettingsItem';
import { removeToken } from '../../helpers/auth';
import styles from './styles';
import colors from '../colors';

const handleOnPress = (navigation) => {
  removeToken('user-token')
  .then(() => {
    navigation.navigate('SignedOut');
  })
  .catch(err => console.log('error on removing token', err));
};

export default ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <Icon
        style={{ paddingRight: 10, fontWeight: 'bold', paddingTop: 20 }}
        name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
        color="#fff"
        size={40}
        onPress={() => navigation.goBack(null)}
      />
    </View>

    <View style={ styles.contentContainer }>
      <SettingsItem
        iconName="md-mail"
        title="Contact Us"
        extraStyle={{
          borderRadius: 5
        }}
      />

      <SettingsItem
        iconName="md-share"
        title="Share App"
        extraStyle={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 15
        }}
      />

      <SettingsItem
        iconName="ios-star"
        title="Rate the App"
        extraStyle={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderTopColor: colors.purple,
          borderStyle: 'solid',
          borderTopWidth: 0.5
        }}
      />

      <SettingsItem
        iconName="ios-information-circle"
        title="Privacy Policy"
        extraStyle={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 15
        }}
      />

      <SettingsItem
        iconName="ios-information-circle"
        title="Terms of Service"
        extraStyle={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderTopColor: colors.purple,
          borderStyle: 'solid',
          borderTopWidth: 0.5
        }}
      />
      <View style={styles.logout}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Icon name="ios-log-out" color={colors.purple} size={ 20 } />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text onPress={() => handleOnPress(navigation)} style={styles.text}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);
