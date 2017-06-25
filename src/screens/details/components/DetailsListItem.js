import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import styles from './styles';
import { toPhoneNumber } from '../../../helpers';
import Row from './Row';
import colors from '../../colors';

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
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Card containerStyle={[styles.cardStyle, { borderColor: colors.red }]}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Row
              label={contact.selectedPhoneNumber.label}
              body={toPhoneNumber(contact.selectedPhoneNumber.number)}
            />
          </View>
        </Card>
        <Button
          buttonStyle={styles.button}
          backgroundColor={colors.red}
          textStyle={{ fontWeight: 'bold' }}
          title="Remove from My List"
          onPress={() => this.handleRemoveFromList(contact)}
        />
      </View>
    );
  }
}

export default DetailsListItem;
