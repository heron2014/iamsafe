import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import { toPhoneNumber } from '../../../helpers';
import Row from './Row';
import RadioButton from './RadioButton';

const handleAddToList = (contact) => {
  console.log('contact inside', contact);
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
  }
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
            console.log('SELECTED PHONE', phone);
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
          onPress={() => handleAddToList(contact) }
        />
      </View>
    );
  }
}


export default DetailsSection;
