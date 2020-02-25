import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from "./App";
import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./store/store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// TODO: get it from env
axios.defaults.baseURL = `http://localhost/stachu/projekt_stachu/api`;

const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);