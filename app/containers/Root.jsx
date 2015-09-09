import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import { RouteHandler } from 'react-router';

const store = createStore(rootReducer);

export default class Root extends Component {
   render() {
       return (
           <Provider store={store}>
                {() => <RouteHandler/> }
           </Provider>
        );
    }
};
