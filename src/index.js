import React, { Component } from 'react';
import {  View, Text, } from 'react-native';




import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ImageReducer } from './features/getimage/getimage.reducer';
import createSagaMiddleware from 'redux-saga';
import GetimageComponent from './features/getimage/getimage.component';
import { rootSaga } from './store/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({ ImageReducer }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
            <GetimageComponent />
        </Provider>
      );
    }
  }
