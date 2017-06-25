import { connect } from 'react-redux';
import MyList from './MyList';
import { removeContact } from '../../redux/contacts/actions';

const mapStateToProps = ({ contacts }) => {
  return {
    myList: contacts.myList
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeContact: (contact) => {
      dispatch(removeContact(contact));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
