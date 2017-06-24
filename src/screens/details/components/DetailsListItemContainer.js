import { connect } from 'react-redux';
import DetailsListItem from './DetailsListItem';
import { removeContact } from '../../../redux/contacts/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    removeContact: (contact) => {
      dispatch(removeContact(contact));
    }
  };
};

export default connect(null, mapDispatchToProps)(DetailsListItem);
