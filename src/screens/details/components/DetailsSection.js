import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import styles from './styles';
import colors from '../../colors';
import { toPhoneNumber, formatName } from '../../../helpers';
import Row from './Row';
import RadioButton from './RadioButton';

const isContactAdded = (contactList, id) => {
  return contactList.filter(person => person.recordId === id).length > 0 && true;
};

const isLengthListTen = (list) => {
  return list.length === 10;
};

class DetailsSection extends Component {
  constructor(props) {
    super(props);
    const phone_numbers = this.props.phone_numbers.map((obj) => {
      obj.selected = false;
      return obj;
    });
    this.state = {
      phone_numbers
    };

    this.handleAddToList = this.handleAddToList.bind(this);
  }

  handleAddToList = (contact, list) => {
    const selectedPhone = list.filter(obj => obj.selected);
    const contactObj = {
      recordId: contact.recordId,
      firstname: contact.firstname,
      surname: contact.surname,
      selectedPhoneNumber: selectedPhone[0]
    };
    if (contactObj.selectedPhoneNumber) {
      this.props.addContact(contactObj);
      this.props.navigation.goBack(null);
    }
  };

  render() {
    const contact = this.props;
    const myList = this.props.myList;
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 50 }}>
          <Text style={styles.nameStyle}>{formatName(contact)}</Text>
          {isContactAdded(myList, contact.recordId) &&
            <Text style={styles.warning}>You already added {contact.firstname}!</Text>
          }
          {isLengthListTen(myList) &&
            <Text style={styles.warning}>Maximum 10 contacts allowed.</Text>
          }
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.infoText}>Please pick only (UK) mobile number (+447...)</Text>
          {this.state.phone_numbers.map((phone) => {
            const selectedBox = (value) => {
              const copyState = [...this.state.phone_numbers];
              phone.selected = value;
              copyState.map((obj) => {
                if (obj.number !== phone.number) {
                  obj.selected = !value;
                }
              });

              this.setState({ phone_numbers: this.state.phone_numbers });
            };
            return (
              <Card key={phone.number} containerStyle={styles.cardStyle}>
                <TouchableOpacity onPress={() => selectedBox(!phone.selected)} >
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <RadioButton selected={phone.selected} />
                    <Row
                      body={toPhoneNumber(phone.number)}
                    />
                  </View>
                </TouchableOpacity>
              </Card>
            );
          })}
          <Text style={[styles.infoText, { marginTop: 8, fontSize: 14, marginHorizontal: 10 }]}>
            We are currently working on supporting other numbers.
          </Text>
          <Button
            disabled={isContactAdded(myList, contact.recordId) || isLengthListTen(myList)}
            buttonStyle={styles.button}
            backgroundColor={colors.green}
            textStyle={{ fontWeight: 'bold' }}
            title="Add to My List"
            onPress={() => this.handleAddToList(contact, this.state.phone_numbers) }
          />
        </View>
      </View>
    );
  }
}

export default DetailsSection;
