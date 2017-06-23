import { connect } from 'react-redux';
import Contacts from './';

const mapStateToProps = ({ contacts }) => ({
  contacts
});

export default connect(mapStateToProps)(Contacts);
