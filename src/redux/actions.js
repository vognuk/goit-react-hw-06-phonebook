import * as types from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

const initContacts = (contacts) => {
    return {
        type: types.INIT_CONTACTS,
        payload: contacts
    };
};

const addContact = (name, number) => {
    return {
        type: types.ADD_CONTACT,
        payload: {
            id: uuidv4(),
            name,
            number,
        }
    };
};

const delContact = (id) => {
    return {
        type: types.DEL_CONTACT,
        payload: id
    };
};

export default { initContacts, addContact, delContact };
