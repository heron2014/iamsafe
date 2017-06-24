import { connect } from 'react-redux';
import DetailsSection from './DetailsSection';
import { addContact } from '../../../redux/contacts/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(addContact(contact));
    }
  };
};

export default connect(null, mapDispatchToProps)(DetailsSection);
