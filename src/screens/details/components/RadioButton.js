import React from 'react';
import { View } from 'react-native';
import colors from '../../colors';

const outerContainer = {
  height: 20,
  width: 20,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: colors.darkGray,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10
};

const innerContainer = {
  height: 12,
  width: 12,
  borderRadius: 6,
  backgroundColor: colors.green
};

const RadioButton = props => (
  <View style={outerContainer}>
    {props.selected
      ? <View style={innerContainer} />
      : null
    }
  </View>
);

export default RadioButton;
