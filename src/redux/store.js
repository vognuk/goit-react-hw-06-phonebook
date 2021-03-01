import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as types from './actionTypes';

const items = []; //localStorage.getItem('contacts') ||

const initialState = {
    contacts: {
        items,
        filter: ''
    }
}

const reducer = (state = initialState, actions) => {
    const { contacts } = state;
    const { items, filter } = contacts;
    const itemsToChange = [...items];

    switch (actions.type) {
        case types.INIT_CONTACTS:
            return { contacts: { items: actions.payload } }; //actions.payload

        case types.ADD_CONTACT:
            return { contacts: { items: [...items, actions.payload] } };

        case types.DEL_CONTACT:
            const filtered = items.filter(({ id }) => id !== actions.payload);
            return { contacts: { items: filtered } };

        case types.FILTER_CONTACTS: {
            return { contacts: { items, filter: actions.payload } };
        }

        default:
            return state;
    }
};

const store = createStore(reducer, composeWithDevTools(
    // ...applyMiddleware(...middleware)
));

export default store;
