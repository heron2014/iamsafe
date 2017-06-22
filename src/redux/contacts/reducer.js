
// import data from '../data';
import * as actions from './actions';

const dataObj = ['hello', 'boom', 'yol'];
export default function contacts(state = dataObj, action) {
  switch (action.type) {
    case actions.FETCH_CONTACTS:
      return state;
    default:
      return state;
  }
}
