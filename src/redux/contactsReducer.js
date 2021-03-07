import { createReducer } from '@reduxjs/toolkit'
import actions from './actions'

const items = [];

const initialState = {
    contacts: {
        items,
        filter: ''
    }
}

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
            state.contacts.filter = action.payload;
        },
    }
);

export default reducer;
