import { connect } from 'react-redux';
import Contacts from './';
import { fetchContacts } from '../../redux/contacts/actions';

function mapStateToProps({ contacts }) {
  console.log('contacts', contacts);
  return {
    contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
