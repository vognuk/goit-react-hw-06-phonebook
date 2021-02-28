import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as types from './actionTypes';

const initialState = [];

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.INIT_CONTACTS:
            return actions.payload;

        case types.ADD_CONTACT:
            return [
                ...state,
                actions.payload,
                // {
                // id: actions.payload.id,
                // name: actions.payload.name,
                // number: actions.payload.number,
                // }
            ]

        case types.DEL_CONTACT:
            return state.filter(({ id }) => id !== actions.payload);

        default:
            return state;
    }
};

const store = createStore(reducer, composeWithDevTools(
    // ...applyMiddleware(...middleware)
));

export default store;
