import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from '../styles';
import { toPhoneNumber } from '../../../helpers';
import Row from './Row';

const DetailsSection = ({ mobile_number, home_number }) => (
  <View style={styles.actionContainer}>
    <Row
      label="mobile"
      body={toPhoneNumber(mobile_number)}
      actions={[
        { iconIOS: 'ios-call', iconAndroid: 'md-call' },
        { iconIOS: 'ios-text', iconAndroid: 'md-text' }
      ]}
    />
    <Row
      label="home"
      body={toPhoneNumber(home_number)}
      actions={[
        { iconIOS: 'ios-call', iconAndroid: 'md-call' }
      ]}
    />
  </View>
);

DetailsSection.propTypes = { // eslint-disable-next-line
  phone: PropTypes.string, // eslint-disable-next-line
  mobile: PropTypes.string
};

export default DetailsSection;
