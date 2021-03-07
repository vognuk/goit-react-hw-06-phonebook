import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './contactsReducer'
import logger from 'redux-logger'

// console.log(process.env.NODE_ENV);
// console.log(getDefaultMiddleware);

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
