import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { CHEVRON_SIZE } from './styles';
import { formatName } from '../../helpers';
import colors from '../colors';

const ListItem = ({ contact, onPress, isRemoving, index, myList }) => {
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  const removeIcon = Platform.Os === 'ios' ? 'ios-trash' : 'md-trash';
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={isRemoving}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{myList && `${index + 1}.`} {formatName(contact)}</Text>
          <Text style={styles.phone}>{contact.mobile_number || contact.selectedPhoneNumber.number}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            onPress={isRemoving && onPress}
            name={!isRemoving ? iconName : removeIcon}
            size={CHEVRON_SIZE}
            style={styles.chevron}
            color={!isRemoving ? colors.purple : colors.red}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
