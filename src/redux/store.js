// import { createStore, applyMiddleware } from 'redux'
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './contactsReducer'
import logger from 'redux-logger'


// const items = []; //localStorage.getItem('contacts') ||

// const initialState = {
//     contacts: {
//         items,
//         filter: ''
//     }
// }

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
// };

// const store = createStore(reducer, composeWithDevTools(
//     // ...applyMiddleware(...middleware)
// ));
console.log(process.env.NODE_ENV);
console.log(getDefaultMiddleware);

// const rootReducer = combineReducers({
//     contactsReducer: contactsReducer,
// });
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer,
    // middleware,
    // devTools: process.env.NODE_ENV === 'development',
});

export default store;
