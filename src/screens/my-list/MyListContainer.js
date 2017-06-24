import { connect } from 'react-redux';
import MyList from './MyList';

const mapStateToProps = ({ contacts }) => {
  return {
    myList: contacts.myList
  };
};

export default connect(mapStateToProps)(MyList);
