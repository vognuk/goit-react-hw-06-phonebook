import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initContacts = createAction('app/initState');
const addContact = createAction('form/addContact', (name, number) => {
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
        }
    }
});
const delContact = createAction('contact/delContact');
const filter = createAction('contact/filterContacts');

export default { initContacts, addContact, delContact, filter };
