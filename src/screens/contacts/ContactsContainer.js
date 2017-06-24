import { connect } from 'react-redux';
import Contacts from './Contact';

const mapStateToProps = ({ contacts }) => ({
  contacts
});

export default connect(mapStateToProps)(Contacts);
