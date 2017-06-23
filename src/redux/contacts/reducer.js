import * as actions from './actions';

const initialState = {
  contacts: []
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
    default:
      return state;
  }
}
