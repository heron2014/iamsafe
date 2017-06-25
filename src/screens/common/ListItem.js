import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers';
import colors from '../colors';

const ListItem = ({ contact, onPress }) => {
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  const name = `${capitalizeFirstLetter(contact.firstname)} ${capitalizeFirstLetter(contact.surname)}`;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{contact.mobile_number || contact.selectedPhoneNumber.number}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name={iconName}
            size={CHEVRON_SIZE}
            style={styles.chevron}
            color={colors.green}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
