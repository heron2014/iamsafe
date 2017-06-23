import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

const Row = ({ label, body }) => (
  <View style={styles.actionRow}>
    <View style={styles.actionInfo}>
      <Text style={styles.actionLabel}>{label}</Text>
      <Text style={styles.actionBody}>{body}</Text>
    </View>
  </View>
);

export default Row;
