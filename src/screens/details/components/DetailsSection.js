import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import { toPhoneNumber } from '../../../helpers';
import Row from './Row';
import RadioButton from './RadioButton';

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
    this.props.addContact(contactObj);
    this.props.navigation.goBack(null);
  };

  render() {
    const contact = this.props;
    return (
      <View style={styles.container}>
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
            <TouchableOpacity onPress={() => selectedBox(!phone.selected)} key={phone.number}>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <RadioButton selected={phone.selected} />
                <Row
                  label={phone.label}
                  body={toPhoneNumber(phone.number)}
                />
              </View>
            </TouchableOpacity>
          );
        })}
        <Button
          backgroundColor="#03A9F4"
          title="Add my list"
          onPress={() => this.handleAddToList(contact, this.state.phone_numbers) }
        />
      </View>
    );
  }
}

export default DetailsSection;
