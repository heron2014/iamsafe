import React from 'react';
import { View } from 'react-native';

const outerContainer = {
  height: 20,
  width: 20,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
  marginTop: 5
};

const innerContainer = {
  height: 12,
  width: 12,
  borderRadius: 6,
  backgroundColor: '#000'
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
