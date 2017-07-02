import React from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../colors';

const styles = {
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff'
  },
  text: {
    letterSpacing: 1.2,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 2,
    color: '#616163'
  }
};

const SettingsItem = (props) => {
  return (
    <View style={ [styles.content, props.extraStyle] }>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Icon name={ props.iconName } color={colors.purple} size={ 20 } />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>{ props.title }</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'} color="#404041" />
        </View>
      </View>
    </View>
  );
};

export default SettingsItem;
