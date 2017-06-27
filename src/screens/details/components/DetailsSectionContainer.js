import { connect } from 'react-redux';
import DetailsSection from './DetailsSection';
import { addContact } from '../../../redux/contacts/actions';

const mapStateToProps = ({ contacts }) => {
  return {
    myList: contacts.myList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(addContact(contact));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSection);
