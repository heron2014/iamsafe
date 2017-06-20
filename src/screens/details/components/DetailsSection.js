import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from '../styles';
import { toPhoneNumber } from '../../../helpers';
import Row from './Row';

const DetailsSection = ({ phone, mobile }) => (
  <View style={styles.actionContainer}>
    <Row
      label="mobile"
      body={toPhoneNumber(mobile)}
      actions={[
        { iconIOS: 'ios-call', iconAndroid: 'md-call' },
        { iconIOS: 'ios-text', iconAndroid: 'md-text' }
      ]}
    />
    <Row
      label="home"
      body={toPhoneNumber(phone)}
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
