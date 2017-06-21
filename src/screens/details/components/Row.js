import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { ICON_SIZE } from '../styles';
import colors from '../../colors';

const Row = ({ label, body, actions = [] }) => (
  <View style={styles.actionRow}>
    <View style={styles.actionInfo}>
      <Text style={styles.actionLabel}>{label}</Text>
      <Text style={styles.actionBody}>{body}</Text>
    </View>
    <View style={styles.actionIcons}>
      {actions.map(action => (
        <TouchableOpacity
          key={Math.random()}
          onPress={() => null}
        >
          <Icon
            name={Platform.OS === 'ios' ? action.iconIOS : action.iconAndroid}
            color={colors.link}
            size={ICON_SIZE}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default Row;
