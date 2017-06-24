import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import { toPhoneNumber } from '../../../helpers';
import Row from './Row';

class DetailsListItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
  }

  handleRemoveFromList = (contact) => {
    this.props.removeContact(contact);
    this.props.navigation.goBack(null);
  };

  render() {
    const contact = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <Row
            label={contact.selectedPhoneNumber.label}
            body={toPhoneNumber(contact.selectedPhoneNumber.number)}
          />
        </View>
        <Button
          backgroundColor="#03A9F4"
          title="Remove from list"
          onPress={() => this.handleRemoveFromList(contact)}
        />
      </View>
    );
  }
}

export default DetailsListItem;
