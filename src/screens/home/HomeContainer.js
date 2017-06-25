import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = ({ contacts }) => {
  return {
    myList: contacts.myList
  };
};

export default connect(mapStateToProps)(Home);
