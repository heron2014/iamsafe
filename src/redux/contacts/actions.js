export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const setContacts = (data) => {
  return {
    type: SET_CONTACTS,
    data
  };
};

export const addContact = (data) => {
  return {
    type: ADD_CONTACT,
    data
  };
};

export const removeContact = (data) => {
  return {
    type: REMOVE_CONTACT,
    data
  };
};
