import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import actions from './actions'

const items = [];

const initialState = {
    contacts: {
        items,
        filter: ''
    }
}

// const { contacts } = initialState;
// // const { items, filter } = contacts;
// const itemsToChange = [...items];

const reducer = createReducer(initialState,
    {
        [actions.initContacts]: (state, action) => {
            state.contacts.items = action.payload;
        },
        [actions.addContact]: (state, action) => {
            state.contacts.items = [...state.contacts.items, action.payload];
        },
        [actions.delContact]: (state, action) => {
            let filtered = state.contacts.items.filter(({ id }) => id !== action.payload);
            state.contacts.items = filtered;
        },
        [actions.filter]: (state, action) => {
            // const filtered = items.filter(elem => elem.name.toLowerCase().includes(action.payload));
            // state.contacts = { items: filtered, filter: action.payload };
            state.contacts.filter = action.payload;
        },
    }
);

export default reducer;

// export default combineReducers({
//     reducer,
//     // filter,
// });

// const reducer = (state = initialState, actions) => {
//     const { contacts } = state;
//     const { items, filter } = contacts;
//     const itemsToChange = [...items];

//     switch (actions.type) {
//         case types.INIT_CONTACTS:
//             return { contacts: { items: actions.payload } };

//         case types.ADD_CONTACT:
//             return { contacts: { items: [...items, actions.payload] } };

//         case types.DEL_CONTACT:
//             const filtered = items.filter(({ id }) => id !== actions.payload);
//             return { contacts: { items: filtered } };

//         case types.FILTER_CONTACTS: {
//             const filtered = items.filter(elem => elem.name.toLowerCase().includes(actions.payload));
//             return { contacts: { items: filtered, filter: actions.payload } };
//         }

//         default:
//             return state;
//     }