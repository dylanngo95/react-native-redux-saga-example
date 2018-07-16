import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import IndexComponent from "./components/index";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { Reducer } from "./redux";
import { watcherSaga } from "./saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default class Index extends Component {
  render() {
    return (
        <Provider store={store}>
            <IndexComponent />
        </Provider>
    );
  }
}
