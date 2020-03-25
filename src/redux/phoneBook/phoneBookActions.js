import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phoneBook/add', (name, number) => ({
  payload: {
    contactInfo: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const removeContact = createAction('phoneBook/remove');

const changeFilter = createAction('phoneBook/filtered');

const clearFilterValue = createAction('phoneBook/clearValue');

export { addContact, removeContact, changeFilter, clearFilterValue };

// {"ownerId":"fbe9c05a-6813-409a-a679-7781d523ce31"}
// http://goit-phonebook-api.herokuapp.com/v1/
