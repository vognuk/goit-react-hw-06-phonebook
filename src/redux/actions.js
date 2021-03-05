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


// const initContacts = (contacts) => {
//     return {
//         type: types.INIT_CONTACTS,
//         payload: contacts
//     };
// };

// const addContact = (name, number) => {
//     return {
//         type: types.ADD_CONTACT,
//         payload: {
//             id: uuidv4(),
//             name,
//             number,
//         }
//     };
// };

// const delContact = (id) => {
//     return {
//         type: types.DEL_CONTACT,
//         payload: id
//     };
// };

// const filter = (value) => {
//     return {
//         type: types.FILTER_CONTACTS,
//         payload: value
//     }
// }


