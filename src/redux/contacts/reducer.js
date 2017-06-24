import * as actions from './actions';

const initialState = {
  contacts: [],
  myList: []
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CONTACTS: {
      const newContacts = [...action.data];
      return {
        ...state,
        contacts: newContacts
      };
    }
    case actions.ADD_CONTACT: {
      const newContact = action.data;
      return {
        ...state,
        myList: state.myList.concat(newContact)
      };
    }
    default:
      return state;
  }
}
