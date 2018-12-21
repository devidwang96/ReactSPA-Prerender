// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';

// IMPORT REDUCERS

import { AppReducer } from '../reducers/AppReducer';


// CONFIGURE STORE


export const createAppStore = () => {
    return createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk, promiseMiddleware())));
};